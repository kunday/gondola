require 'faraday'

class Api < Sinatra::Application
  get '/request/*' do
    content_type :json
    conn.get("#{params[:splat].first}#{options(params)}").body
  end

  private
  def options(params)
    return "" unless params["all"]
    "?all=#{params["all"]}"
  end

  def conn
    Faraday.new("https://#{ENV.fetch("DOCKER_HOST")}:#{ENV.fetch("DOCKER_PORT")}", ssl: ssl_options) do |faraday|
      faraday.adapter :net_http
      faraday.request :url_encoded
    end
  end

  def ssl_options
    {
      client_cert: OpenSSL::X509::Certificate.new(ENV.fetch("CERT")),
      client_key: OpenSSL::PKey::RSA.new(ENV.fetch("KEY")),
      verify: OpenSSL::SSL::VERIFY_NONE,
      ca_file: ENV.fetch("CA")
    }
  end
end
