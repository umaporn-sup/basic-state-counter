<script setup>
import { storeToRefs } from 'pinia'
import { useCounter } from '../stores/counter.js'

const myCounter = useCounter()
const { doubleCounter } = storeToRefs(myCounter)
console.log(doubleCounter.value)

const doubleCount = storeToRefs(myCounter).doubleCounter
console.log(doubleCount.value)
</script>

<template>
  <div>
    <h1>Home Page</h1>
    <p>Counter (Home.vue): {{ myCounter.count }}</p>
    <button @click="myCounter.addCounter">+1</button>
  </div>
</template>

<style></style>
