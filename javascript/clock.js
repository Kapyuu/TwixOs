function updateTime() {
	const currentTime = new Date()
	let h = currentTime.getHours()
	let m = currentTime.getMinutes()

	let type = "am"

	if (h > 12) {
		h -= 12
		type = "pm"
	}

	if (m < 10) {
		m = "0" + m
	}

	document.getElementById("time").innerHTML = h + ":" + m + " " + type
}

setInterval(updateTime, 1000)

function updateDate() {
	const currentTime = new Date()
	let d = currentTime.getDate()
	let mo = currentTime.getMonth() + 1
	let y = currentTime.getFullYear()

	document.getElementById("date").innerHTML = mo + "/" + d + "/" + y
}

updateDate()
