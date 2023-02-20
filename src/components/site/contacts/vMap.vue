<template>
  <div>
    <div id="map" class="mt-10" style="width: 100%; height: 640px"></div>
  </div>
</template>

<script>

DG.then(function () {
  var map = DG.map("map", {
    center: [41.311205, 69.2799],
    zoom: 17,
  });
  DG.control.location({ position: "bottomright" }).addTo(map);
  DG.control.traffic().addTo(map);
});
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
