import JustValidate from 'just-validate';

const validateForm = () => {
  const validation = new JustValidate('#contacts_form');

  validation
    .addField('#name', [
      {
        rule: 'required',
        errorMessage: 'Вы не ввели имя',
        tooltip: {
          position: 'top',
        },
      },
    ])
    .addField('#comment', [
      {
        rule: 'required',
        errorMessage: 'Вы не ввели комментарий',
        tooltip: {
          position: 'top',
        },
      },
    ])
    .addField('#email', [
      {
        rule: 'required',
        errorMessage: 'Вы не ввели e-mail',
      },
      {
        rule: 'email',
        errorMessage: 'Недопустимый формат',
        tooltip: {
          position: 'left',
        },
      },
    ]);
};

const closeAddress = () => {
  const closeBtn = document.querySelector('.address__close');

  closeBtn.addEventListener('click', () => {
    closeBtn.parentElement.classList.add('hided-smoothly');
  });
};

const openAddress = () => {
  document
    .querySelector('.contacts__address ')
    .classList.remove('hided-smoothly');
};

const yaMap = () => {
  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map('map', {
      center: [55.76029, 37.618645], // Москва (Большой театр)
      zoom: 13,
    });

    var myPlacemark = new ymaps.Placemark(
      [55.769438, 37.638956],
      {},
      {
        iconLayout: 'default#image',
        iconImageHref: 'img/circle.svg',
        iconImageSize: [12, 12],
        iconImageOffset: [-10, -5],
      }
    );

    myMap.geoObjects.add(myPlacemark);

    myMap.geoObjects.events.add('click', function (e) {
      openAddress();
    });
  }
};

closeAddress();
yaMap();
validateForm();
