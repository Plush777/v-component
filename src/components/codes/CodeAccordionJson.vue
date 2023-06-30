<template>
    <div class="codeArea">
        <slot name="name"></slot>
        <slot name="copy" :getText="getText"></slot>
        
        <pre v-highlightjs>
            <code class="html" ref="codeRef">{
    "acc1": {
        "id": 1,
        "name": "아코디언 제목",
        "content": "아코디언 내용"
    },
    "acc2": {
        "id": 1,
        "name": "아코디언 제목",
        "content": "아코디언 내용"
    },
    "acc3": {
        "id": 1,
        "name": "아코디언 제목",
        "content": "아코디언 내용"
    }
}
            </code>
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