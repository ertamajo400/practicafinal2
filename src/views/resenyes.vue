<template>
  <div>
    
    <h1> RESSENYES </h1>
    <p> En aquest apartat final és on em dedico a puntuar els paratges als cuals he viatjat que considero més importants. Si vosaltres també heu visitat aquests llocs, podeu deixar la vostra puntuació. </p>
    <h2> Pekín </h2>
  <b-card-group deck>
    <b-card title="La Ciutat Perduda" img-src="../assets/china 1.jpg" img-alt="Image" img-top>
      <b-card-text>
      </b-card-text>
      <template>
        <div>
          <p class="mt-2">La meva nota:</p>
          <b-form-rating v-model="myvaluepekin" readonly></b-form-rating>
        </div>
      </template>
      <template>
        <div>
          <p class="mt-2">La teva nota:</p>
          <b-form-rating v-model="yourvaluepekin"></b-form-rating>
        </div>
      </template>

    </b-card>

    <b-card title="Muralla China" img-src="../assets/china 2.jpg" img-alt="Image" img-top>
      <b-card-text>
      </b-card-text>
      <template>
        <div>
          <p class="mt-2">La meva nota:</p>
          <b-form-rating v-model="myvaluepekin1" readonly></b-form-rating>
        </div>
      </template>
      <template>
        <div>
          <p class="mt-2">La teva nota:</p>
          <b-form-rating v-model="yourvaluepekin"></b-form-rating>
        </div>
      </template>

    </b-card>

    <b-card title="Hotel Jen Beijing" img-src="../assets/hotel-Jen-Beijing-by-ShangriLa-China.jpg" img-alt="Image" img-top>
      <b-card-text>
      </b-card-text>
      <template>
        <div>
          <p class="mt-2">La meva nota:</p>
          <b-form-rating v-model="myvaluepekin2" readonly></b-form-rating>
        </div>
      </template>
      <template>
        <div>
          <p class="mt-2">La teva nota:</p>
          <b-form-rating v-model="yourvaluepekin"></b-form-rating>
        </div>
      </template>
    </b-card>
  </b-card-group>

  <h2> Tokyo </h2>

  <b-card-group deck>
    <b-card title="Ahikabara" img-src="../assets/portada-akihabara.jpg" img-alt="Image" img-top>
      <b-card-text>
       
      </b-card-text>
      <template>
        <div>
          <p class="mt-2">La meva nota:</p>
          <b-form-rating v-model="myvaluetokyo" readonly></b-form-rating>
        </div>
      </template>
      <template>
        <div>
          <p class="mt-2">La teva nota:</p>
          <b-form-rating v-model="yourvaluetokyo"></b-form-rating>
        </div>
      </template>

    </b-card>

    <b-card title="Santuari Meiji" img-src="../assets/zona-interior-santuario-meiji-2.jpg" img-alt="Image" img-top>
      <b-card-text>
      
      </b-card-text>
      <template>
        <div>
          <p class="mt-2">La meva nota:</p>
          <b-form-rating v-model="myvaluetokyo1" readonly></b-form-rating>
        </div>
      </template>
      <template>
        <div>
          <p class="mt-2">La teva nota:</p>
          <b-form-rating v-model="yourvaluetokyo"></b-form-rating>
        </div>
      </template>

    </b-card>

    <b-card title="Hotel Park Hyatt" img-src="../assets/park-hyatt-tokyo_deluxetargets_1500x1000-1024x683.jpg" img-alt="Image" img-top>
      <b-card-text>
      
      </b-card-text>
      <template>
        <div>
          <p class="mt-2">La meva nota:</p>
          <b-form-rating v-model="myvaluetokyo2" readonly></b-form-rating>
        </div>
      </template>
      <template>
        <div>
          <p class="mt-2">La teva nota:</p>
          <b-form-rating v-model="yourvaluetokyo"></b-form-rating>
        </div>
      </template>
    </b-card>
  </b-card-group>

  <h2> Roma </h2>

  <b-card-group deck>
    <b-card title="Castillo de Sant Angelo" img-src="../assets/CastilloSantAngelo.jpg" img-alt="Image" img-top>
      <b-card-text>
    
      </b-card-text>
      <template>
        <div>
          <p class="mt-2">La meva nota:</p>
          <b-form-rating v-model="myvalueroma" readonly></b-form-rating>
        </div>
      </template>
      <template>
        <div>
          <p class="mt-2">La teva nota:</p>
          <b-form-rating v-model="yourvalueroma"></b-form-rating>
        </div>
      </template>

    </b-card>

    <b-card title="Coliseu Romà" img-src="../assets/coliseo-roma_2924b6ae_1280x720.jpg" img-alt="Image" img-top>
      <b-card-text>
        
      </b-card-text>
      <template>
        <div>
          <p class="mt-2">La meva nota:</p>
          <b-form-rating v-model="myvalueroma1" readonly></b-form-rating>
        </div>
      </template>
      <template>
        <div>
          <p class="mt-2">La teva nota:</p>
          <b-form-rating v-model="yourvalueroma"></b-form-rating>
        </div>
      </template>

    </b-card>

    <b-card title="Hotel Relais Monti" img-src="../assets/hotel Relais Monti.jpg" img-alt="Image" img-top>
      <b-card-text>
      
      </b-card-text>
      <template>
        <div>
          <p class="mt-2">La meva nota:</p>
          <b-form-rating v-model="myvalueroma2" readonly></b-form-rating>
        </div>
      </template>
      <template>
        <div>
          <p class="mt-2">La teva nota:</p>
          <b-form-rating v-model="yourvalueroma"></b-form-rating>
        </div>
      </template>
    </b-card>
  </b-card-group>

  <h2> New York </h2>

  <b-card-group deck>
    <b-card title="Central Park" img-src="../assets/EEUU_NuevaYork_centralPark_GettyRF_108350990_Pawel Gaul_Getty Images.jpg" img-alt="Image" img-top>
      <b-card-text>
      
      </b-card-text>
      <template>
        <div>
          <p class="mt-2">La meva nota:</p>
          <b-form-rating v-model="myvaluenewyork" readonly></b-form-rating>
        </div>
      </template>
      <template>
        <div>
          <p class="mt-2">La teva nota:</p>
          <b-form-rating v-model="yourvaluenewyork"></b-form-rating>
        </div>
      </template>

    </b-card>

    <b-card title="Times Square" img-src="../assets/times square.jpg" img-alt="Image" img-top>
      <b-card-text>
      </b-card-text>
      <template>
        <div>
          <p class="mt-2">La meva nota:</p>
          <b-form-rating v-model="myvaluenewyork1" readonly></b-form-rating>
        </div>
      </template>
      <template>
        <div>
          <p class="mt-2">La teva nota:</p>
          <b-form-rating v-model="yourvaluenewyork"></b-form-rating>
        </div>
      </template>

    </b-card>

    <b-card title="Meriton Suites Kent Street" img-src="../assets/meriton suites kent street.jpg" img-alt="Image" img-top>
      <b-card-text>
    
      </b-card-text>
      <template>
        <div>
          <p class="mt-2">La meva nota:</p>
          <b-form-rating v-model="myvaluenewyork2" readonly></b-form-rating>
        </div>
      </template>
      <template>
        <div>
          <p class="mt-2">La teva nota:</p>
          <b-form-rating v-model="yourvaluenewyork"></b-form-rating>
        </div>
      </template>
    </b-card>   
  </b-card-group>

  <h2> Sidney </h2>

  <b-card-group deck>
    <b-card title="Opera de Sidney" img-src="../assets/Opera Sidney.jpg" img-alt="Image" img-top>
      <b-card-text>
  
      </b-card-text>
      <template>
        <div>
          <p class="mt-2">La meva nota:</p>
          <b-form-rating v-model="myvaluesidney" readonly></b-form-rating>
        </div>
      </template>
      <template>
        <div>
          <p class="mt-2">La teva nota:</p>
          <b-form-rating v-model="yourvaluesidney"></b-form-rating>
        </div>
      </template>

    </b-card>

    <b-card title="Catedral de Santa Maria" img-src="../assets/Sydney_StMaryCathedral_perspective.jpg" img-alt="Image" img-top>
      <b-card-text>
      </b-card-text>
      <template>
        <div>
          <p class="mt-2">La meva nota:</p>
          <b-form-rating v-model="myvaluesidney1" readonly></b-form-rating>
        </div>
      </template>
      <template>
        <div>
          <p class="mt-2">La teva nota:</p>
          <b-form-rating v-model="yourvaluesidney"></b-form-rating>
        </div>
      </template>

    </b-card>

    <b-card title="Hotel Broadway" img-src="../assets/Hotel Broadway plaza.jpg" img-alt="Image" img-top>
      <b-card-text>
    
      </b-card-text>
      <template>
        <div>
          <p class="mt-2">La meva nota:</p>
          <b-form-rating v-model="myvaluesidney2" readonly></b-form-rating>
        </div>
      </template>
      <template>
        <div>
          <p class="mt-2">La teva nota:</p>
          <b-form-rating v-model="yourvaluesidney"></b-form-rating>
        </div>
      </template>
    </b-card>
  </b-card-group>
 <template>
  <div>
    <b-form class="position-relative p-3" @submit.prevent="onSubmit">
      
      <div class="d-flex justify-content-center">
         <b-button ref="submit" type="submit" :disabled="busy">Envia</b-button>
      </div>

      <b-overlay :show="busy" no-wrap @shown="onShown" @hidden="onHidden">
        <template #overlay>
          <div v-if="processing" class="text-center p-4 bg-primary text-light rounded">
            <b-icon icon="cloud-upload" font-scale="4"></b-icon>
            <div class="mb-3">Processing...</div>
            <b-progress
              min="1"
              max="10"
              :value="counter"
              variant="success"
              height="3px"
              class="mx-n1 rounded-0"
            ></b-progress>
          </div>
          <div
            v-else
            ref="dialog"
            tabindex="-1"
            role="dialog"
            aria-modal="false"
            aria-labelledby="form-confirm-label"
            class="text-center p-3"
          >
            <p><strong id="form-confirm-label">Are you sure?</strong></p>
            <div class="d-flex">
              <b-button variant="outline-danger" class="mr-3" @click="onCancel">
                Cancel
              </b-button>
              <b-button variant="outline-success" @click="onOK">OK</b-button>
            </div>
          </div>
        </template>
      </b-overlay>
    </b-form>
  </div>
  </template>
  <h3> Enviam les teves Resenyes! </h3>
