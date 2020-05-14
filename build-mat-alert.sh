#!/usr/bin/env bash

echo "Incrementing version..."
cd projects/mat-alert
npm version patch --no-git-tag-version
cd ../..
echo "Building..."
yarn build mat-alert --prod
#echo "Building schematics..."
#cd projects/mat-alert
#yarn build
#cd ../..
echo "Linking & packing..."
cd dist/mat-alert
npm link
npm pack
echo "Publishing..."
npm publish lhn-mat-alert-*.tgz --access public
cd ../..
