FROM frolvlad/alpine-ruby:latest

ENV ARCH x86

RUN apk add --update ruby-io-console && \
  rm /var/cache/apk/*

RUN apk add --update ruby-dev && \
  rm /var/cache/apk/*

RUN apk add --update build-base && \
  rm /var/cache/apk/*

RUN apk add --update linux-headers && \
  rm /var/cache/apk/*
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
