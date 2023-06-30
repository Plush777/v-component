<template>
    <div class="codeArea">
        <slot name="name"></slot>
        <slot name="copy" :getText="getText"></slot>
        <pre v-highlightjs>
            <code class="javascript" ref="codeRef">&lt;template&gt;
    &lt;button type="button" class="btn" :class="className"&gt;
        &lt;slot&gt;&lt;/slot&gt;
    &lt;/button&gt;
&lt;/template&gt;

&lt;script setup&gt;
    defineProps({
        className: String
    })
&lt;/script&gt;
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