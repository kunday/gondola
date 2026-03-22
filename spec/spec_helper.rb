# frozen_string_literal: true

require File.expand_path('../application.rb', __dir__)
require File.expand_path('../spec/factories.rb', __dir__)
require 'rack/test'

RSpec.configure do |config|
  config.include Rack::Test::Methods

  config.before(:suite) do
    Sinatra::Base.set :environment, :test
    Sinatra::Base.set :permitted_hosts, []
  end
end
