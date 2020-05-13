<template>
  <div>
    <AcordeonComp>
      <ckeditor v-model="editorData" :config="editorConfig"></ckeditor>
    </AcordeonComp>

    <AcordeonComp>
      <textarea v-model.lazy="editorData"></textarea>

      <div class="visualizador" v-html="editorData"></div>
    </AcordeonComp>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import CKEditor from 'ckeditor4-vue';
import AcordeonComp from '@/components/AcordeonComponent.vue';

Vue.use( CKEditor );

export default Vue.extend({
  name: 'EditorComponent',
  components:{
    AcordeonComp,
  },
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
