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
            <table>
                <tr>
                    <th>Product Name</th>
                    <th>Dimensions</th>
                    <th>Cost</th>
                </tr>
                <tr>${table.row1Arr.map((row) => {return `<td>${row}</td>`})}</tr>
                <tr>${table.row2Arr.map((row) => {return `<td>${row}</td>`})}</tr>
                <tr>${table.row3Arr.map((row) => {return `<td>${row}</td>`})}</tr>
                <tr>${table.row4Arr.map((row) => {return `<td>${row}</td>`})}</tr>
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
    const mobileBtn = document.querySelector("[data-ondimensionsclick]");
    const closeBtn = document.querySelector("[data-closemodalclick]")
    const modal = document.querySelector(".modal-wrapper");

    const openModal = (e) => {
        e.preventDefault();
        modal.classList.add("open-modal")
    }

    const closeModal = (e) => {
        e.preventDefault();
        modal.classList.remove("open-modal")
    }

    mobileBtn.addEventListener("click", openModal)
    closeBtn.addEventListener("click", closeModal)
}
