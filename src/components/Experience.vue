<template>
  <div>
    <h2>Experience</h2>
    <div
      v-for="(exp, index) in experiences"
      :key="index"
      class="experience-container">
      <div class="summary">
        <p class="position-summary">
          <b>{{ positionSummary(exp) }}</b> - <i>{{ exp.role }}</i>
        </p>
        <p class="position-duration">
          {{ positionDuration(exp) }}
        </p>
        <ul class="position-highlights">
          <li
            v-for="(highlight, index) in exp.highlights"
            :key="index">
            {{ highlight }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import * as _ from 'lodash';
import moment from 'moment';

export default {
  name: 'Experience',
  props: {
    experiences: {
      type: Array,
      required: true,
    },
  },
  methods: {
    positionSummary(position) {
      return `${position.company}, ${position.country}`;
    },
    positionDuration(position) {
      const startDate = moment(_.get(position, 'startDate')).format('MMMM YYYY');
      const endDate = _.get(position, 'isCurrentJob') === true ? 'Present' : moment(position.endDate).format('MMMM YYYY');
      return `${startDate} - ${endDate}`;
    },
  },
};
</script>

<style scoped>
  .position-summary {
    font-size: 14px;
    margin-bottom: 0;
  }

  .position-duration {
    color: #a5a5a5;
    font-style: italic;
    margin-top:0;
  }
</style>
