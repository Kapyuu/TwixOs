const siteOrigin = window.location.origin

const loginButton = document.getElementById("loginButton")
const inputUsername = document.getElementById("inputUsername")
const inputPassword = document.getElementById("inputPassword")

const username = localStorage.getItem("username")

let inputText = ""

function updateUsername() {
	if (inputUsername.value !== "" && inputPassword.value !== "") {
		inputText = inputUsername.value
		console.log(inputText)
		localStorage.setItem("username", inputText)
		window.location.replace(siteOrigin.concat("/pages/desktop.html"))
	}
}
