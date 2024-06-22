const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, 'http://sinfulzen.github.io/Elixir-Toolbox/debugging/js/log.txt');

function logChange(change) {
    const dateTime = new Date().toISOString().replace('T', ' ').substr(0, 19);
    const logEntry = `[${dateTime}] ("Brackets Editor") ${change} "SUCCESS"\n`;

    fs.appendFile(logFilePath, logEntry, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
        } else {
            console.log('Log entry added successfully.');
        }
    });
}

module.exports = logChange;
