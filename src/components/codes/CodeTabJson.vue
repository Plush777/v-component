<template>
    <div class="codeArea">
        <slot name="name"></slot>
        <slot name="copy" :getText="getText"></slot>
        
        <pre v-highlightjs>
            <code class="json" ref="codeRef">{
    "tab1": {
        "id": 1,
        "name": "탭1"
    },
    "tab2": {
        "id": 2,
        "name": "탭2"
    },
    "tab3": {
        "id": 3,
        "name": "탭3"
    },
    "tab4": {
        "id": 4,
        "name": "탭4"
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