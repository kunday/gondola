require 'spec_helper'

describe Docker::Connection do
  let(:connection) { Docker::Connection.new(url) }
  context 'options' do
    let(:url) { 'unix://var/lib/docker.sock' }
    it 'should default to get' do
      expect(connection.options[:method]).to eq(:get)
    end
  end
  context '#unix' do
    let(:url) { 'unix://var/lib/docker.sock' }
    it 'should identify if the type of connection is unix' do
      expect(connection.url).to eq('unix:///')
    end
  end
  context '#http' do
    let(:url) { 'http://localhost:9292' }
    it 'should identify if the type of connection is http' do
      expect(connection.url).to eq('http://localhost:9292')
    end
  end

  context '#https' do
    let(:url) { 'https://localhost:9292' }
    it 'should identify if the type of connection is https' do
      expect(connection.url).to eq('https://localhost:9292')
    end
  end
end
