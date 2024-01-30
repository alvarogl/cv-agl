<template>
  <section class="skills-section container-block">
    <h2 class="section-title kapital-font">
      <span class="icon-holder"><i class="fas fa-rocket"></i></span>Skills &amp; Proficiency
    </h2>
    <div class="skillset">
      <div v-for="(skill, index) in resumeData.skills" :key="index" class="item">
        <h3 class="level-title">{{ skill.name }}</h3>
        <div class="progress level-bar">
          <div class="progress-bar theme-progress-bar" :style="{ width: skill.proficiency + '%' }"></div>
        </div>
      </div>
    </div>
  </section>
</template>
  
<script>
export default {
  props: ['resumeData']
}
</script>
  
<style lang="scss" scoped>
/* Add styles for Skills component as needed */
</style>
  