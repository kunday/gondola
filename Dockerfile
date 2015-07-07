FROM frolvlad/alpine-ruby:latest

RUN echo -e 'gem: --no-rdoc --no-ri' > /etc/gemrc

WORKDIR /usr/src/app
RUN bundle config jobs 8
RUN bundle config retry 3

ADD Gemfile /usr/src/app/Gemfile
ADD Gemfile.lock /usr/src/app/Gemfile.lock
RUN bundle

ADD . /usr/src/app

EXPOSE 9292

CMD bundle exec rackup
