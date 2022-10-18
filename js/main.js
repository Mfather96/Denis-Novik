

	const btnOpenMenu = document.querySelector('.btn-open-burger');
	const LinkNav = document.querySelectorAll('.link-nav');
	const headerMenu = document.querySelector('.header-menu');
	const headerLinks = document.querySelector('.header_links');
	const messageBtn = document.querySelector('.block-button-send-message');
	const closeFormMessage = document.querySelector('.form-message_close-icon');
	const formMessage = document.querySelector('.contacts__form-message');
	const sendMessage = document.querySelector('.message_send-button');

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

messageBtn.addEventListener('click', ()=>{
		if(!formMessage.classList.contains('active')){
			formMessage.classList.add('active');
		}
})

closeFormMessage.addEventListener('click', ()=>{
		if(formMessage.classList.contains('active')){
			formMessage.classList.remove('active');
		}
})

sendMessage.addEventListener('click', sendMessageFun)

function sendMessageFun(){
	if(!document.querySelector('.form-message_message-sended').classList.contains('active') && formMessage.classList.contains('active')){
	 document.querySelector('.form-message_message-sended').classList.add('active');
	formMessage.classList.remove('active');
	setTimeout(closeSendMessage, 900);
	}
}

function closeSendMessage(){
	if(document.querySelector('.form-message_message-sended').classList.contains('active')){
		document.querySelector('.form-message_message-sended').classList.remove('active');
	}
}