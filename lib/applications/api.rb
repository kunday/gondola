class Api < Sinatra::Application
  get '/request/*' do
    content_type :json
    connection.request(:get, "#{params[:splat].first}#{options(params)}")
  end

  private

  def options(params)
    return '' unless params['all']
    "?all=#{params['all']}"
  end

  def connection
    Docker::Connection.new(Environment.docker_url)
  end
end
