#!/bin/bash

echo 'Check to make sure craft is here at all'
if test -d /craft/app/
then
  echo 'yup we good'
  exit 0
fi
echo 'nope we need that'

