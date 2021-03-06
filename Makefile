install:;
	sudo gem install bundler
	bundle install

run:;
	bundle exec jekyll serve

build:;
	bundle exec jekyll build

travis-build:;
	sed -i 's#^baseurl:.*#baseurl: ""#g' _config.yml
	JEKYLL_ENV=prod PAGES_REPO_NWO="${TRAVIS_REPO_SLUG}" make build
