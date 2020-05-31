export default function renderMarker(map, maps, lat, lng, country, callback) {
  let marker = new maps.Marker({
    position: {
      lat,
      lng,
    },
    map,
    title: country,
  });
  //marker.addListener("click", () => callback(country));
  marker.addListener("click", () => callback(country));
}
