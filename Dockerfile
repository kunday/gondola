FROM frolvlad/alpine-ruby:latest

RUN echo -e 'gem: --no-rdoc --no-ri' > /etc/gemrc
RUN apk add --update ruby-kgio && \
    rm /var/cache/apk/*

RUN apk add --update linux-headers && \
    rm /var/cache/apk/*

RUN apk add --update build-base && \
    rm /var/cache/apk/*

RUN apk add --update ruby-dev && \
    rm /var/cache/apk/*

WORKDIR /usr/src/app
RUN bundle config build.puma --with-opt-dir=/usr/local
RUN bundle config jobs 8

ADD Gemfile /usr/src/app/Gemfile
ADD Gemfile.lock /usr/src/app/Gemfile.lock
RUN bundle

ADD . /usr/src/app

EXPOSE 9292

CMD bundle exec puma
