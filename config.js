define([
	"require",
	"module",
	"troopjs-util/merge"
], function (localRequire, module, merge) {

	return merge.call({
		"defaults": {},
		"settings": {},
		"events": {
			"abort": "buzz/abort",
			"canplay": "buzz/canplay",
			"canplaythrough": "buzz/canplaythrough",
			"dataunavailable": "buzz/dataunavailable",
			"durationchange": "buzz/durationchange",
			"emptied": "buzz/emptied",
			"empty":"buzz/empty",
			"ended": "buzz/ended",
			"error": "buzz/error",
			"loadeddata": "buzz/loadeddata",
			"loadedmetadata": "buzz/loadedmetadata",
			"loadstart": "buzz/loadstart",
			"play": "buzz/play",
			"playing": "buzz/playing",
			"progress": "buzz/progress",
			"ratechange": "buzz/ratechange",
			"seeked": "buzz/seeked",
			"seeking": "buzz/seeking",
			"suspend": "buzz/suspend",
			"timeupdate": "buzz/timeupdate",
			"volumechange": "buzz/volumechange",
			"waiting": "buzz/waiting"
		},
		"methods": {
			"load": "buzz/do/load",
			"play": "buzz/do/play",
			"pause": "buzz/do/pause",
			"togglePlay": "buzz/toggle/play",
			"isPaused": "buzz/is/paused",
			"stop": "buzz/do/stop",
			"isEnded": "buzz/is/ended",
			"loop": "buzz/do/loop",
			"unloop": "buzz/do/unloop",
			"mute": "buzz/do/mute",
			"unmute": "buzz/do/unmute",
			"toggleMute": "buzz/toggle/mute",
			"isMuted": "buzz/is/muted",
			"setVolume": "buzz/set/volume",
			"getVolume": "buzz/get/volume",
			"increaseVolume": "buzz/do/increase-volume",
			"decreaseVolume": "buzz/do/decrease-volume",
			"fadeIn": "buzz/do/fade-in",
			"fadeOut": "buzz/do/fade-out",
			"fadeTo": "buzz/do/fade-to",
			"fadeWith": "buzz/do/fade-with",
			"setTime": "buzz/set/time",
			"getTime": "buzz/get/time",
			"setPercent": "buzz/set/percent",
			"getPercent": "buzz/get/percent",
			"getDuration": "buzz/get/duration",
			"setSpeed": "buzz/set/speed",
			"getSpeed": "buzz/get/speed",
			"set": "buzz/set",
			"get": "buzz/get",
			"getPlayed": "buzz/get/played",
			"getBuffered": "buzz/get/buffered",
			"getSeekable": "buzz/get/seekable"
		}
	}, module.config());
});