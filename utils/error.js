
function errorHandler(error, req, res, next) {
    if (error.name === 'UnauthorizedError') {
        return res.status(401).json({ message: 'Invalid token' });
    }

    if (error.type === 'SERVER_SIDE_ERROR_EXCEPTION') {
        return res.error(
            {
                message: 'Server side error',
                error_code: error.errorCode,
                data: {
                    ...error.data,
                },
            },
            error.message,
            error.statusCode || 500
        );
    }

    if (error.type === 'CLIENT_SIDE_ERROR_EXCEPTION') {
        return res.error(
            {
                message: 'Client side error',
                error_code: error.errorCode,
                data: {
                    ...error.data,
                },
            },
            error.message,
            error.statusCode || 400
        );
    }

    if (error.type === 'UNKNOWN_EXCEPTION_OCCURED') {
        return res.error(
            {
                message: 'Something went wrong',
                error_code: error.errorCode,
                data: {
                    ...error.data,
                },
            },
            error.message,
            500
        );
    }

    return res.error(
        {
            message: 'Something went wrong',
            error_code: error.errorCode || 'UNKNOWN_EXCEPTION_OCCURED',
            data: {
                ...error.data,
            },
        },
        error.message,
        500
    );
}

export default errorHandler;