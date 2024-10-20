function getFormvalue() {
    //Write your code here
	const form = document.getElementById('form1');

    // Extract the values of first name and last name using the name attribute
    const firstName = form.elements['fname'].value;
    const lastName = form.elements['lname'].value;

    // Display the full name in an alert
    alert(`${firstName} ${lastName}`);
}
