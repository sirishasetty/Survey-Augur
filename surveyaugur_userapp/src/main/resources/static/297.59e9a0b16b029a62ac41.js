(self.webpackChunksurveyaugur_userapp=self.webpackChunksurveyaugur_userapp||[]).push([[297],{4133:(t,e)=>{"use strict";var i=function(){function t(){}return t.UUID=function(){if("undefined"!=typeof window&&void 0!==window.crypto&&void 0!==window.crypto.getRandomValues){var t=new Uint16Array(8);return window.crypto.getRandomValues(t),this.pad4(t[0])+this.pad4(t[1])+"-"+this.pad4(t[2])+"-"+this.pad4(t[3])+"-"+this.pad4(t[4])+"-"+this.pad4(t[5])+this.pad4(t[6])+this.pad4(t[7])}return this.random4()+this.random4()+"-"+this.random4()+"-"+this.random4()+"-"+this.random4()+"-"+this.random4()+this.random4()+this.random4()},t.pad4=function(t){for(var e=t.toString(16);e.length<4;)e="0"+e;return e},t.random4=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)},t}();e.h=i},1297:(t,e,i)=>{"use strict";i.r(e),i.d(e,{ActivesurveyModule:()=>mt});var n=i(8583),o=i(9243),a=i(4655),s=i(2789),r=i(7716),c=i(1841),d=i(1095);function l(t,e){1&t&&(r.TgZ(0,"th",14),r._uU(1," S.No. "),r.qZA())}function u(t,e){if(1&t&&(r.TgZ(0,"td",15),r._uU(1),r.qZA()),2&t){const t=e.index;r.xp6(1),r.hij(" ",t+1," ")}}function h(t,e){1&t&&(r.TgZ(0,"th",14),r._uU(1," Survey Title "),r.qZA())}function p(t,e){if(1&t&&(r.TgZ(0,"td",15),r._uU(1),r.qZA()),2&t){const t=e.$implicit;r.xp6(1),r.hij(" ",t.surveyTitle," ")}}function m(t,e){1&t&&(r.TgZ(0,"th",14),r._uU(1," Target Audience "),r.qZA())}function g(t,e){if(1&t&&(r.TgZ(0,"td",15),r._uU(1),r.qZA()),2&t){const t=e.$implicit;r.xp6(1),r.hij(" ",t.targetAudience," ")}}function f(t,e){1&t&&(r.TgZ(0,"th",14),r._uU(1," ACTION "),r.qZA())}const b=function(t){return["takesurvey",t]};function v(t,e){if(1&t&&(r.TgZ(0,"td",15),r._uU(1),r.TgZ(2,"div",16),r.TgZ(3,"button",17),r._uU(4,"TAKE SURVEY"),r.qZA(),r.qZA(),r.qZA()),2&t){const t=e.$implicit;r.xp6(1),r.hij("",t.action," "),r.xp6(2),r.Q6J("routerLink",r.VKq(2,b,t.surveyId))}}function _(t,e){1&t&&r._UZ(0,"tr",18)}function y(t,e){1&t&&r._UZ(0,"tr",19)}function x(t,e){if(1&t&&(r.TgZ(0,"div"),r.TgZ(1,"div",2),r.TgZ(2,"h1",3),r._uU(3," ACTIVE SURVEYS"),r.qZA(),r.TgZ(4,"div",4),r.TgZ(5,"table",5),r.ynx(6,6),r.YNc(7,l,2,0,"th",7),r.YNc(8,u,2,1,"td",8),r.BQk(),r.ynx(9,9),r.YNc(10,h,2,0,"th",7),r.YNc(11,p,2,1,"td",8),r.BQk(),r.ynx(12,10),r.YNc(13,m,2,0,"th",7),r.YNc(14,g,2,1,"td",8),r.BQk(),r.ynx(15,11),r.YNc(16,f,2,0,"th",7),r.YNc(17,v,5,4,"td",8),r.BQk(),r.YNc(18,_,1,0,"tr",12),r.YNc(19,y,1,0,"tr",13),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&t){const t=r.oxw();r.xp6(5),r.Q6J("dataSource",t.dataSource),r.xp6(13),r.Q6J("matHeaderRowDef",t.displayedColumns),r.xp6(1),r.Q6J("matRowDefColumns",t.displayedColumns)}}function Z(t,e){1&t&&(r.TgZ(0,"div",20),r.TgZ(1,"div"),r.TgZ(2,"h1",21),r._uU(3,"No Active Survey"),r.qZA(),r.qZA(),r.TgZ(4,"div",22),r._UZ(5,"img",23),r.qZA(),r.qZA())}let q=(()=>{class t{constructor(t){this.http=t,this.enable=!1,this.activeSurvey=[],this.displayedColumns=["position","name","type","action"],this.dataSource=new s.by}ngOnInit(){this.http.get("/surveyengine/api/v1/surveys").subscribe(t=>{console.log(t.result),this.activeSurvey=t.result,this.dataSource=new s.by(this.activeSurvey),0==this.activeSurvey.length&&(console.log(this.activeSurvey.length),this.enable=!0),console.log("mmm"),console.log(this.activeSurvey.length)})}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(c.eN))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-activesurvey"]],decls:2,vars:2,consts:[[4,"ngIf"],["style","margin-left:30%;margin-top: 12%; ",4,"ngIf"],[1,"display"],[1,"hed"],[1,"mat-elevation-z8"],["mat-table","",3,"dataSource"],["matColumnDef","position"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","type"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],[1,"btn"],["mat-raised-button","","color","primary",3,"routerLink"],["mat-header-row",""],["mat-row",""],[2,"margin-left","30%","margin-top","12%"],[2,"font-size","xx-large","margin-bottom","1%","margin-left","5%"],[2,"margin-top","2%"],["src","assets/images/sad-emoji.png","alt","","height","400px",2,"position","absolute"]],template:function(t,e){1&t&&(r.YNc(0,x,20,3,"div",0),r.YNc(1,Z,6,0,"div",1)),2&t&&(r.Q6J("ngIf",!e.enable),r.xp6(1),r.Q6J("ngIf",e.enable))},directives:[n.O5,s.BZ,s.w1,s.fO,s.Dz,s.as,s.nj,s.ge,s.ev,d.lW,a.rH,s.XQ,s.Gk],styles:[".display[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;height:100%;margin-right:30%}.display[_ngcontent-%COMP%]{margin-right:12%;margin-left:15%}.mat-column-name[_ngcontent-%COMP%]{font-weight:700;width:30%}.mat-column-type[_ngcontent-%COMP%]{font-style:bold;width:30%}.mat-column-position[_ngcontent-%COMP%]{width:15%}.mat-column-action[_ngcontent-%COMP%]{text-align:center;width:30%}.hed[_ngcontent-%COMP%]{margin-top:2%}th[_ngcontent-%COMP%]{background-color:blue;color:#fff}"]}),t})();var k=i(4133),A=(()=>(function(t){t[t.SECTIONED=0]="SECTIONED",t[t.FLAT=1]="FLAT"}(A||(A={})),A))();class T{constructor(t,e,i,n,o,a,s,r,c,d,l,u,h,p,m){this.surveyId=k.h.UUID,this.createdBy=k.h.UUID,this.surveyTitle="",this.tags=[],this.description="",this.targetAudience="",this.surveyType=A.FLAT,this.questions=[],this.uiSettings={},this.surveyUrl="",this.activatedOn=new Date,this.activatedBy="",this.createdOn=new Date,this.updatedOn=new Date,this.activeTime=0}}class w{constructor(t,e,i){this.questionBody="",this.options=[],this.answer=""}}class I{constructor(t,e,i,n){this.surveyId=k.h.UUID,this.responseId=k.h.UUID,this.questions=[],this.createdOn=new Date}}var C=i(6215);let D=(()=>{class t{constructor(){this.activeTime=new C.X(0)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var S=i(3679),U=i(3738),O=i(5319),M=i(945);let R=(()=>{class t{constructor(t){this.survey=t,this.subscription=new O.w,this.dateNow=new Date,this.dDay=new Date,this.milliSecondsInASecond=1e3,this.hoursInADay=24,this.minutesInAnHour=60,this.SecondsInAMinute=60}getTimeDifference(){this.timeDifference=this.dDay.getTime()-(new Date).getTime(),this.allocateTimeUnits(this.timeDifference)}allocateTimeUnits(t){this.secondsToDday=Math.floor(t/this.milliSecondsInASecond%this.SecondsInAMinute),this.minutesToDday=Math.floor(t/(this.milliSecondsInASecond*this.minutesInAnHour)%this.SecondsInAMinute),this.hoursToDday=Math.floor(t/(this.milliSecondsInASecond*this.minutesInAnHour*this.SecondsInAMinute)%this.hoursInADay),this.daysToDday=Math.floor(t/(this.milliSecondsInASecond*this.minutesInAnHour*this.SecondsInAMinute*this.hoursInADay))}ngOnInit(){this.survey.activeTime.subscribe(t=>{this.dDay.setHours(this.dDay.getHours()+t/3600)}),this.subscription=(0,M.F)(1e3).subscribe(t=>{this.getTimeDifference()})}ngOnDestroy(){this.subscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(D))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-count-down"]],decls:13,vars:4,consts:[[2,"margin-left","35px"],["id","days"],["id","hours"],["id","minutes"],["id","seconds",2,"margin-right","60px"]],template:function(t,e){1&t&&(r.TgZ(0,"p",0),r._uU(1,"Time left"),r.qZA(),r.TgZ(2,"span",1),r._uU(3),r.qZA(),r._uU(4,"Day(s): "),r.TgZ(5,"span",2),r._uU(6),r.qZA(),r._uU(7,"Hrs: "),r.TgZ(8,"span",3),r._uU(9),r.qZA(),r._uU(10,"Min: "),r.TgZ(11,"span",4),r._uU(12),r.qZA()),2&t&&(r.xp6(3),r.hij(" ",e.daysToDday," "),r.xp6(3),r.hij(" ",e.hoursToDday," "),r.xp6(3),r.hij(" ",e.minutesToDday," "),r.xp6(3),r.hij(" ",e.secondsToDday,"S"))},styles:[".timer[_ngcontent-%COMP%]{font-family:Arial,sans-serif;letter-spacing:-1px}"]}),t})();var Y=i(2458),G=i(9490),Q=i(6237),E=i(9238),P=i(8345);const B=["input"],L=function(t){return{enterDuration:t}},F=["*"],N=new r.OlP("mat-radio-default-options",{providedIn:"root",factory:function(){return{color:"accent"}}});let J=0;const j={provide:S.JU,useExisting:(0,r.Gpc)(()=>$),multi:!0};class V{constructor(t,e){this.source=t,this.value=e}}const z=new r.OlP("MatRadioGroup");let H=(()=>{class t{constructor(t){this._changeDetector=t,this._value=null,this._name="mat-radio-group-"+J++,this._selected=null,this._isInitialized=!1,this._labelPosition="after",this._disabled=!1,this._required=!1,this._controlValueAccessorChangeFn=()=>{},this.onTouched=()=>{},this.change=new r.vpe}get name(){return this._name}set name(t){this._name=t,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(t){this._labelPosition="before"===t?"before":"after",this._markRadiosForCheck()}get value(){return this._value}set value(t){this._value!==t&&(this._value=t,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(t){this._selected=t,this.value=t?t.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(t){this._disabled=(0,G.Ig)(t),this._markRadiosForCheck()}get required(){return this._required}set required(t){this._required=(0,G.Ig)(t),this._markRadiosForCheck()}ngAfterContentInit(){this._isInitialized=!0}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(t=>{t.name=this.name,t._markForCheck()})}_updateSelectedRadioFromValue(){this._radios&&(null===this._selected||this._selected.value!==this._value)&&(this._selected=null,this._radios.forEach(t=>{t.checked=this.value===t.value,t.checked&&(this._selected=t)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new V(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(t=>t._markForCheck())}writeValue(t){this.value=t,this._changeDetector.markForCheck()}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this.disabled=t,this._changeDetector.markForCheck()}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(r.sBO))},t.\u0275dir=r.lG2({type:t,inputs:{name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:"disabled",required:"required",color:"color"},outputs:{change:"change"}}),t})(),$=(()=>{class t extends H{}return t.\u0275fac=function(){let e;return function(i){return(e||(e=r.n5z(t)))(i||t)}}(),t.\u0275dir=r.lG2({type:t,selectors:[["mat-radio-group"]],contentQueries:function(t,e,i){if(1&t&&r.Suo(i,tt,5),2&t){let t;r.iGM(t=r.CRH())&&(e._radios=t)}},hostAttrs:["role","radiogroup",1,"mat-radio-group"],exportAs:["matRadioGroup"],features:[r._Bn([j,{provide:z,useExisting:t}]),r.qOj]}),t})();class X{constructor(t){this._elementRef=t}}const K=(0,Y.Kr)((0,Y.sb)(X));let W=(()=>{class t extends K{constructor(t,e,i,n,o,a,s,c){super(e),this._changeDetector=i,this._focusMonitor=n,this._radioDispatcher=o,this._providerOverride=s,this._uniqueId="mat-radio-"+ ++J,this.id=this._uniqueId,this.change=new r.vpe,this._checked=!1,this._value=null,this._removeUniqueSelectionListener=()=>{},this.radioGroup=t,this._noopAnimations="NoopAnimations"===a,c&&(this.tabIndex=(0,G.su)(c,0)),this._removeUniqueSelectionListener=o.listen((t,e)=>{t!==this.id&&e===this.name&&(this.checked=!1)})}get checked(){return this._checked}set checked(t){const e=(0,G.Ig)(t);this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(t){this._value!==t&&(this._value=t,null!==this.radioGroup&&(this.checked||(this.checked=this.radioGroup.value===t),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(t){this._labelPosition=t}get disabled(){return this._disabled||null!==this.radioGroup&&this.radioGroup.disabled}set disabled(t){this._setDisabled((0,G.Ig)(t))}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(t){this._required=(0,G.Ig)(t)}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._providerOverride&&this._providerOverride.color||"accent"}set color(t){this._color=t}get inputId(){return`${this.id||this._uniqueId}-input`}focus(t,e){e?this._focusMonitor.focusVia(this._inputElement,e,t):this._inputElement.nativeElement.focus(t)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{!t&&this.radioGroup&&this.radioGroup._touch()})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new V(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputClick(t){t.stopPropagation()}_onInputInteraction(t){if(t.stopPropagation(),!this.checked&&!this.disabled){const t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent())}}_setDisabled(t){this._disabled!==t&&(this._disabled=t,this._changeDetector.markForCheck())}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(H),r.Y36(r.SBq),r.Y36(r.sBO),r.Y36(E.tE),r.Y36(P.A8),r.Y36(String),r.Y36(void 0),r.Y36(String))},t.\u0275dir=r.lG2({type:t,viewQuery:function(t,e){if(1&t&&r.Gf(B,5),2&t){let t;r.iGM(t=r.CRH())&&(e._inputElement=t.first)}},inputs:{id:"id",checked:"checked",value:"value",labelPosition:"labelPosition",disabled:"disabled",required:"required",color:"color",name:"name",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedby:["aria-describedby","ariaDescribedby"]},outputs:{change:"change"},features:[r.qOj]}),t})(),tt=(()=>{class t extends W{constructor(t,e,i,n,o,a,s,r){super(t,e,i,n,o,a,s,r)}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(z,8),r.Y36(r.SBq),r.Y36(r.sBO),r.Y36(E.tE),r.Y36(P.A8),r.Y36(Q.Qb,8),r.Y36(N,8),r.$8M("tabindex"))},t.\u0275cmp=r.Xpm({type:t,selectors:[["mat-radio-button"]],hostAttrs:[1,"mat-radio-button"],hostVars:17,hostBindings:function(t,e){1&t&&r.NdJ("focus",function(){return e._inputElement.nativeElement.focus()}),2&t&&(r.uIk("tabindex",null)("id",e.id)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),r.ekj("mat-radio-checked",e.checked)("mat-radio-disabled",e.disabled)("_mat-animation-noopable",e._noopAnimations)("mat-primary","primary"===e.color)("mat-accent","accent"===e.color)("mat-warn","warn"===e.color))},inputs:{disableRipple:"disableRipple",tabIndex:"tabIndex"},exportAs:["matRadioButton"],features:[r.qOj],ngContentSelectors:F,decls:13,vars:20,consts:[[1,"mat-radio-label"],["label",""],[1,"mat-radio-container"],[1,"mat-radio-outer-circle"],[1,"mat-radio-inner-circle"],["type","radio",1,"mat-radio-input","cdk-visually-hidden",3,"id","checked","disabled","tabIndex","required","change","click"],["input",""],["mat-ripple","",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered","matRippleRadius","matRippleAnimation"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mat-radio-label-content"],[2,"display","none"]],template:function(t,e){if(1&t&&(r.F$t(),r.TgZ(0,"label",0,1),r.TgZ(2,"span",2),r._UZ(3,"span",3),r._UZ(4,"span",4),r.TgZ(5,"input",5,6),r.NdJ("change",function(t){return e._onInputInteraction(t)})("click",function(t){return e._onInputClick(t)}),r.qZA(),r.TgZ(7,"span",7),r._UZ(8,"span",8),r.qZA(),r.qZA(),r.TgZ(9,"span",9),r.TgZ(10,"span",10),r._uU(11,"\xa0"),r.qZA(),r.Hsn(12),r.qZA(),r.qZA()),2&t){const t=r.MAs(1);r.uIk("for",e.inputId),r.xp6(5),r.Q6J("id",e.inputId)("checked",e.checked)("disabled",e.disabled)("tabIndex",e.tabIndex)("required",e.required),r.uIk("name",e.name)("value",e.value)("aria-label",e.ariaLabel)("aria-labelledby",e.ariaLabelledby)("aria-describedby",e.ariaDescribedby),r.xp6(2),r.Q6J("matRippleTrigger",t)("matRippleDisabled",e._isRippleDisabled())("matRippleCentered",!0)("matRippleRadius",20)("matRippleAnimation",r.VKq(18,L,e._noopAnimations?0:150)),r.xp6(2),r.ekj("mat-radio-label-before","before"==e.labelPosition)}},directives:[Y.wG],styles:[".mat-radio-button{display:inline-block;-webkit-tap-highlight-color:transparent;outline:0}.mat-radio-label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;display:inline-flex;align-items:center;white-space:nowrap;vertical-align:middle;width:100%}.mat-radio-container{box-sizing:border-box;display:inline-block;position:relative;width:20px;height:20px;flex-shrink:0}.mat-radio-outer-circle{box-sizing:border-box;display:block;height:20px;left:0;position:absolute;top:0;transition:border-color ease 280ms;width:20px;border-width:2px;border-style:solid;border-radius:50%}._mat-animation-noopable .mat-radio-outer-circle{transition:none}.mat-radio-inner-circle{border-radius:50%;box-sizing:border-box;display:block;height:20px;left:0;position:absolute;top:0;opacity:0;transition:transform ease 280ms,background-color ease 280ms,opacity linear 1ms 280ms;width:20px;transform:scale(0.001);-webkit-print-color-adjust:exact;color-adjust:exact}.mat-radio-checked .mat-radio-inner-circle{transform:scale(0.5);opacity:1;transition:transform ease 280ms,background-color ease 280ms}.cdk-high-contrast-active .mat-radio-checked .mat-radio-inner-circle{border:solid 10px}._mat-animation-noopable .mat-radio-inner-circle{transition:none}.mat-radio-label-content{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto;display:inline-block;order:0;line-height:inherit;padding-left:8px;padding-right:0}[dir=rtl] .mat-radio-label-content{padding-right:8px;padding-left:0}.mat-radio-label-content.mat-radio-label-before{order:-1;padding-left:0;padding-right:8px}[dir=rtl] .mat-radio-label-content.mat-radio-label-before{padding-right:0;padding-left:8px}.mat-radio-disabled,.mat-radio-disabled .mat-radio-label{cursor:default}.mat-radio-button .mat-radio-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-radio-button .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple){opacity:.16}.mat-radio-persistent-ripple{width:100%;height:100%;transform:none;top:0;left:0}.mat-radio-container:hover .mat-radio-persistent-ripple{opacity:.04}.mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-persistent-ripple,.mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-persistent-ripple{opacity:.12}.mat-radio-persistent-ripple,.mat-radio-disabled .mat-radio-container:hover .mat-radio-persistent-ripple{opacity:0}@media(hover: none){.mat-radio-container:hover .mat-radio-persistent-ripple{display:none}}.mat-radio-input{bottom:0;left:50%}.cdk-high-contrast-active .mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-ripple,.cdk-high-contrast-active .mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-ripple{outline:solid 3px}.cdk-high-contrast-active .mat-radio-disabled{opacity:.5}\n"],encapsulation:2,changeDetection:0}),t})(),et=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[Y.si,Y.BQ],Y.BQ]}),t})();function it(t,e){1&t&&(r.TgZ(0,"div",9),r.TgZ(1,"h1"),r._uU(2,"We Value Your FeedBack"),r.qZA(),r.qZA())}function nt(t,e){if(1&t&&(r.TgZ(0,"mat-radio-group",15),r.TgZ(1,"mat-radio-button",16),r._uU(2),r.qZA(),r.qZA()),2&t){const t=e.$implicit,i=r.oxw(3).$implicit;r.Q6J("name",i.questionBody),r.xp6(1),r.Q6J("value",t),r.xp6(1),r.hij("",t," \xa0")}}function ot(t,e){if(1&t&&(r.TgZ(0,"div"),r.YNc(1,nt,3,3,"mat-radio-group",14),r.qZA()),2&t){const t=r.oxw(2).$implicit;r.xp6(1),r.Q6J("ngForOf",t.options)}}function at(t,e){if(1&t&&(r.TgZ(0,"mat-radio-group",15),r.TgZ(1,"mat-radio-button",16),r._uU(2),r.qZA(),r.qZA()),2&t){const t=e.$implicit,i=r.oxw(3).$implicit;r.Q6J("name",i.questionBody),r.xp6(1),r.Q6J("value",t),r.xp6(1),r.hij("",t," \xa0")}}function st(t,e){if(1&t&&(r.TgZ(0,"div"),r.YNc(1,at,3,3,"mat-radio-group",14),r.qZA()),2&t){const t=r.oxw(2).$implicit;r.xp6(1),r.Q6J("ngForOf",t.options)}}function rt(t,e){if(1&t&&(r.TgZ(0,"div"),r._UZ(1,"input",17),r.qZA()),2&t){const t=r.oxw(2).$implicit;r.xp6(1),r.Q6J("name",t.questionBody)}}function ct(t,e){if(1&t&&(r.TgZ(0,"div",10),r.TgZ(1,"p",11),r._uU(2),r.qZA(),r.TgZ(3,"div",12),r.YNc(4,ot,2,1,"div",13),r.YNc(5,st,2,1,"div",13),r.YNc(6,rt,2,1,"div",13),r.qZA(),r.qZA()),2&t){const t=r.oxw(),e=t.index,i=t.$implicit;r.xp6(2),r.AsE("",e,"\xa0\xa0",i.questionBody,""),r.xp6(2),r.Q6J("ngIf","MULTIPLE_SELECT"==i.questionType),r.xp6(1),r.Q6J("ngIf","SINGLE_SELECT"==i.questionType),r.xp6(1),r.Q6J("ngIf","SUBJECTIVE"==i.questionType)}}function dt(t,e){if(1&t&&(r.TgZ(0,"div"),r.YNc(1,it,3,0,"div",7),r.YNc(2,ct,7,5,"div",8),r.qZA()),2&t){const t=e.index;r.xp6(1),r.Q6J("ngIf",0==t),r.xp6(1),r.Q6J("ngIf",0!=t)}}const lt=function(){return["/home/activesurvey"]},ut=[{path:"",component:q},{path:"takesurvey/:id",component:(()=>{class t{constructor(t,e,i){this.http=t,this.router=e,this.survey=i,this.active=new T,this.tagComp="",this.questRes=[],this.questionList=[],this.respQuestion=new I}ngOnInit(){this.http.get("/surveyengine/api/v1/surveys/"+this.router.snapshot.params.id).subscribe(t=>{console.log(t.result),this.active=t.result;for(let e=0;e<this.active.tags.length;e++)this.tagComp=this.tagComp+" "+this.active.tags[e];this.questionList=this.active.questions,console.log(this.questionList),this.survey.activeTime.next(this.active.activeTime)})}save(t){console.log(t.value);let e=t.value;this.respQuestion.questions=[];for(let i=1;i<this.questionList.length;i++){let t=new w;t.questionBody=this.questionList[i].questionBody,t.answer=("MULTIPLE_SELECT"===this.questionList[i].questionType.toString()||this.questionList[i].questionType.toString(),e[t.questionBody]),t.options=this.questionList[i].options,this.questRes.push(t)}this.respQuestion.questions=this.questRes,this.respQuestion.createdOn=new Date,this.respQuestion.surveyId=this.active.surveyId,console.log(this.respQuestion),this.http.post("/surveyengine/api/v1/responses",this.respQuestion).subscribe(t=>{console.log(t)})}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(c.eN),r.Y36(a.gz),r.Y36(D))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-preview"]],decls:20,vars:6,consts:[["rinfo","ngForm"],[1,"head"],[1,"scrollable-content",2,"margin-top","20px"],["itemSize","50",1,"example-viewport"],[4,"cdkVirtualFor","cdkVirtualForOf"],[1,"example-button-row"],["type","submit","mat-raised-button","","color","primary",3,"routerLink","click"],["style","margin-top: 1%;","class","example-item1",4,"ngIf"],["class","example-item",4,"ngIf"],[1,"example-item1",2,"margin-top","1%"],[1,"example-item"],[2,"margin-left","10px"],[2,"margin","20px"],[4,"ngIf"],["aria-label","Select an option","ngModel","",3,"name",4,"ngFor","ngForOf"],["aria-label","Select an option","ngModel","",3,"name"],[3,"value"],["type","text","placeholder","Enter your valuable answer","ngModel","",2,"padding","10px","margin-top","3px","margin-bottom","3px",3,"name"]],template:function(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"form",null,0),r.TgZ(2,"mat-card"),r.TgZ(3,"div"),r.TgZ(4,"h1"),r._uU(5),r.qZA(),r.TgZ(6,"span",1),r._UZ(7,"app-count-down"),r.qZA(),r.qZA(),r.TgZ(8,"p"),r._uU(9),r.qZA(),r.TgZ(10,"p"),r._uU(11),r.qZA(),r.qZA(),r.TgZ(12,"mat-card",2),r.TgZ(13,"mat-card-title"),r._uU(14," Question "),r.qZA(),r.TgZ(15,"cdk-virtual-scroll-viewport",3),r.YNc(16,dt,3,2,"div",4),r.qZA(),r.qZA(),r.TgZ(17,"div",5),r.TgZ(18,"button",6),r.NdJ("click",function(){r.CHM(t);const i=r.MAs(1);return e.save(i)}),r._uU(19,"Submit"),r.qZA(),r.qZA(),r.qZA()}2&t&&(r.xp6(5),r.hij(" Survey Title: ",e.active.surveyTitle,""),r.xp6(4),r.hij("Description: ",e.active.description,""),r.xp6(2),r.hij("Target Audience: ",e.active.targetAudience,""),r.xp6(5),r.Q6J("cdkVirtualForOf",e.questionList),r.xp6(2),r.Q6J("routerLink",r.DdM(5,lt)))},directives:[S._Y,S.JL,S.F,U.a8,R,U.n5,o.N7,o.xd,o.x0,d.lW,a.rH,n.O5,n.sg,$,S.JJ,S.On,tt,S.Fj],styles:[".heading[_ngcontent-%COMP%]{display:block;flex-direction:column}.head[_ngcontent-%COMP%]{position:absolute;right:0}.example-viewport[_ngcontent-%COMP%]{height:100%;width:100%;margin-top:20px}.mat-card-title[_ngcontent-%COMP%]{margin-top:8px}.example-item[_ngcontent-%COMP%]{height:100px}.example-item1[_ngcontent-%COMP%]{height:50px}.example-button-row[_ngcontent-%COMP%]{width:98%;margin-top:1%;margin-bottom:3%;display:flex;justify-content:flex-end}h1[_ngcontent-%COMP%]{font-size:x-large;font-weight:bolder;font-family:Trebuchet MS,Lucida Sans Unicode,Lucida Grande,Lucida Sans,Arial,sans-serif}"]}),t})()}];let ht=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[a.Bz.forChild(ut)],a.Bz]}),t})();var pt=i(7082);let mt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[n.ez,ht,pt.TU,c.JF,s.p0,U.QW,o.Cl,d.ot,et,S.u5,S.UX,c.JF]]}),t})()}}]);