<template>
    <div class="codeArea">
        <slot name="copy" :getText="getText"></slot>
        <pre v-highlightjs>
            <code class="javascript" ref="codeRef">&lt;template&gt;
    &lt;div class="accordionWrap"&gt;
        &lt;ul class="accordionList"&gt;
            &lt;li class="accordionItem" v-for="(item,index) in accordionData" :key="item.id"&gt;
                &lt;button type="button" class="accordionTrigger" @click="handleAccordion(index)"&gt;&#123;&#123; item.name &#125;&#125;&lt;/button&gt;

                &lt;Transition name="accordion" @enter="start" @after-enter="end" @before-leave="start" @after-leave="end"&gt;
                    &lt;div class="accordionContent" v-show="activeIndex === index"&gt;
                        &lt;span&gt; &#123;&#123; item.content &#125;&#125; &lt;/span&gt;
                    &lt;/div&gt;
                &lt;/Transition&gt;
            &lt;/li&gt;
        &lt;/ul&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from "vue";
import accordionData from '@/data/accordion';

let activeIndex = ref(null);

const handleAccordion = (index) =&gt; {
    activeIndex.value = activeIndex.value === index ? null : index;
}

const start = (el) =&gt; {
    el.style.height = el.scrollHeight + 'px';
}

const end = (el) =&gt; {
    el.style.height = '';
}
&lt;/script&gt;

&lt;style lang="scss" scoped&gt;
    .accordion {
        &Item {
            &:last-of-type {
                border-bottom: 0;
            }
        }

        &Content {
            span {
                @include font(16px, 'Noto Sans', #fff);
            }
        }

        &Trigger {
            @include fai(center);
            width: 100%;
            height: 60px;
            padding: 0 10px;
            @include font(18px, 'Noto Sans', #fff);
            font-weight: 600;
            border-bottom: 1px solid #ddd;
        }

        &- {

            &enter-from,
            &leave-to {
                opacity: 0;
                height: 0 !important;
            }

            &enter-to,
            &leave-from {
                opacity: 1;
            }

            &enter-active,
            &leave-active {
                overflow: hidden;
                will-change: height, opacity;
                transition: height .3s ease-in-out, opacity .3s ease-in-out
            }
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