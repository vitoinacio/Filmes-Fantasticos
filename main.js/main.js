/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\nclass Accordion {\r\n  constructor(list) {\r\n    this.accordionList = document.querySelectorAll(list);\r\n    this.activeClass = \"ativo\";\r\n  }\r\n\r\n  toggleAccordion(item) {\r\n    item.classList.toggle(this.activeClass);\r\n    item.nextElementSibling.classList.toggle(this.activeClass);\r\n  }\r\n\r\n  // adiciona os eventos ao accordion\r\n  addAccordionEvent() {\r\n    this.accordionList.forEach((item) => {\r\n      item.addEventListener(\"click\", () => this.toggleAccordion(item));\r\n    });\r\n  }\r\n\r\n  //iniciar função\r\n  init() {\r\n    if (this.accordionList.length) {\r\n      // ativar primeiro item\r\n      this.toggleAccordion(this.accordionList[0]);\r\n      this.addAccordionEvent();\r\n    }\r\n    return this\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://filmes_fantasticos/./src/js/modules/accordion.js?");

/***/ }),

/***/ "./src/js/modules/debouce.js":
/*!***********************************!*\
  !*** ./src/js/modules/debouce.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ debounce)\n/* harmony export */ });\nfunction debounce(callback, delay){\r\n  let timer;\r\n  return (...args) =>{\r\n    if (timer) clearTimeout(timer);\r\n    timer = setTimeout(()=>{\r\n      callback(...args);\r\n      timer = null;\r\n    }, delay);\r\n  };\r\n}\n\n//# sourceURL=webpack://filmes_fantasticos/./src/js/modules/debouce.js?");

/***/ }),

