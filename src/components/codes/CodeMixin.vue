<template>
    <div class="codeArea">
        <slot name="name"></slot>
        <slot name="copy" :getText="getText"></slot>
        
        <pre v-highlightjs>
            <code class="scss" ref="codeRef">/* font */
@mixin font($size, $family, $color) {
    font-size: $size; font-family: $family; color: $color;
}

/* flex align */
@mixin fai($align) {
    display: flex; align-items: $align;
}

/* flex justify-content */
@mixin fjc($justify) {
    display: flex; justify-content: $justify;
}

/* flex direction*/
@mixin fdir($direction) {
    display: flex; flex-direction: $direction;
}
  
/* flex row */
@mixin flexRow($justify, $align) {
    display: flex; justify-content: $justify; align-items: $align;
}</code>
        </pre>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits([
  'getText'
]);

const codeRef = ref(null);

const getText = () => {
  const text = codeRef.value.textContent;
  emit('getText', text);
};
</script>