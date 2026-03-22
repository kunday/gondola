# frozen_string_literal: true

require 'spec_helper'

describe Api do
  def app
    Api
  end

  describe 'GET /request/*' do
    let(:mock_connection) { instance_double(Docker::Connection) }

    before do
      allow(Docker::Connection).to receive(:new).and_return(mock_connection)
    end

    it 'proxies requests to the Docker API' do
      allow(mock_connection).to receive(:request)
        .with(:get, 'containers/json?all=0')
        .and_return('[{"Id":"abc123"}]')

      get '/request/containers/json', all: 0

      expect(last_response).to be_ok
      expect(last_response.content_type).to include('application/json')
      expect(last_response.body).to include('abc123')
    end

    it 'proxies version endpoint' do
      allow(mock_connection).to receive(:request)
        .with(:get, 'version?')
        .and_return('{"ApiVersion":"1.53","Version":"29.2.1"}')

      get '/request/version'

      expect(last_response).to be_ok
      body = JSON.parse(last_response.body)
      expect(body['ApiVersion']).to eq('1.53')
    end

    it 'proxies image history requests' do
      allow(mock_connection).to receive(:request)
        .with(:get, 'images/sha256:abc123/history?')
        .and_return('[{"Id":"sha256:abc123","CreatedBy":"CMD"}]')

      get '/request/images/sha256:abc123/history'

      expect(last_response).to be_ok
      body = JSON.parse(last_response.body)
      expect(body.first['CreatedBy']).to eq('CMD')
    end

    it 'passes query parameters through' do
      allow(mock_connection).to receive(:request)
        .with(:get, 'containers/json?all=1&size=true')
        .and_return('[]')

      get '/request/containers/json', all: 1, size: true

      expect(last_response).to be_ok
    end
  end
end
