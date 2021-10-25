const { createLogger, transports, format } = require('winston')

const logInfo = createLogger({
    transports:[
        new transports.File({
            filename: 'info.log',
            level:'info',
            format: format.combine(format.timestamp(),format.simple())
        })
    ]
})

const logError = createLogger({
    transports:[
        new transports.File({
            filename: 'error.log',
            level:'error',
            format: format.combine(format.timestamp(),format.simple())
        })
    ]
})

const logCron = createLogger({
    transports:[
        new transports.File({
            filename: 'cron.log',
            level:'info',
            format: format.combine(format.timestamp(),format.simple())
        })
    ]
})

module.exports = {
    logInfo,
    logError,
    logCron
}