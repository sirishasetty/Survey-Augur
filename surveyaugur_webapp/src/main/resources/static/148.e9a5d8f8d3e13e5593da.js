(self.webpackChunksurveyaugur_webapp=self.webpackChunksurveyaugur_webapp||[]).push([[148],{1605:(t,e,o)=>{var n=o(7816),i=o(2893),a=i;a.v1=n,a.v4=i,t.exports=a},4754:t=>{for(var e=[],o=0;o<256;++o)e[o]=(o+256).toString(16).substr(1);t.exports=function(t,o){var n=o||0;return[e[t[n++]],e[t[n++]],e[t[n++]],e[t[n++]],"-",e[t[n++]],e[t[n++]],"-",e[t[n++]],e[t[n++]],"-",e[t[n++]],e[t[n++]],"-",e[t[n++]],e[t[n++]],e[t[n++]],e[t[n++]],e[t[n++]],e[t[n++]]].join("")}},4368:t=>{var e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(e){var o=new Uint8Array(16);t.exports=function(){return e(o),o}}else{var n=new Array(16);t.exports=function(){for(var t,e=0;e<16;e++)0==(3&e)&&(t=4294967296*Math.random()),n[e]=t>>>((3&e)<<3)&255;return n}}},7816:(t,e,o)=>{var n,i,a=o(4368),r=o(4754),s=0,u=0;t.exports=function(t,e,o){var l=e&&o||0,c=e||[],p=(t=t||{}).node||n,d=void 0!==t.clockseq?t.clockseq:i;if(null==p||null==d){var m=a();null==p&&(p=n=[1|m[0],m[1],m[2],m[3],m[4],m[5]]),null==d&&(d=i=16383&(m[6]<<8|m[7]))}var g=void 0!==t.msecs?t.msecs:(new Date).getTime(),h=void 0!==t.nsecs?t.nsecs:u+1,f=g-s+(h-u)/1e4;if(f<0&&void 0===t.clockseq&&(d=d+1&16383),(f<0||g>s)&&void 0===t.nsecs&&(h=0),h>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");s=g,u=h,i=d;var Z=(1e4*(268435455&(g+=122192928e5))+h)%4294967296;c[l++]=Z>>>24&255,c[l++]=Z>>>16&255,c[l++]=Z>>>8&255,c[l++]=255&Z;var q=g/4294967296*1e4&268435455;c[l++]=q>>>8&255,c[l++]=255&q,c[l++]=q>>>24&15|16,c[l++]=q>>>16&255,c[l++]=d>>>8|128,c[l++]=255&d;for(var b=0;b<6;++b)c[l+b]=p[b];return e||r(c)}},2893:(t,e,o)=>{var n=o(4368),i=o(4754);t.exports=function(t,e,o){var a=e&&o||0;"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null);var r=(t=t||{}).random||(t.rng||n)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e)for(var s=0;s<16;++s)e[a+s]=r[s];return e||i(r)}},1148:(t,e,o)=>{"use strict";o.r(e),o.d(e,{questiongroupsModule:()=>rt});var n=o(8583),i=o(8295),a=o(4655),r=o(6461);class s{}var u=o(7716),l=o(205),c=o(5304),p=o(1841),d=o(2199);let m=(()=>{class t{constructor(t,e){this.http=t,this.userinfo=e,this.userId="74ba1ba6-9cc4-4737-953e-a96fd2df8d70",this.save="/surveyauthor/api/v1/questiongroups/users/",this.getQuesGrpByCreator="/surveyauthor/api/v1/questiongroups/users/",this.updateqQesGrp="/surveyauthor/api/v1//questiongroups/",this.getQuesGrpByQId="/surveyauthor/api/v1/questiongroups/",this.getQuestionByQuesGrpId="/surveyauthor/api/v1/questions/questiongroups/",this.deleteQuesByQuesId="/surveyauthor/api/v1/questions/",this.updateQuesByQuesId="/surveyauthor/api/v1/questions/{question_id}"}getByUserId(){return this.http.get(this.getQuesGrpByCreator+this.userId).pipe((0,c.K)(this.handleError))}getByQuesGrpId(t){return this.http.get(this.getQuesGrpByQId+t).pipe((0,c.K)(this.handleError))}saveQuestionGrp(t){return this.http.post(this.save+this.userId,t).pipe((0,c.K)(this.handleError))}updateQuesGrp(t,e){return this.http.put(this.updateqQesGrp+t,e).pipe((0,c.K)(this.handleError))}getQuestionsByQuesGrpId(t){return this.http.get(this.getQuestionByQuesGrpId+t).pipe((0,c.K)(this.handleError))}deleteQuestionById(t){return this.http.delete(this.deleteQuesByQuesId+t).pipe((0,c.K)(this.handleError))}updateQuestionById(t,e){return this.http.put(this.updateQuesByQuesId+t,e).pipe((0,c.K)(this.handleError))}handleError(t){return(0,l._)(t.status)}}return t.\u0275fac=function(e){return new(e||t)(u.LFG(p.eN),u.LFG(d._))},t.\u0275prov=u.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var g=o(2238),h=o(3679),f=o(3166),Z=o(8341),q=o(1095),b=o(6627);function v(t,e){1&t&&(u.TgZ(0,"mat-icon",18),u._uU(1,"cancel"),u.qZA())}function C(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"mat-chip",16),u.NdJ("removed",function(){const e=u.CHM(t).$implicit;return u.oxw().remove(e)}),u._uU(1),u.YNc(2,v,2,0,"mat-icon",17),u.qZA()}if(2&t){const t=e.$implicit,o=u.oxw();u.Q6J("selectable",o.selectable)("removable",o.removable),u.xp6(1),u.hij(" ",t," "),u.xp6(1),u.Q6J("ngIf",o.removable)}}let w=(()=>{class t{constructor(t,e){this.quesGrpService=t,this.router=e,this.quesGrp=new s,this.selectable=!0,this.removable=!0,this.addOnBlur=!0,this.separatorKeysCodes=[r.K5,r.OC],this.tags=[]}add(t){const e=(t.value||"").trim();e&&this.tags.push(e),t.chipInput.clear()}remove(t){const e=this.tags.indexOf(t);e>=0&&this.tags.splice(e,1)}ngOnInit(){}getData(t){this.quesGrp.tags=this.tags,this.quesGrpService.saveQuestionGrp(this.quesGrp).subscribe(t=>{console.log(t)},t=>{console.log(t),this.router.navigateByUrl("/error",{state:{errorCode:t}})})}}return t.\u0275fac=function(e){return new(e||t)(u.Y36(m),u.Y36(a.F0))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-addquestiongroup"]],decls:28,vars:6,consts:[["mat-dialog-title","",2,"background-color","#f7703f","text-align","center"],[1,"mat-typography",2,"height","500px","width","500px"],[1,"example-form",3,"ngSubmit"],["basicForm","ngForm"],["cellspacing","0",1,"example-full-width",2,"margin-top","30px"],["appearance","fill",1,"example-full-width"],["matInput","","type","text","name","questionGroupName","id","name","required","",3,"ngModel","ngModelChange"],["name","ngModel"],["appearance","fill",1,"example-chip-list"],["aria-label","Tag selection"],["chipList",""],[3,"selectable","removable","removed",4,"ngFor","ngForOf"],["type","text","ngModel","","name","questionGrouptags","placeholder","New Tag",3,"matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur","matChipInputTokenEnd"],["align","end"],["mat-button","","color","warn","mat-dialog-close",""],["type","submit","mat-button","","color","primary","cdkFocusInitial","",3,"mat-dialog-close"],[3,"selectable","removable","removed"],["matChipRemove","",4,"ngIf"],["matChipRemove",""]],template:function(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"h2",0),u._uU(1,"ADD QuestionGroup"),u.qZA(),u._UZ(2,"hr"),u.TgZ(3,"mat-dialog-content",1),u.TgZ(4,"form",2,3),u.NdJ("ngSubmit",function(){u.CHM(t);const o=u.MAs(5);return e.getData(o.value)}),u.TgZ(6,"table",4),u.TgZ(7,"tr"),u.TgZ(8,"td"),u.TgZ(9,"mat-form-field",5),u.TgZ(10,"mat-label"),u._uU(11,"QuestionGroup Name:"),u.qZA(),u.TgZ(12,"input",6,7),u.NdJ("ngModelChange",function(t){return e.quesGrp.name=t}),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(14,"tr"),u.TgZ(15,"td"),u.TgZ(16,"mat-form-field",8),u.TgZ(17,"mat-label"),u._uU(18,"Question Tags"),u.qZA(),u.TgZ(19,"mat-chip-list",9,10),u.YNc(21,C,3,4,"mat-chip",11),u.TgZ(22,"input",12),u.NdJ("matChipInputTokenEnd",function(t){return e.add(t)}),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(23,"mat-dialog-actions",13),u.TgZ(24,"button",14),u._uU(25,"Cancel"),u.qZA(),u.TgZ(26,"button",15),u._uU(27,"Submit"),u.qZA(),u.qZA(),u.qZA(),u.qZA()}if(2&t){const t=u.MAs(20);u.xp6(12),u.Q6J("ngModel",e.quesGrp.name),u.xp6(9),u.Q6J("ngForOf",e.tags),u.xp6(1),u.Q6J("matChipInputFor",t)("matChipInputSeparatorKeyCodes",e.separatorKeysCodes)("matChipInputAddOnBlur",e.addOnBlur),u.xp6(4),u.Q6J("mat-dialog-close",!0)}},directives:[g.uh,g.xY,h._Y,h.JL,h.F,i.KE,i.hX,f.Nt,h.Fj,h.Q7,h.JJ,h.On,Z.qn,n.sg,Z.oH,g.H8,q.lW,g.ZT,Z.HS,n.O5,b.Hw,Z.qH],styles:[".example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%;font-size:medium;color:#f7703f}td[_ngcontent-%COMP%]{padding-right:8px}.example-chip-list[_ngcontent-%COMP%]{width:100%}"]}),t})();var y=o(2789);function x(t,e){1&t&&(u.TgZ(0,"mat-header-cell",14),u._uU(1," S No. "),u.qZA())}function A(t,e){if(1&t&&(u.TgZ(0,"mat-cell",15),u.TgZ(1,"b"),u._uU(2),u.qZA(),u.qZA()),2&t){const t=e.index;u.xp6(2),u.Oqu(t+1)}}function T(t,e){1&t&&(u.TgZ(0,"mat-header-cell",14),u._uU(1," QuestionGroup Name "),u.qZA())}const _=function(t){return["questiongrouphome",t]};function Q(t,e){if(1&t&&(u.TgZ(0,"mat-cell",16),u.TgZ(1,"a",17),u._uU(2),u.qZA(),u._UZ(3,"router-outlet"),u.qZA()),2&t){const t=e.$implicit;u.xp6(1),u.Q6J("routerLink",u.VKq(2,_,t.questionGroupId)),u.xp6(1),u.Oqu(t.name)}}function O(t,e){1&t&&(u.TgZ(0,"mat-header-cell",14),u._uU(1," Created On "),u.qZA())}function I(t,e){if(1&t&&(u.TgZ(0,"mat-cell",16),u._uU(1),u.qZA()),2&t){const t=e.$implicit;u.xp6(1),u.hij(" ",t.createdOn," ")}}function U(t,e){1&t&&u._UZ(0,"mat-header-row")}function M(t,e){1&t&&u._UZ(0,"mat-row")}function k(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"div"),u.TgZ(1,"h2"),u._uU(2,"QuestionGroup-Home "),u.qZA(),u._UZ(3,"hr"),u.TgZ(4,"div",2),u.TgZ(5,"mat-table",3),u._uU(6,"--\x3e "),u.ynx(7,4),u.YNc(8,x,2,0,"mat-header-cell",5),u.YNc(9,A,3,1,"mat-cell",6),u.BQk(),u.ynx(10,7),u.YNc(11,T,2,0,"mat-header-cell",5),u.YNc(12,Q,4,4,"mat-cell",8),u.BQk(),u.ynx(13,9),u.YNc(14,O,2,0,"mat-header-cell",5),u.YNc(15,I,2,1,"mat-cell",8),u.BQk(),u.YNc(16,U,1,0,"mat-header-row",10),u.YNc(17,M,1,0,"mat-row",11),u.qZA(),u.qZA(),u.TgZ(18,"div",12),u.TgZ(19,"button",13),u.NdJ("click",function(){return u.CHM(t),u.oxw().openDialog()}),u.TgZ(20,"mat-icon"),u._uU(21,"add"),u.qZA(),u.qZA(),u.qZA(),u._UZ(22,"router-outlet"),u.qZA()}if(2&t){const t=u.oxw();u.xp6(5),u.Q6J("dataSource",t.dataSource),u.xp6(11),u.Q6J("matHeaderRowDef",t.displayedColumns),u.xp6(1),u.Q6J("matRowDefColumns",t.displayedColumns)}}function G(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"div"),u.TgZ(1,"h2"),u._uU(2,"QuestionGroup-Home "),u.qZA(),u._UZ(3,"hr"),u._UZ(4,"br"),u._UZ(5,"br"),u._UZ(6,"br"),u.TgZ(7,"div"),u.TgZ(8,"h2",18),u._uU(9,"Create Your First QuestionGroup"),u.qZA(),u.qZA(),u._UZ(10,"br"),u._UZ(11,"br"),u._UZ(12,"br"),u.TgZ(13,"div",19),u.TgZ(14,"div",20),u.TgZ(15,"button",21),u.NdJ("click",function(){return u.CHM(t),u.oxw().openDialog()}),u.TgZ(16,"mat-icon",22),u._uU(17,"add"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA()}}let B=(()=>{class t{constructor(t,e,o){this.dialog=t,this.router=e,this.questionGrpService=o,this.questionGroups=[],this.position=1,this.displayedColumns=["position","name","createdOn"]}ngOnInit(){this.getData()}openDialog(){this.dialog.open(w).afterClosed().subscribe(t=>{console.log(`Dialog result: ${t}`),this.getData(),window.location.reload()})}getData(){this.questionGrpService.getByUserId().subscribe(t=>{this.questionGroups=t.result,console.log(t),console.log(this.questionGroups),this.dataSource=new y.by(this.questionGroups)},t=>{console.log(t),this.router.navigateByUrl("/error",{state:{errorCode:t}})})}}return t.\u0275fac=function(e){return new(e||t)(u.Y36(g.uw),u.Y36(a.F0),u.Y36(m))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-questiongroups"]],inputs:{updateQuesGrp:"updateQuesGrp"},decls:4,vars:2,consts:[[4,"ngIf","ngIfElse"],["elseBlock",""],[2,"margin-top","20px"],[1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","position"],["class","tableHeader",4,"matHeaderCellDef"],["class","change","style","font-size: medium;width: 20px",4,"matCellDef"],["matColumnDef","name"],["style","font-size: medium",4,"matCellDef"],["matColumnDef","createdOn"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],[1,"downright"],["mat-fab","","title","Click to ADD QuestionGroup",2,"background-color","#f7703f",3,"click"],[1,"tableHeader"],[1,"change",2,"font-size","medium","width","20px"],[2,"font-size","medium"],[2,"text-decoration","none",3,"routerLink"],[2,"text-align","center"],[1,"container"],[1,"center"],["mat-fab","","title","Click to ADD QuestionGroup",2,"background-color","#f7703f","height","130px","width","130px",3,"click"],[2,"font-size","30px","text-align","center"]],template:function(t,e){if(1&t&&(u.TgZ(0,"div"),u.YNc(1,k,23,3,"div",0),u.YNc(2,G,18,0,"ng-template",null,1,u.W1O),u.qZA()),2&t){const t=u.MAs(3);u.xp6(1),u.Q6J("ngIf",e.dataSource.filteredData.length>0)("ngIfElse",t)}},directives:[n.O5,y.BZ,y.w1,y.fO,y.Dz,y.as,y.nj,q.lW,b.Hw,a.lC,y.ge,y.ev,a.yS,y.XQ,y.Gk],styles:[".container[_ngcontent-%COMP%]{height:200px;position:relative}.center[_ngcontent-%COMP%]{margin:0;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.demo-table[_ngcontent-%COMP%]{width:100%}.downright[_ngcontent-%COMP%]{position:absolute;bottom:100px;right:40px}.tableHeader[_ngcontent-%COMP%]{background-color:#1e90ff;font-size:medium;justify-content:center}.myIcons[_ngcontent-%COMP%]{cursor:pointer;padding:3px}.mat-column-position[_ngcontent-%COMP%]{flex:0 0 5%!important;width:5%!important}.mat-column-createdOn[_ngcontent-%COMP%], .mat-column-position[_ngcontent-%COMP%]{word-wrap:break-word!important;white-space:unset!important;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;-webkit-hyphens:auto;hyphens:auto}.mat-column-createdOn[_ngcontent-%COMP%]{flex:0 0 20%!important;width:20%!important}table[_ngcontent-%COMP%]{font-family:arial,sans-serif;border-collapse:collapse;width:100%;margin-top:10px}th[_ngcontent-%COMP%]{text-align:left;padding:15px;background-color:#f5c17d}td[_ngcontent-%COMP%]{border:1px solid #ddd;text-align:left;padding:8px}tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#ddd}"]}),t})();class N{constructor(t,e,o,n,i,a,r,s,u,l){}}var J=o(1605),S=o(2613);function D(t,e){1&t&&(u.TgZ(0,"mat-icon",20),u._uU(1,"cancel"),u.qZA())}function Y(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"mat-chip",18),u.NdJ("removed",function(){const e=u.CHM(t).$implicit;return u.oxw().remove(e)}),u._uU(1),u.YNc(2,D,2,0,"mat-icon",19),u.qZA()}if(2&t){const t=e.$implicit,o=u.oxw();u.Q6J("selectable",o.selectable)("removable",o.removable),u.xp6(1),u.hij(" ",t," "),u.xp6(1),u.Q6J("ngIf",o.removable)}}function E(t,e){1&t&&(u.TgZ(0,"mat-icon",20),u._uU(1,"cancel"),u.qZA())}function F(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"mat-chip",18),u.NdJ("removed",function(){const e=u.CHM(t).$implicit;return u.oxw(2).removeOption(e)}),u._uU(1),u.YNc(2,E,2,0,"mat-icon",19),u.qZA()}if(2&t){const t=e.$implicit,o=u.oxw(2);u.Q6J("selectable",o.selectable)("removable",o.removable),u.xp6(1),u.hij(" ",t," "),u.xp6(1),u.Q6J("ngIf",o.removable)}}function P(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"div",21),u.TgZ(1,"mat-form-field",22),u.TgZ(2,"mat-label"),u._uU(3,"Options"),u.qZA(),u.TgZ(4,"mat-chip-list",23,24),u.YNc(6,F,3,4,"mat-chip",7),u.TgZ(7,"input",25),u.NdJ("matChipInputTokenEnd",function(e){return u.CHM(t),u.oxw().addOption(e)}),u.qZA(),u.qZA(),u.qZA(),u.qZA()}if(2&t){const t=u.MAs(5),e=u.oxw();u.xp6(6),u.Q6J("ngForOf",e.options),u.xp6(1),u.Q6J("matChipInputFor",t)("matChipInputSeparatorKeyCodes",e.keyCode)("matChipInputAddOnBlur",e.addOnBlur)}}let H=(()=>{class t{constructor(t,e,o,n,i){this.http=t,this.userinfo=e,this.dialogRef=o,this.data=n,this.router=i,this.selectable=!0,this.removable=!0,this.addOnBlur=!0,this.separatorKeysCodes=[r.K5,r.OC],this.keyCode=[r.K5,r.OC],this.tags=[],this.options=[],this.questionGrpId=this.data.quesGroupId,console.log("in quest"),console.log(this.questionGrpId)}onoptions(){this.button.get("subjective").enable(),this.isoptions=!1}ngOnInit(){}onNoClick(){this.dialogRef.close()}add(t){const e=(t.value||"").trim();e&&this.tags.push(e),t.chipInput.clear()}remove(t){const e=this.tags.indexOf(t);e>=0&&this.tags.splice(e,1)}addOption(t){const e=(t.value||"").trim();e&&this.options.push(e),t.chipInput.clear()}removeOption(t){const e=this.options.indexOf(t);e>=0&&this.options.splice(e,1)}save(t){console.log(t.value);let e=t.value;this.quest=new N,this.quest.questionBody=e.q,this.quest.questionType=e.questiontype.toUpperCase(),this.quest.tags=this.tags,this.quest.options=this.options,this.quest.createdBy="74ba1ba6-9cc4-4737-953e-a96fd2df8d70",this.quest.id=(0,J.v4)(),this.quest.createdOnTS=new Date,this.quest.updatedBy=null,this.quest.updatedOnTS=new Date,this.quest.questionGroupId=this.questionGrpId,console.log(this.quest),this.http.post("/surveyauthor/api/v1/questions",this.quest).pipe((0,c.K)(this.handleError)).subscribe(t=>{console.log(t)},t=>{console.log(t),this.router.navigateByUrl("/error",{state:{errorCode:t}})}),this.dialogRef.close()}handleError(t){return(0,l._)(t.status)}}return t.\u0275fac=function(e){return new(e||t)(u.Y36(p.eN),u.Y36(d._),u.Y36(g.so),u.Y36(g.WI),u.Y36(a.F0))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-questions"]],decls:37,vars:7,consts:[[1,"mat-typography"],["qinfo","ngForm"],["appearance","outline",1,"example-full-width"],["matInput","","type","text","placeholder","Type your Question","name","questionBdy","ngModel","","maxlength","100","required","","name","q"],["appearance","outline",1,"example-chip-list"],["aria-label","tag selection"],["chipLis",""],[3,"selectable","removable","removed",4,"ngFor","ngForOf"],["placeholder","New tag...","name","tagList",3,"matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur","matChipInputTokenEnd"],[1,"buttons",2,"padding-bottom","10px"],["aria-label","Select an option","name","questiontype",3,"ngModel","ngModelChange"],["value","Multiple_SELECT"],["value","SINGLE_SELECT"],["value","SUBJECTIVE"],["class","option",4,"ngIf"],[1,"example-button-row"],["mat-raised-button","","color","warn",3,"click"],["mat-raised-button","","color","primary",3,"disabled","click"],[3,"selectable","removable","removed"],["matChipRemove","",4,"ngIf"],["matChipRemove",""],[1,"option"],["appearance","outline",1,"option-chip-list"],["aria-label","option selection"],["chipList",""],["placeholder","New Option...","name","otionList",3,"matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur","matChipInputTokenEnd"]],template:function(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"mat-dialog-content",0),u.TgZ(1,"form",null,1),u.TgZ(3,"h1"),u._uU(4,"Create Questions"),u.qZA(),u.TgZ(5,"div"),u.TgZ(6,"mat-form-field",2),u.TgZ(7,"mat-label"),u._uU(8,"Question"),u.qZA(),u._UZ(9,"input",3),u.TgZ(10,"mat-hint"),u._uU(11,"Upto 100 Characers allowed"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(12,"div"),u.TgZ(13,"mat-form-field",4),u.TgZ(14,"mat-label"),u._uU(15,"Enter tags to search"),u.qZA(),u.TgZ(16,"mat-chip-list",5,6),u.YNc(18,Y,3,4,"mat-chip",7),u.TgZ(19,"input",8),u.NdJ("matChipInputTokenEnd",function(t){return e.add(t)}),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(20,"div"),u.TgZ(21,"div",9),u.TgZ(22,"mat-label"),u._uU(23,"Question Type"),u.qZA(),u.qZA(),u.TgZ(24,"mat-radio-group",10),u.NdJ("ngModelChange",function(t){return e.choice=t}),u.TgZ(25,"mat-radio-button",11),u._uU(26,"Multiple Choice Questions"),u.qZA(),u.TgZ(27,"mat-radio-button",12),u._uU(28,"Single Select"),u.qZA(),u.TgZ(29,"mat-radio-button",13),u._uU(30,"Subjectives"),u.qZA(),u.qZA(),u.qZA(),u.YNc(31,P,8,4,"div",14),u.TgZ(32,"div",15),u.TgZ(33,"button",16),u.NdJ("click",function(){return e.onNoClick()}),u._uU(34,"Cancel"),u.qZA(),u.TgZ(35,"button",17),u.NdJ("click",function(){u.CHM(t);const o=u.MAs(2);return e.save(o)}),u._uU(36,"Save"),u.qZA(),u.qZA(),u.qZA(),u.qZA()}if(2&t){const t=u.MAs(2),o=u.MAs(17);u.xp6(18),u.Q6J("ngForOf",e.tags),u.xp6(1),u.Q6J("matChipInputFor",o)("matChipInputSeparatorKeyCodes",e.separatorKeysCodes)("matChipInputAddOnBlur",e.addOnBlur),u.xp6(5),u.Q6J("ngModel",e.choice),u.xp6(7),u.Q6J("ngIf","Multiple_SELECT"==e.choice||"SINGLE_SELECT"==e.choice),u.xp6(4),u.Q6J("disabled",!t.valid)}},directives:[g.xY,h._Y,h.JL,h.F,i.KE,i.hX,f.Nt,h.Fj,h.JJ,h.On,h.nD,h.Q7,i.bx,Z.qn,n.sg,Z.oH,S.VQ,S.U0,n.O5,q.lW,Z.HS,b.Hw,Z.qH],styles:["form[_ngcontent-%COMP%]{margin:50px}.example-chip-list[_ngcontent-%COMP%], .example-full-width[_ngcontent-%COMP%]{width:80%}.mat-radio-button[_ngcontent-%COMP%] ~ .mat-radio-button[_ngcontent-%COMP%]{margin-left:16px}.option-chip-list[_ngcontent-%COMP%]{width:80%;margin-bottom:20px}.option[_ngcontent-%COMP%]{margin-top:50px}.example-button-row[_ngcontent-%COMP%]{width:80%;display:flex;margin-top:20px;justify-content:space-between}"]}),t})();var z=o(1436);function K(t,e){if(1&t&&(u.TgZ(0,"i",3),u._uU(1),u.qZA()),2&t){const t=e.$implicit;u.xp6(1),u.hij(" ",t,", ")}}function j(t,e){1&t&&(u.TgZ(0,"mat-header-cell",18),u._uU(1," SNo. "),u.qZA())}function R(t,e){if(1&t&&(u.TgZ(0,"mat-cell",19),u.TgZ(1,"b"),u._uU(2),u.qZA(),u.qZA()),2&t){const t=e.index;u.xp6(2),u.Oqu(t+1)}}function L(t,e){1&t&&(u.TgZ(0,"mat-header-cell",18),u._uU(1," Question Body "),u.qZA())}function $(t,e){if(1&t&&(u.TgZ(0,"mat-cell",3),u._uU(1),u.qZA()),2&t){const t=e.$implicit;u.xp6(1),u.hij("",t.questionBody," ")}}function X(t,e){1&t&&(u.TgZ(0,"mat-header-cell",18),u._uU(1," Actions "),u.qZA())}function V(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"mat-cell"),u.TgZ(1,"mat-icon",20),u.NdJ("click",function(){const e=u.CHM(t).$implicit;return u.oxw(2).deleteQuestion(e.id)}),u._uU(2,"delete"),u.qZA(),u.qZA()}}function W(t,e){1&t&&u._UZ(0,"mat-header-row")}function tt(t,e){1&t&&u._UZ(0,"mat-row")}function et(t,e){if(1&t&&(u.TgZ(0,"div"),u.TgZ(1,"mat-table",8),u.ynx(2,9),u.YNc(3,j,2,0,"mat-header-cell",10),u.YNc(4,R,3,1,"mat-cell",11),u.BQk(),u.ynx(5,12),u.YNc(6,L,2,0,"mat-header-cell",10),u.YNc(7,$,2,1,"mat-cell",13),u.BQk(),u.ynx(8,14),u.YNc(9,X,2,0,"mat-header-cell",10),u.YNc(10,V,3,0,"mat-cell",15),u.BQk(),u.YNc(11,W,1,0,"mat-header-row",16),u.YNc(12,tt,1,0,"mat-row",17),u.qZA(),u.qZA()),2&t){const t=u.oxw();u.xp6(1),u.Q6J("dataSource",t.dataSource),u.xp6(10),u.Q6J("matHeaderRowDef",t.displayedColumns),u.xp6(1),u.Q6J("matRowDefColumns",t.displayedColumns)}}function ot(t,e){1&t&&(u._UZ(0,"br"),u.TgZ(1,"h3"),u._uU(2,"No Questions Found!!!!!!"),u.qZA())}const nt=[{path:"",component:B},{path:"questiongrouphome/:id",component:(()=>{class t{constructor(t,e,o,n){this.dialog=t,this.questionGroupService=e,this.router=o,this.routeTo=n,this.quesGrp=new s,this.questions=[],this.displayedColumns=["position","questionBody","Actions"]}ngOnInit(){this.questionGroupService.getByQuesGrpId(this.router.snapshot.params.id).subscribe(t=>{this.quesGrp=t.result,this.quesGroupId=this.router.snapshot.params.id,console.log(this.quesGroupId),console.log("hdgsjdjsd"),console.log(this.quesGrp)}),this.getAllQuestionByQuesGrpId()}getAllQuestionByQuesGrpId(){this.questionGroupService.getQuestionsByQuesGrpId(this.router.snapshot.params.id).subscribe(t=>{this.questions=t.result,console.log(this.questions),this.dataSource=new y.by(this.questions)},t=>{console.log(t),this.routeTo.navigateByUrl("/error",{state:{errorCode:t}})})}deleteQuestion(t){this.questionGroupService.deleteQuestionById(t).subscribe(t=>{console.log(t),this.getAllQuestionByQuesGrpId(),window.location.reload()},t=>{console.log(t),this.routeTo.navigateByUrl("/error",{state:{errorCode:t}})})}openDialog(){this.dialog.open(H,{width:"45%",data:{quesGroupId:this.quesGroupId}}).afterClosed().subscribe(t=>{console.log("The dialog was closed"),this.getAllQuestionByQuesGrpId(),window.location.reload()})}}return t.\u0275fac=function(e){return new(e||t)(u.Y36(g.uw),u.Y36(m),u.Y36(a.gz),u.Y36(a.F0))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-questiongrouphome"]],decls:24,vars:5,consts:[[1,"contents"],[1,"txtSize"],["style","font-size: medium;",4,"ngFor","ngForOf"],[2,"font-size","medium"],[4,"ngIf","ngIfElse"],["elseBlock",""],[1,"downright"],["mat-fab","","matTooltip","Click to Add Questions",2,"background-color","#f7703f",3,"click"],[1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","position"],["class","tableHeader",4,"matHeaderCellDef"],["class","change","style","font-size: medium;width: 20px",4,"matCellDef"],["matColumnDef","questionBody"],["style","font-size: medium",4,"matCellDef"],["matColumnDef","Actions"],[4,"matCellDef"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],[1,"tableHeader"],[1,"change",2,"font-size","medium","width","20px"],["matTooltip","Delete",1,"myIcons",3,"click"]],template:function(t,e){if(1&t&&(u.TgZ(0,"div"),u.TgZ(1,"h2"),u._uU(2),u.qZA(),u._UZ(3,"hr"),u.qZA(),u.TgZ(4,"div",0),u._UZ(5,"br"),u.TgZ(6,"div"),u.TgZ(7,"b",1),u._uU(8,"Question Group Tags :"),u.qZA(),u.YNc(9,K,2,1,"i",2),u.qZA(),u._UZ(10,"br"),u.TgZ(11,"div"),u.TgZ(12,"b",1),u._uU(13,"Question Group creation Date :"),u.qZA(),u.TgZ(14,"i",3),u._uU(15),u.qZA(),u.qZA(),u.qZA(),u.YNc(16,et,13,3,"div",4),u._UZ(17,"router-outlet"),u.YNc(18,ot,3,0,"ng-template",null,5,u.W1O),u.TgZ(20,"div",6),u.TgZ(21,"button",7),u.NdJ("click",function(){return e.openDialog()}),u.TgZ(22,"mat-icon"),u._uU(23,"add"),u.qZA(),u.qZA(),u.qZA()),2&t){const t=u.MAs(19);u.xp6(2),u.Oqu(e.quesGrp.name),u.xp6(7),u.Q6J("ngForOf",e.quesGrp.tags),u.xp6(6),u.hij(" ",e.quesGrp.createdOn," "),u.xp6(1),u.Q6J("ngIf",e.dataSource.filteredData.length>0)("ngIfElse",t)}},directives:[n.sg,n.O5,a.lC,q.lW,z.gM,b.Hw,y.BZ,y.w1,y.fO,y.Dz,y.as,y.nj,y.ge,y.ev,y.XQ,y.Gk],styles:[".contents[_ngcontent-%COMP%]{height:20%;width:100%;background-color:#d3d3d3}.txtSize[_ngcontent-%COMP%]{font-size:medium;padding-left:40px}.myIcons[_ngcontent-%COMP%]{cursor:pointer;padding:3px}.tableHeader[_ngcontent-%COMP%]{background-color:#1e90ff;font-size:medium;justify-content:center}.mat-column-position[_ngcontent-%COMP%]{word-wrap:break-word!important;white-space:unset!important;flex:0 0 5%!important;width:5%!important;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;-webkit-hyphens:auto;hyphens:auto}.mat-column-Actions[_ngcontent-%COMP%], .mat-column-position[_ngcontent-%COMP%], .mat-column-questionBody[_ngcontent-%COMP%]{justify-content:center}.mat-column-Actions[_ngcontent-%COMP%]{word-wrap:break-word!important;white-space:unset!important;flex:0 0 10%!important;width:10%!important;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;-webkit-hyphens:auto;hyphens:auto}.mat-elevation-z8[_ngcontent-%COMP%]{margin-left:30px;margin-right:30px;margin-top:20px}.downright[_ngcontent-%COMP%]{position:absolute;bottom:100px;right:40px}ul[_ngcontent-%COMP%]{list-style-type:none;margin:0;padding:0;overflow:hidden}li[_ngcontent-%COMP%]{float:left}li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;text-align:center;padding:16px;text-decoration:none}"]}),t})()},{path:"questions",component:H}];let it=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[a.Bz.forChild(nt)],a.Bz]}),t})();var at=o(3738);let rt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[n.ez,it,q.ot,b.Ps,g.Is,h.UX,i.lN,at.QW,f.c,Z.Hi,h.u5,y.p0,z.AV,a.Bz,p.JF,S.Fk],a.Bz]}),t})()}}]);