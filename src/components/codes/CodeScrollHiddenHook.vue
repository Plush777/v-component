<template>
    <div class="codeArea">
        <slot name="name"></slot>
        <slot name="copy" :getText="getText"></slot>
        
        <pre v-highlightjs>
            <code class="javascript" ref="codeRef">export default function useScrollHidden(boolState) {
    if (boolState == true) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
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