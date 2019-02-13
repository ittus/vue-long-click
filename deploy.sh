#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build:docs

# navigate into the build output directory
cd dist/docs

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:ittus/vue-long-click.git master:gh-pages

cd -