/***/ "./src/js/modules/dropdown-menu.js":
/*!*****************************************!*\
  !*** ./src/js/modules/dropdown-menu.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./src/js/modules/outsideclick.js\");\n\r\n\r\nclass DropdownMenu {\r\n  constructor(dropdownMenus, events){\r\n\r\n    this.dropdownMenus = document.querySelectorAll(dropdownMenus);\r\n    this.activeClass = 'active';\r\n\r\n    // define touchstart e click como argumento padrao de events \r\n    // caso o usuario nao defina \r\n    if (events === undefined) this.events = [\"touchstart\", \"click\"];\r\n    else this.events = events\r\n\r\n    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);\r\n  }\r\n\r\n  // ativa o dropdown menu e adciona a funcao \r\n  // que observa o click fora dele\r\n  activeDropdownMenu(event) {\r\n    event.preventDefault();\r\n    const element = event.currentTarget;\r\n    element.classList.add(this.activeClass);\r\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, this.events, () => {\r\n      element.classList.remove(this.activeClass);\r\n    });\r\n  }\r\n\r\n  // adiciona eventos ap dropdownmenu\r\n  addDropdownMenuEvent(){\r\n    this.dropdownMenus.forEach((menu) => {\r\n      this.events.forEach((userEvent) => {\r\n        menu.addEventListener(userEvent, this.activeDropdownMenu);\r\n      });\r\n    });\r\n  }\r\n\r\n  init(){\r\n    if (this.dropdownMenus.length) {\r\n      this.addDropdownMenuEvent();\r\n    }\r\n    return this\r\n  }\r\n\r\n}\r\n\n\n//# sourceURL=webpack://filmes_fantasticos/./src/js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./src/js/modules/menu-mobile.js":
/*!***************************************!*\
  !*** ./src/js/modules/menu-mobile.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./src/js/modules/outsideclick.js\");\n\r\n\r\nclass MenuMobile {\r\n  constructor(menuButton, menuList, events){\r\n    this.menuButton = document.querySelector(menuButton);\r\n    this.menuList = document.querySelector(menuList);\r\n    this.classActive = 'active';\r\n    \r\n    // define touchstart e click como argumento padrao de events \r\n    // caso o usuario nao defina \r\n    if (events === undefined) this.events = [\"touchstart\", \"click\"];\r\n    else this.events = events\r\n\r\n    this.openMenu = this.openMenu.bind(this)\r\n  }\r\n\r\n  openMenu() {\r\n    event.preventDefault();\r\n    this.menuList.classList.add(this.classActive);\r\n    this.menuButton.classList.add(this.classActive);\r\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.menuList, this.events, () => {\r\n      this.menuList.classList.remove(this.classActive);\r\n      this.menuButton.classList.remove(this.classActive);\r\n    });\r\n  }\r\n\r\n  addMenuMobileEvents(){\r\n    this.events.forEach(evento => this.menuButton.addEventListener(evento, this.openMenu));\r\n  }\r\n\r\n  init(){\r\n    if (this.menuButton && this.menuList) {\r\n      this.addMenuMobileEvents();\r\n    }\r\n    return this\r\n  }\r\n}\n\n//# sourceURL=webpack://filmes_fantasticos/./src/js/modules/menu-mobile.js?");

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\r\n  constructor(botaoAbrir, botaoFechar, containerModal) {\r\n    this.botaoAbrir = document.querySelector(botaoAbrir);\r\n    this.botaoFechar = document.querySelector(botaoFechar);\r\n    this.containerModal = document.querySelector(containerModal);\r\n\r\n    // bind this ao callback para\r\n    // fazer referencia ao objeto\r\n    // da classe\r\n    this.eventToggleModal = this.eventToggleModal.bind(this);\r\n    this.clickForaModal = this.clickForaModal.bind(this);\r\n  }\r\n\r\n  // abre ou fecha modal\r\n  toggleModal() {\r\n    this.containerModal.classList.toggle(\"ativo\");\r\n  }\r\n\r\n  // adiciona o evento de toggle ao modal\r\n  eventToggleModal(event) {\r\n    event.preventDefault();\r\n    this.toggleModal();\r\n  }\r\n\r\n  // fecha o modal ao clicar fora\r\n  clickForaModal(event) {\r\n    if (event.target === this.containerModal) {\r\n      this.toggleModal(event);\r\n    }\r\n  }\r\n\r\n  // adiciona os eventos ao modal\r\n  addModalEvent() {\r\n    this.botaoAbrir.addEventListener(\"click\", this.eventToggleModal);\r\n    this.botaoFechar.addEventListener(\"click\", this.eventToggleModal);\r\n    this.containerModal.addEventListener(\"click\", this.clickForaModal);\r\n  }\r\n\r\n  init() {\r\n    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {\r\n      this.addModalEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://filmes_fantasticos/./src/js/modules/modal.js?");

/***/ }),

/***/ "./src/js/modules/outsideclick.js":
/*!****************************************!*\
  !*** ./src/js/modules/outsideclick.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\r\n  const html = document.documentElement;\r\n  const outside = \"data-outside\";\r\n\r\n  if (!element.hasAttribute(outside)) {\r\n    events.forEach((userEvent) => {\r\n      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));\r\n    });\r\n    element.setAttribute(outside, \"\");\r\n  }\r\n\r\n  function handleOutsideClick(event) {\r\n    if (!element.contains(event.target)) {\r\n      element.removeAttribute(outside);\r\n      events.forEach((userEvent) => {\r\n        html.removeEventListener(userEvent, handleOutsideClick);\r\n      });\r\n      callback();\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://filmes_fantasticos/./src/js/modules/outsideclick.js?");

/***/ }),

