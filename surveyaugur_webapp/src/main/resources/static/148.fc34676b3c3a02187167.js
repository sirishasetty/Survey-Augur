(self.webpackChunksurveyaugur_webapp=self.webpackChunksurveyaugur_webapp||[]).push([[148],{1605:(t,e,o)=>{var n=o(7816),i=o(2893),a=i;a.v1=n,a.v4=i,t.exports=a},4754:t=>{for(var e=[],o=0;o<256;++o)e[o]=(o+256).toString(16).substr(1);t.exports=function(t,o){var n=o||0;return[e[t[n++]],e[t[n++]],e[t[n++]],e[t[n++]],"-",e[t[n++]],e[t[n++]],"-",e[t[n++]],e[t[n++]],"-",e[t[n++]],e[t[n++]],"-",e[t[n++]],e[t[n++]],e[t[n++]],e[t[n++]],e[t[n++]],e[t[n++]]].join("")}},4368:t=>{var e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(e){var o=new Uint8Array(16);t.exports=function(){return e(o),o}}else{var n=new Array(16);t.exports=function(){for(var t,e=0;e<16;e++)0==(3&e)&&(t=4294967296*Math.random()),n[e]=t>>>((3&e)<<3)&255;return n}}},7816:(t,e,o)=>{var n,i,a=o(4368),s=o(4754),r=0,u=0;t.exports=function(t,e,o){var l=e&&o||0,p=e||[],c=(t=t||{}).node||n,d=void 0!==t.clockseq?t.clockseq:i;if(null==c||null==d){var m=a();null==c&&(c=n=[1|m[0],m[1],m[2],m[3],m[4],m[5]]),null==d&&(d=i=16383&(m[6]<<8|m[7]))}var g=void 0!==t.msecs?t.msecs:(new Date).getTime(),h=void 0!==t.nsecs?t.nsecs:u+1,f=g-r+(h-u)/1e4;if(f<0&&void 0===t.clockseq&&(d=d+1&16383),(f<0||g>r)&&void 0===t.nsecs&&(h=0),h>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");r=g,u=h,i=d;var Z=(1e4*(268435455&(g+=122192928e5))+h)%4294967296;p[l++]=Z>>>24&255,p[l++]=Z>>>16&255,p[l++]=Z>>>8&255,p[l++]=255&Z;var q=g/4294967296*1e4&268435455;p[l++]=q>>>8&255,p[l++]=255&q,p[l++]=q>>>24&15|16,p[l++]=q>>>16&255,p[l++]=d>>>8|128,p[l++]=255&d;for(var b=0;b<6;++b)p[l+b]=c[b];return e||s(p)}},2893:(t,e,o)=>{var n=o(4368),i=o(4754);t.exports=function(t,e,o){var a=e&&o||0;"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null);var s=(t=t||{}).random||(t.rng||n)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,e)for(var r=0;r<16;++r)e[a+r]=s[r];return e||i(s)}},1148:(t,e,o)=>{"use strict";o.r(e),o.d(e,{questiongroupsModule:()=>tt});var n=o(8583),i=o(8295),a=o(4655),s=o(6461);class r{}var u=o(7716),l=o(1841),p=o(2199);let c=(()=>{class t{constructor(t,e){this.http=t,this.userinfo=e,this.save="/surveyauthor/api/v1/questiongroups/users/",this.getQuesGrpByCreator="/surveyauthor/api/v1/questiongroups/users/",this.updateqQesGrp="/surveyauthor/api/v1//questiongroups/",this.getQuesGrpByQId="/surveyauthor/api/v1/questiongroups/",this.getQuestionByQuesGrpId="/surveyauthor/api/v1/questions/questiongroups/",this.deleteQuesByQuesId="/surveyauthor/api/v1/questions/",this.updateQuesByQuesId="/surveyauthor/api/v1/questions/{question_id}"}getByUserId(){return this.http.get(this.getQuesGrpByCreator+this.userinfo.userId)}getByQuesGrpId(t){return this.http.get(this.getQuesGrpByQId+t)}saveQuestionGrp(t){return this.http.post(this.save+this.userinfo.userId,t)}updateQuesGrp(t,e){return this.http.put(this.updateqQesGrp+t,e)}getQuestionsByQuesGrpId(t){return this.http.get(this.getQuestionByQuesGrpId+t)}deleteQuestionById(t){return this.http.delete(this.deleteQuesByQuesId+t)}updateQuestionById(t,e){return this.http.put(this.updateQuesByQuesId+t,e)}}return t.\u0275fac=function(e){return new(e||t)(u.LFG(l.eN),u.LFG(p._))},t.\u0275prov=u.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var d=o(2238),m=o(3679),g=o(3166),h=o(8341),f=o(1095),Z=o(6627);function q(t,e){1&t&&(u.TgZ(0,"mat-icon",18),u._uU(1,"cancel"),u.qZA())}function b(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"mat-chip",16),u.NdJ("removed",function(){const e=u.CHM(t).$implicit;return u.oxw().remove(e)}),u._uU(1),u.YNc(2,q,2,0,"mat-icon",17),u.qZA()}if(2&t){const t=e.$implicit,o=u.oxw();u.Q6J("selectable",o.selectable)("removable",o.removable),u.xp6(1),u.hij(" ",t," "),u.xp6(1),u.Q6J("ngIf",o.removable)}}let w=(()=>{class t{constructor(t){this.quesGrpService=t,this.quesGrp=new r,this.selectable=!0,this.removable=!0,this.addOnBlur=!0,this.separatorKeysCodes=[s.K5,s.OC],this.tags=[]}add(t){const e=(t.value||"").trim();e&&this.tags.push(e),t.chipInput.clear()}remove(t){const e=this.tags.indexOf(t);e>=0&&this.tags.splice(e,1)}ngOnInit(){}getData(t){this.quesGrp.tags=this.tags,this.quesGrpService.saveQuestionGrp(this.quesGrp).subscribe(t=>{console.log(t)})}}return t.\u0275fac=function(e){return new(e||t)(u.Y36(c))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-addquestiongroup"]],decls:28,vars:6,consts:[["mat-dialog-title","",2,"background-color","#f7703f","text-align","center"],[1,"mat-typography",2,"height","500px","width","500px"],[1,"example-form",3,"ngSubmit"],["basicForm","ngForm"],["cellspacing","0",1,"example-full-width",2,"margin-top","30px"],["appearance","fill",1,"example-full-width"],["matInput","","type","text","name","questionGroupName","id","name","required","",3,"ngModel","ngModelChange"],["name","ngModel"],["appearance","fill",1,"example-chip-list"],["aria-label","Tag selection"],["chipList",""],[3,"selectable","removable","removed",4,"ngFor","ngForOf"],["type","text","ngModel","","name","questionGrouptags","placeholder","New Tag",3,"matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur","matChipInputTokenEnd"],["align","end"],["mat-button","","color","warn","mat-dialog-close",""],["type","submit","mat-button","","color","primary","cdkFocusInitial","",3,"mat-dialog-close"],[3,"selectable","removable","removed"],["matChipRemove","",4,"ngIf"],["matChipRemove",""]],template:function(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"h2",0),u._uU(1,"ADD QuestionGroup"),u.qZA(),u._UZ(2,"hr"),u.TgZ(3,"mat-dialog-content",1),u.TgZ(4,"form",2,3),u.NdJ("ngSubmit",function(){u.CHM(t);const o=u.MAs(5);return e.getData(o.value)}),u.TgZ(6,"table",4),u.TgZ(7,"tr"),u.TgZ(8,"td"),u.TgZ(9,"mat-form-field",5),u.TgZ(10,"mat-label"),u._uU(11,"QuestionGroup Name:"),u.qZA(),u.TgZ(12,"input",6,7),u.NdJ("ngModelChange",function(t){return e.quesGrp.name=t}),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(14,"tr"),u.TgZ(15,"td"),u.TgZ(16,"mat-form-field",8),u.TgZ(17,"mat-label"),u._uU(18,"Question Tags"),u.qZA(),u.TgZ(19,"mat-chip-list",9,10),u.YNc(21,b,3,4,"mat-chip",11),u.TgZ(22,"input",12),u.NdJ("matChipInputTokenEnd",function(t){return e.add(t)}),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(23,"mat-dialog-actions",13),u.TgZ(24,"button",14),u._uU(25,"Cancel"),u.qZA(),u.TgZ(26,"button",15),u._uU(27,"Submit"),u.qZA(),u.qZA(),u.qZA(),u.qZA()}if(2&t){const t=u.MAs(20);u.xp6(12),u.Q6J("ngModel",e.quesGrp.name),u.xp6(9),u.Q6J("ngForOf",e.tags),u.xp6(1),u.Q6J("matChipInputFor",t)("matChipInputSeparatorKeyCodes",e.separatorKeysCodes)("matChipInputAddOnBlur",e.addOnBlur),u.xp6(4),u.Q6J("mat-dialog-close",!0)}},directives:[d.uh,d.xY,m._Y,m.JL,m.F,i.KE,i.hX,g.Nt,m.Fj,m.Q7,m.JJ,m.On,h.qn,n.sg,h.oH,d.H8,f.lW,d.ZT,h.HS,n.O5,Z.Hw,h.qH],styles:[".example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%;font-size:medium;color:#f7703f}td[_ngcontent-%COMP%]{padding-right:8px}.example-chip-list[_ngcontent-%COMP%]{width:100%}"]}),t})();var v=o(2789);function C(t,e){1&t&&(u.TgZ(0,"mat-header-cell",12),u._uU(1," SNo. "),u.qZA())}function y(t,e){if(1&t&&(u.TgZ(0,"mat-cell",13),u.TgZ(1,"b"),u._uU(2),u.qZA(),u.qZA()),2&t){const t=e.index;u.xp6(2),u.Oqu(t+1)}}function x(t,e){1&t&&(u.TgZ(0,"mat-header-cell",12),u._uU(1," QuestionGroup Name "),u.qZA())}const A=function(t){return["questiongrouphome",t]};function T(t,e){if(1&t&&(u.TgZ(0,"mat-cell",14),u.TgZ(1,"a",15),u._uU(2),u.qZA(),u._UZ(3,"router-outlet"),u.qZA()),2&t){const t=e.$implicit;u.xp6(1),u.Q6J("routerLink",u.VKq(2,A,t.questionGroupId)),u.xp6(1),u.Oqu(t.name)}}function _(t,e){1&t&&(u.TgZ(0,"mat-header-cell",12),u._uU(1," Created On "),u.qZA())}function Q(t,e){if(1&t&&(u.TgZ(0,"mat-cell",14),u._uU(1),u.qZA()),2&t){const t=e.$implicit;u.xp6(1),u.hij(" ",t.createdOn," ")}}function O(t,e){1&t&&u._UZ(0,"mat-header-row")}function I(t,e){1&t&&u._UZ(0,"mat-row")}let k=(()=>{class t{constructor(t,e,o){this.dialog=t,this.router=e,this.questionGrpService=o,this.questionGroups=[],this.position=1,this.displayedColumns=["position","name","createdOn"]}ngOnInit(){this.getData()}openDialog(){this.dialog.open(w).afterClosed().subscribe(t=>{console.log(`Dialog result: ${t}`),this.getData()})}getData(){this.questionGrpService.getByUserId().subscribe(t=>{this.questionGroups=t.result,console.log(t),console.log(this.questionGroups),this.dataSource=new v.by(this.questionGroups)})}}return t.\u0275fac=function(e){return new(e||t)(u.Y36(d.uw),u.Y36(a.F0),u.Y36(c))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-questiongroups"]],inputs:{updateQuesGrp:"updateQuesGrp"},decls:23,vars:3,consts:[[2,"margin-top","20px"],[1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","position"],["class","tableHeader",4,"matHeaderCellDef"],["class","change","style","font-size: medium;width: 20px",4,"matCellDef"],["matColumnDef","name"],["style","font-size: medium",4,"matCellDef"],["matColumnDef","createdOn"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],[1,"downright"],["mat-fab","","title","Click to ADD QuestionGroup",2,"background-color","#f7703f",3,"click"],[1,"tableHeader"],[1,"change",2,"font-size","medium","width","20px"],[2,"font-size","medium"],[2,"text-decoration","none",3,"routerLink"]],template:function(t,e){1&t&&(u.TgZ(0,"div"),u.TgZ(1,"h2"),u._uU(2,"QuestionGroup-Home "),u.qZA(),u._UZ(3,"hr"),u.TgZ(4,"div",0),u.TgZ(5,"mat-table",1),u._uU(6,"--\x3e "),u.ynx(7,2),u.YNc(8,C,2,0,"mat-header-cell",3),u.YNc(9,y,3,1,"mat-cell",4),u.BQk(),u.ynx(10,5),u.YNc(11,x,2,0,"mat-header-cell",3),u.YNc(12,T,4,4,"mat-cell",6),u.BQk(),u.ynx(13,7),u.YNc(14,_,2,0,"mat-header-cell",3),u.YNc(15,Q,2,1,"mat-cell",6),u.BQk(),u.YNc(16,O,1,0,"mat-header-row",8),u.YNc(17,I,1,0,"mat-row",9),u.qZA(),u.qZA(),u.TgZ(18,"div",10),u.TgZ(19,"button",11),u.NdJ("click",function(){return e.openDialog()}),u.TgZ(20,"mat-icon"),u._uU(21,"add"),u.qZA(),u.qZA(),u.qZA(),u._UZ(22,"router-outlet"),u.qZA()),2&t&&(u.xp6(5),u.Q6J("dataSource",e.dataSource),u.xp6(11),u.Q6J("matHeaderRowDef",e.displayedColumns),u.xp6(1),u.Q6J("matRowDefColumns",e.displayedColumns))},directives:[v.BZ,v.w1,v.fO,v.Dz,v.as,v.nj,f.lW,Z.Hw,a.lC,v.ge,v.ev,a.yS,v.XQ,v.Gk],styles:[".container[_ngcontent-%COMP%]{height:200px;position:relative}.center[_ngcontent-%COMP%]{margin:0;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.demo-table[_ngcontent-%COMP%]{width:100%}.downright[_ngcontent-%COMP%]{position:absolute;bottom:100px;right:40px}.tableHeader[_ngcontent-%COMP%]{background-color:#1e90ff;font-size:medium;justify-content:center}.myIcons[_ngcontent-%COMP%]{cursor:pointer;padding:3px}.mat-column-position[_ngcontent-%COMP%]{word-wrap:break-word!important;white-space:unset!important;flex:0 0 5%!important;width:5%!important;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;-webkit-hyphens:auto;hyphens:auto}.mat-column-name[_ngcontent-%COMP%]{justify-content:center}.mat-column-createdOn[_ngcontent-%COMP%]{word-wrap:break-word!important;white-space:unset!important;flex:0 0 20%!important;width:20%!important;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;-webkit-hyphens:auto;hyphens:auto}table[_ngcontent-%COMP%]{font-family:arial,sans-serif;border-collapse:collapse;width:100%;margin-top:10px}th[_ngcontent-%COMP%]{text-align:left;padding:15px;background-color:#f5c17d}td[_ngcontent-%COMP%]{border:1px solid #ddd;text-align:left;padding:8px}tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#ddd}"]}),t})();class M{constructor(t,e,o,n,i,a,s,r,u,l){}}var G=o(1605),U=o(2613);function B(t,e){1&t&&(u.TgZ(0,"mat-icon",20),u._uU(1,"cancel"),u.qZA())}function N(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"mat-chip",18),u.NdJ("removed",function(){const e=u.CHM(t).$implicit;return u.oxw().remove(e)}),u._uU(1),u.YNc(2,B,2,0,"mat-icon",19),u.qZA()}if(2&t){const t=e.$implicit,o=u.oxw();u.Q6J("selectable",o.selectable)("removable",o.removable),u.xp6(1),u.hij(" ",t," "),u.xp6(1),u.Q6J("ngIf",o.removable)}}function J(t,e){1&t&&(u.TgZ(0,"mat-icon",20),u._uU(1,"cancel"),u.qZA())}function S(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"mat-chip",18),u.NdJ("removed",function(){const e=u.CHM(t).$implicit;return u.oxw(2).removeOption(e)}),u._uU(1),u.YNc(2,J,2,0,"mat-icon",19),u.qZA()}if(2&t){const t=e.$implicit,o=u.oxw(2);u.Q6J("selectable",o.selectable)("removable",o.removable),u.xp6(1),u.hij(" ",t," "),u.xp6(1),u.Q6J("ngIf",o.removable)}}function D(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"div",21),u.TgZ(1,"mat-form-field",22),u.TgZ(2,"mat-label"),u._uU(3,"Options"),u.qZA(),u.TgZ(4,"mat-chip-list",23,24),u.YNc(6,S,3,4,"mat-chip",7),u.TgZ(7,"input",25),u.NdJ("matChipInputTokenEnd",function(e){return u.CHM(t),u.oxw().addOption(e)}),u.qZA(),u.qZA(),u.qZA(),u.qZA()}if(2&t){const t=u.MAs(5),e=u.oxw();u.xp6(6),u.Q6J("ngForOf",e.options),u.xp6(1),u.Q6J("matChipInputFor",t)("matChipInputSeparatorKeyCodes",e.keyCode)("matChipInputAddOnBlur",e.addOnBlur)}}let P=(()=>{class t{constructor(t,e,o,n){this.http=t,this.userinfo=e,this.dialogRef=o,this.data=n,this.selectable=!0,this.removable=!0,this.addOnBlur=!0,this.separatorKeysCodes=[s.K5,s.OC],this.keyCode=[s.K5,s.OC],this.tags=[],this.options=[],this.questionGrpId=this.data.quesGroupId,console.log("in quest"),console.log(this.questionGrpId)}onoptions(){this.button.get("subjective").enable(),this.isoptions=!1}ngOnInit(){}onNoClick(){this.dialogRef.close()}add(t){const e=(t.value||"").trim();e&&this.tags.push(e),t.chipInput.clear()}remove(t){const e=this.tags.indexOf(t);e>=0&&this.tags.splice(e,1)}addOption(t){const e=(t.value||"").trim();e&&this.options.push(e),t.chipInput.clear()}removeOption(t){const e=this.options.indexOf(t);e>=0&&this.options.splice(e,1)}save(t){console.log(t.value);let e=t.value;this.quest=new M,this.quest.questionBody=e.q,this.quest.questionType=e.questiontype.toUpperCase(),this.quest.tags=this.tags,this.quest.options=this.options,this.quest.createdBy=this.userinfo.userId,this.quest.id=(0,G.v4)(),this.quest.createdOnTS=new Date,this.quest.updatedBy=null,this.quest.updatedOnTS=new Date,this.quest.questionGroupId=this.questionGrpId,console.log(this.quest),this.http.post("/surveyauthor/api/v1/questions",this.quest).subscribe(t=>{console.log(t)}),this.dialogRef.close()}}return t.\u0275fac=function(e){return new(e||t)(u.Y36(l.eN),u.Y36(p._),u.Y36(d.so),u.Y36(d.WI))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-questions"]],decls:37,vars:7,consts:[[1,"mat-typography"],["qinfo","ngForm"],["appearance","outline",1,"example-full-width"],["matInput","","type","text","placeholder","Type your Question","name","questionBdy","ngModel","","maxlength","100","required","","name","q"],["appearance","outline",1,"example-chip-list"],["aria-label","tag selection"],["chipLis",""],[3,"selectable","removable","removed",4,"ngFor","ngForOf"],["placeholder","New tag...","name","tagList",3,"matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur","matChipInputTokenEnd"],[1,"buttons",2,"padding-bottom","10px"],["aria-label","Select an option","name","questiontype",3,"ngModel","ngModelChange"],["value","Multiple_SELECT"],["value","SINGLE_SELECT"],["value","SUBJECTIVE"],["class","option",4,"ngIf"],[1,"example-button-row"],["mat-raised-button","","color","warn",3,"click"],["mat-raised-button","","color","primary",3,"disabled","click"],[3,"selectable","removable","removed"],["matChipRemove","",4,"ngIf"],["matChipRemove",""],[1,"option"],["appearance","outline",1,"option-chip-list"],["aria-label","option selection"],["chipList",""],["placeholder","New Option...","name","otionList",3,"matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur","matChipInputTokenEnd"]],template:function(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"mat-dialog-content",0),u.TgZ(1,"form",null,1),u.TgZ(3,"h1"),u._uU(4,"Create Questions"),u.qZA(),u.TgZ(5,"div"),u.TgZ(6,"mat-form-field",2),u.TgZ(7,"mat-label"),u._uU(8,"Question"),u.qZA(),u._UZ(9,"input",3),u.TgZ(10,"mat-hint"),u._uU(11,"Upto 100 Characers allowed"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(12,"div"),u.TgZ(13,"mat-form-field",4),u.TgZ(14,"mat-label"),u._uU(15,"Enter tags to search"),u.qZA(),u.TgZ(16,"mat-chip-list",5,6),u.YNc(18,N,3,4,"mat-chip",7),u.TgZ(19,"input",8),u.NdJ("matChipInputTokenEnd",function(t){return e.add(t)}),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(20,"div"),u.TgZ(21,"div",9),u.TgZ(22,"mat-label"),u._uU(23,"Question Type"),u.qZA(),u.qZA(),u.TgZ(24,"mat-radio-group",10),u.NdJ("ngModelChange",function(t){return e.choice=t}),u.TgZ(25,"mat-radio-button",11),u._uU(26,"Multiple Choice Questions"),u.qZA(),u.TgZ(27,"mat-radio-button",12),u._uU(28,"Single Select"),u.qZA(),u.TgZ(29,"mat-radio-button",13),u._uU(30,"Subjectives"),u.qZA(),u.qZA(),u.qZA(),u.YNc(31,D,8,4,"div",14),u.TgZ(32,"div",15),u.TgZ(33,"button",16),u.NdJ("click",function(){return e.onNoClick()}),u._uU(34,"Cancel"),u.qZA(),u.TgZ(35,"button",17),u.NdJ("click",function(){u.CHM(t);const o=u.MAs(2);return e.save(o)}),u._uU(36,"Save"),u.qZA(),u.qZA(),u.qZA(),u.qZA()}if(2&t){const t=u.MAs(2),o=u.MAs(17);u.xp6(18),u.Q6J("ngForOf",e.tags),u.xp6(1),u.Q6J("matChipInputFor",o)("matChipInputSeparatorKeyCodes",e.separatorKeysCodes)("matChipInputAddOnBlur",e.addOnBlur),u.xp6(5),u.Q6J("ngModel",e.choice),u.xp6(7),u.Q6J("ngIf","Multiple_SELECT"==e.choice||"SINGLE_SELECT"==e.choice),u.xp6(4),u.Q6J("disabled",!t.valid)}},directives:[d.xY,m._Y,m.JL,m.F,i.KE,i.hX,g.Nt,m.Fj,m.JJ,m.On,m.nD,m.Q7,i.bx,h.qn,n.sg,h.oH,U.VQ,U.U0,n.O5,f.lW,h.HS,Z.Hw,h.qH],styles:["form[_ngcontent-%COMP%]{margin:50px}.example-chip-list[_ngcontent-%COMP%], .example-full-width[_ngcontent-%COMP%]{width:80%}.mat-radio-button[_ngcontent-%COMP%] ~ .mat-radio-button[_ngcontent-%COMP%]{margin-left:16px}.option-chip-list[_ngcontent-%COMP%]{width:80%;margin-bottom:20px}.option[_ngcontent-%COMP%]{margin-top:50px}.example-button-row[_ngcontent-%COMP%]{width:80%;display:flex;margin-top:20px;justify-content:space-between}"]}),t})();var Y=o(1436);function F(t,e){if(1&t&&(u.TgZ(0,"i",3),u._uU(1),u.qZA()),2&t){const t=e.$implicit;u.xp6(1),u.hij(" ",t,", ")}}function H(t,e){1&t&&(u.TgZ(0,"mat-header-cell",16),u._uU(1," SNo. "),u.qZA())}function E(t,e){if(1&t&&(u.TgZ(0,"mat-cell",17),u.TgZ(1,"b"),u._uU(2),u.qZA(),u.qZA()),2&t){const t=e.index;u.xp6(2),u.Oqu(t+1)}}function z(t,e){1&t&&(u.TgZ(0,"mat-header-cell",16),u._uU(1," Question Body "),u.qZA())}function j(t,e){if(1&t&&(u.TgZ(0,"mat-cell",3),u._uU(1),u.qZA()),2&t){const t=e.$implicit;u.xp6(1),u.hij("",t.questionBody," ")}}function R(t,e){1&t&&(u.TgZ(0,"mat-header-cell",16),u._uU(1," Actions "),u.qZA())}function L(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"mat-cell"),u.TgZ(1,"mat-icon",18),u.NdJ("click",function(){const e=u.CHM(t).$implicit;return u.oxw().deleteQuestion(e.id)}),u._uU(2,"delete"),u.qZA(),u.qZA()}}function K(t,e){1&t&&u._UZ(0,"mat-header-row")}function $(t,e){1&t&&u._UZ(0,"mat-row")}const X=[{path:"",component:k},{path:"questiongrouphome/:id",component:(()=>{class t{constructor(t,e,o,n){this.dialog=t,this.questionGroupService=e,this.router=o,this.routeTo=n,this.quesGrp=new r,this.questions=[],this.displayedColumns=["position","questionBody","Actions"]}ngOnInit(){this.questionGroupService.getByQuesGrpId(this.router.snapshot.params.id).subscribe(t=>{this.quesGrp=t.result,this.quesGroupId=this.router.snapshot.params.id,console.log(this.quesGroupId),console.log("hdgsjdjsd"),console.log(this.quesGrp)}),this.getAllQuestionByQuesGrpId()}getAllQuestionByQuesGrpId(){this.questionGroupService.getQuestionsByQuesGrpId(this.router.snapshot.params.id).subscribe(t=>{this.questions=t.result,console.log(this.questions),this.dataSource=new v.by(this.questions)})}deleteQuestion(t){this.questionGroupService.deleteQuestionById(t).subscribe(t=>{console.log(t),this.getAllQuestionByQuesGrpId()})}openDialog(){this.dialog.open(P,{width:"45%",data:{quesGroupId:this.quesGroupId}}).afterClosed().subscribe(t=>{console.log("The dialog was closed"),this.getAllQuestionByQuesGrpId()})}}return t.\u0275fac=function(e){return new(e||t)(u.Y36(d.uw),u.Y36(c),u.Y36(a.gz),u.Y36(a.F0))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-questiongrouphome"]],decls:34,vars:6,consts:[[1,"contents"],[1,"txtSize"],["style","font-size: medium;",4,"ngFor","ngForOf"],[2,"font-size","medium"],[1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","position"],["class","tableHeader",4,"matHeaderCellDef"],["class","change","style","font-size: medium;width: 20px",4,"matCellDef"],["matColumnDef","questionBody"],["style","font-size: medium",4,"matCellDef"],["matColumnDef","Actions"],[4,"matCellDef"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],[1,"downright"],["mat-fab","","matTooltip","Click to Add Questions",2,"background-color","#f7703f",3,"click"],[1,"tableHeader"],[1,"change",2,"font-size","medium","width","20px"],["matTooltip","Delete",1,"myIcons",3,"click"]],template:function(t,e){1&t&&(u.TgZ(0,"div"),u.TgZ(1,"h2"),u._uU(2),u.qZA(),u._UZ(3,"hr"),u.qZA(),u.TgZ(4,"div",0),u._UZ(5,"br"),u.TgZ(6,"div"),u.TgZ(7,"b",1),u._uU(8,"Question Group Tags :"),u.qZA(),u.YNc(9,F,2,1,"i",2),u.qZA(),u._UZ(10,"br"),u.TgZ(11,"div"),u.TgZ(12,"b",1),u._uU(13,"Question Group creation Date :"),u.qZA(),u.TgZ(14,"i",3),u._uU(15),u.qZA(),u.qZA(),u.qZA(),u.TgZ(16,"div"),u.TgZ(17,"mat-table",4),u.ynx(18,5),u.YNc(19,H,2,0,"mat-header-cell",6),u.YNc(20,E,3,1,"mat-cell",7),u.BQk(),u.ynx(21,8),u.YNc(22,z,2,0,"mat-header-cell",6),u.YNc(23,j,2,1,"mat-cell",9),u.BQk(),u.ynx(24,10),u.YNc(25,R,2,0,"mat-header-cell",6),u.YNc(26,L,3,0,"mat-cell",11),u.BQk(),u.YNc(27,K,1,0,"mat-header-row",12),u.YNc(28,$,1,0,"mat-row",13),u.qZA(),u.qZA(),u._UZ(29,"router-outlet"),u.TgZ(30,"div",14),u.TgZ(31,"button",15),u.NdJ("click",function(){return e.openDialog()}),u.TgZ(32,"mat-icon"),u._uU(33,"add"),u.qZA(),u.qZA(),u.qZA()),2&t&&(u.xp6(2),u.Oqu(e.quesGrp.name),u.xp6(7),u.Q6J("ngForOf",e.quesGrp.tags),u.xp6(6),u.hij(" ",e.quesGrp.createdOn," "),u.xp6(2),u.Q6J("dataSource",e.dataSource),u.xp6(10),u.Q6J("matHeaderRowDef",e.displayedColumns),u.xp6(1),u.Q6J("matRowDefColumns",e.displayedColumns))},directives:[n.sg,v.BZ,v.w1,v.fO,v.Dz,v.as,v.nj,a.lC,f.lW,Y.gM,Z.Hw,v.ge,v.ev,v.XQ,v.Gk],styles:[".contents[_ngcontent-%COMP%]{height:20%;width:100%;background-color:#d3d3d3}.txtSize[_ngcontent-%COMP%]{font-size:medium;padding-left:40px}.myIcons[_ngcontent-%COMP%]{cursor:pointer;padding:3px}.tableHeader[_ngcontent-%COMP%]{background-color:#1e90ff;font-size:medium;justify-content:center}.mat-column-position[_ngcontent-%COMP%]{word-wrap:break-word!important;white-space:unset!important;flex:0 0 5%!important;width:5%!important;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;-webkit-hyphens:auto;hyphens:auto}.mat-column-Actions[_ngcontent-%COMP%], .mat-column-position[_ngcontent-%COMP%], .mat-column-questionBody[_ngcontent-%COMP%]{justify-content:center}.mat-column-Actions[_ngcontent-%COMP%]{word-wrap:break-word!important;white-space:unset!important;flex:0 0 10%!important;width:10%!important;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;-webkit-hyphens:auto;hyphens:auto}.mat-elevation-z8[_ngcontent-%COMP%]{margin-left:30px;margin-right:30px;margin-top:20px}.downright[_ngcontent-%COMP%]{position:absolute;bottom:100px;right:40px}ul[_ngcontent-%COMP%]{list-style-type:none;margin:0;padding:0;overflow:hidden}li[_ngcontent-%COMP%]{float:left}li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;text-align:center;padding:16px;text-decoration:none}"]}),t})()},{path:"questions",component:P}];let V=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[a.Bz.forChild(X)],a.Bz]}),t})();var W=o(3738);let tt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[n.ez,V,f.ot,Z.Ps,d.Is,m.UX,i.lN,W.QW,g.c,h.Hi,m.u5,v.p0,Y.AV,a.Bz,l.JF,U.Fk],a.Bz]}),t})()}}]);