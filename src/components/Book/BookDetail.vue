<template>
  <div>
    <div>detail</div>
    <div class="detail-wrap">
      <p>title: {{ title }}</p>
      <p>content: {{ content }}</p>
      <p>{{ id }}</p>
    </div>
    <router-link to="/book">back</router-link>
  </div>
</template>

<script>
export default {
  name: "BookDetail",
  data() {
    return {};
  },
  props: {
    id: Number,
    title: String,
    content: String,
  },
};
</script>

<style lang="scss">
.detail-wrap {
  padding: 1rem;
  border: 1px solid salmon;
}
</style>
