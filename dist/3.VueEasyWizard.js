(window.webpackJsonpVueEasyWizard=window.webpackJsonpVueEasyWizard||[]).push([[3],{10:function(n,t,i){(n.exports=i(1)(!0)).push([n.i,".wizard[data-v-c21d83ca]{height:100%;left:0;position:absolute;top:0;width:100%;z-index:1001}.wizard-body[data-v-c21d83ca] .swiper-container{height:100%}.wizard-pagination[data-v-c21d83ca]{height:40px;width:100%}.wizard-pagination[data-v-c21d83ca] .swiper-pagination-bullet{background:var(--primary) !important;margin:2px}\n","",{version:3,sources:["/home/felipemengatto/Documentos/www/Sites/vue-easy-wizard/src/components/Wizard.vue"],names:[],mappings:"AA8FA,yBACI,WAAY,CACZ,MAAO,CACP,iBAAkB,CAClB,KAAM,CACN,UAAW,CACX,YAAa,CAEZ,gDAEO,WAAY,CACf,oCAID,WAAY,CACZ,UAAW,CAFd,8DAKO,oCAAqC,CACrC,UAAW",file:"Wizard.vue?vue&type=style&index=0&id=c21d83ca&lang=scss&scoped=true&",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.wizard {\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    z-index: 1001;\n\n    &-body {\n        /deep/ .swiper-container {\n            height: 100%;\n        }\n    }\n\n    &-pagination {\n        height: 40px;\n        width: 100%;\n\n        /deep/ .swiper-pagination-bullet {\n            background: var(--primary) !important;\n            margin: 2px;\n        }\n    }\n}\n"]}])},22:function(n,t,i){"use strict";var e=i(10);i.n(e).a},6:function(n,t,i){"use strict";i.r(t);var e=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"d-flex flex-column bg-white wizard"},[i("div",{staticClass:"d-flex p-3 align-items-center wizard-header"},[n.hasBackButton?i("div",{staticClass:"d-flex text-dark align-items-center cursor-pointer wizard-header-prev",on:{click:function(t){return n.wizardPrev()}}},[i("Icon",{attrs:{type:"arrow-left",size:"2x"}})],1):n._e(),n._v(" "),i("div",{staticClass:"flex-grow-1 text-center wizard-header-title"},[i("h3",{staticClass:"text-secondary font-weight-light m-0"},[n._v("\n                "+n._s(n.title)+"\n            ")]),n._v(" "),n.subtitle?i("h5",{staticClass:"text-dark"},[n._v("\n                "+n._s(n.subtitle)+"\n            ")]):n._e()])]),n._v(" "),i("div",{staticClass:"flex-grow-1 w-100 bg-light wizard-body"},[i("swiper",{ref:"wizard",attrs:{options:n.swiperOption}},[n._t("default")],2)],1),n._v(" "),i("div",{staticClass:"d-flex justify-content-center align-items-center bg-white wizard-pagination"},[i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})])])};e._withStripped=!0;i(20);var a=i(12),r=i(0),s={name:"Wizard",components:{BaseButton:r.a,Icon:r.b,swiper:a.swiper},data:function(){return{hasBackButton:!0,subtitle:"",swiperOption:{allowTouchMove:!1,loadPrevNextAmount:0,pagination:{el:".swiper-pagination",dynamicBullets:!0},slidesPerView:1},title:""}},computed:{activeHeader:function(){return this.title}},mounted:function(){this.onInitSwiper()},methods:{onInitSwiper:function(){this.$parent.$on("wizard:next",this.wizardNext),this.$parent.$on("wizard:prev",this.wizardPrev),this.updateWizardHeader()},updateWizardHeader:function(){var n=this.$refs.wizard.swiper,t=n.slides,i=n.realIndex;this.title=t[i].getAttribute("title"),this.subtitle=t[i].getAttribute("subtitle"),this.hasBackButton=t[i].getAttribute("hasBackButton")},wizardNext:function(){this.$refs.wizard.swiper.slideNext(),this.updateWizardHeader()},wizardPrev:function(){this.$refs.wizard.swiper.slidePrev(),this.updateWizardHeader()}}},d=(i(22),i(8)),o=Object(d.a)(s,e,[],!1,null,"c21d83ca",null);o.options.__file="src/components/Wizard.vue";t.default=o.exports}}]);