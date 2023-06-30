<template>
    <section class="itemBox" v-for="(item,index) in datas" :key="index">
        <div class="head">
            <h2 class="title">{{ item.name }}</h2>
        </div>
        <div class="cont">
            <div class="resultArea" :class="{'none': item.id === 0}">
                <Counter v-if="item.id === 1"/>
                <Toggle v-else-if="item.id === 2"/>
                <Tab v-else-if="item.id === 3"/>
                <Modal v-else-if="item.id === 4"/>
                <Accordion v-else-if="item.id === 5"/>
                <Sidebar v-else-if="item.id === 6"/>
                <Toast v-else-if="item.id === 7"/>
            </div>

            <details class="details">
                <summary class="name">코드 보기</summary>

                <!-- 0 -->
                <CodeMixin @getText="getText" v-if="item.id === 0">
                    <template v-slot:name>
                        <span>mixins.scss</span>
                    </template>
                    <template v-slot:copy="{ getText }">
                        <button type="button" class="btnCopy" @click="getText" v-clipboard:copy="myText"
                        v-clipboard:success="onCopy" v-clipboard:error="onError">복사</button>
                    </template>
                </CodeMixin>
                <!-- //0 -->

                <!-- 1 -->
                <CodeCounter @getText="getText" v-else-if="item.id === 1">
                    <template v-slot:copy="{ getText }">
                        <button type="button" class="btnCopy" @click="getText" v-clipboard:copy="myText"
                        v-clipboard:success="onCopy" v-clipboard:error="onError">복사</button>
                    </template>
                </CodeCounter>
                <!-- //1 -->

                <!-- 2 -->
                <CodeToggle @getText="getText" v-else-if="item.id === 2">
                    <template v-slot:copy="{ getText }">
                        <button type="button" class="btnCopy" @click="getText" v-clipboard:copy="myText"
                        v-clipboard:success="onCopy" v-clipboard:error="onError">복사</button>
                    </template>
                </CodeToggle>

                <!-- //2 -->

                <!-- 3 -->
                <CodeTab @getText="getText" v-else-if="item.id === 3">
                    <template v-slot:copy="{ getText }">
                        <button type="button" class="btnCopy" @click="getText" v-clipboard:copy="myText"
                        v-clipboard:success="onCopy" v-clipboard:error="onError">복사</button>
                    </template>
                </CodeTab>

                <CodeTabJson @getText="getText" v-if="item.id === 3">
                    <template v-slot:name>
                        <span>tab.json</span>
                    </template>
                    <template v-slot:copy="{ getText }">
                        <button type="button" class="btnCopy" @click="getText" v-clipboard:copy="myText"
                        v-clipboard:success="onCopy" v-clipboard:error="onError">복사</button>
                    </template>
                </CodeTabJson>

                <!-- //3 -->
                
                <!-- 4 -->
                <CodeModal @getText="getText" v-else-if="item.id === 4">
                    <template v-slot:name>
                        <span>Modal.vue</span>
                    </template>
                    <template v-slot:copy="{ getText }">
                        <button type="button" class="btnCopy" @click="getText" v-clipboard:copy="myText"
                        v-clipboard:success="onCopy" v-clipboard:error="onError">복사</button>
                    </template>
                </CodeModal>

                <CodeBaseButton @getText="getText" v-if="item.id === 4">
                    <template v-slot:name>
                        <span>BaseButton.vue</span>
                    </template>
                    <template v-slot:copy="{ getText }">
                        <button type="button" class="btnCopy" @click="getText" v-clipboard:copy="myText"
                        v-clipboard:success="onCopy" v-clipboard:error="onError">복사</button>
                    </template>
                </CodeBaseButton>
                <!-- //4 -->

                <!-- 5 -->
                <CodeAccordion @getText="getText" v-else-if="item.id === 5">
                    <template v-slot:copy="{ getText }">
                        <button type="button" class="btnCopy" @click="getText" v-clipboard:copy="myText"
                        v-clipboard:success="onCopy" v-clipboard:error="onError">복사</button>
                    </template>
                </CodeAccordion>

                <CodeAccordionJson @getText="getText" v-if="item.id === 5">
                    <template v-slot:name>
                        <span>accordion.json</span>
                    </template>
                    <template v-slot:copy="{ getText }">
                        <button type="button" class="btnCopy" @click="getText" v-clipboard:copy="myText"
                        v-clipboard:success="onCopy" v-clipboard:error="onError">복사</button>
                    </template>
                </CodeAccordionJson>
                <!-- //5 -->

                <!-- 6 -->
                <CodeSidebar @getText="getText" v-else-if="item.id === 6">
                    <template v-slot:copy="{ getText }">
                        <button type="button" class="btnCopy" @click="getText" v-clipboard:copy="myText"
                        v-clipboard:success="onCopy" v-clipboard:error="onError">복사</button>
                    </template>
                </CodeSidebar>

                <CodeScrollHiddenHook @getText="getText" v-if="item.id === 6">
                    <template v-slot:name>
                        <span>scrollHidden.js</span>
                    </template>
                    <template v-slot:copy="{ getText }">
                        <button type="button" class="btnCopy" @click="getText" v-clipboard:copy="myText"
                        v-clipboard:success="onCopy" v-clipboard:error="onError">복사</button>
                    </template>
                </CodeScrollHiddenHook>

                <CodeSidebarJson @getText="getText" v-if="item.id === 6">
                    <template v-slot:name>
                        <span>sidebar.json</span>
                    </template>
                    <template v-slot:copy="{ getText }">
                        <button type="button" class="btnCopy" @click="getText" v-clipboard:copy="myText"
                        v-clipboard:success="onCopy" v-clipboard:error="onError">복사</button>
                    </template>
                </CodeSidebarJson>
                <!-- //6 -->

                <!-- 7 -->
                <CodeToast @getText="getText" v-else-if="item.id === 7">
                    <template v-slot:copy="{ getText }">
                        <button type="button" class="btnCopy" @click="getText" v-clipboard:copy="myText"
                        v-clipboard:success="onCopy" v-clipboard:error="onError">복사</button>
                    </template>
                </CodeToast>
                <!-- //7 -->
            </details>
        </div>
    </section>
