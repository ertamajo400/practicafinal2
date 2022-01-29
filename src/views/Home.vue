<template>
  <div class="home">
    <Inici msg="Welcome to Your Vue.js App"/>
    <b-container fluid class="p-4 bg-dark">
  <b-row>
    <b-col>
      <b-img thumbnail fluid src="../assets/324091.jpg" alt="Image 1" ></b-img>
    </b-col>
    <b-col>
      <b-img thumbnail fluid src="../assets/marylin.jpg" alt="Image 2" ></b-img>
    </b-col>
    <b-col>
      <b-img thumbnail fluid src="../assets/invierno-moscu.jpg" alt="Image 3"></b-img>
    </b-col>
  </b-row>
</b-container>
<b-container fluid class="p-4 bg-dark">
  <b-row>
    <b-col>
      <b-img thumbnail fluid src="../assets/london-eye.jpg" alt="Image 1"></b-img>
    </b-col>
    <b-col>
      <b-img thumbnail fluid src="../assets/los-angeles-sign-hollywood.jpg" alt="Image 2"></b-img>
    </b-col>
    <b-col>
      <b-img thumbnail fluid src="https://www.ngenespanol.com/wp-content/uploads/2018/08/Venecia-desaparece-770x578.jpg" alt="Image 3"></b-img>
    </b-col>
  </b-row>
</b-container>

  </div>
</template>

<script>
// @ is an alias to /src
import Inici from '@/components/Inici.vue'

export default {
  name: 'Home',
  components: {
    Inici
  }
  
}
</script>
<style scoped>
img {
  width: 100%;
  height: 100%;
}
</style>