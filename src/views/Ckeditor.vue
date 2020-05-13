<template>
  <main>
    <HxComp msg="Test de ckeditor" />
    <EditorComp class="flex-content" />
  </main>
</template>

<script>
import EditorComp from '@/components/EditorComponent.vue';
import HxComp from '@/components/HxComponent';

export default {
  name: 'Ckeditor',
  components: {
    HxComp,
    EditorComp,
  },
};
</script>

<style lang="scss" scoped></style>
