(function () {
    const selectedClass = 'information__size__item--selected';
    const controls = document.querySelectorAll('.information__size__item');
    controls.forEach(function (control) {
        control.addEventListener('click',function (e) {
            if(!control.classList.contains('information__size__item--disabled')){
            controls.forEach(function (link) {
                link.closest('.information__size__item').classList.remove(selectedClass);
            });
            control.closest('.information__size__item').classList.add(selectedClass);
        }
        })
    })
}());