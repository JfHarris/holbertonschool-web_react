export function getFullYear() {
	var today = new Date(); 
	var date = today.getFullYear()
	return date;
}


export function getFooterCopy(isIndex) {
		if (isIndex === true) {
			return("Holberton School")
		}
		else {
			return("Holberton School Main Dashboard");
		}
}

export function getLatestNotification(){
	return ("<strong>Urgent requirement</strong> - complete by EOD")
}
