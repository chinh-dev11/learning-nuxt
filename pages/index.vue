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
  /* async asyncData({ $http }) {
    const apiUrl = 'https://api.nuxtjs.dev/rivers'
    const resHttp = await $http.$get(apiUrl)
    // console.log('$http - resHttp', resHttp)
    return {
      rivers: resHttp
    }
  } */
  data: () => ({
    rivers: []
  }),
  async fetch() {
    const apiUrl = 'https://api.nuxtjs.dev/rivers'
    const res = await this.$http.$get(apiUrl)
    // console.log('>>>$http - res', res)
    this.rivers = res
  },
  // SEO and meta tags
  // locally (in a component)
  // globally (in head section in nuxt.config.js)
  /* head: {
    meta: [
      {
        hid: 'title',
        content: 'Home page'
      },
      {
        hid: 'description',
        content: 'This is the home page'
      }
    ]
  }, */
  // declare as a function: have access to the data and computed properties
  head() {
    return {
      meta: [
        {
          hid: 'title',
          content: 'Home page'
        },
        {
          hid: 'description',
          content: 'This is the home page'
        }
      ]
    }
  }
}
</script>
