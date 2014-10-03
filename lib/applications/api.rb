require 'net/http'
class Api < Sinatra::Application
  get '/request/*' do
    content_type :json
    return Net::HTTP.get(URI("http://192.168.59.103:2375/#{params[:splat].first}#{options(params)}"))
  end
  private
  def options(params)
    return "" unless params["all"]
    "?all=#{params["all"]}"
  end
end
