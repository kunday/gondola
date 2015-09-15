FROM alpine:3.2

RUN apk add --update linux-headers build-base && \
    rm /var/cache/apk/*

RUN apk add --update ruby=2.2.2-r0 ruby-dev=2.2.2-r0 ruby-io-console=2.2.2-r0 && \
  rm /var/cache/apk/*

RUN gem install bundler

RUN echo -e 'gem: --no-rdoc --no-ri' > /etc/gemrc

WORKDIR /usr/src/app
RUN bundle config jobs 8
RUN bundle config retry 3

ADD Gemfile /usr/src/app/Gemfile
ADD Gemfile.lock /usr/src/app/Gemfile.lock
RUN bundle

ADD . /usr/src/app

EXPOSE 9292

CMD bundle exec unicorn
