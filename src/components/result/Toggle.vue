<template>
    <div class="ex toggle">
        <button @click="handleToggle" type="button" class="btnCounter" :class="{active : toggle}">눌러보셈</button>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';

let toggle = ref(false);

const handleToggle = () => {
    toggle.value = !toggle.value
}

</script>