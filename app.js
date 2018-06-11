const http = new EasyHTTP();

// Get Posts - GET method
http.get('https://jsonplaceholder.typicode.com/posts', function(err, response){
	if(err) {
		document.getElementById('response').innerHTML = `<pre>${err}</pre>`;
	} else {
		document.getElementById('response').innerHTML = `<pre>${response}</pre>`;
	}
});

/*const article = [
	{ 
		userId: 27,
		title: "This is a post about something, maybe sleep",
		body: "I don't know why I'm feeling so damn sleepy that even though it is raining outside I can barely look at that." 
	},
	{
		userId: 24,
		title: "Article Two",
		body: "This is the body of article two"
	}
];*/

const article = {
	userId: 27,
	title: "This is a post about something, maybe sleep",
	body: "I don't know why I'm feeling so damn sleepy that even though it is raining outside I can barely look at that."
};

// Create post - POST Method
// http.post('https://jsonplaceholder.typicode.com/posts', article, function(err, response) {
// 	if(err) {
// 		document.getElementById('response').innerHTML = `<pre>${err}</pre>`;
// 	} else {
// 		document.getElementById('response').innerHTML = `<pre>${response}</pre>`;
// 	}
// });

// Update Post - PUT Method
// Lets update the post with post id 1 with out above article JSON
// http.put('https://jsonplaceholder.typicode.com/posts/1', article, function(err, response) {
// 	if(err) {
// 		document.getElementById('response').innerHTML = `<pre>${err}</pre>`;
// 	} else {
// 		document.getElementById('response').innerHTML = `<pre>${response}</pre>`;

// 	}
// });

// Delete Post - DELETE Method
// Deleting the post with ID 5
// http.delete('https://jsonplaceholder.typicode.com/posts/5', function(err, response) {
// 	if(err) {
// 		document.getElementById('response').innerHTML = `<pre>${err}</pre>`;
// 	} else {
// 		document.getElementById('response').innerHTML = `<pre>${response}</pre>`;
// 	}
// });