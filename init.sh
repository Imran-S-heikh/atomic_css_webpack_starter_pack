#!/bin/bash
git init
touch .gitignore
echo 'node_modules/' >> .gitignore
npm init
sed -i "/main/a\\ \"watch\":{\"cp\":\"src/style/molecules.js\"},"  package.json
sed -i '/scripts/a\\ "start":"webpack-dev-server","build":"webpack","watch":"npm-watch","cp" : "cp src/style/molecules.js node_modules/atomizer/src/helpers.js"'  package.json
sed -i '/"test"/d' package.json
npm install -D babel-loader @babel/core @babel/preset-env webpack webpack-cli css-loader html-loader html-webpack-plugin mini-css-extract-plugin webpack-dev-server sass-loader node-sass file-loader autoprefixer postcss-loader
#gnome-terminal -- npm start
#rm init.sh