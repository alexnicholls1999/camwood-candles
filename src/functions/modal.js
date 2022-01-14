const productsArr = [
    {
        title: "Pillars & Dining",
        table: { 
            row1Arr: ["Large Pillar", "15cm x 6cm", "£8 - £12"],
            row2Arr: ["Sunflower", "10cm x 5cm", "£8"],
            row3Arr: ["Wheatsheaf", "9.5cm x 4cm", "£10"],
            row4Arr: ["Dining Taper", "2.5cm length", "£3.50"]
        }
    },
    {
        title: "Large Votives",
        table: {
            row1Arr: ["Large Pillar", "15cm x 6cm", "£8 - £12"],
            row2Arr: ["Sunflower", "10cm x 5cm", "£8"],
            row3Arr: ["Wheatsheaf", "9.5cm x 4cm", "£10"],
            row4Arr: ["Dining Taper", "2.5cm length", "£3.50"]
        }
    },
    {
        title: "Other",
        table: {
            row1Arr: ["Large Pillar", "15cm x 6cm", "£8 - £12"],
            row2Arr: ["Sunflower", "10cm x 5cm", "£8"],
            row3Arr: ["Wheatsheaf", "9.5cm x 4cm", "£10"],
            row4Arr: ["Dining Taper", "2.5cm length", "£3.50"]
        }
    }
];

export function renderProducts() {
    const productContainer = document.querySelector(".products")
    
    const renderProductsTables = productsArr.map((product) => {
        const { title, table } = product;

        return `
            <h3>${title}</h3>
            <table class="products-table">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Dimensions</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="secondary-row">${table.row1Arr.map((row) => {return `<td>${row}</td>`}).join(' ')}</tr>
                    <tr>${table.row2Arr.map((row) => {return `<td>${row}</td>`}).join(' ')}</tr>
                    <tr class="secondary-row">${table.row3Arr.map((row) => {return `<td>${row}</td>`}).join(' ')}</tr>
                    <tr>${table.row4Arr.map((row) => {return `<td>${row}</td>`}).join(' ')}</tr>
                </tbody>
            </table>
        `;
    }).join(' ')

    productContainer.innerHTML = renderProductsTables
}

export function Modal(){
    const modal = document.querySelector(".dimensions");

    modal.innerHTML = `
        <div class="modal-wrapper">
            <div class="modal">
                <div class="modal-container">
                    <h2>Dimensions</h2>
                    <div class="products"></div>
                </div>
                <div class="modal-footer">                    
                    <button class="btn btn-primary" data-closemodalclick>CLOSE</button>
                </div>  
            </div>
        </div>
    `;

    renderProducts()
}

export function toggleModal(){
    const modalBtn = document.querySelector("[data-ondimensionsclick]");
    const closeBtn = document.querySelector("[data-closemodalclick]");
    const modalmobileBtn = document.querySelector("[data-ondimensionsmobileclick]");
    const modal = document.querySelector(".modal-wrapper");

    const openModal = (e) => {
        e.preventDefault();
        modal.classList.add("open-modal")
    }

    const closeModal = (e) => {
        e.preventDefault();
        modal.classList.remove("open-modal")
    }

    modalBtn.addEventListener("click", openModal)
    modalmobileBtn.addEventListener("click", openModal)
    closeBtn.addEventListener("click", closeModal)
}
