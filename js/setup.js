'use strict';
var names = ['Иван', 'Хуан', 'Мария', 'Кристоф', 'Юлия', 'Виктор', 'Люпита', 'Вашингтон'];
var lastNames = ['Да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Игвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161', 'rgb(56, 159, 117)','rgb(215, 210, 55', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var setupElement = document.querySelector('.setup');
var setupSimilarList = document.querySelector('.setup-similar');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

const NUMBER_OF_WIZARDS = 4;

var showSetupBlock = (element) => {
	element.classList.remove('hidden');
};

var getRandomElement = (list) => {
	return list[Math.floor(Math.random() * list.length)];
};

var getWizardElement = (template) => {
	var templateClone = template.cloneNode(true);

	templateClone.querySelector('.setup-similar-label').textContent =  getRandomElement(names) + ' ' + getRandomElement(lastNames);
	templateClone.querySelector('.wizard-coat').style.fill = getRandomElement(coatColors);
	templateClone.querySelector('.wizard-eyes').style.fill = getRandomElement(eyesColors);

	return templateClone;
};

var getWizardElements = (count) => {
	return new Array(count).fill().map(() => getWizardElement(similarWizardTemplate));
};

var renderFragment = (parentElement, elements) => {
	var fragment = document.createDocumentFragment();
	elements.forEach((element) => fragment.appendChild(element));
	parentElement.appendChild(fragment);	
};

showSetupBlock(setupElement);
showSetupBlock(setupSimilarList);
renderFragment(similarListElement, getWizardElements(NUMBER_OF_WIZARDS));
