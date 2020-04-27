<template>
  <div class="">
    <Header />
    <div class="flex-content">
      <Menu />
      <Editor class="editor" />
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue';
import Header from '@/components/Header.vue';
import Editor from '@/components/Editor.vue';

export default {
  name: 'Ckeditor',
  components: {
    Header,
    Menu,
    Editor,
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
