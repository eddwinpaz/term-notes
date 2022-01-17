const fs = require('fs');
const chalk = require('chalk')

const save = (path, text, filename) => {
    fs.writeFile(`${path}/${filename}`, text, function (err) {
        if (err) return console.log(chalk.red.bold(err))
        console.log(chalk.green.bold(`saved at ${path}/${filename}`))
    });
}

const open = (path, filename) => {
    try {
        const lines = fs.readFileSync(`${path}/${filename}`, 'utf8');
        return lines.toString();
    } catch (e) {
        return ""
    }
}

const getDateStamp = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear()
    return `@Fecha:${dd}-${mm}-${year} Hora:${getTime()}`
}

const getDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear()
    return `${dd}-${mm}-${year}`
}

const addZero = (i) => {
    if (i < 10) { i = "0" + i }
    return i;
}

const getTime = () => {
    const today = new Date();
    let h = addZero(today.getHours());
    let m = addZero(today.getMinutes());
    let time = `${h}:${m}`;
    return time
}

const getCurrentHour = () => {
    const today = new Date();
    return addZero(today.getHours());
}

module.exports = {
    save,
    open,
    getDateStamp,
    getDate,
    addZero,
    getTime,
    getCurrentHour,
}