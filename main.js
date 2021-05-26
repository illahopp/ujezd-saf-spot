 window.addEventListener("load", function() {
	let newVideo = document.querySelector("#vid")
	newVideo.addEventListener("ended", function() {
		this.currentTime = 0
		this.play()
	}, false)

	newVideo.play()
}) 

