function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector("img").getAttribute("src")+')';
    }
  }
}
ibg();

document.querySelectorAll('.tabs-triggers__item').forEach((item) =>
  item.addEventListener('click', function(e) {
    e.preventDefault();
    const id = e.target.getAttribute('href').replace('#', '');

    document.querySelectorAll('.tabs-triggers__item').forEach(
      (child) => child.classList.remove('tabs-triggers__item--active')
    );
    document.querySelectorAll('.tabs-content__item').forEach(
      (child) => child.classList.remove('tabs-content__item--active')
    );

    item.classList.add('tabs-triggers__item--active');
    document.getElementById(id).classList.add('tabs-content__item--active')
  })
);

document.querySelector('.tabs-triggers__item').click();
