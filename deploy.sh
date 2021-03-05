#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist


git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/MichaelBurri/NotasVue.git master:gh-pages

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:michaelburri/NotasVue.git master:gh-pages

cd -