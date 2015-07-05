module Docker
  module Drivers
    class Socket
      attr_accessor :endpoint

      def initialize(endpoint)
        @endpoint = endpoint
      end

      def execute
      end
    end
  end
end
