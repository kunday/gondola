FROM ruby:2.1.5

RUN gem update --system
RUN bundle config jobs 8
WORKDIR /usr/src/app

ADD Gemfile /usr/src/app/Gemfile
ADD Gemfile.lock /usr/src/app/Gemfile.lock
RUN bundle install --system

ADD . /usr/src/app

EXPOSE 9292

CMD bundle exec puma
