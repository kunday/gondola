FROM ruby:2.1.2

WORKDIR /usr/src/app

ADD Gemfile /usr/src/app/Gemfile
ADD Gemfile.lock /usr/src/app/Gemfile.lock
RUN bundle install --system

ADD . /usr/src/app

CMD []
