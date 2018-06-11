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
EasyHTTP.prototype.post = function(url, data, callback) {
	// Open the api url
	this.http.open('POST', url, true);
	// Set the content type header
	this.http.setRequestHeader('Content-type', 'application/json');

	// Do the onload stuffs
	const self = this;
	this.http.onload = function() {
		callback(null, self.http.responseText);
	}

	// Send the data to the server
	this.http.send(JSON.stringify(data));
}

// Make an HTTP PUT Request
EasyHTTP.prototype.put = function(url, data, callback) {
	// Lets open the request
	this.http.open('PUT', url, true);
	// Set the Content-type header
	this.http.setRequestHeader('Content-type', 'application/json');

	// do onload stuffs
	const self = this;
	this.http.onload = function() {
		callback(null, self.http.responseText);
	}

	// Send the data to server
	this.http.send(JSON.stringify(data));
}

// Make an HTTP DELETE Request
EasyHTTP.prototype.delete = function(url, callback) {
	// Let's open the API url
	this.http.open('DELETE', url, true);
	// Do the onload stuffs
	const self = this;
	let err = null;
	this.http.onload = function() {
		if(self.http.status === 200) {
			callback(err, 'The post has been DELETED successfully.');
		} else {
			err = `Error: ${self.http.status}`;
			callback(err, null);
		}
	}
	// Send response to the server
	this.http.send();
}