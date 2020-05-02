<template>
  <main>
    <h1>Text de ckeditor</h1>
    <textarea v-model.lazy="editorData"></textarea>

    <ckeditor v-model="editorData" :config="editorConfig"></ckeditor>
    <!-- <pre style="color: black;">{{ editorData }}</pre> -->
  </main>
</template>

<script lang="js">
import Vue from 'vue';
import CKEditor from 'ckeditor4-vue';

Vue.use( CKEditor );

export default Vue.extend({
  name: 'EditorComponent',
  data() {
    return {
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
      ],*/
      // Remove the redundant buttons from toolbar groups defined above.
      //removeButtons: 'Underline,Strike,Subscript,Superscript,Anchor,Styles,Specialchar'
      }
    };
  },
});
</script>

<style lang="scss" scoped>
div {
  justify-content: flex-start !important;
  margin: 10px 0;
}

textarea {
  width: 95%;
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
</style>
