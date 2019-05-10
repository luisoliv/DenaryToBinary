function btoaUTF16 (sString) {

	var aUTF16CodeUnits = new Uint16Array(sString.length);
	Array.prototype.forEach.call(aUTF16CodeUnits, function (el, idx, arr) { arr[idx] = sString.charCodeAt(idx); });
	return btoa(String.fromCharCode.apply(null, new Uint8Array(aUTF16CodeUnits.buffer)));

}

function atobUTF16 (sBase64) {

	var sBinaryString = atob(sBase64), aBinaryView = new Uint8Array(sBinaryString.length);
	Array.prototype.forEach.call(aBinaryView, function (el, idx, arr) { arr[idx] = sBinaryString.charCodeAt(idx); });
	return String.fromCharCode.apply(null, new Uint16Array(aBinaryView.buffer));

}