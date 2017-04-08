class Environment
  def self.docker_url
    ENV.fetch('DOCKER_HOST', 'unix:///var/run/docker.sock')
  end

  def self.docker_version
    ENV.fetch('DOCKER_VERSION', '1') # not supported yet.
  end
end