</template>
  
<script setup>
import Counter from '@/components/result/Counter';
import Toggle from '@/components/result/Toggle';
import Tab from '@/components/result/Tab';
import Modal from '@/components/result/Modal';
import Accordion from '@/components/result/Accordion';
import Sidebar from '@/components/result/Sidebar';
import Toast from '@/components/result/Toast';

import CodeCounter from '@/components/codes/CodeCounter';
import CodeToggle from '@/components/codes/CodeToggle';
import CodeTab from '@/components/codes/CodeTab';
import CodeModal from '@/components/codes/CodeModal';
import CodeAccordion from '@/components/codes/CodeAccordion';
import CodeSidebar from '@/components/codes/CodeSidebar';
import CodeToast from '@/components/codes/CodeToast';
import CodeScrollHiddenHook from '@/components/codes/CodeScrollHiddenHook';
import CodeBaseButton from '@/components/codes/CodeBaseButton';
import CodeMixin from '@/components/codes/CodeMixin';

import CodeAccordionJson from '@/components/codes/CodeAccordionJson';
import CodeSidebarJson from '@/components/codes/CodeSidebarJson';
import CodeTabJson from '@/components/codes/CodeTabJson';
import { ref } from 'vue';

defineProps({
    datas: Object
})

const myText = ref([]);

const getText = (text) => {
    myText.value.push(text);
    console.log(myText.value)
};

const onCopy = () => {
    alert('You just copied!');
}

const onError = () => {
    alert('Failed to copy texts');
}
</script>

<style lang="scss" scoped>
.itemBox{
    .head{border-bottom: 1px solid #ddd; padding-bottom: 10px;}
    .title{@include font(28px,'Noto Sans',#ececec);}
    
    .resultArea{position: relative; width: 100%; margin-top: 20px; padding: 20px; border-radius: 10px; background-color: #333;
        &.none{display: none;}
    }

    &+&{margin-top: 60px;}

    &:first-of-type{padding-bottom: 30px; border-bottom: 1px solid #444;
        +.itemBox{margin-top: 120px;}
    }
}

.details{display: inline-block; width: 100%; margin-top: 30px;
    .name{color: #fff; cursor: pointer;}
}

.codeArea{padding-top: 20px;
    >span{display: inline-block; width: calc(100% - 30px);  
    font-size: 16px; color: #fff;}
}
</style>