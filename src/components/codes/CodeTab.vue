<template>
    <div class="codeArea">
        <slot name="copy" :getText="getText"></slot>

        <pre v-highlightjs>
            <code class="javascript" ref="codeRef">&lt;template&gt;
    &lt;div class="ex tab col"&gt;
        &lt;div class="tabWrap"&gt;
            &lt;ul class="tabList"&gt;
                &lt;li :class="{active: current === index}" @click="addIndex(index)" class="tabItem" v-for="(item,index) in tabs" :key="item.id"&gt;
                    &lt;button type="button"&gt; &#123;&#123; item.name &#125;&#125; &lt;/button&gt;
                &lt;/li&gt;
            &lt;/ul&gt;

            &lt;div class="tabCont active" v-if="current === 'tab1'"&gt;
                &lt;span&gt;1번&lt;/span&gt;
            &lt;/div&gt;
            &lt;div class="tabCont" v-else-if="current === 'tab2'"&gt;
                &lt;span&gt;2번&lt;/span&gt;
            &lt;/div&gt;
            &lt;div class="tabCont" v-else-if="current === 'tab3'"&gt;
                &lt;span&gt;3번&lt;/span&gt;
            &lt;/div&gt;
            &lt;div class="tabCont" v-else-if="current === 'tab4'"&gt;
                &lt;span&gt;4번&lt;/span&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
    import tabData from '@/data/tab';
    import { ref } from 'vue';

    const tabs = ref(tabData);
    const current = ref('tab1');

    const addIndex = (index) =&gt; {
        current.value = index;
    }
&lt;/script&gt;

&lt;style lang="scss" scoped&gt;
    .tabList {
        @include fai(center);
        column-gap: 10px;

        .tabItem {
            height: 50px;
            @include flexRow(center, center);
            flex: 1;
            border-radius: 6px;
            background-color: #fff;
            cursor: pointer;

            button {
                color: currentColor;
            }

            &.active {
                color: #fff;
                background-color: blue;
            }
        }
    }

    .tabCont {
        &gt;span {
            color: #fff;
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