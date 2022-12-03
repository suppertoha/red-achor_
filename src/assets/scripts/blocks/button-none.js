const button = document.querySelector('.filter__show-more'); 
const active_button = document.querySelector('.categories');
button.addEventListener('click', function(){
    active_button.classList.toggle('categories')
})