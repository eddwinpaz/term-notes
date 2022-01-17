#! /usr/bin/env node
const { program } = require('commander')
const add = require('./commands/add')
const config = require('./commands/config')
const openFile = require('./commands/openFile')

program
    // .option('-s, --search <date>','search text by date dd-mm-yyyy', add)
    .option('-t, --text <text>', 'save new note' ,add)
    .option('-c, --config <path>', 'config destination folder path' ,config)
    .option('-o --open <dd-mm-yyy>', 'open file by date', openFile)

program.parse()