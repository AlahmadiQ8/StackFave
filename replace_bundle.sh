#!/bin/bash

cssFilePath="$(find ./dist -name 'main*.css')"
cssFile="${cssFilePath##*/}"
jsFilePath="$(find ./dist -name 'main*.js')"
jsFile="${jsFilePath##*/}"
sed -e "s/main.*\.js/${jsFile}/; s/main.*\.css/${cssFile}/" dist/background.js > tmp && mv tmp dist/background.js
