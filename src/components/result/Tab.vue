<template>
    <div class="ex tab col">
        <div class="tabWrap">
            <ul class="tabList">
                <li :class="{active: current === index}" @click="addIndex(index)" class="tabItem" v-for="(item,index) in tabs" :key="item.id">
                    <button type="button">{{ item.name }}</button>
                </li>
            </ul>

            <div class="tabCont active" v-if="current === 'tab1'">
                <span>1번</span>
            </div>
            <div class="tabCont" v-else-if="current === 'tab2'">
                <span>2번</span>
            </div>
            <div class="tabCont" v-else-if="current === 'tab3'">
                <span>3번</span>
            </div>
            <div class="tabCont" v-else-if="current === 'tab4'">
                <span>4번</span>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import tabData from '@/data/tab';
import { ref } from 'vue';

const tabs = ref(tabData);
const current = ref('tab1');

const addIndex = (index) => {
    current.value = index;
}

</script>

<style lang="scss" scoped>
.tabList{@include fai(center); column-gap: 10px; 
    .tabItem{height: 50px; @include flexRow(center,center); flex: 1; 
    border-radius: 6px; background-color: #fff; cursor: pointer;
        button{color: currentColor;}

        &.active{color: #fff; background-color: blue;}
    }
}

.tabCont{
    >span{color: #fff;}
}

@media (max-width: 500px){
    .tabList{flex-wrap: wrap; row-gap: 10px;
        .tabItem{flex: none; width: 100%;}
    }
}
</style>