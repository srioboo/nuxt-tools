<template>
  <main>
    <Hx msg="Test Quill editor" />
    <QuillComp />
  </main>
</template>

<script>
import QuillComp from '@/components/Quill';
import Hx from '@/components/Hx';

export default {
  name: 'Quilleditor',
  components: {
    Hx,
    QuillComp,
  },
};
</script>

<style lang="scss" scoped></style>
