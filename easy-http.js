// Create Constructor for EasyHTTP
function EasyHTTP() {
	this.http = new XMLHttpRequest();
}

// Create the prototype methods for EasyHTTP
// Make an HTTP GET Request
EasyHTTP.prototype.get = function(url, callback) {
	// Open the URL
	this.http.open('GET', url, true);
	// Do the onload stuffs
	const self = this;
	let err = null;
	this.http.onload = function() {
		if(self.http.status === 200) {
			callback(err, self.http.responseText);
		} else {
			err = `Error: ${self.http.status}`;
			callback(err);
		}
	};

	// Send the response back
	this.http.send();
}

// Make an HTTP POST Request
EasyHTTP.prototype.post = function() {

}

// Make an HTTP PUT Request
EasyHTTP.prototype.put = function() {

}

// Make an HTTP DELETE Request
EasyHTTP.prototype.delete = function() {

}