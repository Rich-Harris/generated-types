import type { Get } from './types';

export const get: Get = (request) => {
	// the type enforces the return value
	// being serializable as JSON
	return {
		method: request.method,
		url: request.url
	};
}