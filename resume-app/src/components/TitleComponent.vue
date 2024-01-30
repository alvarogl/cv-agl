<template>
    <div class="title-container container-block">
        <div class="section name-section kapital-font">
            <h1 class="name">{{ resumeData.contact.name }}</h1>
            <h3 class="tagline">{{ resumeData.contact.tagline }}</h3>
        </div>
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
  