import { Data } from './generated-types';

export function render(data: Data) {
	document.body.innerHTML = `
		<h1>${data.method} ${data.url}</h1>
		<p>this will error: ${data.blah}</p>
	`
}