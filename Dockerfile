FROM ruby:3.2-alpine AS builder

RUN apk add --no-cache build-base linux-headers

WORKDIR /usr/src/app

COPY Gemfile /usr/src/app/
RUN bundle install --jobs 8 --retry 3 --without test

FROM ruby:3.2-alpine

WORKDIR /usr/src/app

COPY --from=builder /usr/local/bundle /usr/local/bundle
COPY . /usr/src/app

EXPOSE 8080

CMD ["bundle", "exec", "unicorn", "-p", "8080"]
