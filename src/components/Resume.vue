<template>
  <div class="resume-container">
    <overview :resume="resume" />
    <skill :skills="resume.skills" />
    <experience :experiences="resume.experiences" />
  </div>
</template>

<script>
import Experience from './Experience.vue';
import Overview from './Overview.vue';
import Skill from './Skill.vue';

export default {
  name: 'Resume',
  components: {
    Experience,
    Skill,
    Overview,
  },
  props: {
    resume: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
  .resume-container {
    background: #FFF;
    border-radius: 3px;
    border: 1px solid #9e9e9e;
    font-size: 12px;
    margin: auto;
    max-width: 900px;
    padding: 20px 40px;

    -webkit-box-shadow: -1px 1px 14px -2px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 1px 14px -2px rgba(0,0,0,0.75);
    box-shadow: -1px 1px 14px -2px rgba(0,0,0,0.75);
  }
</style>
