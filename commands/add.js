const conf = new (require('conf'))()
const chalk = require('chalk')
const { getDate, getCurrentHour, save, getDateStamp, open } = require('./utils')

const add = (text) => {

    try {
        let config = conf.get('cli-notes')
        const extension = "md";
        const filename = `${getDate()}.${extension}`
        const current_note = open(config.notes_path, filename)

        if (current_note && current_note.length != 0) {
            if (current_note.includes(`Hora:${getCurrentHour()}`)) {
                new_text = `\n${current_note}\n${text}`
                save(config.notes_path, new_text, filename)
                return;
            }
            new_text = `\n${current_note}\n${getDateStamp()}\n${text}`
            save(config.notes_path, new_text, filename)
        } else {
            new_text = `\n${getDateStamp()}\n${text}`
            save(config.notes_path, new_text, filename)
        }

    } catch (e) {
        console.log(e)
        console.log(chalk.red.bold(`Please set a folder path for your notes using "notes -c <path>" command`))
    }

}

module.exports = add