require 'uri'
require 'excon'

module Docker
  class Connection
    attr_reader :url, :options

    def initialize(url)
      @uri = URI.parse(url)
      opts = { method: :get } # default to get for now
      if @uri.scheme == 'unix'
        @url = 'unix:///'
        @options = { socket: @uri.path }.merge(opts)
      elsif @uri.scheme =~ /^(https?|tcp)$/
        @url = url
        @options = opts
      else
        @url = "http://#{@uri}"
        @options = opts
      end
    end
  end
end
