const conf = new (require('conf'))()
const chalk = require('chalk')

function config(folder_path) {

    let configuration = conf.get('cli-notes')

    if (!configuration) {
        configuration = { notes_path: '/Documents/' }
    }

    configuration = { notes_path: folder_path}

    conf.set('cli-notes', configuration)

    //display message to user
    console.log(
        chalk.green.bold(`folder has been configed successfully at ${folder_path}`)
    )
}

module.exports = config