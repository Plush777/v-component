<template>
    <div class="accordionWrap">
        <ul class="accordionList">
            <li class="accordionItem" v-for="(item,index) in accordionData" :key="item.id">
                <button type="button" class="accordionTrigger" @click="handleAccordion(index)">{{ item.name }}</button>

                <Transition 
                    name="accordion"
                    @enter="start"
                    @after-enter="end"
                    @before-leave="start"
                    @after-leave="end"    
                >
                    <div class="accordionContent" v-show="activeIndex === index">
                        <span>{{ item.content }}</span>
                    </div>
                </Transition>
            </li>
        </ul>
    </div>
</template>
  
<script setup>
import { ref } from "vue";
import accordionData from '@/data/accordion';

let activeIndex = ref(null);

const handleAccordion = (index) => {
    activeIndex.value = activeIndex.value === index ? null : index;
}

const start = (el) => {
    el.style.height = el.scrollHeight + 'px';
}

const end = (el) => {
    el.style.height = '';
}

</script>

<style lang="scss" scoped>
    .accordion{
        &Item{
            &:last-of-type{border-bottom: 0;}
        }

        &Content{
            span{@include font(16px,'Noto Sans',#fff);}
        }

        &Trigger{@include fai(center); width: 100%; height: 60px; padding: 0 10px; @include font(18px,'Noto Sans',#fff); 
        font-weight: 600; border-bottom: 1px solid #ddd;}

        &-{
            &enter-from,&leave-to{opacity: 0; height: 0 !important;}
            &enter-to,&leave-from{opacity: 1;}
            &enter-active,&leave-active{overflow: hidden; will-change: height, opacity; 
            transition: height .3s ease-in-out, opacity .3s ease-in-out}
        }
    }
</style>