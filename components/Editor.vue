<template>
  <div>
    <Acordeon>
      <client-only>
        <ckeditor v-model="editorData" :config="editorConfig"></ckeditor>
      </client-only>
      <div id="toolbar-container"></div>
      <div id="editor"></div>
    </Acordeon>

    <Acordeon>
      <textarea v-model.lazy="editorData"></textarea>

      <!-- <div class="visualizador" v-html="editorData"></div> -->
    </Acordeon>
  </div>
</template>

<script lang="js">
import Vue from 'vue';

// import ckeditor from '@ckeditor/ckeditor5-vue';
import Acordeon from '@/components/Acordeon.vue';

// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

/* let DecoupledEditor;
if (process.browser) {
  DecoupledEditor = require('@ckeditor/ckeditor5-build-decoupled-document');
} */


export default Vue.extend({
  name: 'Editor',
  components:{
    Acordeon,
    // ckeditor,
  },
  data() {
    return {
      // editor: DecoupledEditor,
      editorData: '<p>Content of the editor.</p>',
      editorConfig: {
        extraPlugins: ['font'],
        // The configuration of the editor.
        fontSize: {
            options: [
                'tiny',
                'default',
                'big'
            ]
        },
        fontFamily: {
            options: [
                'default',
                'Ubuntu, Arial, sans-serif',
                'Ubuntu Mono, Courier New, Courier, monospace'
            ]
        },
        /** Muestra las secciones de la toolbar por grupos */
        toolbar: [
						[ 'Source' ],
            [ 'Styles', 'Format', 'Font', 'FontSize' ],
						[ 'Bold', 'Italic' ],
						[ 'Undo', 'Redo' ],
						[ 'About' ]
					],
       /* toolbarGroups: [{
          'name': 'basicstyles',
          'groups': ['basicstyles']
        },
        {
          'name': 'font',
          'groups': ['Font']
        },
        {
          'name': 'links',
          'groups': ['links']
        },
        {
          'name': 'paragraph',
          'groups': ['list', 'blocks']
        },
        {
          'name': 'document',
          'groups': ['mode']
        },
        {
          'name': 'insert',
          'groups': ['insert']
        },
        {
          'name': 'styles',
          'groups': ['styles']
        },
        {
          'name': 'about',
          'groups': ['about']
        }
      ], */
      // Remove the redundant buttons from toolbar groups defined above.
      // removeButtons: 'Underline,Strike,Subscript,Superscript,Anchor,Styles,Specialchar'
      }
    };
  },
});
</script>

<style lang="scss" scoped>
main {
  h1 {
    color: black;
  }
}

div {
  justify-content: flex-start !important;
  margin: 10px 0;
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
