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
      opts = {method: :get} # default to get for now
      if @uri.scheme == "unix"
        @url, @options = 'unix:///', {:socket => @uri.path}.merge(opts)
      elsif @uri.scheme =~ /^(https?|tcp)$/
        @url, @options = url, opts
      else
        @url, @options = "http://#{@uri}", opts
      end
    end
  end
end
