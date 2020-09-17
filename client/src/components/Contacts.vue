<template>
  <v-row class="fill-height">
    <v-col cols="12">
      <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
        <v-toolbar-title>Как к нам добраться</v-toolbar-title>
      </v-toolbar>
      <v-col cols="12">
        <center>
          <GmapMap
            :center="{ lat: 45.044157, lng: 41.912415 }"
            :zoom="14"
            map-type-id="terrain"
            style="max-width: 800px; height: 500px"
          >
            <GmapMarker
              :key="index"
              v-for="(marker, index) in markers"
              :position="marker.position"
              :clickable="true"
              :draggable="true"
              @click="center = marker.position"
            />
          </GmapMap>
          <v-card class="mx-auto" max-width="800">
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title class="headline"
                  >Раздел данных 1</v-list-item-title
                >
                <v-list-item-subtitle>Раздел данных 2</v-list-item-subtitle>
                <v-list-item-subtitle>Раздел данных 3</v-list-item-subtitle>
                <v-list-item-subtitle>Раздел данных 4</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </center>
      </v-col>
    </v-col>
  </v-row>
</template>
<script>
export default {
  metaInfo: {
    title: "Контактная информация | СДО PRO",
  },
  data: () => ({
    markers: [
      {
        id: Date.now(),
        position: { lat: 45.044157, lng: 41.912415 },
      },
    ],
    places: [],
    currentPlace: null,
  }),
};
</script>
<style scoped>
.maps-center {
  display: flex;
  justify-content: center;
}
</style>
