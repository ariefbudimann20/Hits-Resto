class ContactApp extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <section id="contact" class="contact">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 mb-5">
                        <h4>Location Resto</h4>
                        <p><i class="fas fa-map-marker-alt"></i> 732/21 Second Street, Manchester, King Street, Kingston United Kingdom</p>
                    </div>
                    <div class="col-md-4 mb-5">
                        <div class=""> 
                            <h4>Open Hours</h4>
                        </div>
                        <p><i class="fas fa-clock"></i> Monday – Friday <br>
                        10 AM – 7 PM</p>
                        <p><i class="fas fa-phone-alt"></i> +66 7883456</p>
                        <p><i class="fas fa-phone-alt"></i> +66 233459876</p> 
                    </div>
                    <div class="col-md-4 mb-5">
                        <div style="width: 100%"><iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=732/21%20Second%20Street,%20Manchester,%20King%20Street,%20Kingston%20United%20Kingdom+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
                    </div>
                </div>
            </div>
        </section>`;
    }
 }
  
customElements.define("contact-app", ContactApp);