(()=>{"use strict";function t(t,e,i){const s=document.documentElement,o="data-outside";function n(a){t.contains(a.target)||(t.removeAttribute(o),e.forEach((t=>{s.removeEventListener(t,n)})),i())}t.hasAttribute(o)||(e.forEach((t=>{setTimeout((()=>s.addEventListener(t,n)))})),t.setAttribute(o,""))}new class{constructor(t,e){this.linksInternos=document.querySelectorAll(t),this.options=void 0===e?{behavior:"smooth",block:"start"}:e,this.scrollToSection=this.scrollToSection.bind(this)}scrollToSection(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}addLinkEvent(){this.linksInternos.forEach((t=>{t.addEventListener("click",this.scrollToSection)}))}init(){return this.linksInternos.length&&this.addLinkEvent(),this}}('[data-menu="suave"] a[href^="#"]').init(),new class{constructor(t){this.accordionList=document.querySelectorAll(t),this.activeClass="ativo"}toggleAccordion(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}addAccordionEvent(){this.accordionList.forEach((t=>{t.addEventListener("click",(()=>this.toggleAccordion(t)))}))}init(){return this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAccordionEvent()),this}}("[data-anime='accordion'] dt").init(),new class{constructor(t,e){this.tabMenu=document.querySelectorAll(t),this.tabContent=document.querySelectorAll(e),this.activeClass="ativo"}activeTab(t){this.tabContent.forEach((t=>{t.classList.remove(this.activeClass)}));const e=this.tabContent[t].dataset.anime;this.tabContent[t].classList.add(this.activeClass,e)}addTabNavEvent(){this.tabMenu.forEach(((t,e)=>{t.addEventListener("click",(()=>this.activeTab(e)))}))}init(){return this.tabMenu.length&&this.tabContent.length&&(this.activeTab(0),this.addTabNavEvent()),this}}("[data-tab='menu'] li","[data-tab='content'] section").init(),new class{constructor(t,e,i){this.botaoAbrir=document.querySelector(t),this.botaoFechar=document.querySelector(e),this.containerModal=document.querySelector(i),this.eventToggleModal=this.eventToggleModal.bind(this),this.clickForaModal=this.clickForaModal.bind(this)}toggleModal(){this.containerModal.classList.toggle("ativo")}eventToggleModal(t){t.preventDefault(),this.toggleModal()}clickForaModal(t){t.target===this.containerModal&&this.toggleModal(t)}addModalEvent(){this.botaoAbrir.addEventListener("click",this.eventToggleModal),this.botaoFechar.addEventListener("click",this.eventToggleModal),this.containerModal.addEventListener("click",this.clickForaModal)}init(){return this.botaoAbrir&&this.botaoFechar&&this.containerModal&&this.addModalEvent(),this}}('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="container"]').init(),new class{constructor(t){this.tooltips=document.querySelectorAll(t),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}onMouseMove(t){this.tooltipBox.style.top=`${t.pageY+10}px`,t.pageX+200>window.innerWidth?this.tooltipBox.style.left=t.pageX-160+"px":this.tooltipBox.style.left=`${t.pageX+10}px`}onMouseLeave({currentTarget:t}){this.tooltipBox.remove(),t.removeEventListener("mouseleave",this.onMouseLeave),t.removeEventListener("mousemove",this.onMouseMove)}criarTooltipBox(t){const e=document.createElement("div"),i=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=i,document.body.appendChild(e),this.tooltipBox=e}onMouseOver(t){this.criarTooltipBox(t.currentTarget),t.currentTarget.addEventListener("mousemove",this.onMouseMove),t.currentTarget.addEventListener("mouseleave",this.onMouseLeave)}addTooltipsEvent(){this.tooltips.forEach((t=>{t.addEventListener("mouseover",this.onMouseOver)}))}init(){return this.tooltips.length&&this.addTooltipsEvent(),this}}("[data-tooltip]").init(),new class{constructor(t){this.sections=document.querySelectorAll(t),this.windowMetade=.6*window.innerHeight,this.checkDistance=function(t,e){let i;return(...e)=>{i&&clearTimeout(i),i=setTimeout((()=>{t(...e),i=null}),100)}}(this.checkDistance.bind(this))}getDistance(){this.distance=[...this.sections].map((t=>{const e=t.offsetTop;return{element:t,offset:Math.floor(e-this.windowMetade)}}))}checkDistance(){this.distance.forEach((t=>{window.scrollY>t.offset?t.element.classList.add("ativo"):t.element.classList.contains("ativo")&&t.element.classList.remove("ativo")}))}init(){return this.sections.length&&(this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance)),this}stop(){window.removeEventListener("scroll",this.checkDistance)}}("[data-anime='scroll']").init(),new class{constructor(t,e){this.dropdownMenus=document.querySelectorAll(t),this.activeClass="active",this.events=void 0===e?["touchstart","click"]:e,this.activeDropdownMenu=this.activeDropdownMenu.bind(this)}activeDropdownMenu(e){e.preventDefault();const i=e.currentTarget;i.classList.add(this.activeClass),t(i,this.events,(()=>{i.classList.remove(this.activeClass)}))}addDropdownMenuEvent(){this.dropdownMenus.forEach((t=>{this.events.forEach((e=>{t.addEventListener(e,this.activeDropdownMenu)}))}))}init(){return this.dropdownMenus.length&&this.addDropdownMenuEvent(),this}}("[data-dropdown]").init(),new class{constructor(t,e,i){this.menuButton=document.querySelector(t),this.menuList=document.querySelector(e),this.classActive="active",this.events=void 0===i?["touchstart","click"]:i,this.openMenu=this.openMenu.bind(this)}openMenu(){this.menuList.classList.add(this.classActive),this.menuButton.classList.add(this.classActive),t(this.menuList,this.events,(()=>{this.menuList.classList.remove(this.classActive),this.menuButton.classList.remove(this.classActive)}))}addMenuMobileEvents(){this.events.forEach((t=>this.menuButton.addEventListener(t,this.openMenu)))}init(){return this.menuButton&&this.menuList&&this.addMenuMobileEvents(),this}}('[data-menu="button"]','[data-menu="list"]').init()})();