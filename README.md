## Gondola

Gondola is a docker ui for docker hosts. It lets you view your local containers,
images and system information and let you perform usual operations on them. It
also lets you search the public docker registry for updates to the images you
have downloaded already in your system.

## Using

To run gondola locally, you can run it using:

    docker run -p 4040:9292 kunday/gondola:latest

You should now be able to view the application in your browser in the url

    http://docker_host:4040/app/#

## Setting up for development

Checkout the project from github using:

	git checkout https://github.com/kunday/gondola.git

Compile a version of the application locally by running

	make

Once that's done, start a local version using:

    docker-compose up

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request


#TODO
1. Enable meta screen showing the connection options
