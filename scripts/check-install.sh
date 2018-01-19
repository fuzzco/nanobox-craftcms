#!/bin/bash

echo 'Check to make sure craft is here at all'
if test -d ./craft/app/
then
  echo 'yup we good'
else
  echo 'nope we need that'
  curl -L https://download.craftcdn.com/craft/2.6/2.6.3004/Craft-2.6.3004.zip -o temp.zip
  unzip temp.zip -d temp
  cp -R temp/craft/app craft/app
  cp -R temp/craft/storage craft/storage
  cp -R temp/craft/templates craft/templates
  rm temp.zip
  rm -r temp
fi
