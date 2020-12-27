<template>
  <div class="home">
    <SampleComponent msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import SampleComponent from "@/components/SampleComponent.vue";

export default {
  name: "Home",
  components: {
    SampleComponent
  }
};
</script>
 