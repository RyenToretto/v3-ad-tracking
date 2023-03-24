<template>
  <main class="home-view">
    <div class="home-body">
      <pre><code>{{ resList }}</code></pre>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      resList: []
    }
  },
  async mounted() {
    const res = await window.axios.get('/table/list')
    this.resList = res && res.data && JSON.stringify(res.data, null, 4)
  }
})
</script>

<style lang="scss">
.home-view {
  box-sizing: border-box;
  .home-body {
    box-sizing: border-box;
  }
}
</style>
