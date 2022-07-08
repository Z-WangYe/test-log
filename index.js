const { configure, getLogger, addLayout, shutdown } = require('log4js');
const path = require('path');
const logSettingFilePath = path.join(__dirname, 'log4js.config.json');
configure(logSettingFilePath);
var logger = getLogger('App');
logger.info('[initLogger]logSettingFilePath:' + logSettingFilePath);

let count = 0
const interval = setInterval(() => {
    if(count< 10) {
        logger.info("11111111")
        count++
    } else {
        shutdown()
        clearInterval(interval)
    }
}, 1000)