

	const btnOpenMenu = document.querySelector('.btn-open-burger');
	const LinkNav = document.querySelectorAll('.link-nav');
	const headerMenu = document.querySelector('.header-menu');
	const headerLinks = document.querySelector('.header_links');

	btnOpenMenu.addEventListener('click', ()=>{
		headerMenu.classList.toggle('open-menu');
		headerLinks.classList.toggle('open-links');
	})

	LinkNav.forEach(function(elem){

		elem.addEventListener('click', function(){
			if(headerMenu.classList.contains('open-menu') && headerLinks.classList.contains('open-links')){
				headerMenu.classList.remove('open-menu')
				headerLinks.classList.remove('open-links')
			}
		}
	)})