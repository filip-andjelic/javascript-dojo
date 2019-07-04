// JS CSS styles list.
// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference

(() => {
	const data = {
		"922378655383.0779": {
			"value": "1500",
			"convertedValue": "1750",
			"name": "Monthly Salary",
			"id": "922378655383.0779",
			"description": "Lorem ipsum dolor sit amet, sea eius soluta praesent ad, omnis nullam everti vim ex. Dicta denique inimicus eum eu, esse eirmod commune ad vis. Minimum constituto ea quo. Nominati dissentias an usu, meis audire omnesque quo ad.\n" +
				"\n" +
				"Pro cu autem lucilius perfecto. Labitur explicari dissentias quo eu, vix at omittam officiis. Eum an apeirian reformidans, sed an ferri dicam possit. Ei assum quaerendum vim.\n",
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
			"description": "Lorem ipsum dolor sit amet, sea eius soluta praesent ad, omnis nullam everti vim ex. Dicta denique inimicus eum eu, esse eirmod commune ad vis. Minimum constituto ea quo. Nominati dissentias an usu, meis audire omnesque quo ad.\n" +
				"\n" +
				"Pro cu autem lucilius perfecto. Labitur explicari dissentias quo eu, vix at omittam officiis. Eum an apeirian reformidans, sed an ferri dicam possit. Ei assum quaerendum vim.\n",
			"isSingle": 0,
			"chosenDate": "10-04-2019",
			"date": "10-04-2019",
			"frequency": "3",
			"type": "income",
			"label": {"2": {"id": "2", "type": "monthlyWage", "text": "Monthly Wage", "color": "#4EA645"}},
			"currency": {"code": "rsd"},
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
			"description": "Lorem ipsum dolor sit amet, sea eius soluta praesent ad, omnis nullam everti vim ex. Dicta denique inimicus eum eu, esse eirmod commune ad vis. Minimum constituto ea quo. Nominati dissentias an usu, meis audire omnesque quo ad.\n" +
				"\n" +
				"Pro cu autem lucilius perfecto. Labitur explicari dissentias quo eu, vix at omittam officiis. Eum an apeirian reformidans, sed an ferri dicam possit. Ei assum quaerendum vim.\n",
			"isSingle": 0,
			"chosenDate": "22-04-2019",
			"date": "22-04-2019",
			"frequency": "2",
			"type": "income",
			"label": [],
			"currency": {"code": "usd"},
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
		//applicationElement.style.backgroundColor = 'red';
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
            
            
            ///////////////////////////////////////////////////////////
            
            //DACA PROGRAMIRA
            
             //Pravim dva div-a za date i frequency
            var transactionDate = document.createElement('div');
            var transactionFrequency = document.createElement('div');
            
            //Ispisujem tekst za date
            transactionDate.innerHTML = 'Transaction date: ' + transactionObject.date;
            
            //Ispisujem tekst za frequency
            transactionFrequency.innerHTML = 'Transaction frequency ID:'+ transactionObject.frequency;
            
            // Apendujem na postojeci Wrapper div da bi se prikazali
            transactionWrapper.appendChild(transactionDate);
            transactionWrapper.appendChild(transactionFrequency);
            
           
            //Stilizovanje 
            
            transactionDate.style.float = 'left';
            transactionDate.style.padding = '5px 10px';
            transactionFrequency.style.float = 'right';
            transactionFrequency.style.padding = '5px 10px';
            
            
            // Pravim sledeca dva div-a za vrstu transakcije i vrednost trans
            var transactionType = document.createElement('div');
            var transactionValue = document.createElement('div');
            
            
            //Ispisujem tekst za vrstu transakcije
            transactionType.innerHTML = 'This transaction is '+ transactionObject.type;
            
            //Ispsisujem tekst za vrednost transakcije
            transactionValue.innerHTML = 'Value of this Transaction is ' + ' ' + '<span style="font-weight:bold; color:yellow ">' +   transactionObject.value + ' ' + transactionObject.currency.code + '</span>';
            
            // Apendujem na postojeci Wrapper div da bi se prikazali
            transactionWrapper.appendChild(transactionType);
            transactionWrapper.appendChild(transactionValue);
            
            //Stilizovanje 
            transactionType.style.clear = 'both';
            transactionType.style.float = 'left';
            transactionType.style.padding = '5px 10px';
            transactionValue.style.float = 'right';
            transactionValue.style.padding = '5px 10px';
            transactionValue.style.marginBottom = '15px';
            
            //bold.style.color = "yellow";
            //bold.style.fontWeight = "bold";
            //bold.style.fontSize = "15px";
            
            
            
            
            //Pravim poslednji div za opis 
            var transactionDesc = document.createElement('div');
            
            //Ispisivanje teksta
            transactionDesc.innerHTML = ' ' + transactionObject.description;
            
            //Apendovanje na postojeci Wrapper
            transactionWrapper.appendChild(transactionDesc);
            
            //Stilizovanje 
            transactionDesc.style.clear = 'both';
            transactionDesc.style.padding = '15px';
            transactionDesc.style.border = '1px solid black';
            transactionDesc.style.borderRadius = '16px';
            transactionDesc.style.margin = '20px 10px';
            transactionDesc.style.marginTop = '50px';
            
            
            ///////////////////////////////////////////////////
            
            

			/*let transactionDateAndFrequency = document.createElement('div');
			let transactionDate = document.createElement('div');
			let transactionFrequency = document.createElement('div');

			transactionDate.innerHTML = 'Transaction date: ' + transactionObject.date;
			transactionFrequency.innerHTML = 'Transaction frequency ID: ' + transactionObject.frequency;

			transactionDateAndFrequency.style.display = 'flex';
			transactionDateAndFrequency.style.alignItems = 'center';
			transactionDateAndFrequency.style.justifyContent = 'space-between';
			transactionDateAndFrequency.style.flexDirection = 'row';
			transactionDateAndFrequency.style.color = '#333333';
			transactionDateAndFrequency.style.fontSize = '14px';
			transactionDateAndFrequency.style.padding = '10px';
			transactionDateAndFrequency.style.textAlign = 'center';

			transactionDateAndFrequency.appendChild(transactionDate);
			transactionDateAndFrequency.appendChild(transactionFrequency);
			transactionWrapper.appendChild(transactionDateAndFrequency);

			let transactionTypeAndValue = document.createElement('div');
			let transactionType = document.createElement('div');
			let transactionValue = document.createElement('div');
			let transactionValueNumber = document.createElement('span');

			transactionValueNumber.innerHTML = transactionObject.value + transactionObject.currency.code;
			transactionType.innerHTML = 'This Transaction is ' + transactionObject.type;
			transactionValue.innerHTML = 'Value of this Transaction is ';

			transactionTypeAndValue.style.display = 'flex';
			transactionTypeAndValue.style.alignItems = 'center';
			transactionTypeAndValue.style.justifyContent = 'space-between';
			transactionTypeAndValue.style.flexDirection = 'row';
			transactionTypeAndValue.style.color = '#333333';
			transactionTypeAndValue.style.fontSize = '14px';
			transactionTypeAndValue.style.padding = '10px';
			transactionTypeAndValue.style.textAlign = 'center';

			transactionValueNumber.style.fontSize = '16px';
			transactionValueNumber.style.fontWeight = 'bold';
			transactionValueNumber.style.color = 'yellow';

			transactionValue.appendChild(transactionValueNumber);
			transactionTypeAndValue.appendChild(transactionType);
			transactionTypeAndValue.appendChild(transactionValue);
			transactionWrapper.appendChild(transactionTypeAndValue);

			let transactionDescription = document.createElement('div');

			transactionDescription.innerHTML = transactionObject.description;

			transactionDescription.style.display = 'flex';
			transactionDescription.style.alignItems = 'center';
			transactionDescription.style.flexDirection = 'row';
			transactionDescription.style.color = '#333333';
			transactionDescription.style.fontSize = '14px';
			transactionDescription.style.padding = '10px';
			transactionDescription.style.margin = '10px';
			transactionDescription.style.border = '1px solid #333333';
			transactionDescription.style.borderRadius = '18px';

			transactionWrapper.appendChild(transactionDescription);*/

			// AFTER CREATING NEW ELEMENT, IT NEEDS TO BE APPENDED TO EXISTING ELEMENT
			// THIS IS HOW YOU INSERT NEW ELEMENT INTO YOUR PAGE.
			applicationElement.appendChild(transactionWrapper);
		}
	});
})();