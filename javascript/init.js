const siteOrigin = window.location.origin

const username = localStorage.getItem("username")

function siteInit() {
	if (username === null) {
		window.location.replace(siteOrigin.concat("/pages/login.html"))
	} else {
		window.location.replace(siteOrigin.concat("/pages/desktop.html"))
	}
}

siteInit()
