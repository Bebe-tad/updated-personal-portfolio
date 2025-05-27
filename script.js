
document.getElementById('seeMoreBtn').addEventListener('click', function() {
    document.getElementById('additionalImages').classList.add('show');
});

document.getElementById('cancelBtn').addEventListener('click', function() {
    document.getElementById('additionalImages').classList.remove('show');
    location.reload(); 
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});