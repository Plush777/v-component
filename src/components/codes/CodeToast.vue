<template>
    <div class="codeArea">
        <slot name="copy" :getText="getText"></slot>
        
        <pre v-highlightjs>
            <code class="html" ref="codeRef">&lt;template&gt;
    &lt;button @click="handleToast" type="button" class="btnCounter"&gt;눌러보셈&lt;/button&gt;

    &lt;Teleport to="body"&gt;
        &lt;div class="toast" :class="{'active' : isActive}"&gt;
            &lt;p&gt;이 팝업은 &#123;&#123; count &#125;&#125;초 뒤에 사라집니다!!!&lt;/p&gt;
        &lt;/div&gt;
    &lt;/Teleport&gt;

&lt;/template&gt;

&lt;script setup&gt;
    import {
        onMounted,
        ref
    } from "vue";

    let count = ref(5);
    let isActive = ref(false);

    const handleToast = () =&gt; {
        isActive.value = true;
        count.value = 5;
    }

    const minus = () =&gt; {
        count.value--;
    }

    onMounted(() =&gt; {
        setInterval(() =&gt; {
            if (isActive.value) {
                minus();
            } else if (!isActive.value) {
                return;
            }

            if (count.value === 0) {
                // clearInterval(timer); /* 실제로 사용할 때는 타이머가 끝나면 clearInterval로 제거해줘야 합니다. */
                isActive.value = false;
            }
        }, 1000);
    })
&lt;/script&gt;

&lt;style lang="scss" scoped&gt;
    .toast {
        opacity: 0;
        visibility: hidden;
        transition: .3s ease-in-out;
        position: fixed;
        top: 80px;
        left: 50%;
        transform: translateX(-50%);
        width: 230px;
        padding: 10px;
        border-radius: 6px;
        text-align: center;
        background-color: #444;

        p {
            @include font(16px, 'Noto Sans', #fff);
        }

        &.active {
            opacity: 1;
            visibility: visible;
        }
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