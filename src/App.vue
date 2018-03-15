<template>
  <div id="app">
    <div class="form-container">
      <h2>Resume parser</h2>
      <input
        type="file"
        @change="notifyFileInput($event)" >
      {{ file }}
      <p>
        {{ resume }}
      </p>
    </div>
  </div>
</template>

<script>
// import * as _ from 'lodash';
// import $ from 'jquery';

export default {
  name: 'App',
  data() {
    return {
      resume: null,
      filename: 'hei',
    };
  },
  methods: {
    notifyFileInput(event) {
      const file = event.target.files[0];
      const vm = this;

      if (file.type !== 'application/json') {
        alert('Incorrect format');
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          vm.resume = JSON.parse(e.target.result);
        } catch (err) {
          console.log(err);
        }
      };

      reader.readAsText(file);
      this.filename = file.name;
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
</style>
