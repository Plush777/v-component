<template>
    <div class="codeArea">
        <slot name="copy" :getText="getText"></slot>

        <pre v-highlightjs>
            <code class="javascript" ref="codeRef">&lt;template&gt;
    &lt;div class="ex toggle"&gt;
        &lt;button @click="handleToggle" type="button" class="btnCounter" :class="{active : toggle}"&gt;눌러보셈&lt;/button&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

let toggle = ref(false);

const handleToggle = () =&gt; {
    toggle.value = !toggle.value
}
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