export function checkMobile () {
	if (/Mobi|Android/i.test(navigator.userAgent)) {
		return true;
	}
	return false;
}


