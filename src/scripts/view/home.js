class HomeApp extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <section id="home">
            <div class="menu_fixed">
                <div class="container">
                    <!-- Navbar -->
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <a class="navbar-brand" href="#">Hit's Resto</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" role="navigation" id="navbarNavAltMarkup">
                            <div class="navbar-nav ml-auto">
                                <a class="nav-item nav-link" href="#home"><span class="nav-span">Home</span></a>
                                <a class="nav-item nav-link" href="#about"><span class="nav-span">About</span></a>
                                <a class="nav-item nav-link" href="#menu"><span class="nav-span">Menu</span></a>
                                <a class="nav-item nav-link" href="#service"><span class="nav-span">Service</span></a>
                                <a class="nav-item nav-link" href="#contact"><span class="nav-span">Contact</span></a>
                            </div>
                        </div>
                    </nav>
                    <!-- End Navbar -->
                </div>
            </div>

            <!-- Jumbotron -->
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4 mb-5">Beyond The Boundaries Of Taste</h1>
                    <a class="btn btn-primary tombol text-center" href="#menu" role="button">Catalog Menu</a>
                </div>
            </div>
            <!-- End Jumbotron -->
        </section>`;
    }
 }
  
customElements.define("home-app", HomeApp);