const PhotoSphereViewer = require('photo-sphere-viewer');

const container = document.getElementById('viewer');

const viewer = new PhotoSphereViewer({
  container,
  panorama: './img/medium.jpg',
  navbar: [
    'autorotate',
    'zoom',
  ],
  time_anim: false,
  markers: [
    {
      id: 'marker1',
      longitude: 0.78,
      latitude: -0.22,
      html: `<span class='description'>Supermercado Extra</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'/>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'lazer',
      // tooltip: {
      //   content: '4min à pé | Lazer'
      // }
    },
    {
      id: 'marker3',
      longitude: -2.21,
      latitude: -0.1,
      html: `<span class='description'>Pão de Áçucar<br/> R. David Ben Gurion, S/N</span>
              <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'></img>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'lazer',
      // tooltip: {
      //   content: '3min à pé | Lazer'
      // }
    },
    {
      id: 'marker5',
      longitude: 1.66,
      latitude: -0.34,
      html: `<span class='description'>Largo do Taboão<br/>Futura estação de Metrô</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'></img>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'lazer',
      // tooltip: {
      //   content: '6min à pé | Lazer'
      // }
    },
    {
      id: 'marker6',
      longitude: -2.12,
      latitude: 0.06,
      html: `<span class='description'>Praça <br/>Vinícius de Morais</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'></img>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'conv',
      // tooltip: {
      //   content: '13min de bike | Conveniência'
      // }
    },
    {
      id: 'marker7',
      longitude: 2.5,
      latitude: -0.52,
      html: `<span class='description'>Av. Francisco Morato</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'></img>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'health',
      // tooltip: {
      //   content: '14min de bike | Qualidade de Vida'
      // }
    },
    {
      id: 'marker9',
      longitude: -1.36,
      latitude: -0.08,
      html: `<span class='description'>Shopping<br/> Portal do Morumbi</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'></img>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'health',
      // tooltip: {
      //   content: '30min de bike | Qualidade de Vida'
      // }
    },
    {
      id: 'marker11',
      longitude: 1.12,
      latitude: 0.02,
      html: `<span class='description'>Shopping Taboão</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'></img>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'conv',
      // tooltip: {
      //   content: '36min de bike | Conveniência'
      // }
    },
    {
      id: 'marker12',
      longitude: 1.23,
      latitude: -0.24,
      html: `<span class='description'>Rodovia Régis Bittencourt</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'></img>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'lazer',
      // tooltip: {
      //   content: '6min à pé | Lazer'
      // }
    },
    {
      id: 'static6',
      longitude: -2.32,
      latitude: 0.03,
      html: `<span class='description'>Estádio<br/>Morumbi</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'/>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'health',
      // tooltip: {
      //   content: '9min à pé | Qualidade de Vida'
      // }
    },
    {
      id: 'static10',
      longitude: -1.77,
      latitude: -0.02,
      html: `<span class='description'>Colégio <br/>N. Sra. do Morumbi</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'/>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'health',
      // tooltip: {
      //   content: '19min de bike | Qualidade de Vida'
      // }
    },
    {
      id: 'static11',
      longitude: -0.76,
      latitude: -0.08,
      html: `<span class='description'>Colégio Anglo Morumbi</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'/>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'health',
      // tooltip: {
      //   content: '24min de bike | Qualidade de Vida'
      // }
    },
  ]
});

$('button.item').click(function(e) {
  const nextImg = `./img/${$(e.target).data('andar')}.jpg`;
  viewer.setPanorama(nextImg);
  $(this).toggleClass('active').siblings().removeClass('active');
});
