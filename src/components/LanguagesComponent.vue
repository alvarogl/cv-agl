<template>
    <div class="languages-container container-block">
      <h1 class="section-title kapital-font">Languages</h1>
      <ul class="list-unstyled interests-list">
        <li v-for="(lang, index) in resumeData.languages" :key="index">
          {{ lang.language }} <span class="lang-desc">({{ lang.proficiency }})</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: ['resumeData']
  }
  </script>
  
  <style lang="scss" scoped>
  /* Add styles for Languages component as needed */
  </style>
  