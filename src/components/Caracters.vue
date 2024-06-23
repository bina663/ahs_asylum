<template>
    <div v-for="character in characters" class="card" style="width: 18rem;">
        <img :src="character.image" class="card-img-top" alt="...">
        <div class="card-body">
            <h3><b>Name: </b>{{ character.name }}</h3>
            <p><b>intérprete: </b> {{ character.intérprete }}</p>
        </div>
    </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
const characters = ref([]);

onMounted(async () => {
    try{
        const response = await fetch("https://api-ahs.vercel.app/").then(res => res.json());
        characters.value = response
    }catch(error){
        console.log(error)
    }
})

</script>

<style scoped>
    .card{
        border: 1px solid rgb(43, 43, 43);
        margin-bottom: 20px;
        width:600px;
        height:300px
    }
    .card img{
        margin: 10px 15%;
        width:200px;
        height: 200px;
        object-fit:cover;
    }
    .card-body{
        padding-left: 10px;
        padding-top: 5px;
    }
    .card-body p:nth-child(1){
        padding-bottom: 10px;
    }
    .caracters-title{
        width:100%;
        text-align: center;
        padding: 15px 0;
    }
</style>