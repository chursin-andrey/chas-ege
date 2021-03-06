(function() {
	'use strict';
	chas2.task.setTask({
		text: 'В каком предложении вместо слова ВОДНЫЙ нужно употребить ВОДЯНИСТЫЙ?' + '<br/>',
		answers: [
			'Незнакомец подарил мне букетик лиловых цветов с ВОДНЫМИ стеблями.',
		],
		wrongAnswers: [
			'На месте ВОДНОЙ глади часто возникает грязная болотная трясина, которая постепенно зарастает лесом.',
			'Со временем ВОДНАЯ поверхность озера становится зеленоватой или красноватой: в ней поселяются мириады клеток микроводорослей.',
			'ВОДНЫЙ стадион — гордость района и излюбленное место горожан, куда они приходят семьями в выходные дни.',
		],
		analys: 'Корректно: Незнакомец подарил мне букетик лиловых цветов с ВОДЯНИСТЫМИ стеблями.',
	});
	AtoB();
})();
