function Settings() {
	this.ignore_list = [];
};

Settings.prototype.setColor = function(code) {
	this.color_code = code;
	localStorage.setItem('color_code', JSON.stringify(code));
}

Settings.prototype.addIgnore = function(user) {
	this.ignore_list.push(user);
	localStorage.setItem('ignore_list', JSON.stringify(this.ignore_list));
}

var settings = new Settings();

$(document).ready(function() {
	[
		'color_code',
		'ignore_list',
	].forEach(function(key) {
		var data = localStorage.getItem(key);
		if (data) {
			settings[key] = JSON.parse(data);
		}
	});
});
