
class AboutApp extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <section id="about" class="about">
            <div class="container">
                <div class="row flex-row-reverse">
                    <div class="col-md-6 mt-5 mb-5">
                        <img class="img-fluid img-resto" src="src/img/resto.jpg" alt="img-resto">
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <h1 class="title">Hit's Resto</h1>
                        <p class="content">Many variations of the menu at our restaurant</p>
                        <p class="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    </div>
                </div>
            </div>
        </section>`;
    }
 }
  
customElements.define("about-app", AboutApp);