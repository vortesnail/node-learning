#!/bin/sh
cd /Users/RMBP/Desktop/node-learning/blog-node/logs
cp access.log $(date +%Y-%m-%d).access.log
echo "" > access.log
