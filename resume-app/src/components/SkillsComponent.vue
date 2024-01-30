<template>
    <div class="skills-section container-block">
      <h1 class="section-title kapital-font">Skills & Proficiency</h1>
      <div class="skillset">
        <div v-for="(skill, index) in resumeData.skills" :key="index" class="item">
          <h3 class="level-title">{{ skill.name }}</h3>
          <div class="progress level-bar">
            <div class="progress-bar theme-progress-bar" :style="{ width: skill.proficiency + '%' }"></div>
          </div>
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
  /* Add styles for Skills component as needed */
  </style>
  