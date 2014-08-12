define([
	"../widget",
	"jquery"
], function (Widget, $) {
	var $ELEMENT = "$element";

	return Widget.extend({
		"on/buzz/canplay": function () {
			this[$ELEMENT]
				.find("button")
				.prop("disabled", false);
		},

		"on/buzz/volumechange": function (sound) {
			this[$ELEMENT]
				.find(".volume")
				.val(sound.getVolume());
		},

		"on/buzz/durationchange": function (sound) {
			var duration = sound.getDuration();

			this[$ELEMENT]
				.find(".duration")
				.text(Math.floor(duration / 60) + ":" + Math.floor(duration % 60))
		},

		"on/buzz/timeupdate": function (sound) {
			var me = this;
			var played = sound.getTime();
			var progress = sound.getPercent();

			me[$ELEMENT]
				.find(".played")
				.text(Math.floor(played / 60) + ":" + Math.floor(played % 60))
				.end()
				.find(".progress")
				.attr("value", progress);
		},

		"on/buzz/error": function () {
			this[$ELEMENT]
				.find(".error")
				.text("Unable to load")
				.end()
				.find("button")
				.prop("disabled", true);
		},

		"dom:[data-action='play']/click": function () {
			this.emit("buzz/do/play");
		},

		"dom:[data-action='pause']/click": function () {
			this.emit("buzz/do/pause");
		},

		"dom:[data-action='play-pause']/click": function () {
			this.emit("buzz/toggle/play");
		},

		"dom:.progress/click": function ($event) {
			var $target = $($event.target);

			this.emit("buzz/set/percent", ($event.pageX - $target.offset().left) / $target.width() * 100);
		},

		"dom:.volume/change": function ($event) {
			var $target = $($event.target);

			this.emit("buzz/set/volume", $target.val());
		}
	});
});