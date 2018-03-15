<template>
  <div>
    <h2>Skills</h2>

    <ul class="skills">
      <li
        v-for="(skill, index) in skills"
        :key="index">
        <span class="label">{{ skill.category }} :</span>
        {{ skillset(skill.skillset) }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  props: {
    skills: {
      type: Array,
      required: true,
    },
  },
  methods: {
    skillset(skills) {
      return skills.join(',');
    },
  },
};
</script>

<style scoped>
  ul.skills {
    list-style: none;
    padding: 0;
  }

  ul.skills .label {
    color: #40b501;
  }
</style>
