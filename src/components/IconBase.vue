<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" :viewBox="viewBox" :fill="fill" :stroke="stroke">
        <slot />
    </svg>
</template>
  
<script setup>
defineProps({
    viewBox: { 
        type: String, 
        default: "0 0 24 24" 
    },

    iconName: { 
        type: String, 
        default: "" 
    },

    width: { 
        type: [Number, String], 
        default: 18 
    },

    height: { 
        type: [Number, String], 
        default: 18 
    },

    fill: { 
        type: String, 
        default: "" 
    },

    stroke: { 
        type : String, 
        default: ""
    }
})
</script>