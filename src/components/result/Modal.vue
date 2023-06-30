<template>
    <div class="ex">

        <BaseButton @click="handleModal(true)" className="open">눌러보셈</BaseButton>

        <Teleport to="body">
            <div class="modal" v-if="isOpen" @click.self="handleModal(false)">
                <div class="inner">
                    <div class="head">
                        <strong class="headText">제목</strong>
                        <button type="button" @click="handleModal(false)">
                            <IconBase viewBox="0 0 24 24" width="28" height="28" fill="#000">
                                <IconClose/>
                            </IconBase>
                        </button>
                    </div>

                    <div class="cont">
                        내용
                    </div>

                    <div class="btnArea">
                        <BaseButton className="denial">취소</BaseButton>
                        <BaseButton className="positive">확인</BaseButton>
                    </div>
                </div>
            </div>
        </Teleport>
        
    </div>
</template>

<script setup>
import IconBase from '@/components/IconBase';
import IconClose from '@/components/icons/IconClose';
import BaseButton from '@/components/BaseButton';
import useScrollHidden from '@/hooks/scrollHidden';
import { ref } from 'vue';

let isOpen = ref(false);

const handleModal = (state) => {
    isOpen.value = state;

    useScrollHidden(isOpen.value);
}
</script>

<style lang="scss" scoped>
.modal{position: fixed; top: 50%; left: 50%; transform: translate(-50%,-50%); 
width: 500px; z-index: 10;
    .inner{padding: 20px; border-radius: 4px; background-color: #fff;}
    .head{@include fai(center); justify-content: space-between; border-bottom: 0; padding-bottom: 0;
        &Text{@include font(22px,'Noto Sans',#000); font-weight: 600;}

        +.cont{margin-top: 10px;}
    }

    .cont{@include font(16px,'Noto Sans',#333);}

    .btnArea{@include fai(center); column-gap: 5px; margin-top: 40px;}

    &::after{content: ''; position: fixed; top: 50%; left: 50%; transform: translate(-50%,-50%); 
    width: 100vw; height: 100vh; backdrop-filter: blur(10px); z-index: -1;}
}

@media (max-width: 768px){
    .modal{width: 100%; max-width: calc(100vw - 40px);
        &::after{transform: translateY(-50%); left: 280px;}
    }
}
</style>