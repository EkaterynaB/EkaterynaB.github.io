(function() {
	document.addEventListener('DOMContentLoaded', template);

	function template() {
		var data = {
			name: "Бублик Екатерина Александровна",
			profile_image: "img/photo.jpg",
			about_me: "В прошлом - банковский работник, в настоящем - участница курсов FrontEnd online, а в будущем - FrontEnd developer",
			motivation_items: ["Офисный стиль и рутинная работа убивают мою индивидуальность",
			"Возможность реализовать себя", "FrontEnd - перспективная сфера деятельности", "Высокая оплата труда"],
			phone: "+30509180613",
			facebook_link: "https://www.facebook.com/kateryna.bublyk"
		};

		var tmpl = _.template(document.getElementById('test-template').innerHTML);
		var result = tmpl(data);
		document.getElementById('result').innerHTML = result;
	}

})();
