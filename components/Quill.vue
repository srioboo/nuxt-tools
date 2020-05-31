<template>
  <div class="flex-content">
    <Acordeon>
      <section class="container">
        <div
          v-quill:myQuillEditor="editorOption"
          class="quill-editor"
          :content="content"
          @change="onEditorChange($event)"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @ready="onEditorReady($event)"
        >
          >
        </div>
      </section>
    </Acordeon>

    <Acordeon>
      <section class="container">
        <textarea v-model.lazy="content" class="quill-visor"></textarea>

        <div class="visualizador quill-visor" v-html="content"></div>

        <div class="visualizador quill-visor">{{ content }}</div>
      </section>
    </Acordeon>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import Acordeon from '@/components/Acordeon.vue';

export default Vue.extend({
  name: 'Quill',
  components:{
    Acordeon,
  },
  data () {
      return {
        content: '<p>I am Example</p>',
        editorOption: {
          // some quill options
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block']
            ]
          }
        }
      }
    },
    mounted() {
      console.log('app init, my quill insrance object is:', this.myQuillEditor)
      setTimeout(() => {
        this.content = 'i am changed'
      }, 3000)
    },
    methods: {
      onEditorBlur(editor) {
        console.log('editor blur!', editor)
      },
      onEditorFocus(editor) {
        console.log('editor focus!', editor)
      },
      onEditorReady(editor) {
        console.log('editor ready!', editor)
      },
      onEditorChange({ editor, html, text }) {
        console.log('editor change!', editor, html, text)
        this.content = html
      }
    }

});
</script>

<style lang="scss" scoped>
.container {
  width: 95%;
  margin: 0 auto;
  padding: 10px 0;
  .quill-editor {
    min-height: 200px;
    max-height: 400px;
    overflow-y: auto;
  }
  .quill-visor {
    min-height: 200px;
    max-height: 400px;
    overflow-y: auto;
  }
}

div {
  justify-content: flex-start !important;
  align-items: flex-start;
  //margin: 10px 0;
}

textarea {
  width: 100%;
}

.text-tiny {
  font-size: 0.7em;
}

.text-small {
  font-size: 0.85em;
}

.text-big {
  font-size: 1.4em;
}

.text-huge {
  font-size: 1.8em;
}

.visualizador {
  border: 1px solid red;
  padding: 5px;
  width: 100%;
}
</style>
