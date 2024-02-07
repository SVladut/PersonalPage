        emailjs.init("user_your_emailjs_user_id"); // Înlocuiți cu ID-ul utilizatorului dvs.

        function sendEmail() {
            const name= document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            const templateParams = {
                from_name: name,
                to_email: 'sarsamavladut@gmail.com', // Adresa destinatarului
                from_mail: email, // Adresa expeditorului
                message: message
            };

            emailjs.send('service_go9jh4b', 'template_fqouyzg', templateParams,'J9oQ850qGHZHDC9kE')
                .then(function(response) {
                    console.log('Email sent successfully:', response);
                    alert('Email sent successfully!');
                }, function(error) {
                    console.log('Failed to send email:', error);
                    alert('Failed to send email. Please try again later.');
                });
        }