var intervalIds = {};
self.addEventListener('message', function (e) {
	if (e.data.name != undefined) {
		intervalIds[e.data.name] = setInterval(function () {
			self.postMessage(e.data.name)
		}, e.data.interval)
	}
	if (e.data == 'clear') {
		for (const key of Object.keys(intervalIds)) {
			clearInterval(intervalIds[key])
		}
	}
}, false)