amis.define("1e5b785",(function(e,o,l,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s=e("node_modules/tslib/tslib"),d=(0,s.__importDefault)(e("node_modules/react/index")),i=(0,s.__importDefault)(e("node_modules/react-froala-wysiwyg/index")),a=(0,s.__importDefault)(e("node_modules/froala-editor/js/froala_editor.min"));e("node_modules/froala-editor/js/plugins/align.min"),e("node_modules/froala-editor/js/plugins/colors.min"),e("node_modules/froala-editor/js/plugins/char_counter.min"),e("node_modules/froala-editor/js/plugins/code_view.min"),e("node_modules/froala-editor/js/plugins/draggable.min"),e("node_modules/froala-editor/js/plugins/entities.min"),e("node_modules/froala-editor/js/plugins/font_family.min"),e("node_modules/froala-editor/js/plugins/font_size.min"),e("node_modules/froala-editor/js/plugins/forms.min"),e("node_modules/froala-editor/js/plugins/fullscreen.min"),e("node_modules/froala-editor/js/plugins/help.min"),e("node_modules/froala-editor/js/plugins/image.min"),e("node_modules/froala-editor/js/plugins/inline_class.min"),e("node_modules/froala-editor/js/plugins/inline_style.min"),e("node_modules/froala-editor/js/plugins/line_breaker.min"),e("node_modules/froala-editor/js/plugins/line_height.min"),e("node_modules/froala-editor/js/plugins/link.min"),e("node_modules/froala-editor/js/plugins/lists.min"),e("node_modules/froala-editor/js/plugins/paragraph_format.min"),e("node_modules/froala-editor/js/plugins/paragraph_style.min"),e("node_modules/froala-editor/js/plugins/print.min"),e("node_modules/froala-editor/js/plugins/quick_insert.min"),e("node_modules/froala-editor/js/plugins/quote.min"),e("node_modules/froala-editor/js/plugins/save.min"),e("node_modules/froala-editor/js/plugins/special_characters.min"),e("node_modules/froala-editor/js/plugins/table.min"),e("node_modules/froala-editor/js/plugins/url.min"),e("node_modules/froala-editor/js/plugins/video.min"),e("node_modules/froala-editor/js/plugins/word_paste.min"),e("node_modules/froala-editor/js/languages/zh_cn");var r=function(e){function o(o){var l=e.call(this,o)||this;return l.oldModel=null,a.default.VIDEO_PROVIDERS=[{test_regex:/.*/,url_regex:"",url_text:"",html:'<span class="fr-video fr-dvb fr-draggable" contenteditable="false" draggable="true"><video class="fr-draggable" controls="" data-msg="ok" data-status="0" src="{url}" style="width: 600px;"></video></span>'}],l.state={model:l.props.model},l.handleModelChange=l.handleModelChange.bind(l),l}return(0,s.__extends)(o,e),o.prototype.componentDidUpdate=function(){JSON.stringify(this.oldModel)!=JSON.stringify(this.props.model)&&this.handleModelChange(this.props.model)},o.prototype.handleModelChange=function(e){this.props.onModelChange&&(this.oldModel=e,this.props.onModelChange(e),this.setState({model:e}))},o.prototype.render=function(){return d.default.createElement(i.default,{tag:"textarea",config:this.props.config,model:this.state.model,onModelChange:this.handleModelChange})},o}(d.default.Component);o.default=r}));