function data() {

    const baseUrl = "https://hits-resto.infotechno.id/api";

    const getMenu = () => {
        fetch(`${baseUrl}/products`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.error) {
                showResponseMessage(responseJson.message);
            } else { 
                renderAllMenus(responseJson.data);
            }
        })
        .catch(error => {
            showResponseMessage(error);
        })
    };


    /*
        jangan ubah kode di bawah ini ya!
    */

    const renderAllMenus = (menus) => {
        const listMenuElement = document.querySelector("#listMenu");
        listMenuElement.innerHTML = "";

        menus.forEach(menu => {
                listMenuElement.innerHTML += `
                <div class="col-md-3 text-center mb-4">
                    <a href="#" data-toggle="modal" data-target="#exampleModalCenter${menu.id}">
                        <img class="img-menu" src="${menu.photo}" alt="img-menu">
                    </a>
                        <h6 class="title-menu">${menu.name}</h6>
                </div>

                <!-- Modal -->
                <div class="modal fade" id="exampleModalCenter${menu.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-body">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <img class="img-fluid rounded mt-2" src="${menu.photo}" alt="img-menu">
                                <h6 class="title-menu mt-4">${menu.name}</h6>
                                <h6 class="title-menu mt-2">$ ${menu.price_end}${menu.price_quantity}</h6>
                            </div>
                        </div>
                    </div>
                </div>
                `;
        });
    };

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    document.addEventListener("DOMContentLoaded", () => {
        getMenu();
    });
}

export default data;
