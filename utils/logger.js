import { transports as _transports, format as _format, createLogger, config } from 'winston';
import { logger as _logger, errorLogger } from 'express-winston';

const transport = new _transports.File({
    filename: 'combined.log',
});

const transports = [transport];

if (process.env.NODE_ENV !== 'production') {
    transports.push(
        new _transports.Console({
            format: _format.combine(
                _format.timestamp({
                    format: 'YYYY-MM-DD HH:mm:ss',
                }),
                _format.colorize(),
                _format.json(),
                _format.align(),
                _format.printf((info) => {
                    const { timestamp, level, message } = info;
                    return `${timestamp} [${level}]: ${message}`;
                })
            ),
            meta: false,
        })
    );
}

const httpRequestLogger = _logger({
    transports: transports,
    format: _format.combine(
        _format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        _format.json()
    ),
    meta: false,
    msg: 'HTTP {{req.method}} {{req.url}}',
    expressFormat: true,
    colorize: true,
});

const httRequestErrorLogger = errorLogger({
    transports: transports,
    format: _format.combine(
        _format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        _format.json()
    ),
    meta: false,
});

const logger = createLogger({
    levels: config.syslog.levels,
    format: _format.combine(
        _format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        _format.json()
    ),
    transports: transports,
});

export default { httpRequestLogger, httRequestErrorLogger, logger };
