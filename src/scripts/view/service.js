class ServiceApp extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <section id="service" class="service">
            <div class="container">
                <div class="d-flex justify-content-center">
                    <h1>Our Service</h1>
                </div>
                <div class="d-flex justify-content-center">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="bg-service">
                                <img src="src/img/wifi.png" class="img-fluid" alt="img-chef">
                            </div>
                            <h5 class="title-service">Wifi</h5>
                            <p class="desc-service">Lorem Ipsum is simply dummy text of the printing.</p>
                        </div>
                        <div class="col-md-3">
                            <div class="bg-service">
                                <img src="src/img/recipe.png" class="img-fluid" alt="img-chef">
                            </div>
                            <h5 class="title-service">Lunch</h5>
                            <p class="desc-service">Lorem Ipsum is simply dummy text of the printing.</p>
                        </div>
                        <div class="col-md-3">
                            <div class="bg-service">
                                <img src="src/img/pizza.png" class="img-fluid" alt="img-chef">
                            </div>
                            <h5 class="title-service">Dinner</h5>
                            <p class="desc-service">Lorem Ipsum is simply dummy text of the printing.</p>
                        </div>
                        <div class="col-md-3">
                            <div class="bg-service">
                                <img src="src/img/food.png" class="img-fluid" alt="img-chef">
                            </div>
                            <h5 class="title-service">Custom</h5>
                            <p class="desc-service">Lorem Ipsum is simply dummy text of the printing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;
    }
 }
  
customElements.define("service-app", ServiceApp);