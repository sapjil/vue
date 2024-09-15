<template>
  <nav>
    <router-link to="/">Dashboard</router-link> |
    <router-link to="/object">DropDown</router-link> |
    <router-link to="/modal">Modal</router-link> |
    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <div class="box">
    <router-view />
  </div>
</template>

<script setup></script>

<style>
.box {
  margin: 1rem 0;
}
</style>