/***/ "./src/js/modules/scroll-anima.js":
/*!****************************************!*\
  !*** ./src/js/modules/scroll-anima.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollAnima)\n/* harmony export */ });\n/* harmony import */ var _debouce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debouce */ \"./src/js/modules/debouce.js\");\n\r\n\r\n\r\nclass ScrollAnima {\r\n  constructor(sections){\r\n    this.sections = document.querySelectorAll(sections);\r\n    this.windowMetade = window.innerHeight * 0.6;\r\n\r\n    this.checkDistance = (0,_debouce__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.checkDistance.bind(this), 100);\r\n  }\r\n\r\n  //pega a distancia de cada item em \r\n  //relacao ao topo do site\r\n  getDistance(){\r\n    this.distance = [...this.sections].map((section)=>{\r\n      const offset = section.offsetTop;\r\n      return {\r\n        element: section,\r\n        offset: Math.floor(offset - this.windowMetade),\r\n      };\r\n    });\r\n  }\r\n\r\n  // verifica a distancia em cada objeto \r\n  // em relaçao ao scroll do site \r\n  checkDistance(){\r\n    this.distance.forEach((item)=>{\r\n      if (window.scrollY > item.offset) {\r\n        item.element.classList.add('ativo')\r\n      } else if (item.element.classList.contains(\"ativo\")) {\r\n        item.element.classList.remove(\"ativo\");\r\n      }\r\n    });\r\n  }\r\n\r\n    init(){\r\n      if (this.sections.length) {\r\n        this.getDistance();\r\n        this.checkDistance();\r\n        window.addEventListener(\"scroll\", this.checkDistance);\r\n      }\r\n      return this\r\n    }\r\n\r\n    stop(){\r\n      window.removeEventListener(\"scroll\", this.checkDistance);\r\n    }\r\n}\n\n//# sourceURL=webpack://filmes_fantasticos/./src/js/modules/scroll-anima.js?");

/***/ }),

/***/ "./src/js/modules/scroll-suave.js":
/*!****************************************!*\
  !*** ./src/js/modules/scroll-suave.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\nclass ScrollSuave {\r\n  constructor(links, options) {\r\n    this.linksInternos = document.querySelectorAll(links);\r\n    if (options === undefined) {\r\n      this.options = { behavior: \"smooth\", block: \"start\" };\r\n    } else {\r\n      this.options = options;\r\n    }\r\n    this.scrollToSection = this.scrollToSection.bind(this);\r\n  }\r\n\r\n  scrollToSection(event) {\r\n    event.preventDefault();\r\n    const href = event.currentTarget.getAttribute(\"href\");\r\n    const section = document.querySelector(href);\r\n    section.scrollIntoView(this.options);\r\n  }\r\n\r\n  addLinkEvent() {\r\n    this.linksInternos.forEach((link) => {\r\n      link.addEventListener(\"click\", this.scrollToSection);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.linksInternos.length) {\r\n      this.addLinkEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://filmes_fantasticos/./src/js/modules/scroll-suave.js?");

/***/ }),

