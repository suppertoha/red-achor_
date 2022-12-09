    // unit-block.js
    
    // Unit Block

    const initUnitBlock = () => {
      const unitBlocks = document.querySelectorAll('.js-unit-block');
    

        if (!unitBlocks) return;
        unitBlocks.forEach((unitBlock) => {
            const unitBlockButton = unitBlock.querySelector('.js-unit-block__button');
            const unitBlockContent = unitBlock.querySelector('.js-unit-block__content');
            unitBlockContent.style.height = unitBlockContent.scrollHeight + 'px';
            unitBlockButton.addEventListener('click', () => {
                if (unitBlock.classList.contains('unit-block--closed')) {
                    unitBlock.classList.remove('unit-block--closed');
                    unitBlockContent.style.height = unitBlockContent.scrollHeight + 'px';
                } else {
                    unitBlock.classList.add('unit-block--closed');
                    unitBlockContent.style.height = 0 + 'px';
                }
            });
        });
    };

initUnitBlock();
    
const btnMenu = document.querySelector(".prompt-button");
const menu = document.querySelector(".prompt");
const toggleMenu = function () {
    menu.classList.toggle("open");
}

btnMenu.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleMenu();
});

document.addEventListener("click", function (e) {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
    const its_btnMenu = target == btnMenu;
    const menu_is_active = menu.classList.contains("open");

    if (!its_menu && !its_btnMenu && menu_is_active) {
        toggleMenu();
    }
});