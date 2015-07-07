class Api < Sinatra::Application
  get '/request/*' do
    content_type :json
    connection.request(:get, "#{params[:splat].first}?#{request.query_string}")
  end

  private

  def connection
    Docker::Connection.new(Environment.docker_url)
  end
end
