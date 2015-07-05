require 'uri'
require 'excon'

module Docker
  class Connection
    attr_reader :url, :options

    def initialize(url)
      @uri = URI.parse(url)
      @url = url
      set_connection_opts
    end

    def resource
      Excon.new(url, options)
    end

    def request(*args, &block)
      request = compile_request_params(*args, &block)
      resource.request(request).body
    rescue => ex
      puts "failed with #{ex}"
    end

    private

    def compile_request_params(http_method, path, query = nil, opts = nil, &block)
      query ||= {}
      opts ||= {}
      headers = opts.delete(:headers) || {}
      content_type = opts[:body].nil? ? 'text/plain' : 'application/json'
      user_agent = 'gondola'
      {
        method: http_method,
        path: "/#{path}",
        query: query,
        headers: { 'Content-Type' => content_type,
                   'User-Agent'   => user_agent
      }.merge(headers),
        expects: (200..204).to_a << 304,
        idempotent: http_method == :get,
        request_block: block
      }.merge(opts).reject { |_, v| v.nil? }
    end

    def set_connection_opts
      opts = { method: :get } # default to get for now
      if @uri.scheme == 'unix'
        @url = 'unix:///'
        @options = { socket: @uri.path }.merge(opts)
      elsif @uri.scheme =~ /^(https?|tcp)$/
        @options = opts
      else
        @url = "http://#{@uri}"
        @options = opts
      end
    end
  end
end
