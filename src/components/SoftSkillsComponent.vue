<template>
    <div class="soft-skills-container container-block">
      <h1 class="section-title kapital-font">Soft Skills</h1>
      <ul class="list-unstyled skills-list">
        <li v-for="(skill, index) in resumeData.softSkills" :key="index">{{ skill }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: ['resumeData']
  }
  </script>
  
  <style lang="scss" scoped>
  /* Add styles for SoftSkills component as needed */
  </style>
  