</div>
</template>

<script>
  export default {
    data() {
      return {
        myvaluepekin1: 3.1,
        myvaluepekin2: 3.2,
        myvaluepekin: 4,
        myvaluetokyo: 3,
        myvaluetokyo2: 5,
        myvaluetokyo1: 4,
        myvalueroma: 2,
        myvalueroma2: 3,
        myvalueroma1: 4,
        myvaluenewyork: 5,
        myvaluenewyork1: 4,
        myvaluenewyork2: 1,
        myvaluesidney: 4,
        myvaluesidney2: 4,
        myvaluesidney1: 3.5,
        busy: false,
        processing: false,
        counter: 1,
        interval: null,
      }
    },

    beforeDestroy() {
      this.clearInterval()
    },
    methods: {
      clearInterval() {
        if (this.interval) {
          clearInterval(this.interval)
          this.interval = null
        }
      },
      onShown() {
        // Focus the dialog prompt
        this.$refs.dialog.focus()
      },
      onHidden() {
        // In this case, we return focus to the submit button
        // You may need to alter this based on your application requirements
        this.$refs.submit.focus()
      },
      onSubmit() {
        this.processing = false
        this.busy = true
      },
      onCancel() {
        this.busy = false
      },
      onOK() {
        this.counter = 1
        this.processing = true
        // Simulate an async request
        this.clearInterval()
        this.interval = setInterval(() => {
          if (this.counter < 20) {
            this.counter = this.counter + 1
          } else {
            this.clearInterval()
            this.$nextTick(() => {
              this.busy = this.processing = false
            })
          }
        }, 350)
      }
    }
  }
</script>

<style scoped>
h1 {
  padding: 20px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
h2 {
  padding: 20px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
p {
  text-align: justify;
}
img {
  width: auto;

}
h3 {
  padding: 20px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
</style>