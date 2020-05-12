(function () {



    const activeClass = 'filter__item--active';
    const visibleClass = 'information__content--visible';
    const controls = document.querySelectorAll('.filter__link');
    const informations = document.querySelectorAll('.information__content');
    controls.forEach(function (control) {
        control.addEventListener('click',function (e) {
            informations.forEach(function (link) {
                
                link.closest('.information__content').classList.remove(visibleClass);
            });
            e.preventDefault();
            if (control.closest('.filter__item').classList.contains('filter__item__1')) {
                informations[0].classList.add(visibleClass);
            } else if (control.closest('.filter__item').classList.contains('filter__item__2')) {
                informations[1].classList.add(visibleClass);
            } else if (control.closest('.filter__item').classList.contains('filter__item__3')) {
                informations[2].classList.add(visibleClass);
            } else if (control.closest('.filter__item').classList.contains('filter__item__4')) {
                informations[3].classList.add(visibleClass);
            }
            
            controls.forEach(function (link) {
                link.closest('.filter__item').classList.remove(activeClass);
            });
            control.closest('.filter__item').classList.add(activeClass);
            

        })
    })
}());