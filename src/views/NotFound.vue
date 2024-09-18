<template>
  <h1>Not Found</h1>
  <p>
    Sorry, the page <code>{{ $route.params.notFound }}</code> you're looking for
    is not found
  </p>

  <router-link :to="{ name: 'home' }" class="">Back to your home</router-link>
</template>

<script setup></script>

<style lang="scss" scoped></style>
