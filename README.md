# Gondola

  Gondola is a docker ui for docker hosts. It lets you view your local containers,
images and system information. It allows you to drill down deep into docker image
history, how much space you are using and the steps used to construct the
Dockerfile.

![Gif]
(http://cdn.makeagif.com/media/9-15-2015/ijCdBT.gif)


## Installation

  You can run this in your docker host by using the command:

```
   docker run -v \
    /var/run/docker.sock:/var/run/docker.sock \
    -p 59292:8080 kunday/gondola:3
```
  You should now be able to reach the ui through the `hostip:59292` address. By
default, if your machine is accessible to the world, this will be accessible to
the world too, if you have any sensitive information in your docker history it's
recommended to block access in usual way.

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
