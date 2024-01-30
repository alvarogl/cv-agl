<template>
    <div class="contact-container container-block">
      <h1 class="section-title kapital-font">Contact</h1>
      <ul class="list-unstyled contact-list">
        <li class="name">{{ resumeData.contact.name }}</li>
        <li class="tagline">{{ resumeData.contact.tagline }}</li>
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
          <a :href="resumeData.contact.web" target="_blank">{{ resumeData.contact.web }}</a>
        </li>
        <li class="linkedin">
          <i class="fab fa-linkedin-in"></i>
          <a :href="resumeData.contact.linkedin" target="_blank">{{ resumeData.contact.linkedin }}</a>
        </li>
        <li class="location">
          <i class="fas fa-map-marked-alt"></i>
          <a :href="resumeData.contact.location" target="_blank">{{ resumeData.contact.location }}</a>
        </li>
        <li class="github">
          <i class="fa-brands fa-github"></i>
          <a :href="resumeData.contact.github" target="_blank">{{ resumeData.contact.github }}</a>
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
  /* Add styles for Contact component as needed */
  </style>
  