<template>
    <div>
      <h1 class="section-title kapital-font">Courses</h1>
      <div v-for="course in resumeData.courses" :key="course.title">
        <span class="project-title">{{ course.title }}</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['resumeData']
  }
  </script>
  
  <style lang="scss" scoped>
  /* Add component-specific styles here */
  </style>
  