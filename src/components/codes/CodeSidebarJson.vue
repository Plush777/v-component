<template>
    <div class="codeArea">
        <slot name="name"></slot>
        <slot name="copy" :getText="getText"></slot>
        
        <pre v-highlightjs>
            <code class="json" ref="codeRef">{
    "menu1": {
        "id": 1,
        "name": "메뉴1"
    },
    "menu2": {
        "id": 2,
        "name": "메뉴2"
    },
    "menu3": {
        "id": 3,
        "name": "메뉴3"
    },
    "menu4": {
        "id": 4,
        "name": "메뉴4"
    },
    "menu5": {
        "id": 5,
        "name": "메뉴5"
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