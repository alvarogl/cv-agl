<template>
  <section class="section projects-section">
    <h2 class="section-title kapital-font"><span class="icon-holder"><i class="fas fa-archive"></i></span>Courses</h2>
    <div v-for="course in resumeData.courses" :key="course.title" class="item">
      <span class="project-title">{{ course.title }} - {{ course.provider }} {{ course.year }}</span>
    </div>
  </section>
</template>
  
<script>
export default {
  props: ['resumeData']
}
</script>
  
<style lang="scss" scoped>
/* Add component-specific styles here */
</style>
  