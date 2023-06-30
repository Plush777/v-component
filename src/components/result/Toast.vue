<template>
    <button @click="handleToast" type="button" class="btnCounter">눌러보셈</button>

    <Teleport to="body">
        <div class="toast" :class="{'active' : isActive}">
            <p>이 팝업은 {{ count }}초 뒤에 사라집니다!!!</p>
        </div>
    </Teleport>
   
</template>

<script setup>
import { onMounted, ref } from "vue";

let count = ref(5);
let isActive = ref(false);

const handleToast = () => {
    isActive.value = true;
    count.value = 5;
}

const minus = () => {
    count.value--;
}

onMounted(() => {
    setInterval(() => {
        if(isActive.value){
            minus();
        } else if(!isActive.value) {
           return;
        }

        if(count.value === 0){
            // clearInterval(timer); /* 실제로 사용할 때는 타이머가 끝나면 clearInterval로 제거해줘야 합니다. */
            isActive.value = false;
        } 
    }, 1000);
})
</script>

<style lang="scss" scoped>
    .toast{opacity: 0; visibility: hidden; transition: .3s ease-in-out; position: fixed; top: 80px; left: 50%; 
    transform: translateX(-50%); width: 230px; padding: 10px; border-radius: 6px; text-align: center; background-color: #444;
    transition-property: opacity,visibility;
        p{@include font(16px,'Noto Sans',#fff);}

        &.active{opacity: 1; visibility: visible;}
    }

    @media (max-width: 500px){
        .toast{width: 100%; max-width: calc(100vw - 40px);}
    }
</style>