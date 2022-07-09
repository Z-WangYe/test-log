const { configure, getLogger, addLayout, shutdown } = require('log4js');
const path = require('path');
const logSettingFilePath = path.join(__dirname, 'log4js.config.json');
configure(logSettingFilePath);
let logger = getLogger('App');
logger.info('[initLogger]logSettingFilePath:' + logSettingFilePath);

setInterval(()=>{
    logger.info("111111")
},1000)