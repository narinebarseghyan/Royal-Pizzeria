const toTopButton = document.querySelector('.to-top'); 
 
toTopButton.addEventListener('click', () => { 
    window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
    }); 
}); 
 
window.addEventListener('scroll', () => { 
    if (window.scrollY > 200) { 
        toTopButton.style.display = 'block'; 
    } else { 
        toTopButton.style.display = 'none'; 
    } 
});