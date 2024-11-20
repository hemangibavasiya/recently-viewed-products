/**
 * Middleware to add custom response handlers to the response object.
 * 
 * @param {Object} request - The HTTP request object.
 * @param {Object} response - The HTTP response object.
 * @param {Function} next - The next middleware function.
 * 
 * @returns {void}
 * 
 * @example
 * // Usage in an Express app
 * app.use(customResponseHandler);
 * 
 * // Success response
 * res.success({ message: 'Operation successful', success_code: 'OP_SUCCESS', data: { key: 'value' } });
 * 
 * // Error response
 * res.error({ message: 'Operation failed', error_code: 'OP_FAILED' }, 'Detailed error message');
 */
function customResponseHandler(request, response, next) {
	response.success = function (data, code = 200) {
		return response.status(code).json({
			message: data?.message || 'No message.',
			success_code: data?.success_code || 'SUCCESS',
			data: data?.data || {},
		});
	};
	response.error = function (data, error = '', code = 400) {
		return response.status(code).json({
			message: data?.message || 'No message',
			error_code: data?.error_code || 'ERROR',
			error: [error],
			data: data.data || {},
		});
	};
	next();
}

export default customResponseHandler;