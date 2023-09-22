<template>
  <!-- <Tutorial /> -->
  <div>
    <h1>Rivers</h1>
    <ul>
      <li v-for="(river, index) in rivers" :key="`river-${index}`">
        {{ river.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ $http }) {
    const apiUrl = 'https://api.nuxtjs.dev/rivers'
    const resHttp = await $http.$get(apiUrl)
    // console.log('$http - resHttp', resHttp)
    return {
      rivers: resHttp
    }
  }
}
</script>
