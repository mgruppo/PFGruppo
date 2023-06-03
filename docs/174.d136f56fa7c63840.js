"use strict";(self.webpackChunk_2PFGruppo=self.webpackChunk_2PFGruppo||[]).push([[174],{9174:(so,Z,n)=>{n.r(Z),n.d(Z,{UsuariosModule:()=>ao});var h=n(6895),u=n(7155),s=n(4006),c=n(5938),o=n(4650),p=n(9549),C=n(4144),d=n(4859),v=n(2468);function b(t,i){if(1&t&&(o.TgZ(0,"mat-error"),o._uU(1),o.ALo(2,"controlErrorMessages"),o.qZA()),2&t){const e=i.$implicit;o.xp6(1),o.Oqu(o.lcZ(2,1,e))}}function x(t,i){if(1&t&&(o.TgZ(0,"mat-error"),o._uU(1),o.ALo(2,"controlErrorMessages"),o.qZA()),2&t){const e=i.$implicit;o.xp6(1),o.Oqu(o.lcZ(2,1,e))}}function y(t,i){if(1&t&&(o.TgZ(0,"mat-error"),o._uU(1),o.ALo(2,"controlErrorMessages"),o.qZA()),2&t){const e=i.$implicit;o.xp6(1),o.Oqu(o.lcZ(2,1,e))}}function N(t,i){if(1&t&&(o.TgZ(0,"mat-error"),o._uU(1),o.ALo(2,"controlErrorMessages"),o.qZA()),2&t){const e=i.$implicit;o.xp6(1),o.Oqu(o.lcZ(2,1,e))}}function F(t,i){if(1&t&&(o.TgZ(0,"mat-error"),o._uU(1),o.ALo(2,"controlErrorMessages"),o.qZA()),2&t){const e=i.$implicit;o.xp6(1),o.Oqu(o.lcZ(2,1,e))}}function q(t,i){if(1&t&&(o.TgZ(0,"mat-error"),o._uU(1),o.ALo(2,"controlErrorMessages"),o.qZA()),2&t){const e=i.$implicit;o.xp6(1),o.Oqu(o.lcZ(2,1,e))}}let g=(()=>{class t{constructor(e,r){if(this.dialogRef=e,this.data=r,this.nombreControl=new s.NI("",[s.kI.required,s.kI.minLength(3)]),this.apellidoControl=new s.NI("",[s.kI.required,s.kI.minLength(3)]),this.emailControl=new s.NI("",[s.kI.required,s.kI.email]),this.passwordControl=new s.NI("",[s.kI.required]),this.tokenControl=new s.NI("",[s.kI.required]),this.roleControl=new s.NI("",[s.kI.required]),this.usuarioForm=new s.cw({nombre:this.nombreControl,apellido:this.apellidoControl,email:this.emailControl,password:this.passwordControl,token:this.tokenControl,role:this.roleControl}),r){const a=r.usuario;this.nombreControl.setValue(a.nombre),this.apellidoControl.setValue(a.apellido),this.emailControl.setValue(a.email),this.passwordControl.setValue(a.password),this.tokenControl.setValue(a.token),this.roleControl.setValue(a.role)}}guardar(){this.usuarioForm.valid?this.dialogRef.close(this.usuarioForm.value):this.usuarioForm.markAllAsTouched()}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(c.so),o.Y36(c.WI))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-abm-usuarios"]],decls:51,vars:25,consts:[["mat-dialog-title",""],["mat-dialog-content","",1,"abm-container"],[1,"grid","formgrid",3,"formGroup"],[1,"col-12","field"],[1,"w-full"],["type","text","matInput","",3,"formControl"],[4,"ngFor","ngForOf"],["mat-dialog-actions",""],["mat-button","","mat-dialog-close",""],["mat-button","",3,"click"]],template:function(e,r){1&e&&(o.TgZ(0,"h1",0),o._uU(1,"ABM Usuarios"),o.qZA(),o.TgZ(2,"div",1)(3,"form",2)(4,"div",3)(5,"mat-form-field",4)(6,"mat-label"),o._uU(7,"Nombre"),o.qZA(),o._UZ(8,"input",5),o.YNc(9,b,3,3,"mat-error",6),o.ALo(10,"keyvalue"),o.qZA()(),o.TgZ(11,"div",3)(12,"mat-form-field",4)(13,"mat-label"),o._uU(14,"Apellido"),o.qZA(),o._UZ(15,"input",5),o.YNc(16,x,3,3,"mat-error",6),o.ALo(17,"keyvalue"),o.qZA()(),o.TgZ(18,"div",3)(19,"mat-form-field",4)(20,"mat-label"),o._uU(21,"Email"),o.qZA(),o._UZ(22,"input",5),o.YNc(23,y,3,3,"mat-error",6),o.ALo(24,"keyvalue"),o.qZA()(),o.TgZ(25,"div",3)(26,"mat-form-field",4)(27,"mat-label"),o._uU(28,"Password"),o.qZA(),o._UZ(29,"input",5),o.YNc(30,N,3,3,"mat-error",6),o.ALo(31,"keyvalue"),o.qZA()(),o.TgZ(32,"div",3)(33,"mat-form-field",4)(34,"mat-label"),o._uU(35,"Token"),o.qZA(),o._UZ(36,"input",5),o.YNc(37,F,3,3,"mat-error",6),o.ALo(38,"keyvalue"),o.qZA()(),o.TgZ(39,"div",3)(40,"mat-form-field",4)(41,"mat-label"),o._uU(42,"Rol"),o.qZA(),o._UZ(43,"input",5),o.YNc(44,q,3,3,"mat-error",6),o.ALo(45,"keyvalue"),o.qZA()()()(),o.TgZ(46,"div",7)(47,"button",8),o._uU(48,"Cancelar"),o.qZA(),o.TgZ(49,"button",9),o.NdJ("click",function(){return r.guardar()}),o._uU(50,"Guardar"),o.qZA()()),2&e&&(o.xp6(3),o.Q6J("formGroup",r.usuarioForm),o.xp6(5),o.Q6J("formControl",r.nombreControl),o.xp6(1),o.Q6J("ngForOf",o.lcZ(10,13,r.nombreControl.errors)),o.xp6(6),o.Q6J("formControl",r.apellidoControl),o.xp6(1),o.Q6J("ngForOf",o.lcZ(17,15,r.apellidoControl.errors)),o.xp6(6),o.Q6J("formControl",r.emailControl),o.xp6(1),o.Q6J("ngForOf",o.lcZ(24,17,r.emailControl.errors)),o.xp6(6),o.Q6J("formControl",r.passwordControl),o.xp6(1),o.Q6J("ngForOf",o.lcZ(31,19,r.passwordControl.errors)),o.xp6(6),o.Q6J("formControl",r.tokenControl),o.xp6(1),o.Q6J("ngForOf",o.lcZ(38,21,r.tokenControl.errors)),o.xp6(6),o.Q6J("formControl",r.roleControl),o.xp6(1),o.Q6J("ngForOf",o.lcZ(45,23,r.roleControl.errors)))},dependencies:[h.sg,s._Y,s.Fj,s.JJ,s.JL,s.oH,s.sg,p.KE,p.hX,p.TO,C.Nt,d.lW,c.ZT,c.uh,c.xY,c.H8,h.Nd,v.K],styles:[".abm-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}.abm-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] + mat-form-field[_ngcontent-%COMP%]{margin-left:8px}.abm-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:500px}.abm-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{margin:.5rem}"]}),t})();var Y=n(1135),J=n(8505),O=n(5577),k=n(4004),U=n(5698),A=n(8181),S=n(529);let T=(()=>{class t{constructor(e){this.httpClient=e,this.usuarios$=new Y.X([])}obtenerUsuarios(){return this.httpClient.get(`${A.a.apiBaseUrl}/usuarios`).pipe((0,J.b)(e=>this.usuarios$.next(e)),(0,O.z)(()=>this.usuarios$.asObservable()))}getUsuarioById(e){return this.httpClient.get(`${A.a.apiBaseUrl}/usuarios`).pipe((0,k.U)(r=>r.find(a=>a.id===e)))}crearUsuario(e){return this.usuarios$.pipe((0,U.q)(1)).subscribe({next:r=>{this.usuarios$.next([...r,{id:r.length+1,...e}])},complete:()=>{},error:()=>{}}),this.usuarios$.asObservable()}editarUsuario(e,r){return this.usuarios$.pipe((0,U.q)(1)).subscribe({next:a=>{const l=a.map(m=>m.id===e?{...m,...r}:m);this.usuarios$.next(l)},complete:()=>{},error:()=>{}}),this.usuarios$.asObservable()}eliminarUsuario(e){return this.usuarios$.pipe((0,U.q)(1)).subscribe({next:r=>{const a=r.filter(l=>l.id!==e);this.usuarios$.next(a)},complete:()=>{},error:()=>{}}),this.usuarios$.asObservable()}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(S.eN))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var f=n(6582),_=n(7392),Q=n(223);function $(t,i){1&t&&(o.TgZ(0,"th",17),o._uU(1,"Codigo"),o.qZA()),2&t&&o.Q6J("appFontSize",20)}function M(t,i){if(1&t&&(o.TgZ(0,"td",18),o._uU(1),o.qZA()),2&t){const e=i.$implicit;o.xp6(1),o.Oqu(e.id)}}function D(t,i){1&t&&(o.TgZ(0,"th",17),o._uU(1,"Nombre"),o.qZA()),2&t&&o.Q6J("appFontSize",20)}function I(t,i){if(1&t&&(o.TgZ(0,"td",18),o._uU(1),o.qZA()),2&t){const e=i.$implicit;o.xp6(1),o.hij(" ",e.nombre," ")}}function w(t,i){1&t&&(o.TgZ(0,"th",17),o._uU(1,"Apellido"),o.qZA()),2&t&&o.Q6J("appFontSize",20)}function E(t,i){if(1&t&&(o.TgZ(0,"td",18),o._uU(1),o.qZA()),2&t){const e=i.$implicit;o.xp6(1),o.hij(" ",e.apellido," ")}}function z(t,i){1&t&&(o.TgZ(0,"th",17),o._uU(1,"Email"),o.qZA()),2&t&&o.Q6J("appFontSize",20)}function L(t,i){if(1&t&&(o.TgZ(0,"td",18),o._uU(1),o.qZA()),2&t){const e=i.$implicit;o.xp6(1),o.hij(" ",e.email," ")}}function R(t,i){1&t&&(o.TgZ(0,"th",17),o._uU(1,"Detalle"),o.qZA()),2&t&&o.Q6J("appFontSize",20)}function B(t,i){if(1&t){const e=o.EpF();o.TgZ(0,"td",18)(1,"button",19),o.NdJ("click",function(){const l=o.CHM(e).$implicit,m=o.oxw();return o.KtG(m.irAlDetalle(l.id))}),o.TgZ(2,"mat-icon"),o._uU(3,"visibility"),o.qZA()()()}}function P(t,i){1&t&&(o.TgZ(0,"th",17),o._uU(1,"Editar"),o.qZA()),2&t&&o.Q6J("appFontSize",20)}function j(t,i){if(1&t){const e=o.EpF();o.TgZ(0,"td",18)(1,"button",19),o.NdJ("click",function(){const l=o.CHM(e).$implicit,m=o.oxw();return o.KtG(m.editarUsuario(l))}),o.TgZ(2,"mat-icon"),o._uU(3,"edit"),o.qZA()()()}}function G(t,i){1&t&&(o.TgZ(0,"th",17),o._uU(1,"Eliminar"),o.qZA()),2&t&&o.Q6J("appFontSize",20)}function H(t,i){if(1&t){const e=o.EpF();o.TgZ(0,"td",18)(1,"button",19),o.NdJ("click",function(){const l=o.CHM(e).$implicit,m=o.oxw();return o.KtG(m.eliminarUsuario(l))}),o.TgZ(2,"mat-icon"),o._uU(3,"close"),o.qZA()()()}}function K(t,i){1&t&&o._UZ(0,"tr",20)}function X(t,i){1&t&&o._UZ(0,"tr",21)}let V=(()=>{class t{constructor(e,r,a,l){this.usuariosService=e,this.dialog=r,this.router=a,this.activatedRoute=l,this.dataSource=new u.by,this.displayedColumns=["id","nombre","apellido","email","detalle","editar","eliminar"],this.usuariosSuscription=null}ngOnDestroy(){this.usuariosSuscription?.unsubscribe()}ngOnInit(){this.usuariosService.obtenerUsuarios().subscribe({next:e=>{this.dataSource.data=e}})}crearUsuario(){this.dialog.open(g).afterClosed().subscribe(r=>{r&&this.usuariosService.crearUsuario(r)})}editarUsuario(e){this.dialog.open(g,{data:{usuario:e}}).afterClosed().subscribe(a=>{a&&this.usuariosService.editarUsuario(e.id,a)})}eliminarUsuario(e){confirm("Est\xe1 seguro?")&&this.usuariosService.eliminarUsuario(e.id)}aplicarFiltros(e){const r=e.target?.value;this.dataSource.filter=r?.trim()?.toLowerCase()}irAlDetalle(e){this.router.navigate([e],{relativeTo:this.activatedRoute})}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(T),o.Y36(c.uw),o.Y36(f.F0),o.Y36(f.gz))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-usuarios"]],decls:34,vars:3,consts:[[1,"mb-3"],["color","primary","mat-flat-button","",3,"click"],[1,"col-md-6"],["matInput","","placeholder","Ingrese el dato a filtrar",3,"keyup"],["input",""],["mat-table","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",3,"appFontSize",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nombre"],["matColumnDef","apellido"],["matColumnDef","email"],["matColumnDef","detalle"],["matColumnDef","editar"],["matColumnDef","eliminar"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell","",3,"appFontSize"],["mat-cell",""],["mat-icon-button","",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,r){1&e&&(o.TgZ(0,"div",0)(1,"button",1),o.NdJ("click",function(){return r.crearUsuario()}),o.TgZ(2,"mat-icon"),o._uU(3,"add"),o.qZA(),o._uU(4," Agregar Usuario "),o.qZA()(),o.TgZ(5,"mat-form-field",2)(6,"mat-label"),o._uU(7,"Filtrar por"),o.qZA(),o.TgZ(8,"input",3,4),o.NdJ("keyup",function(l){return r.aplicarFiltros(l)}),o.qZA()(),o.TgZ(10,"table",5),o.ynx(11,6),o.YNc(12,$,2,1,"th",7),o.YNc(13,M,2,1,"td",8),o.BQk(),o.ynx(14,9),o.YNc(15,D,2,1,"th",7),o.YNc(16,I,2,1,"td",8),o.BQk(),o.ynx(17,10),o.YNc(18,w,2,1,"th",7),o.YNc(19,E,2,1,"td",8),o.BQk(),o.ynx(20,11),o.YNc(21,z,2,1,"th",7),o.YNc(22,L,2,1,"td",8),o.BQk(),o.ynx(23,12),o.YNc(24,R,2,1,"th",7),o.YNc(25,B,4,0,"td",8),o.BQk(),o.ynx(26,13),o.YNc(27,P,2,1,"th",7),o.YNc(28,j,4,0,"td",8),o.BQk(),o.ynx(29,14),o.YNc(30,G,2,1,"th",7),o.YNc(31,H,4,0,"td",8),o.BQk(),o.YNc(32,K,1,0,"tr",15),o.YNc(33,X,1,0,"tr",16),o.qZA()),2&e&&(o.xp6(10),o.Q6J("dataSource",r.dataSource),o.xp6(22),o.Q6J("matHeaderRowDef",r.displayedColumns),o.xp6(1),o.Q6J("matRowDefColumns",r.displayedColumns))},dependencies:[_.Hw,p.KE,p.hX,C.Nt,u.BZ,u.fO,u.as,u.w1,u.Dz,u.nj,u.ge,u.ev,u.XQ,u.Gk,d.lW,d.RK,Q.h]}),t})();var W=n(5540),oo=n(4586),to=n(9602),eo=n(3238),ro=n(7579),io=n(2722);let no=(()=>{class t{constructor(e,r){this.activatedRoute=e,this.usuariosService=r,this.destroyed$=new ro.x,this.usuariosService.getUsuarioById(parseInt(this.activatedRoute.snapshot.params.id)).pipe((0,io.R)(this.destroyed$)).subscribe(a=>this.usuario=a)}ngOnDestroy(){this.destroyed$.next(!0)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(f.gz),o.Y36(T))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-usuario-detalle"]],decls:16,vars:4,template:function(e,r){1&e&&(o.TgZ(0,"h3"),o._uU(1,"Nombre:"),o.qZA(),o.TgZ(2,"p"),o._uU(3),o.qZA(),o.TgZ(4,"h3"),o._uU(5,"Apellido:"),o.qZA(),o.TgZ(6,"p"),o._uU(7),o.qZA(),o.TgZ(8,"h3"),o._uU(9,"Rol:"),o.qZA(),o.TgZ(10,"p"),o._uU(11),o.qZA(),o.TgZ(12,"h3"),o._uU(13,"Correo Electronico:"),o.qZA(),o.TgZ(14,"p"),o._uU(15),o.qZA()),2&e&&(o.xp6(3),o.hij(" ",null==r.usuario?null:r.usuario.nombre," "),o.xp6(4),o.hij(" ",null==r.usuario?null:r.usuario.apellido," "),o.xp6(4),o.hij(" ",null==r.usuario?null:r.usuario.role," "),o.xp6(4),o.hij(" ",null==r.usuario?null:r.usuario.email," "))}}),t})(),ao=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[h.ez,oo.D,s.UX,_.Ps,p.lN,C.c,u.p0,d.ot,c.Is,to.FA,eo.XK,W.o,f.Bz.forChild([{path:"",component:V},{path:":id",component:no}])]}),t})()}}]);