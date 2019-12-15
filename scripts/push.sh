#! /bin/bash

git checkout development
git branch -D master
git subtree split --prefix dist -b master
git push -f origin master:master
git branch -D master
