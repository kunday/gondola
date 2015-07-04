require 'spec_helper'

describe Docker::Connection do
  context '#scheme' do
    it 'should identify if the type of connection is unix' do
      expect(Docker::Connection.new('unix://var/lib/docker.sock').type).to eq(:unix)
    end
    it 'should identify if the type of connection is http' do
      expect(Docker::Connection.new('http://localhost:9292').type).to eq(:http)
    end
    it 'should identify if the type of connection is https' do
      expect(Docker::Connection.new('https://localhost:9292').type).to eq(:https)
    end
  end
end
