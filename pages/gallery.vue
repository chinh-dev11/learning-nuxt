<script>
const imageUrl =
  'https://images-api.nasa.gov/search?q=apollo%2011&description=moon%20landing&media_type=image&page_size=10'
export default {
  name: 'GalleryPage',
  async asyncData({ $http }) {
    console.log('asyncData')
    const resHttp = await $http.$get(imageUrl)
    return {
      images: resHttp.collection.items
    }
  }
  /* data: () => ({
    images: []
  }),
  async fetch() {
    console.log('fetch')
    const res = await this.$http.$get(imageUrl)
    this.images = res.collection.items
  } */
}
</script>

<template>
  <div>
    <h1>Gallery: Nasa Apollo 2011</h1>
    <ul>
      <li v-for="(image, index) of images" :key="`image-${index}`">
        <img :src="image.links[0].href" />
      </li>
    </ul>
  </div>
</template>
