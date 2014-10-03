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

## Running using fig.

Checkout this project in your workspace and run

    fig up

## Architecture

The application is javascript based running against the tcp docker api. Support
for socket is planned for the next release. The files are rendered via a ruby
sinatra application for development.
