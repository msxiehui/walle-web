webpackJsonp([7],{"/hna":function(e,t){},KfvI:function(e,t){},Rm9u:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("Dd8w"),a=r.n(n),i=r("Xxa5"),s=r.n(i),l=r("exGp"),o=r.n(l),c=r("woOf"),u=r.n(c),d=r("ArRN"),f=r("4MTg"),p={props:{visible:{type:Boolean,default:!1},space:Object},data:function(){return{users:[],error:this.initError(),form:this.initForm(),rules:{name:[{required:!0,message:"请输入用户名",trigger:"blur"}],user_id:[{required:!0,message:"请选择用户角色",trigger:"blur"}]}}},watch:{visible:{immediate:!0,handler:function(e){e&&(u()(this.form,a()({},this.initForm(0))),this.getUsers({},{target:".wl-add-space__option"}))}},space:function(e){if(this.visible)if(e){var t=e.name,r=e.user_id;this.form.name=t,this.form.user_id=r}else this.form=this.initForm()}},computed:{isNew:function(){return!this.space}},methods:{getUsers:function(){var e=this;return o()(s.a.mark(function t(){var r,n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(f.f)();case 2:r=t.sent,n=r.data.list,e.users=n;case 5:case"end":return t.stop()}},t,e)}))()},onOk:function(){var e=this;this.$refs.form.validate(function(t){if(!t)return!1;e.sendData()})},onCancel:function(){this.$emit("update:visible"),this.$emit("close")},initForm:function(){return{name:"",user_id:null}},initError:function(){return{name:"",user_id:""}},sendData:function(){var e=this;return o()(s.a.mark(function t(){var r,n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,e.error=e.initError(),t.t0=e.isNew,!t.t0){t.next=6;break}return t.next=6,Object(d.a)(e.form);case 6:if(t.t1=e.isNew,t.t1){t.next=10;break}return t.next=10,Object(d.g)(e.space.id,e.form);case 10:e.$emit("update:visible"),e.$emit("confirm"),t.next=19;break;case 14:if(t.prev=14,t.t2=t.catch(0),t.t2.code,r=t.t2.message)for(n in r)e.error[n]=r[n][0];case 19:case"end":return t.stop()}},t,e,[[0,14]])}))()}}},m={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{staticClass:"wl-add-space",attrs:{width:"600px",title:e.isNew?"新增空间":"编辑空间",visible:e.visible,"before-close":e.onCancel,"append-to-body":!0}},[r("el-form",{ref:"form",attrs:{model:e.form}},[r("el-form-item",{attrs:{label:"空间名称","label-width":"120px",prop:"name",rules:e.rules.name,error:e.error.name}},[r("el-input",{attrs:{size:"small","auto-complete":"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"所属人","label-width":"120px",prop:"user_id",rules:e.rules.user_id,error:e.error.user_id}},[r("el-select",{staticClass:"wl-add-space__option",attrs:{size:"small",placeholder:"请分配用户"},model:{value:e.form.user_id,callback:function(t){e.$set(e.form,"user_id",t)},expression:"form.user_id"}},e._l(e.users,function(e){return r("el-option",{key:e.id,attrs:{label:e.username,value:e.id}})}))],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.onOk}},[e._v("确定")]),e._v(" "),r("el-button",{attrs:{size:"small"},on:{click:e.onCancel}},[e._v("取消")])],1)],1)},staticRenderFns:[]};var h={name:"space-list",components:{addSpaceDialog:r("VU/8")(p,m,!1,function(e){r("/hna")},null,null).exports},data:function(){return{enableCreate:!1,value:"",columns:function(){var e=this;return[{label:"空间名",width:250,prop:"name"},{label:"空间所属人",width:250,prop:"user_name"},{label:"创建时间",width:250,prop:"created_at"},{label:"操作",minWidth:200,render:function(t,r,n){return e.renderTools(r)}}]}.call(this),currentEditSpace:null,addSpaceDialogVisible:!1}},watch:{value:function(){this.search()}},methods:{callServe:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.$refs.table;return o()(s.a.mark(function r(){var n,a,i,l,o;return s.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(d.e)({size:t.page.size,page:t.page.currentPage,kw:e.value});case 2:n=r.sent,a=n.data,i=a.list,l=a.count,o=a.enable_create,e.enableCreate=o,t.page.total=l,t.list=i;case 10:case"end":return r.stop()}},r,e)}))()},search:function(){this.callServe()},addSpace:function(){this.addSpaceDialogVisible=!0},edit:function(e){this.addSpaceDialogVisible=!0,this.currentEditSpace=a()({},e)},delete:function(e){var t=this;this.$confirm("确定删除该空间吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.deleteSpace(e)}).catch(function(){})},deleteSpace:function(e){var t=this;return o()(s.a.mark(function r(){return s.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(d.b)(e.id);case 2:t.callServe(),t.$message({type:"success",message:"删除成功!"});case 4:case"end":return r.stop()}},r,t)}))()},confirm:function(e){this.currentEditSpace=null,this.callServe()},close:function(){this.currentEditSpace=null},renderEditTool:function(e){var t=this,r=this.$createElement;return e.enable_update?r("el-button",{attrs:{type:"text",size:"small",icon:"el-icon-edit"},on:{click:function(){return t.edit(a()({},e))}}},["编辑"]):null},renderDeleteTool:function(e){var t=this,r=this.$createElement;return e.enable_delete?r("el-button",{attrs:{type:"text",size:"small",icon:"el-icon-delete"},class:"user-delete",on:{click:function(){return t.delete(a()({},e))}}},["删除"]):null},renderTools:function(e){return(0,this.$createElement)("div",[this.renderEditTool(e.row),this.renderDeleteTool(e.row)])}}},v={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wl-space-list"},[r("el-form",{attrs:{inline:!0},nativeOn:{submit:function(e){e.preventDefault()}}},[r("el-form-item",[r("el-input",{staticClass:"search",attrs:{placeholder:"请输入内容",size:"small"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.search},slot:"append"})],1)],1),e._v(" "),e.enableCreate?r("el-form-item",[r("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-edit"},on:{click:e.addSpace}},[e._v("添加")])],1):e._e()],1),e._v(" "),r("wl-table",{ref:"table",attrs:{columns:e.columns},on:{callServe:e.callServe}}),e._v(" "),r("add-space-dialog",{attrs:{visible:e.addSpaceDialogVisible,space:e.currentEditSpace},on:{"update:visible":function(t){e.addSpaceDialogVisible=t},confirm:e.confirm,close:e.close}})],1)},staticRenderFns:[]};var b=r("VU/8")(h,v,!1,function(e){r("KfvI")},null,null);t.default=b.exports}});