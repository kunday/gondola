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

    private

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
