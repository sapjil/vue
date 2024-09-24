<template>
  <div>
    <div>detail</div>
    <div class="detail-wrap">
      <p>title: {{ title || "no title" }}</p>
      <p>content: {{ content || "no content" }}</p>
      <p>{{ id }}</p>
    </div>
    <router-link to="/book">back</router-link>
  </div>
</template>

<script setup>
const props = defineProps({
  id: String,
  title: String,
  content: String,
});
console.log(props);
</script>

<style lang="scss">
.detail-wrap {
  padding: 1rem;
  border: 1px solid salmon;
}
</style>
