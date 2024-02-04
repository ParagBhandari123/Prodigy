window.onscroll = function() {
    var navbar = document.querySelector('#navbar');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.style.backgroundColor = "#2980b9";
    } else {
        navbar.style.backgroundColor = "#3498db";
    }
};
