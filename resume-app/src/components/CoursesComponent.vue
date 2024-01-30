<template>
    <div class="courses-container container-block">
      <h1 class="section-title kapital-font">Courses</h1>
      <div v-for="(course, index) in resumeData.courses" :key="index" class="item">
        <span class="project-title">{{ course.title }}</span>
        <p>{{ course.provider }}</p>
        <p>{{ course.year ? course.year : 'Ongoing' }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['resumeData']
  }
  </script>
  
  <style lang="scss" scoped>
  /* Add styles for Courses component as needed */
  </style>
  