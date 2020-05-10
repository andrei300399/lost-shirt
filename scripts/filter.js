(function () {

    var elem = document.querySelector('.products__list');
var iso = new Isotope( elem, {
  
  itemSelector: '.products__item',
  filter: '.popular'
  
});

    const activeClass = 'filter__item--active';
    const controls = document.querySelectorAll('.filter__link');
    controls.forEach(function (control) {
        control.addEventListener('click',function (e) {
            e.preventDefault();

            const filterName = control.getAttribute('data-filter');

            controls.forEach(function (link) {
                link.closest('.filter__item').classList.remove(activeClass);
            });
            control.closest('.filter__item').classList.add(activeClass);
            iso.arrange({
                filter:`.${filterName}`
            })
        })
    })
}());