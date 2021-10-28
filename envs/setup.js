#!/usr/bin/env node

const { cp } = require('shelljs')
const { existsSync } = require('fs')

const NODE_ENV = process.env.NODE_ENV || 'production'
const source = `${__dirname}/.env.${NODE_ENV}`
const desc = `${__dirname}/../.env.production`

if (existsSync(source)) {
  cp('-f', source, desc)
} else {
  console.error(`No configs found for "${NODE_ENV}"`)
  process.exit(1)
}
