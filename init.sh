#!/bin/bash
git init
touch .gitignore
echo 'node_modules/' >> .gitignore
npm init
sed -i 's/"test.*/"start": "webpack-dev-server","build": "webpack"/g' package.json
npm install -D babel-loader @babel/core @babel/preset-env webpack webpack-cli css-loader html-loader html-webpack-plugin mini-css-extract-plugin webpack-dev-server webpack-atom-loader file-loader autoprefixer postcss-loader
#gnome-terminal -- npm start
rm init.sh
