#!/bin/bash

ssh app@188.226.224.160 <<EOF
  cd ~/hello-jenkins
  git pull
  npm install --production
  forever restartall
  exit
EOF