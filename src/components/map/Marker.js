export default function renderMarker(map, maps, lat, lng, country) {
  let marker = new maps.Marker({
    position: {
      lat,
      lng,
    },
    map,
    title: country,
  });
}
