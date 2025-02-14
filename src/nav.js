const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');
	
	// Toggle Nav
	burger.addEventListener('click',()=>{
		nav.classList.toggle('nav-active');
	});
	// Animate
	navLinks.forEach((link, index) => {
		link.style.animation = `navLinkFade 0.5s ease forwards ${index /3+1.4}s`;
        console.log(index / 5 + 0.2);


		console.log(index / 7);
	});
	
}

navSlide();