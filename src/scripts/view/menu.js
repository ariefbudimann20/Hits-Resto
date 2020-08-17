class MenuApp extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <section id="menu" class="menu">
            <div class="container">
                <div class="d-flex justify-content-center">
                    <div class="col-md-4 col-sm-12 mb-5">
                        <h1 class="search-title">Find Your Favorite Menu</h1>
                    </div>
                </div>
                <div >
                    <div id="listMenu" class="row"></div>
                </div>
            </div>
        </section>`;
    }
 }
  
customElements.define("menu-app", MenuApp);