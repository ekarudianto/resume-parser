<template>
  <div id="app">
    <div
      v-if="!isResumeParsed"
      class="form-container">
      <h2>Resume parser</h2>
      <input
        type="file"
        @change="notifyFileInput($event)" >
      <p
        v-if="isError"
        class="error">
        {{ isError.message }}
      </p>
    </div>
    <resume
      v-if="isResumeParsed && resume"
      :resume="resume"/>
  </div>
</template>

<script>
import Resume from './components/Resume.vue';

export default {
  name: 'App',
  components: {
    Resume,
  },
  data() {
    return {
      isError: {},
      isResumeParsed: false,
      resume: {},
    };
  },
  methods: {
    notifyFileInput(event) {
      this.isError = {};
      this.isResumeParsed = false;

      const file = event.target.files[0];
      const vm = this;

      if (file.type !== 'application/json') {
        this.isError = {
          message: 'Incorrect format',
        };
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          vm.resume = JSON.parse(e.target.result);
          vm.isResumeParsed = true;
        } catch (err) {
          vm.isError = {
            message: err.message,
          };
        }
      };

      reader.readAsText(file);
    },
  },
};
</script>

<style scoped>
  #app {
    margin: auto;
    max-width: 1280px;
    padding: 20px;
  }

  .form-container {
    max-width: 400px;
    margin: 20% auto 0;
  }

  p.error {
    font-size: 11px;
    color: #FF0000;
  }
</style>
