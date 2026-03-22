FROM ruby:3.2

WORKDIR /usr/src/app

COPY Gemfile /usr/src/app/
RUN bundle install --jobs 8 --retry 3

COPY . /usr/src/app

EXPOSE 8080

CMD ["bundle", "exec", "unicorn", "-p", "8080"]
