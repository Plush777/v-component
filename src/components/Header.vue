<template>
    <header id="header">
        <h1>
            <img src="../assets/logo.png" alt=""/>
        </h1>
    </header>
</template>

<style lang="scss" scoped>
#header{@include flexRow(center,center); position: fixed; width: 100vw; height: 55px; z-index: 100; background-color: #1E1E1E;
    img{width: 24px; height: 24px;}
}
</style>