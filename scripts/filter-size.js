(function () {
    const selectedClass = 'product__information__item--selected';
    const controls = document.querySelectorAll('.product__information__item');
    const images = document.querySelectorAll('.product__img');
    const visibleClass = 'product__img--visible';
    controls.forEach(function (control) {
        control.addEventListener('click',function (e) {
           
            images.forEach(function (link) {
                console.log(1);
                link.closest('.product__img').classList.remove(visibleClass);
            });
            console.log(control.firstElementChild);
           if (control.firstElementChild.classList.contains('product__information__color__item--black')) {
               console.log(1);
               images[0].classList.add(visibleClass);
           } else if(control.firstElementChild.classList.contains('product__information__color__item--white')){
            console.log(2);
            images[1].classList.add(visibleClass);
           }else if(control.firstElementChild.classList.contains('product__information__color__item--green')){
            console.log(3);
            images[2].classList.add(visibleClass);
           }
           else if(control.firstElementChild.classList.contains('product__information__color__item--blue')){
            images[3].classList.add(visibleClass);
           }
           else if(control.firstElementChild.classList.contains('product__information__color__item--red')){
            images[4].classList.add(visibleClass);
           }
           
            controls.forEach(function (link) {
                link.closest('.product__information__item').classList.remove(selectedClass);
            });
            control.closest('.product__information__item').classList.add(selectedClass);
        
        })
    })
}());