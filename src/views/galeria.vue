<template>
<div id="galeria">
    <p></p>
    <h1>GALERIA</h1>  

      <p> En aquesta finestra podreu trobar les millors fotografies que he disparat durant les meves intrepidants travesies! 
    </p>

     <Diapos/>



 </div>
</template>

<script>
import Diapos from '../components/Diapos.vue' 
export default {
   name: 'galeria',
   components: {
        Diapos
  }
}
</script>

<style scoped>
h1 {
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
p {
  margin: 20px;
  text-align:justify
}
</style>
