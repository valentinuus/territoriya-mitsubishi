function calculateServiceCosts() {
	const pricePerHour = 1800; // Стоимость одного нормативного часа
	const priceElements = document.getElementsByClassName('table__cell');

	for (let i = 0; i < priceElements.length; i++) {
		const normHours = parseFloat(priceElements[i].getAttribute('data-norm-hours'));
		const totalCost = normHours * pricePerHour;
		priceElements[i].innerText = totalCost.toFixed(2) + ' ₽';
	}
}

// Вызов функции для расчета стоимости услуг
calculateServiceCosts();