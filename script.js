document.addEventListener('DOMContentLoaded', function(){
	const form = document.getElementById('contactForm');
	if(!form) return;

	form.addEventListener('submit', function(e){
		e.preventDefault();
		const data = new FormData(form);
		const name = data.get('name') || '';
		const email = data.get('email') || '';
		const message = data.get('message') || '';

		// Try to open user's mail client with a prefilled message as primary delivery.
		const subject = encodeURIComponent('DP World contact from ' + name);
		const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);
		const mailto = `mailto:info@dpworld.example?subject=${subject}&body=${body}`;

		// Open mail client in a new window/tab. If that fails, show a confirmation message.
		try{
			window.location.href = mailto;
			form.reset();
			alert('Your mail client should open. If it does not, copy your message and email us at info@dpworld.example');
		}catch(err){
			alert('Thanks — your message was prepared. Please email info@dpworld.example or try again.');
		}
	});
});
