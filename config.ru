require File.expand_path('../application', __FILE__)
class Redirecter < Sinatra::Application
  get '/' do
    redirect '/app#containers'
  end
end
run Rack::URLMap.new(
  '/app' => Web,
  '/api' => Api,
  '/'    => Redirecter
)
