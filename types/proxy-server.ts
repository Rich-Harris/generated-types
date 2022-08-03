import type { Get } from './types';

export const get = (request: Parameters<Get>[0]) => {
	// the return type is now inferred
	return {
		method: request.method,
		url: request.url
	};
}