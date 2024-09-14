<template>
  <div class="px-4 gap-4 grid mb-4">
    <div class="flex gap-4 row custom full-width">
      <div class="grid-custom">
        <div class="grid-custom-one">
          <div style="background: #999" v-for="(item, i) in 4" :key="i">
            {{ item }}
          </div>
        </div>
        <div class="grid-custom-two" style="background: #999">ff</div>
        <div class="grid-custom-three">pp</div>
      </div>
    </div>
    <div class="flex gap-4 row custom full-width">
      <div class="full">xx</div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.grid-custom {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row: minmax(100px, auto);
  &-one {
    grid-column: 1 / 4;
  }
}
.custom > * {
  background: rgba(0, 0, 0, 0.3);
}
.flex {
  display: flex;
}
.grid {
  display: grid;
}
.row {
  flex-direction: row;
}
.col {
  flex-direction: column;
}

.full,
.full-width {
  width: 100%;
}

.media {
  background: yellow;
  // @include reponsive("sm") {
  //   background: green;
  // }
  // @include reponsive("md") {
  //   background: blue;
  // }
  // @include reponsive("lg") {
  //   background: black;
  // }
}
</style>
