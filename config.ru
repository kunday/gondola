require File.expand_path('../application', __FILE__)
run Rack::URLMap.new(
  '/app' => Web,
  '/api' => Api
)
