enum headerState {
  show = "show",
  hide = "hide",
}

class Header extends HTMLElement {
  header: HTMLElement;
  currentScrollPos: number;
  prevScrollpos: number;
  headerState: headerState;

  constructor() {
    super();

    this.header = document.querySelector(".header");
    this.currentScrollPos = window.pageYOffset;
    this.prevScrollpos = window.pageYOffset;

    this.registerEventListeners();

    this.showHeader();
  }

  /**
   * Sets the header state {'show'|'hide'}
   * @param state
   */
  setHeaderState(state: headerState) {
    this.header.dataset.state = state;
  }

  /**
   * Returns true if the scroll position is less than the previous scroll position.
   * @returns
   */
  isScrollingUp(): boolean {
    return (
      this.prevScrollpos > this.currentScrollPos && this.currentScrollPos !== 0
    );
  }

  /**
   * Returns true if the the scroll position is at the top.
   * @returns
   */
  isScrolledToTop(): boolean {
    return this.currentScrollPos === 0;
  }

  /**
   * Shows the sites header.
   */
  showHeader() {
    this.setHeaderState(headerState.show);
  }

  /**
   * Hides the Site header.
   */
  hideHeader() {
    this.setHeaderState(headerState.hide);
  }

  registerEventListeners() {
    window.addEventListener(
      "scroll",
      () => {
        this.currentScrollPos = window.pageYOffset;

        if (this.isScrollingUp()) {
          this.showHeader();
        } else if (this.isScrolledToTop()) {
          this.showHeader();
        } else {
          setTimeout(() => {
            this.hideHeader();
          }, 100);
        }

        this.prevScrollpos = this.currentScrollPos;
      },
      { passive: true }
    );
  }
}

customElements.define("site-header", Header);
