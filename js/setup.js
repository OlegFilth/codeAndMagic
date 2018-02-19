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

var wizards = [
	{
		name: getRandomElement(names) + ' ' + getRandomElement(lastNames),
		coatColor: getRandomElement(coatColors),
		eyesColor: getRandomElement(eyesColors)
	}, 
	{
		name: getRandomElement(names) + ' ' + getRandomElement(lastNames),
		coatColor: getRandomElement(coatColors),
		eyesColor: getRandomElement(eyesColors)
	}, 
	{
		name: getRandomElement(names) + ' ' + getRandomElement(lastNames),
		coatColor: getRandomElement(coatColors),
		eyesColor: getRandomElement(eyesColors)
	},
	{
		name: getRandomElement(names) + ' ' + getRandomElement(lastNames),
		coatColor: getRandomElement(coatColors),
		eyesColor: getRandomElement(eyesColors)
	}
];

var renderWizards = (template, wizard) => {
	var templateClone = template.cloneNode(true);

	templateClone.querySelector('.setup-similar-label').textContent = wizard.name;
	templateClone.querySelector('.wizard-coat').style.fill = wizard.coatColor;
	templateClone.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

	return templateClone;
};


var fillAndPastFragment = (parentElement, elements) => {
	var fragment = document.createDocumentFragment();

	for (var i = 0; i < elements.length; i++) {
		fragment.appendChild(renderWizards(similarWizardTemplate, elements[i]));
	}

	parentElement.appendChild(fragment);
};

fillAndPastFragment(similarListElement, wizards);