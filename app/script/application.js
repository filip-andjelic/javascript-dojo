(() => {
	// THIS IS HOW YOU LISTEN FOR SPECIFIC EVENTS ON YOUR PAGE.
	// Don't worry about this for now, we'll learn about that later.
	document.addEventListener("DOMContentLoaded", () => {

		// THIS IS HOW YOU GET ELEMENT BY ITS UNIQUE ID IDENTIFIER.
		const applicationElement = document.getElementById('Application');

		// THIS IS HOW YOU CHANGE STYLE OF ELEMENT.

		// List of all style properties you can find here -
		// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference
		// Look for right column named JavaScript (left one is CSS, we don't use that for now)
		applicationElement.style.backgroundColor = 'green';
		applicationElement.style.width = '100%';
		applicationElement.style.height = '100%';
		applicationElement.style.display = 'flex';
		applicationElement.style.alignItems = 'center';
		applicationElement.style.justifyContent = 'center';

		// THIS IS HOW YOU CREATE NEW ELEMENT.
		const newElement = document.createElement('div');

		// THIS IS HOW YOU ADD CONTENT TO NEW ELEMENT.
		newElement.innerHTML = 'JavaScript Dojo super interesting textual content.';

		newElement.style.backgroundColor = '#e3e3e3';
		newElement.style.borderRadius = '16px';
		newElement.style.color = '#f85522';
		newElement.style.fontSize = '18px';
		newElement.style.fontWeight = 'bold';
		newElement.style.letterSpacing = '1px';
		newElement.style.padding = '15px';

		// AFTER CREATING NEW ELEMENT, IT NEEDS TO BE APPENDED TO EXISTING ELEMENT
		// THIS IS HOW YOU INSERT NEW ELEMENT INTO YOUR PAGE.
		applicationElement.appendChild(newElement);

	});
})();