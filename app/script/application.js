// JS CSS styles list.
// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference

(() => {
	const data = {
		"922378655383.0779": {
			"value": "1500",
			"convertedValue": "1750",
			"name": "Monthly Salary",
			"id": "922378655383.0779",
			"description": "Monthly Salary",
			"isSingle": 0,
			"chosenDate": "05-04-2019",
			"date": "05-04-2019",
			"frequency": "3",
			"type": "income",
			"label": {"2": {"id": "2", "type": "monthlyWage", "text": "Monthly Wage", "color": "#4EA645"}},
			"currency": {"code": "eur"},
			"color": "#877F36",
			"account": [],
			"profile": {"-1": {"id": "-1", "ownership": 100}},
			"hashTag": {"1": {"id": "1", "type": "income", "text": "Income", "color": "#4EA645"}},
			"attachment": []
		},
		"733908684996.4286": {
			"value": "250",
			"convertedValue": "250",
			"name": "Apartment Rent",
			"id": "733908684996.4286",
			"description": "Apartment Rent",
			"isSingle": 0,
			"chosenDate": "10-04-2019",
			"date": "10-04-2019",
			"frequency": "3",
			"type": "income",
			"label": {"2": {"id": "2", "type": "monthlyWage", "text": "Monthly Wage", "color": "#4EA645"}},
			"currency": {"code": "eur"},
			"color": "#e3e3e3",
			"account": [],
			"profile": {"-1": {"id": "-1", "ownership": 100}},
			"hashTag": {"1": {"id": "1", "type": "income", "text": "Income", "color": "#4EA645"}},
			"attachment": []
		},
		"65919074823.58328": {
			"value": "50",
			"convertedValue": "50",
			"name": "Transport Compensation",
			"id": "65919074823.58328",
			"description": "Transport Compensation",
			"isSingle": 0,
			"chosenDate": "22-04-2019",
			"date": "22-04-2019",
			"frequency": "2",
			"type": "income",
			"label": [],
			"currency": {"code": "eur"},
			"color": "#f6a2b5",
			"account": [],
			"profile": {"-1": {"id": "-1", "ownership": 100}},
			"hashTag": {"1": {"id": "1", "type": "income", "text": "Income", "color": "#4EA645"}},
			"attachment": []
		}
	};

	// THIS IS HOW YOU LISTEN FOR SPECIFIC EVENTS ON YOUR PAGE.
	// Don't worry about this for now, we'll learn about that later.
	document.addEventListener("DOMContentLoaded", () => {
		// THIS IS HOW YOU GET ELEMENT BY ITS UNIQUE ID IDENTIFIER.
		const applicationElement = document.getElementById('Application');

		applicationElement.style.backgroundColor = '#2f619166';
		applicationElement.style.width = '100%';
		applicationElement.style.height = '100%';
		applicationElement.style.display = 'flex';
		applicationElement.style.flexDirection = 'row';
		applicationElement.style.flexWrap = 'wrap';
		applicationElement.style.alignItems = 'center';
		applicationElement.style.justifyContent = 'center';

		// THIS IS HOW YOU LOOP THROUGH ITEMS IN OBJECT.
		for (let key in data) {
			const transactionObject = data[key];

			console.log('This is current Transaction object to be rendered on the Screen.', transactionObject);

			let transactionWrapper = document.createElement('div');

			transactionWrapper.style.backgroundColor = transactionObject.color;
			transactionWrapper.style.borderRadius = '16px';
			transactionWrapper.style.border = '2px solid #333333';
			transactionWrapper.style.margin = '5%';
			transactionWrapper.style.overflow = 'hidden';
			transactionWrapper.style.width = '40%';
			transactionWrapper.style.boxSizing = 'border-box';

			let transactionName = document.createElement('div');

			// THIS IS HOW YOU ADD CONTENT TO NEW ELEMENT.
			transactionName.innerHTML = transactionObject.name;

			transactionName.style.backgroundColor = '#33333333';
			transactionName.style.color = transactionObject.color;
			transactionName.style.fontSize = '20px';
			transactionName.style.fontWeight = 'bold';
			transactionName.style.letterSpacing = '1px';
			transactionName.style.padding = '10px 20px';
			transactionName.style.textAlign = 'center';
			transactionName.style.textShadow = '1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue';


			transactionWrapper.appendChild(transactionName);

			// AFTER CREATING NEW ELEMENT, IT NEEDS TO BE APPENDED TO EXISTING ELEMENT
			// THIS IS HOW YOU INSERT NEW ELEMENT INTO YOUR PAGE.
			applicationElement.appendChild(transactionWrapper);
		}
	});
})();