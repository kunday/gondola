require 'net/http'
class Api < Sinatra::Application
  HOST_URL="192.168.59.103"
  HOST_PORT="2375"
  get '/request/:endpoint' do |endpoint|
    endpoint="/#{endpoint}/json?all=0"
    content_type :json
    return Net::HTTP.get(HOST_URL, endpoint, HOST_PORT)
  end
end