/***/ "./src/js/modules/slide.js":
/*!*********************************!*\
  !*** ./src/js/modules/slide.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Slide: () => (/* binding */ Slide),\n/* harmony export */   \"default\": () => (/* binding */ SlideNav)\n/* harmony export */ });\n/* harmony import */ var _debouce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debouce.js */ \"./src/js/modules/debouce.js\");\n\r\n\r\nclass Slide {\r\n  constructor(slide, wrapper) {\r\n    this.slide = document.querySelector(slide);\r\n    this.wrapper = document.querySelector(wrapper);\r\n    this.activeClass = \"active\";\r\n    this.changeEvent = new Event(\"changeEvent\");\r\n\r\n    this.dist = { finalPosition: 0, startX: 0, movement: 0 };\r\n  }\r\n\r\n  transition(active) {\r\n    this.slide.style.transition = active ? \"transform .3s\" : \"\";\r\n  }\r\n\r\n  moveSlide(distX) {\r\n    this.dist.movePosition = distX;\r\n    this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;\r\n  }\r\n\r\n  updatePosition(clientX) {\r\n    this.dist.movement = (this.dist.startX - clientX) * 1.6;\r\n    return this.dist.finalPosition - this.dist.movement;\r\n  }\r\n\r\n  onStart(event) {\r\n    let movetype;\r\n\r\n    if (event.type === \"mousedown\") {\r\n      event.preventDefault();\r\n      this.dist.startX = event.clientX;\r\n      movetype = \"mousemove\";\r\n    } else {\r\n      this.dist.startX = event.changedTouches[0].clientX;\r\n      movetype = \"touchmove\";\r\n    }\r\n    this.wrapper.addEventListener(movetype, this.onMove);\r\n    this.transition(false);\r\n  }\r\n\r\n  onMove(event) {\r\n    const pointerPosition =\r\n      event.type === \"mousemove\"\r\n        ? event.clientX\r\n        : event.changedTouches[0].clientX;\r\n    const finalPosition = this.updatePosition(pointerPosition);\r\n    this.moveSlide(finalPosition);\r\n  }\r\n\r\n  onEnd(event) {\r\n    const movetype = event.type === \"mouseup\" ? \"mousemove\" : \"touchmove\";\r\n    this.wrapper.removeEventListener(movetype, this.onMove);\r\n    this.dist.finalPosition = this.dist.movePosition;\r\n    this.transition(true);\r\n    this.changeSlideOnEnd();\r\n  }\r\n\r\n  changeSlideOnEnd() {\r\n    if (this.dist.movement > 120 && this.index.next !== undefined) {\r\n      this.activeNextSlide();\r\n    } else if (this.dist.movement < -120 && this.index.prev !== undefined) {\r\n      this.activePrevSlide();\r\n    } else {\r\n      this.changeSlide(this.index.active);\r\n    }\r\n  }\r\n\r\n  addSlideEvents() {\r\n    this.wrapper.addEventListener(\"mousedown\", this.onStart);\r\n    this.wrapper.addEventListener(\"touchstart\", this.onStart);\r\n    this.wrapper.addEventListener(\"mouseup\", this.onEnd);\r\n    this.wrapper.addEventListener(\"touchend\", this.onEnd);\r\n  }\r\n\r\n  slidePosition(slide) {\r\n    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;\r\n    return -(slide.offsetLeft - margin);\r\n  }\r\n\r\n  // Slide config\r\n  slideConfig() {\r\n    this.slideArray = [...this.slide.children].map((element) => {\r\n      const position = this.slidePosition(element);\r\n      return { position, element };\r\n    });\r\n  }\r\n\r\n  slideIndexNav(index) {\r\n    const last = this.slideArray.length - 1;\r\n    this.index = {\r\n      prev: index ? index - 1 : undefined,\r\n      active: index,\r\n      next: index === last ? undefined : index + 1,\r\n    };\r\n  }\r\n\r\n  changeSlide(index) {\r\n    const activeSlide = this.slideArray[index];\r\n    this.moveSlide(activeSlide.position);\r\n    this.slideIndexNav(index);\r\n    this.dist.finalPosition = activeSlide.position;\r\n    this.changeActiveClass();\r\n    this.wrapper.dispatchEvent(this.changeEvent);\r\n  }\r\n\r\n  changeActiveClass() {\r\n    this.slideArray.forEach((item) =>\r\n      item.element.classList.remove(this.activeClass)\r\n    );\r\n    this.slideArray[this.index.active].element.classList.add(this.activeClass);\r\n  }\r\n\r\n  activePrevSlide() {\r\n    if (this.index.prev !== undefined) this.changeSlide(this.index.prev);\r\n  }\r\n\r\n  activeNextSlide() {\r\n    if (this.index.next !== undefined) this.changeSlide(this.index.next);\r\n  }\r\n\r\n  onResize() {\r\n    setTimeout(() => {\r\n      this.slideConfig();\r\n      this.changeSlide(this.index.active);\r\n    }, 1000);\r\n  }\r\n\r\n  addResizeEvent() {\r\n    window.addEventListener(\"resize\", this.onResize);\r\n  }\r\n\r\n  bindEvents() {\r\n    this.onStart = this.onStart.bind(this);\r\n    this.onMove = this.onMove.bind(this);\r\n    this.onEnd = this.onEnd.bind(this);\r\n    this.activeNextSlide = this.activeNextSlide.bind(this);\r\n    this.activePrevSlide = this.activePrevSlide.bind(this);\r\n    this.onResize = (0,_debouce_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.onResize.bind(this), 200);\r\n  }\r\n\r\n  init() {\r\n    this.bindEvents();\r\n    this.transition(true);\r\n    this.addSlideEvents();\r\n    this.slideConfig();\r\n    this.changeSlide(0);\r\n    this.addResizeEvent();\r\n    return this;\r\n  }\r\n}\r\n\r\nclass SlideNav extends Slide {\r\n  constructor(slide, wrapper) {\r\n    super(slide, wrapper);\r\n    this.bindControlEvents();\r\n  }\r\n  addArrow(prev, next) {\r\n    this.prevElement = document.querySelector(prev);\r\n    this.nextElement = document.querySelector(next);\r\n    this.addArrowEvent();\r\n  }\r\n\r\n  addArrowEvent() {\r\n    this.prevElement.addEventListener(\"click\", this.activePrevSlide);\r\n    this.nextElement.addEventListener(\"click\", this.activeNextSlide);\r\n  }\r\n\r\n  createControl() {\r\n    const control = document.createElement(\"ul\");\r\n    control.dataset.control = \"slide\";\r\n\r\n    this.slideArray.forEach((item, index) => {\r\n      control.innerHTML += `<li><a href=\"#slide${index + 1}\">${\r\n        index + 1\r\n      }</a></li>`;\r\n    });\r\n    this.wrapper.appendChild(control);\r\n    return control;\r\n  }\r\n\r\n  eventControl(item, index) {\r\n    item.addEventListener(\"click\", (event) => {\r\n      event.preventDefault();\r\n      this.changeSlide(index);\r\n    });\r\n    this.wrapper.addEventListener(\"changeEvent\", this.activeControlItem);\r\n  }\r\n\r\n  activeControlItem() {\r\n    this.controlArray.forEach((item) =>\r\n      item.classList.remove(this.activeClass)\r\n    );\r\n    this.controlArray[this.index.active].classList.add(this.activeClass);\r\n  }\r\n\r\n  addControl(custonControl) {\r\n    this.control =\r\n      document.querySelector(custonControl) || this.createControl();\r\n    this.controlArray = [...this.control.children];\r\n    this.activeControlItem();\r\n    this.controlArray.forEach(this.eventControl);\r\n  }\r\n\r\n  bindControlEvents() {\r\n    this.eventControl = this.eventControl.bind(this);\r\n    this.activeControlItem = this.activeControlItem.bind(this);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://filmes_fantasticos/./src/js/modules/slide.js?");

