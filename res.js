burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightnavigationbar = document.querySelector('.rightnavigationbar')
navlist = document.querySelector('.navlist')

burger.addEventListener('click', () => {
    rightnavigationbar.classList.toggle('view');
    navlist.classList.toggle('view');
    navbar.classList.toggle('hight-nav');

})