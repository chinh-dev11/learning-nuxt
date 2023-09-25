<template>
  <!-- <Tutorial /> -->
  <div>
    <!-- <h1>Rivers</h1> -->
    <!-- <ul>
      <li v-for="(river, index) in rivers" :key="`river-${index}`">
        {{ river.title }}
      </li>
    </ul> -->
    <h1>Using floating-vue plugin</h1>
    <button v-tooltip="'this is our button with tooltip'">
      Button with tooltip
    </button>
  </div>
</template>

<script>
import axios from 'axios'
import 'floating-vue/dist/style.css'

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
    // const apiUrl = 'https://api.nuxtjs.dev/rivers'
    const apiUrl = 'https://api.coindesk.com/v1/bpi/currentprice1.json'
    const res = await axios.get(apiUrl)
    console.log('>>>$http - res', res)
    // this.rivers = res
  },
  /* async fetch() {
    const apiUrl = 'https://api.nuxtjs.dev/rivers'
    const res = await this.$http.$get(apiUrl)
    // console.log('>>>$http - res', res)
    this.rivers = res
  }, */
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
