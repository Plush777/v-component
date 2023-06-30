<template>
    <div class="ex counter col">
        <button @click="increase" type="button" class="btnCounter">눌러보셈</button>
        <span class="myCount">내 카운트는 : {{ count }}</span>
    </div>
</template>
  
<script setup>
import { ref } from "vue";


let count = ref(0);

const increase = () => {
    count.value++;
}

</script>

<style lang="scss" scoped>
.ex{
    &.col{@include fdir(column); row-gap: 10px;}
}
.myCount{font-size: 16px; color: #fff;}
</style>