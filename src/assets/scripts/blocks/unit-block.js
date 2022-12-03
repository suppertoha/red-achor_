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