interface JSONObject {
	[key: string]: JSONValue;
}

type JSONValue =
	| string
	| number
	| boolean
	| null
	| undefined
	| ToJSON
	| JSONValue[]
	| JSONObject;

interface ToJSON {
	toJSON(...args: any[]): Exclude<JSONValue, ToJSON>;
}

export interface Get {
	(request: Request): Promise<JSONObject> | JSONObject;
}