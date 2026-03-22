# frozen_string_literal: true

require 'spec_helper'

describe Web do
  def app
    Web
  end

  it 'serves index.html for any path' do
    get '/'

    expect(last_response).to be_ok
    expect(last_response.body).to include('Gondola')
    expect(last_response.body).to include('boot.js')
  end

  it 'serves index.html for SPA routes' do
    get '/anything'

    expect(last_response).to be_ok
    expect(last_response.body).to include('Gondola')
  end
end
