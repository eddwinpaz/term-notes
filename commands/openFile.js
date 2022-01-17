const conf = new (require('conf'))()
const chalk = require('chalk')
const { open } = require('./utils')

const openFile = (date) => {
    try {
        let config = conf.get('cli-notes')
        const extension = "md";
        const filename = `${date}.${extension}`
        const current_note = open(config.notes_path, filename)
        console.log(`\n${current_note}\n`);

    } catch (e) {
        console.log(chalk.red.bold(`Please set a folder path for your notes using "npm config <path>" command`))
    }
}

module.exports = openFile