<script setup>
import About from "./About.vue";
import Title from "./Title.vue";
import Caracters from "./Caracters.vue";
</script>


<template>
    <div class="container">
        <About />
        <Title />
        <Caracters />
    </div>
</template>

<style scoped>
    .container{
        padding: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-content: center;
    }
</style>