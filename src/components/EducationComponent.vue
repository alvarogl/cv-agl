<template>
    <div class="education-container container-block">
      <h1 class="section-title kapital-font">Education</h1>
      <div v-for="(edu, index) in resumeData.education" :key="index" class="item">
        <h4 class="degree">{{ edu.degree }}</h4>
        <h5 class="meta">{{ edu.university }}</h5>
        <div class="time">{{ edu.time }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['resumeData']
  }
  </script>
  
  <style lang="scss" scoped>
  /* Add styles for Education component as needed */
  </style>
  