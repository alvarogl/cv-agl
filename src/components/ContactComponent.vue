<template>
  <div class="contact-container container-block">
    <h1 class="section-title kapital-font">Contact</h1>
    <ul class="list-unstyled contact-list">
      <li class="email">
        <i class="fas fa-envelope"></i>
        <a :href="'mailto:' + resumeData.contact.email">{{ resumeData.contact.email }}</a>
      </li>
      <li class="phone">
        <i class="fas fa-phone"></i>
        <a :href="'tel:' + resumeData.contact.phone">{{ resumeData.contact.phone }}</a>
      </li>
      <li class="web">
        <i class="fa-solid fa-globe"></i>
        <a :href="resumeData.contact.web.link" target="_blank">{{ resumeData.contact.web.text }}</a>
      </li>
      <li class="linkedin">
        <i class="fab fa-linkedin-in"></i>
        <a :href="resumeData.contact.linkedin.link" target="_blank">{{ resumeData.contact.linkedin.text }}</a>
      </li>
      <li class="location">
        <i class="fas fa-map-marked-alt"></i>
        <a :href="resumeData.contact.location" target="_blank">{{ resumeData.contact.location }}</a>
      </li>
      <li class="github">
        <i class="fa-brands fa-github"></i>
        <a :href="resumeData.contact.github.link" target="_blank">{{ resumeData.contact.github.text }}</a>
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
a {
  text-decoration: none
}

i {
  margin-right: 10px
}

a:hover {
  text-decoration: underline
}

/* Add styles for Contact component as needed */
</style>
  