<template>
    <button type="button" class="btnSide" @click="handleSidebar(true)">
        <IconBase viewBox="0 0 24 24" width="28" height="28" stroke="#fff">
            <IconHamburger/>
        </IconBase>
    </button>
    <Teleport to="body">
        <aside class="sideBar" :class="{'isActive' : sidebarState}" @click.self="handleSidebar(false)">
            <div class="inner">
                <div class="head">
                    <button type="button" class="btnClose" @click="handleSidebar(false)">
                        <IconBase viewBox="0 0 24 24" width="28" height="28" fill="#000">
                            <IconClose/>
                        </IconBase>
                    </button>
                </div>
                <div class="body">
                    <nav class="menus">
                        <ul>
                            <li v-for="item in sidebarData" :key="item.id">
                                <a href="#">{{ item.name }}</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </aside>
    </Teleport>
    
</template>
  
<script setup>
import sidebarData from '@/data/sidebar';
import IconBase from '@/components/IconBase';
import IconClose from '@/components/icons/IconClose';
import IconHamburger from '@/components/icons/IconHamburger';
import useScrollHidden from '@/hooks/scrollHidden';
import { ref } from 'vue';

let sidebarState = ref(false);

const handleSidebar = (state) => {
    sidebarState.value = state;

    useScrollHidden(sidebarState.value);
}
</script>

<style lang="scss" scoped>
.sideBar{position: fixed; top: 50%; transform: translateY(-50%); left: -280px; height: 100vh;
transition: .3s ease-in-out; z-index: 120;
    .inner{width: 280px; height: inherit; border-top-right-radius: 6px; border-bottom-right-radius: 6px; 
    background-color: #fff;}
    .head{@include fai(center); justify-content: flex-end; height: 60px; border-bottom: 1px solid #ddd;
        .btnClose{padding-right: 20px;}
    }

    &.isActive{left: 0;
        &::after{opacity: 1; visibility: visible;}
    }

    &::after{opacity: 0; visibility: hidden; content: ''; position: fixed; top: 0; left: 0;
    width: 100vw; height: 100vh; backdrop-filter: blur(10px); z-index: -1; transition: .3s ease-in-out;}
}

.menus{padding: 10px 25px;
    ul{@include fdir(column); row-gap: 15px;
        li{
            >a{@include font(16px,'Noto Sans',#000);}
        }
    }
}
</style>

<style lang="scss">
.btnSide{
    path[d*="M4"]{
        stroke: currentColor;
    }
}
</style>