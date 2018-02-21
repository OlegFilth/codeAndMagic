'use strict';

var setupElement = document.querySelector('.setup');
setupElement.classList.remove('hidden');

var setupSimilarList = document.querySelector('.setup-similar');
setupSimilarList.classList.remove('hidden');

var names = ['Иван', 'Хуан', 'Мария', 'Кристоф', 'Юлия', 'Виктор', 'Люпита', 'Вашингтон'];
var lastNames = ['Да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Игвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161', 'rgb(56, 159, 117)','rgb(215, 210, 55', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandomElement = (list) => {
	return list[Math.floor(Math.random() * list.length)];
};

var getWizardElement = (count, template) => {
	var wizardsProps = [];
	var wizardsElements = [];
	

	for (var i = 0; i < count; i++) {
		wizardsProps.push ({
			name: getRandomElement(names) + ' ' + getRandomElement(lastNames),
			coatColor: getRandomElement(coatColors),
			eyesColor: getRandomElement(eyesColors)
		});
		var templateClone = template.cloneNode(true);

		templateClone.querySelector('.setup-similar-label').textContent = wizardsProps[i].name;
		templateClone.querySelector('.wizard-coat').style.fill = wizardsProps[i].coatColor;
		templateClone.querySelector('.wizard-eyes').style.fill = wizardsProps[i].eyesColor;

		wizardsElements.push(templateClone);
		console.log(wizardsElements[i]);
	}
	
	return wizardsElements;
};

//getWizardElement(4, similarWizardTemplate);

// var createWizards = (count) => {
// 	var wizards = [];
// 	for (var i = 0; i < count; i++) {
// 		wizards.push ({
// 			name: getRandomElement(names) + ' ' + getRandomElement(lastNames),
// 			coatColor: getRandomElement(coatColors),
// 			eyesColor: getRandomElement(eyesColors)
// 		});
// 	}

// 	return wizards;
// };

// var wizards = createWizards(4);

// var customWizards = (template, wizard) => {
// 	var templateClone = template.cloneNode(true);

// 	templateClone.querySelector('.setup-similar-label').textContent = wizard.name;
// 	templateClone.querySelector('.wizard-coat').style.fill = wizard.coatColor;
// 	templateClone.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

// 	return templateClone;
// };


// var collectWizardsElements = (elements) => {

// 	var wizards = [];
// 	for (var i = 0; i < elements.length; i++) {
// 		wizards.push(customWizards(similarWizardTemplate, elements[i]));
// 	}
// 	return wizards;
// };


var renderFragment = (parentElement, elements) => {
	var fragment = document.createDocumentFragment();

	elements.forEach((element) => {
		fragment.appendChild(element);
	});

	parentElement.appendChild(fragment);	
};

//renderFragment(similarListElement, collectWizardsElements(wizards));

renderFragment(similarListElement, getWizardElement(4,similarWizardTemplate));
