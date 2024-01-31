<template>
    <div class="profile-container">
      <img class="profile" src="@/assets/me.png" alt="" />
      <h1 class="section-title kapital-font">{{ resumeData.about.title }}</h1>
      <h6>Hello, World!</h6>
      <h3 class="about-me-content">{{ resumeData.about.content }}</h3>
    </div>
  </template>
  
  <script>
  export default {
    props: ['resumeData']
  }
  </script>
  
  <style lang="scss" scoped>
  /* Add styles for About component as needed */
  </style>
  