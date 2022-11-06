const map = document.querySelector('.contacts__map');

const CENTER_MAP = {
  lat: 59.939352,
  lng: 30.323414,
};

const PIN_CENTER = {
  lat: 59.938635,
  lng: 30.323118,
}

const ZOOM = 16;

ymaps.ready(init);

function init() {
  const myMap = new ymaps.Map(map, {
    center: [CENTER_MAP.lat, CENTER_MAP.lng],
    zoom: ZOOM,
  });

  myPlacemark = new ymaps.Placemark([PIN_CENTER.lat, PIN_CENTER.lng], {
    balloonContentHeader: '<h2>Круизы в Антарктику</h2>',
    balloonContentBody: 'г. Санкт-Петербург,<br> ул. Большая Конюшенная, 19/8',
    balloonContentFooter: 'Наш телефон:<br> 8-800-200-00-00',
    hintContent:'Круизы в Антарктику'
      }, {
          iconImageHref: '../img/svg/map-pin.svg',
          iconImageSize: [18, 22],
          iconImageOffset: [0, -22],
          iconLayout: 'default#image',
      });

      myMap.geoObjects.add(myPlacemark);
}
