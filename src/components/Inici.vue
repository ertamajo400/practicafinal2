<template>
  <div class="hello">
    <b-img fluid src="https://blog.anekke.com/wp-content/uploads/2019/05/DIARIO-DE-VIAJE-INDIA-PARTE-I-scaled.jpg" alt="Image 1"></b-img>
    <h1> EL DIARI DE MARILYN </h1>
    <p>
     Benvinguts al meu blog, on aniré penjant totes les aventures que he viscut els darrers anys i les que faré en un futur. </p> 
<p> Aquí trobareu tota mena de llocs on viatjar i visitar, des de ciutats, restaurants, hotels, parcs naturals, zones d'oci nocturn, zones de desconnexió, zones culturals, centres comercials, etc. També la meva valoració general sobre aquests llocs. Sóc una persona que viu al màxim cada viatge que faig, i m'agrada treure una conclusió al final de cada un.</p> 
<p> M'agrada conèixer a gent que li agradi tot aquest món i per això he fet aquest blog, per a gent que realment li interessa i gaudeix viatjar i conèixer noves cultures com a mi.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Inici',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1 {
  margin: 30px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  text-align: center;
}
h3 {
  margin: 40px 0 0;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
ul {
  list-style-type: none;
  padding: 0;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  margin: 0px
}
p {
  font-family: Arial, Helvetica, sans-serif;
  text-align: justify;
  margin: 30px;
  font-size: 20px;
}
img {
  max-block-size: 100%;
  width: 100%;
}
</style>
