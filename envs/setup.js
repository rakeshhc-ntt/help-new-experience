#!/usr/bin/env node

const { existsSync, copyFile } = require("fs")

const NODE_ENV = process.env.NODE_ENV || "production"
const source = `${__dirname}/.env.${NODE_ENV}`
const desc = `${__dirname}/../.env.production`

if (existsSync(source)) {
  copyFile(source, desc, (err) => {
    if (err) throw err
    console.log(`${source} was copied to ${desc}`)
  });
} else {
  console.error(`No configs found for "${NODE_ENV}"`)
  process.exit(1)
}
