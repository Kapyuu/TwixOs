function setupStart() {
	const username = localStorage.getItem("username")

	if (username === null) {
		document.getElementById("startusername").innerHTML = "Hello, Jane Doe"
	} else {
		document.getElementById("startusername").innerHTML = "Hello, " + username
	}
}

setupStart()

function startState() {
	const startMenu = document.getElementById("startmenu")
	const classList = startMenu.className.split(' ')

	if (classList[1] === "startvisible") {
		startMenu.className = "start starthidden"
	} else if (classList[1] === "starthidden") {
		startMenu.className = "start startvisible"
	}
}
