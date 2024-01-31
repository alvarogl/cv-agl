<template>
    <div class="interests-container container-block">
      <h1 class="section-title kapital-font">Hobbies & Interests</h1>
      <ul class="list-unstyled interests-list">
        <li v-for="(interest, index) in resumeData.interests" :key="index">
          <span class="icon-holder"><i :class="'fas ' + interest.icon + ' fa-2x'"></i></span>{{ interest.interest }}
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
  /* Add styles for Interests component as needed */
  </style>
  