<template>
  <div>
    <p></p>
        <h1> QUÍ SÓC ? </h1>
    <b-list-group>
      <b-list-group-item class="d-flex align-items-center">
        <b-avatar variant="info" src="https://images-ext-1.discordapp.net/external/IAqWSM8mMxtrelRv0EOFkpI98H9KuB-jx5nte6fva8c/https/static.vecteezy.com/system/resources/previews/001/226/740/non_2x/woman-traveler-with-arms-raised-free-photo.jpg?width=1364&height=909" size="6rem" class="mr-3"></b-avatar>
        <span class="mr-auto">Marylin Rose</span>
         <b-col md="3" class="py-3">
        <b-button v-b-tooltip.hover.left="'Volia superar els límits del que creia que podia fer amb la meva vida i, de passada, veure la major quantitat de món possible.'" variant="primary">Jo sempre dic que...</b-button>
      </b-col>
        <b-badge>:)</b-badge>
      </b-list-group-item>
    </b-list-group>
    <p> </p>
    <p> Vaig créixer en un petit poble de Barcelona i als dotze anys ja vaig decidir que volia explorar el món.
</p>
     <p> Els meus pares eren agents de viatges i en vaig aprendre a reservar i planificar un itinerari. Quan vaig fer divuit anys, ja havia visitat més de trenta països amb els meus pares. Havia estalviat fons treballant durant tota la meva adolescència, de manera que la major part de les despeses de viatge les financiava amb l’ajuda d’aquest treball.
     </p>
     <p> A més, gràcies al meu blog, puc complementar-ho amb els meus ingressos escrivint, fent fotografia independent i venent-ne còpies; Sempre dic, passa una "quantitat ingent de temps investigant les millors ofertes i aprenent a fons com viatjar a llocs exòtics amb un pressupost reduït". Sóc una persona minimalista, portant només els subministraments que necessito a una motxilla juntament amb el meu equip de videografia.
    </p>
    <p> Finalment, m'agradaria destacar el meu amor a la fotografia. En aquest blog podreu veure una gran quantitat de fotos que he anat fent durant les meves expedicions. M'encanta aquest art i és per això que vaig graduar-me en audiovisuals en l'universitat de Barcelona (UB).
    <h2> AQUÍ ACTUALITZO CADA ANY TOTS ELS PAÏSOS QUE HE TREPITJAT! </h2>
    <p> Ordenat de més recent a menys recent </p>
    <template>
  <div class="overflow-auto">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      first-text="⏮"
      prev-text="⏪"
      next-text="⏩"
      last-text="⏭"
      aria-controls="my-table"
    ></b-pagination>

    <p class="mt-3">Current Page: {{ currentPage }}</p>

    <b-table
      id="my-table"
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      small
    ></b-table>
    </div>
  </template>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        perPage: 10,
        currentPage: 1,
        items: [
          { Número: 1, Països: 'Chile', Any: '2021' },
          { Número: 2, Països: 'Perú', Any: '2021' },
          { Número: 3, Països: 'Cuba', Any: '2021' },
          { Número: 4, Països: 'Romania', Any: '2021' },
          { Número: 5, Països: 'Kazahistan', Any: '2021' },
          { Número: 6, Països: 'Mongolia', Any: '2021' },
          { Número: 7, Països: 'Australia', Any: '2021' },
          { Número: 8, Països: 'Macao', Any: '2021' },
          { Número: 9, Països: 'Dinamarca', Any: '2021' },
          { Número: 10, Països: 'Irlanda', Any: '2021' },
          { Número: 11, Països: 'Túnez', Any: '2020' },
          { Número: 12, Països: 'Marroc', Any: '2020' },
          { Número: 13, Països: 'Bahrein', Any: '2020' },
          { Número: 14, Països: 'Emirats Árabs', Any: '2020' },
          { Número: 15, Països: 'Singapur', Any: '2020' },
          { Número: 16, Països: 'Noruega', Any: '2020' },
          { Número: 17, Països: 'Vietnam', Any: '2020' },
          { Número: 18, Països: 'Puerto Rico', Any: '2020' },
          { Número: 19, Països: 'Brasil', Any: '2020' },
          { Número: 20, Països: 'Argentina', Any: '2020' },
          { Número: 21, Països: 'Bulgaria', Any: '2019' },
          { Número: 22, Països: 'Filipines', Any: '2019' },
          { Número: 23, Països: 'Indonesia', Any: '2019' },
          { Número: 24, Països: 'Corea del Nord', Any: '2019' },
          { Número: 25, Països: 'Japó', Any: '2019' },
          { Número: 26, Països: 'Sudáfrica', Any: '2019' },
          { Número: 27, Països: 'Hungría', Any: '2019' },
          { Número: 28, Països: 'Croacia', Any: '2019' },
          { Número: 29, Països: 'Holanda', Any: '2019' },
          { Número: 30, Països: 'Portugal', Any: '2019' },
          { Número: 31, Països: 'Arabia Saudita', Any: '2018' },
          { Número: 32, Països: 'Egipte', Any: '2018' },
          { Número: 33, Països: 'Macao', Any: '2018' },
          { Número: 34, Països: 'India', Any: '2018' },
          { Número: 35, Països: 'China', Any: '2018' },
          { Número: 36, Països: 'Tailandia', Any: '2018' },
          { Número: 37, Països: 'Colombia', Any: '2018' },
          { Número: 38, Països: 'Méxic', Any: '2018' },
          { Número: 39, Països: 'Estats Units', Any: '2018' },
          { Número: 40, Països: 'Canadá', Any: '2018' },
          { Número: 41, Països: 'Polonia', Any: '2017' },
          { Número: 42, Països: 'Grecia', Any: '2017' },
          { Número: 43, Països: 'Bielorusia', Any: '2017' },
          { Número: 44, Països: 'Rusia', Any: '2017' },
          { Número: 45, Països: 'Bélgica', Any: '2017' },
          { Número: 46, Països: 'Alemania', Any: '2017' },
          { Número: 47, Països: 'Finlandia', Any: '2017' },
          { Número: 48, Països: 'Suiza', Any: '2017' },
          { Número: 49, Països: 'Suecia', Any: '2017' },
          { Número: 50, Països: 'Madagascar', Any: '2017' },
          { Número: 51, Països: 'Regne Unit', Any: '2016' },
          { Número: 52, Països: 'Hong Kong', Any: '2016' },
          { Número: 53, Països: 'Malasia', Any: '2015' },
          { Número: 54, Països: 'Austria', Any: '2015' },
          { Número: 55, Països: 'Turquia', Any: '2014' },
          { Número: 56, Països: 'Ucraina', Any: '2014' },
          { Número: 57, Països: 'El Vaticano', Any: '2013' },
          { Número: 58, Països: 'Italia', Any: '2013' },
          { Número: 59, Països: 'Francia', Any: '2012' },
          { Número: 60, Països: 'Andorra', Any: '2011' },
        ]
      }
    },
    computed: {
      rows() {
        return this.items.length
      }
    }
  }

</script>

<style scoped>
h1 {
text-align: center;
margin: 20px;
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
h2 {
  margin: 20px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
p {
text-align: justify;
margin: 20px;
}

</style>