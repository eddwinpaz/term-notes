const conf = new (require('conf'))()
const chalk = require('chalk')
const fs = require('fs')
const path = require('path')

function config(folder_path) {

    const folderPathNormalized = folder_path ? path.join(folder_path) : path.join(__dirname, "../notes") 

    fs.opendir( folderPathNormalized, (err,dir) => {
        if ( err ) throw new Error("Directory is not exist")

        const configuration = conf.get('cli-notes') ? conf.get('cli-notes') : { notes_path: dir}

        conf.set('cli-notes', configuration)

        //display message to user
        console.log(
            chalk.green.bold(`folder has been configed successfully at ${folderPathNormalized}`)
        )
    })
}

module.exports = config