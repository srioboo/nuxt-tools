<template>
  <main>
    <EditorComp class="editor" />
  </main>
</template>

<script>
import EditorComp from '@/components/EditorComponent.vue';

export default {
  name: 'Ckeditor',
  components: {
    EditorComp,
  },
};
</script>

<style lang="scss" scoped>
.editor {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: white;
  /* height: 50px; */
  align-items: center;
  width: 70vw;
}
</style>
