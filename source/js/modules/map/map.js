const map = document.querySelector('.contacts__map');

const CENTER_MAP = {
  lat: 59.938635,
  lng: 30.323118,
};
const ZOOM = 16;
const PIN_SIZE = [18, 22];
const PIN_OFSET = [-18, -22];

const createMap = () => {
  ymaps.ready(init);
  function init() {
    const myMap = new ymaps.Map(map, {
      center: [CENTER_MAP.lat, CENTER_MAP.lng],
      zoom: ZOOM,
    });

    const myPlacemark = new ymaps.Placemark([CENTER_MAP.lat, CENTER_MAP.lng], {
      balloonContentHeader: '<h2>Круизы в Антарктику</h2>',
      balloonContentBody: 'г. Санкт-Петербург,<br> ул. Большая Конюшенная, 19/8',
      balloonContentFooter: 'Наш телефон:<br> 8-800-200-00-00',
      hintContent:'Круизы в Антарктику'
    },
    {
        iconImageHref: '../img/svg/map-pin.svg',
        iconImageSize: PIN_SIZE,
        iconImageOffset: PIN_OFSET,
        iconLayout: 'default#image',
    });

    myMap.geoObjects.add(myPlacemark);
  };
};

export {createMap};