export default class ScrollAnima {
  constructor(sections){
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.8;

    this.animaScroll = this.animaScroll.bind(this);
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const issectionVisible = (sectionTop - this.windowMetade) < 0;
      if (issectionVisible) {
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }

    init(){
      this.animaScroll();
      window.addEventListener("scroll", this.animaScroll);
      return this
    }
}