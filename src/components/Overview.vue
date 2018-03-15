<template>
  <div>
    <h1>{{ resume.name }}</h1>
    <ul class="links">
      <li
        v-for="(link, index) in resume.links"
        :key="index">
        <span class="label">{{ link.name }} :</span>
        <a
          :href="link.url"
          target="_blank">{{ link.url }}</a>
      </li>
    </ul>

    <p class="address">{{ resume.address }}</p>

    <ul class="phones">
      <li
        v-for="(phone, index) in resume.phones"
        :key="index">{{ phone }}</li>
    </ul>

    <ul class="emails">
      <li
        v-for="(phone, index) in resume.emails"
        :key="index">{{ email }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Overview',
  props: {
    resume: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
  ul.links,
  ul.phones,
  ul.emails {
    list-style: none;
    padding: 0;
  }

  ul.links .label {
    color: #40b501;
  }
</style>
