<template>
  <div>
    <div>detail</div>
    <p>title: {{ title }}</p>
    <p>content: {{ content }}</p>
    <p>{{ id }}</p>
  </div>
</template>

<script>
export default {
  name: "BookDetail",
  data() {
    return {};
  },
  props: {
    id: String,
    title: String,
    content: String,
  },
};
</script>
