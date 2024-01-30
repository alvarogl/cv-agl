<template>
    <div class="experiences-container container-block">
      <h1 class="section-title kapital-font">Experiences</h1>
      <div v-for="(exp, index) in resumeData.experiences" :key="index" class="item">
        <div class="meta">
          <div class="upper-row">
            <h3 class="job-title">{{ exp.job_title }}</h3>
            <div class="time">{{ exp.time }}</div>
          </div>
          <div class="company">{{ exp.company }}</div>
        </div>
        <div class="details">
          <ul>
            <li v-for="(responsibility, index) in exp.details.responsibilities" :key="index">{{ responsibility }}</li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['resumeData']
  }
  </script>
  
  <style lang="scss" scoped>
  /* Add styles for Experiences component as needed */
  </style>
  