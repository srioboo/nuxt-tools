<template>
  <main>
    <Hx msg="Test de ckeditor" />
    <Editor class="flex-content" />
  </main>
</template>

<script>
import Editor from '@/components/Editor';
import Hx from '@/components/Hx';

export default {
  name: 'Ckeditor',
  components: {
    Hx,
    Editor,
  },
};
</script>

<style lang="scss" scoped></style>
