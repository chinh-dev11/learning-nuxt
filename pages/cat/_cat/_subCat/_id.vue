<script>
export default {
  name: 'ID'
}
</script>
<script setup></script>

<template>
  <div>
    <h1>ID: {{ $route.params }}</h1>
    <!-- url: http://localhost:3000/cat/subcategory/id/1 -->
    <!-- params: ID: { "cat": "subcategory", "subCat": "id", "id": "1" } -->
  </div>
</template>
