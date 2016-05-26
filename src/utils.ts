export function serialize(obj: any, prefix?: string): string {
	var str: string[] = [],
		p: string;
	for(p in obj) {
		if (obj.hasOwnProperty(p)) {
			var k = prefix ? prefix + "[" + p + "]" : p,
				v: any = `"${obj[p]}"`;
			str.push(typeof v == "object" ? serialize(v, k) : encodeURIComponent(k) + "=" + encodeURIComponent(v));
		}
	}
	return str.join("&");
}