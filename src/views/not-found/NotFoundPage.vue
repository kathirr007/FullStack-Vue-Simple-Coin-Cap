<template>
  <div id="not-found">
    <h1 class="ui center icon header">
      <i class="question circle icon"></i>
      Sorry! This page can't be found
    </h1>
    <h2 class="ui center icon">
      Navigate to Home
      <router-link to="/"><i class="home circle icon"></i></router-link>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'NotFoundPage'
}
</script>

<style src="@/assets/styles/not-found-page.css"></style>
