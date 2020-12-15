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
      id: 'marker10',
      longitude: -0.38,
      latitude: 0.03,
      html: `<span class='description'>FACULDADES<br>INTEGRADAS<br>RIO BRANCO</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'/>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'school',
      // tooltip: {
      //   content: '4min à pé | Lazer'
      // }
    },
    {
      id: 'marker46',
      longitude: -0.34,
      latitude: -0.01,
      html: `<span class='description'>SHOPPING BOURBON</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'/>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'school',
      // tooltip: {
      //   content: '4min à pé | Lazer'
      // }
    },
    {
      id: 'marker47',
      longitude: -0.23,
      latitude: -0.03,
      html: `<span class='description'>COLÉGIO<br>SAGRADO CORAÇÃO<br>DE JESUS</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'/>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'school',
      // tooltip: {
      //   content: '4min à pé | Lazer'
      // }
    },
    {
      id: 'marker1',
      longitude: -0.26,
      latitude: -0.28,
      html: `<span class='description'>HIPERMERCADO EXTRA</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'/>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'conv',
      // tooltip: {
      //   content: '4min à pé | Lazer'
      // }
    },
    {
      id: 'marker3',
      longitude: -0.85,
      latitude: -0.04,
      html: `<span class='description'>RODOVIA<br>DOS BANDEIRANTES</span>
              <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'></img>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'road',
      // tooltip: {
      //   content: '3min à pé | Lazer'
      // }
    },
    {
      id: 'marker14',
      longitude: -0.79,
      latitude: 0.01,
      html: `<span class='description'>SHOPPING<br>TIETÊ PLAZA</span>
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
      //   content: '3min à pé | Lazer'
      // }
    },
    {
      id: 'marker17',
      longitude: -0.64,
      latitude: -0.08,
      html: `<span class='description'>MAKRO</span>
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
      //   content: '3min à pé | Lazer'
      // }
    },
    {
      id: 'marker5',
      longitude: 1.24,
      latitude: -0.05,
      html: `<span class='description'>PADARIA LETÍCIA</span>
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
      //   content: '6min à pé | Lazer'
      // }
    },
    {
      id: 'marker35',
      longitude: 0.94,
      latitude: -0.01,
      html: `<span class='description'>ECOFIT</span>
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
      //   content: '6min à pé | Lazer'
      // }
    },
    {
      id: 'marker36',
      longitude: 0.99,
      latitude: -0.034,
      html: `<span class='description'>RESTAURANTE SANTA MARIA</span>
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
      //   content: '6min à pé | Lazer'
      // }
    },
    {
      id: 'marker37',
      longitude: 1.04,
      latitude: -0.05,
      html: `<span class='description'>RESTAURANTE COR</span>
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
      //   content: '6min à pé | Lazer'
      // }
    },
    {
      id: 'marker38',
      longitude: 1.14,
      latitude: 0.017,
      html: `<span class='description'>SOGGIORNO PIZZA</span>
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
      //   content: '6min à pé | Lazer'
      // }
    },
    {
      id: 'marker39',
      longitude: 1.16,
      latitude: 0,
      html: `<span class='description'>BIORITMO</span>
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
      //   content: '6min à pé | Lazer'
      // }
    },
    {
      id: 'marker44',
      longitude: 1.26,
      latitude: 0,
      html: `<span class='description'>COLÉGIO SANTA CRUZ</span>
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
      //   content: '6min à pé | Lazer'
      // }
    },
    {
      id: 'marker45',
      longitude: 1.29,
      latitude: -0.03,
      html: `<span class='description'>BRASCATA PIZZARIA</span>
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
      //   content: '6min à pé | Lazer'
      // }
    },
    {
      id: 'marker25',
      longitude: 1.34,
      latitude: 0.06,
      html: `<span class='description'>PARQUE VILLA LOBOS</span>
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
      //   content: '6min à pé | Lazer'
      // }
    },
    {
      id: 'marker26',
      longitude: 1.44,
      latitude: 0.02,
      html: `<span class='description'>SHOPPING VILLA LOBOS</span>
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
      //   content: '6min à pé | Lazer'
      // }
    },
    {
      id: 'marker40',
      longitude: 1.38,
      latitude: 0.04,
      html: `<span class='description'>CALÇADÃO</span>
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
      //   content: '6min à pé | Lazer'
      // }
    },
    {
      id: 'marker27',
      longitude: 1.58,
      latitude: 0.06,
      html: `<span class='description'>CIDADE UNIVERSITÁRIA USP</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'></img>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'school',
      // tooltip: {
      //   content: '6min à pé | Lazer'
      // }
    },
    {
      id: 'marker48',
      longitude: 1.48,
      latitude: -0.01,
      html: `<span class='description'>PÃO DE AÇÚCAR</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'></img>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'school',
      // tooltip: {
      //   content: '6min à pé | Lazer'
      // }
    },
    {
      id: 'marker41',
      longitude: 1.74,
      latitude: -0.05,
      html: `<span class='description'>SESI</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'></img>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'school',
      // tooltip: {
      //   content: '6min à pé | Lazer'
      // }
    },
    {
      id: 'marker42',
      longitude: 1.94,
      latitude: -0.09,
      html: `<span class='description'>RUA CARLOS WEBER</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'></img>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'school',
      // tooltip: {
      //   content: '6min à pé | Lazer'
      // }
    },
    {
      id: 'marker6',
      longitude: -0.98,
      latitude: -0.12,
      html: `<span class='description'>VIA ANHANGUERA</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'></img>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'road',
      // tooltip: {
      //   content: '13min de bike | Conveniência'
      // }
    },
    {
      id: 'marker9',
      longitude: -1.36,
      latitude: -0.46,
      html: `<span class='description'>MARGINAL TIETÊ</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'></img>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'road',
      // tooltip: {
      //   content: '30min de bike | Qualidade de Vida'
      // }
    },
    {
      id: 'marker21',
      longitude: 0.19,
      latitude: 0.01,
      html: `<span class='description'>SESC POMPEIA</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'></img>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'school',
      // tooltip: {
      //   content: '36min de bike | Conveniência'
      // }
    },
    {
      id: 'marker22',
      longitude: 0.26,
      latitude: -0.02,
      html: `<span class='description'>COLÉGIO SANTO IVO</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'></img>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'school',
      // tooltip: {
      //   content: '36min de bike | Conveniência'
      // }
    },
    {
      id: 'marker12',
      longitude: -3.72,
      latitude: -0.04,
      html: `<span class='description'>AVENIDA MOFARREJ</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'></img>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'road',
      // tooltip: {
      //   content: '6min à pé | Lazer'
      // }
    },
    {
      id: 'static6',
      longitude: -3.60,
      latitude: 0.01,
      html: `<span class='description'>MARGINAL PINHEIROS</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'/>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'road',
      // tooltip: {
      //   content: '9min à pé | Qualidade de Vida'
      // }
    },
    {
      id: 'static10',
      longitude: -1.94,
      latitude: 0.09,
      html: `<span class='description'>PICO DO JARAGUÁ</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'/>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'conv',
      // tooltip: {
      //   content: '19min de bike | Qualidade de Vida'
      // }
    },
    {
      id: 'static11',
      longitude: -3.98,
      latitude: -0.08,
      html: `<span class='description'>COLÉGIO VERA CRUZ</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'/>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'school',
      // tooltip: {
      //   content: '24min de bike | Qualidade de Vida'
      // }
    },
    {
      id: 'static12',
      longitude: -4.24,
      latitude: -0.11,
      html: `<span class='description'>ST. MARCHET</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'/>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'conv',
      // tooltip: {
      //   content: '24min de bike | Qualidade de Vida'
      // }
    },
    {
      id: 'marker43',
      longitude: -4.14,
      latitude: -0.13,
      html: `<span class='description'>AV. IMPERATRIZ LEOPOLDINA</span>
             <img src='https://photo-sphere-viewer.js.org/assets/pin-red.png' width='32'/>`,
      style: {
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
      },
      className: 'conv',
      // tooltip: {
      //   content: '24min de bike | Qualidade de Vida'
      // }
    }
  ]
});

$('button.item').click(function(e) {
  const nextImg = `./img/${$(e.target).data('andar')}.jpg`;
  viewer.setPanorama(nextImg);
  $(this).toggleClass('active').siblings().removeClass('active');
});
