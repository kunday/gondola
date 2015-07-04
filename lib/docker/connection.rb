require 'uri'

module Docker
  class Connection
    attr_accessor :url

    def initialize(url)
      @url = url
    end

    def type
      uri = URI.parse(url)
      case uri.scheme
      when 'unix'
        return :unix
      when 'http'
        return :http
      when 'https'
        return :https
      end
    end
  end
end
