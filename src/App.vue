<template>
  <div id="app" class="wrapper">
    <div class="sidebar-wrapper">
      <AboutComponent :resumeData="resumeData" />
      <ContactComponent :resumeData="resumeData" />
      <hr />
      <EducationComponent :resumeData="resumeData" />
      <hr />
      <LanguagesComponent :resumeData="resumeData" />
      <hr />
      <InterestsComponent :resumeData="resumeData" />
      <hr />
      <SoftSkillsComponent :resumeData="resumeData" />
    </div>
    <div class="main-wrapper">
      <TitleComponent :resumeData="resumeData" />
      <hr />      
      <ExperiencesComponent :resumeData="resumeData" />
      <ProjectsComponent :resumeData="resumeData" />
      <SkillsComponent :resumeData="resumeData" />
    </div>
  </div>
</template>

<script>
// Import the components
import AboutComponent from './components/AboutComponent.vue';
import ContactComponent from './components/ContactComponent.vue';
import EducationComponent from './components/EducationComponent.vue';
import LanguagesComponent from './components/LanguagesComponent.vue';
import InterestsComponent from './components/InterestsComponent.vue';
import SoftSkillsComponent from './components/SoftSkillsComponent.vue';
import TitleComponent from './components/TitleComponent.vue';
import ExperiencesComponent from './components/ExperiencesComponent.vue';
import ProjectsComponent from './components/ProjectsComponent.vue';
import SkillsComponent from './components/SkillsComponent.vue';
import resumeData from './data/me.json';

export default {
  name: 'App',
  inject: ['googleFontLink'],
  components: {
    AboutComponent,
    ContactComponent,
    EducationComponent,
    LanguagesComponent,
    InterestsComponent,
    SoftSkillsComponent,
    TitleComponent,
    ExperiencesComponent,
    ProjectsComponent,
    SkillsComponent
  },
  mounted() {
    document.title = "It's me, Álvaro!";
  },
  data() {
    return {
      resumeData: resumeData
    };
  }
};
</script>

<style lang="scss">
.fas{
  margin-top: 6px;
}
</style>
