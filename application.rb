require 'sinatra'
require 'excon'

Dir.glob('lib/**/*').each do |file|
  next if File.directory?(file)
  require "./#{file}"
end
