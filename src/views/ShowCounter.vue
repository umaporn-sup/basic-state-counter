<script setup>
import { useCounter } from '../stores/counter.js'
const myCounter = useCounter()
</script>

<template>
  <div>
    <h1>Show Counter Page</h1>
    <p>Counter (ShowCounter.vue): {{ myCounter.count }}</p>
    <p>Double Counter (ShowCounter.vue): {{ myCounter.doubleCounter }}</p>
  </div>
</template>

<style></style>
