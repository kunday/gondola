# frozen_string_literal: true

require 'spec_helper'

describe 'Redirecter' do
  def app
    Rack::Builder.parse_file(File.expand_path('../../config.ru', __dir__))
  end

  it 'redirects root to /app#containers' do
    get '/'

    expect(last_response).to be_redirect
    expect(last_response.location).to include('/app#containers')
  end

  it 'routes /app to the web app' do
    get '/app'

    expect(last_response).to be_ok
    expect(last_response.body).to include('Gondola')
  end

  it 'routes /api/request/* to the API' do
    mock_connection = instance_double(Docker::Connection)
    allow(Docker::Connection).to receive(:new).and_return(mock_connection)
    allow(mock_connection).to receive(:request).and_return('{"Version":"29.2.1"}')

    get '/api/request/version'

    expect(last_response).to be_ok
    expect(last_response.content_type).to include('application/json')
  end
end
