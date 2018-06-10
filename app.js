const http = new EasyHTTP();

http.get('https://jsonplaceholder.typicode.com/posts', function(err, response){
	if(err) {
		document.getElementById('response').innerHTML = `<pre>${err}</pre>`;
	} else {
		document.getElementById('response').innerHTML = `<pre>${response}</pre>`;
	}
});