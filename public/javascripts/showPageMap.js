mapboxgl.accessToken = 'pk.eyJ1Ijoic2t5cml0enoiLCJhIjoiY2t1MnpuYnQyMm1lMjJvcDh1bDc5emg4ciJ9.kCdh6BGnDyco16iONwImDg';
  const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/mapbox/light-v10', // style URL
  center: campground.geometry.coordinates, // starting position [lng, lat]
  zoom: 10 // starting zoom
  });
  //to not hardcore this token we have other way around in video 542
  map.addControl(new mapboxgl.NavigationControl());

  new mapboxgl.Marker()
    .setLngLat(campground.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 })
          .setHTML(
              `<h3>${campground.title}</h3><p>${campground.location}</p>`
          )
  )
    .addTo(map)