// Smooth Scrolling for anchor links
document.addEventListener('DOMContentLoaded', function () {
	const links = document.querySelectorAll('a[href^="#"]');
	for (const link of links) {
		link.addEventListener('click', function (e) {
			const targetId = this.getAttribute('href').slice(1);
			const target = document.getElementById(targetId);
			if (target) {
				e.preventDefault();
				target.scrollIntoView({ behavior: 'smooth' });
			}
		});
	}

	// Sticky Navbar (adds shadow on scroll)
	const navbar = document.querySelector('.navbar');
	window.addEventListener('scroll', function () {
		if (window.scrollY > 20) {
			navbar.classList.add('scrolled');
		} else {
			navbar.classList.remove('scrolled');
		}
	});
});
