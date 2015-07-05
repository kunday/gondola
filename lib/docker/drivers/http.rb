module Docker
  module Drivers
    class Http
      attr_accessor :endpoint, :secure

      def initialize(endpoint, secure: true)
        @endpoint = endpoint
        @secure = secure
      end

      def execute
      end
    end
  end
end
