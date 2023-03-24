<template>
  <div class="the-welcome">
    <WelcomeItem>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Documentation</template>

      <a class="green" href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a>
      <br />
      <a class="green" href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <ToolingIcon />
      </template>
      <template #heading>Tooling</template>

      <a class="green" href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener"
        >Vite</a
      >
      <br />
      <a class="green" href="https://code.visualstudio.com/" target="_blank" rel="noopener"
        >VSCode</a
      >
      <br />
      <a class="green" href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener"
        >Volar</a
      >
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <EcosystemIcon />
      </template>
      <template #heading>Ecosystem</template>

      <a class="green" href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>
      <br />
      <a class="green" href="https://router.vuejs.org/" target="_blank" rel="noopener"
        >Vue Router</a
      >
      <br />
      <a class="green" href="https://github.com/vuejs/devtools" target="_blank" rel="noopener"
        >Vue Dev Tools</a
      >
      <br />
      <a class="green" href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener"
        >Awesome Vue</a
      >
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <CommunityIcon />
      </template>

      <template #heading>Community</template>

      <a class="green" href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue 论坛</a>
      <br />
      <a
        class="green"
        href="https://stackoverflow.com/questions/tagged/vue.js"
        target="_blank"
        rel="noopener"
        >StackOverflow</a
      ><br />
      <a class="green" href="https://news.vuejs.org" target="_blank" rel="noopener">vue 最新消息</a>
      <br />
      <a class="green" href="https://twitter.com/vuejs" target="_blank" rel="noopener"
        >@vuejs 推特</a
      >
    </WelcomeItem>
  </div>
</template>

<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
</script>

<style lang="scss" scoped>
.the-welcome {
  box-sizing: border-box;
  padding: 12px 30px;
}
</style>