/***/ }),

/***/ "./src/js/modules/tabnav.js":
/*!**********************************!*\
  !*** ./src/js/modules/tabnav.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\nclass TabNav {\r\n  constructor(menu, content) {\r\n    this.tabMenu = document.querySelectorAll(menu);\r\n    this.tabContent = document.querySelectorAll(content);\r\n    this.activeClass = \"ativo\";\r\n  }\r\n\r\n  activeTab(index) {\r\n    this.tabContent.forEach((section) => {\r\n      section.classList.remove(this.activeClass);\r\n    });\r\n    const direcao = this.tabContent[index].dataset.anime;\r\n    this.tabContent[index].classList.add(this.activeClass, direcao);\r\n  }\r\n  // adiciona os eventos nas tabs\r\n  addTabNavEvent() {\r\n    this.tabMenu.forEach((itemMenu, index) => {\r\n      itemMenu.addEventListener(\"click\", () => this.activeTab(index));\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.tabMenu.length && this.tabContent.length) {\r\n      //ativar primeiro item\r\n      this.activeTab(0);\r\n      this.addTabNavEvent();\r\n    }\r\n    return this\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://filmes_fantasticos/./src/js/modules/tabnav.js?");

/***/ }),

/***/ "./src/js/modules/tooltip.js":
/*!***********************************!*\
  !*** ./src/js/modules/tooltip.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToolTip)\n/* harmony export */ });\nclass ToolTip {\r\n  constructor(tooltips) {\r\n    this.tooltips = document.querySelectorAll(tooltips);\r\n\r\n    //bind do objeto da classe aos callbacks\r\n    this.onMouseLeave = this.onMouseLeave.bind(this);\r\n    this.onMouseMove = this.onMouseMove.bind(this);\r\n    this.onMouseOver = this.onMouseOver.bind(this);\r\n  }\r\n\r\n  onMouseMove(event) {\r\n    this.tooltipBox.style.top = `${event.pageY + 10}px`;\r\n    if (event.pageX + 200 > window.innerWidth) {\r\n      this.tooltipBox.style.left = `${event.pageX - 160}px`;\r\n    } else {\r\n      this.tooltipBox.style.left = `${event.pageX + 10}px`;\r\n    }\r\n  }\r\n\r\n  onMouseLeave({ currentTarget }) {\r\n    this.tooltipBox.remove();\r\n    currentTarget.removeEventListener(\"mouseleave\", this.onMouseLeave);\r\n    currentTarget.removeEventListener(\"mousemove\", this.onMouseMove);\r\n  }\r\n\r\n  // cria a tooltipbox e coloca no body\r\n  criarTooltipBox(element) {\r\n    const tooltipBox = document.createElement(\"div\");\r\n    const text = element.getAttribute(\"aria-label\");\r\n    tooltipBox.classList.add(\"tooltip\");\r\n    tooltipBox.innerText = text;\r\n    document.body.appendChild(tooltipBox);\r\n    this.tooltipBox = tooltipBox;\r\n  }\r\n\r\n  // cria a tooltip e   adiciona os eventos\r\n  // de mousemove e mouseleave ao target\r\n  onMouseOver(event) {\r\n    // cria a tooltip box e coloca em uma propriedade\r\n    this.criarTooltipBox(event.currentTarget);\r\n    event.currentTarget.addEventListener(\"mousemove\", this.onMouseMove);\r\n    event.currentTarget.addEventListener(\"mouseleave\", this.onMouseLeave);\r\n  }\r\n\r\n  // adiciona os eventos de mouseover a cada tooltip\r\n  addTooltipsEvent() {\r\n    this.tooltips.forEach((item) => {\r\n      item.addEventListener(\"mouseover\", this.onMouseOver);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.tooltips.length) {\r\n      this.addTooltipsEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://filmes_fantasticos/./src/js/modules/tooltip.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./src/js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordion.js */ \"./src/js/modules/accordion.js\");\n/* harmony import */ var _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tabnav.js */ \"./src/js/modules/tabnav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal.js */ \"./src/js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./src/js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./src/js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./src/js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_scroll_anima_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/scroll-anima.js */ \"./src/js/modules/scroll-anima.js\");\n/* harmony import */ var _modules_slide_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/slide.js */ \"./src/js/modules/slide.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst scrollSuave = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"suave\"] a[href^=\"#\"]');\r\nscrollSuave.init();\r\n\r\nconst accordion = new _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"[data-anime='accordion'] dt\");\r\naccordion.init();\r\n\r\nconst tabNav = new _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\r\n  \"[data-tab='menu'] li\",\r\n  \"[data-tab='content'] section\"\r\n);\r\ntabNav.init();\r\n\r\nconst modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\r\n  '[data-modal=\"abrir\"]',\r\n  '[data-modal=\"fechar\"]',\r\n  '[data-modal=\"container\"]'\r\n);\r\nmodal.init();\r\n\r\nconst tooltip = new _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\"[data-tooltip]\");\r\ntooltip.init();\r\n\r\nconst scrollAnima = new _modules_scroll_anima_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"](\"[data-anime='scroll']\");\r\nscrollAnima.init();\r\n\r\nconst dropdownMenu = new _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](\"[data-dropdown]\");\r\ndropdownMenu.init();\r\n\r\nconst menuMobile = new _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]('[data-menu=\"button\"]','[data-menu=\"list\"]');\r\nmenuMobile.init();\r\n\r\nconst slide = new _modules_slide_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"](\".slide\", \".slide-wrapper\");\r\nslide.init();\r\nslide.addControl('.custon-controls');\r\n\n\n//# sourceURL=webpack://filmes_fantasticos/./src/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;