<template>
    <div class="codeArea">
        <slot name="name"></slot>
        <slot name="copy" :getText="getText"></slot>
        <pre v-highlightjs>
            <code class="javascript" ref="codeRef">&lt;template&gt;
    &lt;div class="ex"&gt;

        &lt;BaseButton @click="handleModal(true)" className="open"&gt;눌러보셈&lt;/BaseButton&gt;

        &lt;Teleport to="body"&gt;
            &lt;div class="modal" v-if="isOpen" @click.self="handleModal(false)"&gt;
                &lt;div class="inner"&gt;
                    &lt;div class="head"&gt;
                        &lt;strong class="headText"&gt;제목&lt;/strong&gt;
                        &lt;button type="button" @click="handleModal(false)"&gt;
                            &lt;IconBase viewBox="0 0 24 24" width="28" height="28" fill="#000"&gt;
                                &lt;IconClose /&gt;
                            &lt;/IconBase&gt;
                        &lt;/button&gt;
                    &lt;/div&gt;

                    &lt;div class="cont"&gt;
                        내용
                    &lt;/div&gt;

                    &lt;div class="btnArea"&gt;
                        &lt;BaseButton className="denial"&gt;취소&lt;/BaseButton&gt;
                        &lt;BaseButton className="positive"&gt;확인&lt;/BaseButton&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/Teleport&gt;

    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
    import IconBase from '@/components/IconBase';
    import IconClose from '@/components/icons/IconClose';
    import BaseButton from '@/components/BaseButton';
    import { ref } from 'vue';

    let isOpen = ref(false);

    const handleModal = (state) =&gt; {
        isOpen.value = state;

        if (isOpen.value == true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }
&lt;/script&gt;

&lt;style lang="scss" scoped&gt;
    .modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 500px;
        z-index: 10;

        .inner {
            padding: 20px;
            border-radius: 4px;
            background-color: #fff;
        }

        .head {
            @include fai(center);
            justify-content: space-between;
            border-bottom: 0;
            padding-bottom: 0;

            &Text {
                @include font(22px, 'Noto Sans', #000);
                font-weight: 600;
            }

            +.cont {
                margin-top: 10px;
            }
        }

        .cont {
            @include font(16px, 'Noto Sans', #333);
        }

        .btnArea {
            @include fai(center);
            column-gap: 5px;
            margin-top: 40px;
        }

        &::after {
            content: '';
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100vw;
            height: 100vh;
            backdrop-filter: blur(10px);
            z-index: -1;
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