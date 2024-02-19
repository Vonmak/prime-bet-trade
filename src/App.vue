<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/admin">Home</RouterLink>
  </nav>

  <RouterView />
</template>