<template>
    <div class="codeArea">
        <slot name="copy" :getText="getText"></slot>
        
        <pre v-highlightjs>
            <code class="javascript" ref="codeRef">&lt;template&gt;
    &lt;div class="ex counter col"&gt;
        &lt;button @click="increase" type="button" class="btnCounter"&gt;눌러보셈&lt;/button&gt;
        &lt;span class="myCount"&gt;내 카운트는 : &#123;&#123; count &#125;&#125; &lt;/span&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";

let count = ref(0);

const increase = () =&gt; {
    count.value++;
}
&lt;/script&gt;

&lt;style lang="scss" scoped&gt;
.ex {
    &.col {
        @include fdir(column);
        row-gap: 10px;
    }
}

.myCount {
    font-size: 16px;
    color: #fff;
}
&lt;/style&gt;
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