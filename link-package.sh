#! /bin/sh

# sh ./link-package.sh PACKAGE_NAME --react
# $1 - first parameter

yarn link ${1}
echo "Linked to ${1}"

if [[ $* == *--react* ]];  then
    yarn link react && yarn link react-dom
    echo "Linked to react & react-dom"
fi
