define([
	"troopjs-dom/component/widget",
	"./config",
	"troopjs-util/merge",
	"buzz"
], function (Widget, config, merge, buzz) {
	var ARRAY_PUSH = Array.prototype.push;
	var $ELEMENT = "$element";

	var PROPERTIES = [
		"preload",
		"autoplay",
		"loop",
		"formats"
	];
	var SETTINGS = config.settings;
	var METHODS = config.methods;
	var EVENTS = config.events;

	// Update defaults
	merge.call(buzz.defaults, config.defaults);

	return Widget.extend({
		"sig/initialize": function () {
			var me = this;
			var $element = me[$ELEMENT];
			var $data = $element.data();
			var sound = new buzz.sound($data.url, merge.call({},
				SETTINGS,

				PROPERTIES.reduce(function (result, property) {
					if ($data.hasOwnProperty(property)) {
						result[property] = $data[property];
					}

					return result;
				}, {})));

			Object
				.keys(EVENTS)
				.forEach(function (event) {
					sound.bind(event, function () {
						var args = [ EVENTS[event], sound ];
						ARRAY_PUSH.apply(args, arguments);
						me.emit.apply(me, args);
					});
				});

			Object
				.keys(METHODS)
				.forEach(function (method) {
					me.on(METHODS[method], function () {
						return sound[method].apply(sound, arguments);
					});
				});

			me.on("sig/finalize", function () {
				Object
					.keys(EVENTS)
					.forEach(function (event) {
						sound.unbind(event);
					});
			});
		}
	});
});