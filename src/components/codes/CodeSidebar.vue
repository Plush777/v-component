<template>
    <div class="codeArea">
        <slot name="copy" :getText="getText"></slot>
        
        <pre v-highlightjs>
            <code class="html" ref="codeRef">&lt;template&gt;
    &lt;button type="button" class="btnSide" @click="handleSidebar(true)"&gt;
        &lt;IconBase viewBox="0 0 24 24" width="28" height="28" stroke="#fff"&gt;
            &lt;IconHamburger /&gt;
        &lt;/IconBase&gt;
    &lt;/button&gt;
    &lt;Teleport to="body"&gt;
        &lt;aside class="sideBar" :class="&#123;'isActive' : sidebarState&#125;" @click.self="handleSidebar(false)"&gt;
            &lt;div class="inner"&gt;
                &lt;div class="head"&gt;
                    &lt;button type="button" class="btnClose" @click="handleSidebar(false)"&gt;
                        &lt;IconBase viewBox="0 0 24 24" width="28" height="28" fill="#000"&gt;
                            &lt;IconClose /&gt;
                        &lt;/IconBase&gt;
                    &lt;/button&gt;
                &lt;/div&gt;
                &lt;div class="body"&gt;
                    &lt;nav class="menus"&gt;
                        &lt;ul&gt;
                            &lt;li v-for="item in sidebarData" :key="item.id"&gt;
                                &lt;a href="#"&gt;&#123;&#123; item.name &#125;&#125;&lt;/a&gt;
                            &lt;/li&gt;
                        &lt;/ul&gt;
                    &lt;/nav&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/aside&gt;
    &lt;/Teleport&gt;

&lt;/template&gt;

&lt;script setup&gt;
    import sidebarData from '@/data/sidebar';
    import IconBase from '@/components/IconBase';
    import IconClose from '@/components/icons/IconClose';
    import IconHamburger from '@/components/icons/IconHamburger';
    import useScrollHidden from '@/hooks/scrollHidden';
    import {
        ref
    } from 'vue';

    let sidebarState = ref(false);

    const handleSidebar = (state) =&gt; {
        sidebarState.value = state;

        useScrollHidden(sidebarState.value);
    }
&lt;/script&gt;

&lt;style lang="scss" scoped&gt;
    .sideBar {
        position: fixed;
        top: 50%;
        transform: translateY(-50%);
        left: -280px;
        height: 100vh;
        transition: .3s ease-in-out;
        z-index: 120;

        .inner {
            width: 280px;
            height: inherit;
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
            background-color: #fff;
        }

        .head {
            @include fai(center);
            justify-content: flex-end;
            height: 60px;
            border-bottom: 1px solid #ddd;

            .btnClose {
                padding-right: 20px;
            }
        }

        &.isActive {
            left: 0;

            &::after {
                opacity: 1;
                visibility: visible;
            }
        }

        &::after {
            opacity: 0;
            visibility: hidden;
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            backdrop-filter: blur(10px);
            z-index: -1;
            transition: .3s ease-in-out;
        }
    }

    .menus {
        padding: 10px 25px;

        ul {
            @include fdir(column);
            row-gap: 15px;

            li {
                &gt;a {
                    @include font(16px, 'Noto Sans', #000);
                }
            }
        }
    }
&lt;/style&gt;

&lt;style lang="scss"&gt;
    .btnSide {
        path[d*="M4"] {
            stroke: currentColor;
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