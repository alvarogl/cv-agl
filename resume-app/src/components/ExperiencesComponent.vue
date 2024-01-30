<template>
  <section class="experiences-container container-block">
    <h2 class="section-title kapital-font">
      <span class="icon-holder"><i class="fas fa-briefcase"></i></span>Experiences
    </h2>
    <div v-for="(exp, index) in resumeData.experiences" :key="index" class="item">
      <div class="meta">
        <div class="upper-row">
          <h3 class="job-title">{{ exp.job_title }}</h3>
          <div class="time">{{ exp.time }}</div>
        </div>
        <div class="company">{{ exp.company }}</div>
      </div>
      <div class="details">
        <ul>
          <li v-for="(responsibility, index) in exp.details.responsibilities" :key="index">{{ responsibility }}</li>
        </ul>
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
/* Add styles for Experiences component as needed */
</style>
  