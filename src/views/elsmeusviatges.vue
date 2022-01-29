<template>
  <div>
    <h1> L'ART DE VIATJAR </h1>
    <p> Aquí podeu trobar un petit videoblog dels meus viatges: </p>
    <div>
      <b-embed
        type="iframe"
        aspect="16by9"
        src="../assets/Vídeo promocional Azul Oscuro Producciones para agencias de viaje.mp4"
        allowfullscreen
      ></b-embed>
    </div>
    <p> Aquí un repàs de les meves últimes experiències viatjant. </p>
    <p> He pogut conèixer a molta gent, gaudint-ho tot des del primer dia fins a l'últim, viatjant en globus, tirant-me des d'un vaixell, visitar en primera persona les cascades de Niàgara i molt més! </p>
    <h3> ¿ I TÚ ? A QUINS LLOCS HAS VIATJAT ? </h3>
    <h3> D'Europa </h3>
    <b-form-group

      v-slot="{ ariaDescribedby }"
    >
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        switches
      ></b-form-checkbox-group>
    </b-form-group>
<h3> D'Àsia </h3>
    <b-form-group
      v-slot="{ ariaDescribedby }"
    >
      <b-form-checkbox-group
        v-model="selected"
        :options="options2"
        :aria-describedby="ariaDescribedby"
        switches
      ></b-form-checkbox-group>
    </b-form-group>
<h3>Nord Amèrica </h3>
    <b-form-group

      v-slot="{ ariaDescribedby }"
    >
      <b-form-checkbox-group
        v-model="selected"
        :options="options3"
        :aria-describedby="ariaDescribedby"
        switches
      ></b-form-checkbox-group>
    </b-form-group>
<h3> De Sud Amèrica</h3>
    <b-form-group
      v-slot="{ ariaDescribedby }"
    >
      <b-form-checkbox-group
        v-model="selected"
        :options="options4"
        :aria-describedby="ariaDescribedby"
        switches
      ></b-form-checkbox-group>
    </b-form-group>
<h3> D'Àfrica </h3>
    <b-form-group
      v-slot="{ ariaDescribedby }"
    >
      <b-form-checkbox-group
        v-model="selected"
        :options="options5"
        :aria-describedby="ariaDescribedby"
        switches
      ></b-form-checkbox-group>
    </b-form-group>
<h3> D'Oceanía </h3>
    <b-form-group
      v-slot="{ ariaDescribedby }"
    >
      <b-form-checkbox-group
        v-model="selected"
        :options="options6"
        :aria-describedby="ariaDescribedby"
        switches
      ></b-form-checkbox-group>
    </b-form-group>
    <h3> Ciutats Icòniques </h3>
    <b-form-group
      v-slot="{ ariaDescribedby }"
    >
      <b-form-checkbox-group
        v-model="selected"
        :options="options7"
        :aria-describedby="ariaDescribedby"
        switches
      ></b-form-checkbox-group>
    </b-form-group>
    <template>
  <div>
    <h3> ¿Alguns Altres? </h3>
    <b-form-group
      id="fieldset-1"
      label-for="input-1"
      valid-feedback="Thank you!"
      :invalid-feedback="invalidFeedback"
      :state="state"
    >
      <b-form-input id="input-1" v-model="name" :state="state" trim></b-form-input>
    </b-form-group>
    </div>
  </template>

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
              class="mx-n8 rounded-0"
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
  <h3> Enviam els teus Viatges! </h3>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: [], // Must be an array reference!
        options: [
          { text: 'Espanya', value: 'espanya' },
          { text: 'Italia', value: 'italia' },
          { text: 'Alemania', value: 'alemania', },
           { text: 'Austria', value: 'austria', },
          { text: 'França', value: 'frança' }
        ],
        options2: [
          { text: 'Japó', value: 'japó' },
          { text: 'Xina', value: 'xina' },
          { text: 'Tailandia', value: 'tailandia', },
           { text: 'India', value: 'india', },
          { text: 'Malasia', value: 'malasia' }
        ],
        options3: [
          { text: 'Canadà', value: 'canadà' },
          { text: 'Estats Units', value: 'Estats Units' },
          { text: 'Mèxic', value: 'mèxic' },
          { text: 'Cuba', value: 'cuba' },
          { text: 'República Dominicana', value: 'repúblicadominicana' },
        ],
        options4: [
          { text: 'Argentina', value: 'argentina' },
          { text: 'Brasil', value: 'brasil' },
          { text: 'Urugay', value: 'uruguay', },
          { text: 'Colombia', value: 'colombia', },
          { text: 'Chile', value: 'chile' }
        ],
        options5: [
          { text: 'Egipte', value: 'egipte' },
          { text: 'Tanzania', value: 'tanzania' },
          { text: 'Marroc', value: 'marroc', },
          { text: 'Sudàfrica', value: 'sudafrica', },
          { text: 'Madagascar', value: 'madagascar' }
        ],
        options6: [
          { text: 'Australia', value: 'australia' },
          { text: 'Nova Zelanda', value: 'nova zelanda' },
          { text: 'Fiyi', value: 'fiyi', },
          { text: 'Papúa Nueva Guinea', value: 'papúanuevaguinea', },
          { text: 'Tonga', value: 'tonga' }
        ],
        options7: [
          { text: 'Buenos Aires', value: 'Buenos Aires' },
          { text: 'New York', value: 'new york' },
          { text: 'Londres', value: 'londres', },
          { text: 'Dubai', value: 'dubai', },
          { text: 'Toronto', value: 'Toronto' }
        ],
 busy: false,
        processing: false,
        counter: 1,
        interval: null
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
  margin-top: 20px;
  padding: 0px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif
}
p {
  margin:20px;
  font-size: 20;
  text-align: justify;
  font-family: Arial, Helvetica, sans-serif
} 
h3{
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 25px;
  padding: 20px;
  text-align: center
}
</style>