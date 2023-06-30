<template>
    <button type="button" class="btn" :class="className">
        <slot></slot>
    </button>
</template>
  
<script setup>
defineProps({
    className : String
})
</script>