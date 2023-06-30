<template>
  <Header/>
  <article id="container">
    <Item :datas="datas"/>
  </article>
</template>

<script setup>
import Header from '@/components/Header';
import Item from '@/components/Item.vue';
import { ref } from 'vue';
import contentsData from '@/data/contents';

const datas = ref(contentsData)
</script>

<style lang="scss">
  #app{}
</style>