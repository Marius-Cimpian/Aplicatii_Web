function calculateTotalPrice(unitPrice, quantity) {
    return unitPrice * quantity;
}

document.addEventListener("DOMContentLoaded", function () {


    const prices = [
        { service: "Basic Slippers", price: 50 },
        { service: "Premium Slippers", price: 90 },
        { service: "Eco-Friendly Slippers", price: 75 }
    ];

    const tableContainer = document.getElementById("price-table-container");

    if (tableContainer) {
        let tableHTML = `
            <table border="1" cellpadding="10">
                <thead>
                    <tr>
                        <th>Service</th>
                        <th>Price (EUR)</th>
                    </tr>
                </thead>
                <tbody>
        `;

        prices.forEach(item => {
            tableHTML += `
                <tr>
                    <td>${item.service}</td>
                    <td>${item.price}</td>
                </tr>
            `;
        });

        tableHTML += `
                </tbody>
            </table>
        `;

        tableContainer.innerHTML = tableHTML;
    }

    
    const button = document.getElementById("calculate-btn");
    const quantityInput = document.getElementById("quantity");
    const productSelect = document.getElementById("product");
    const totalPriceSpan = document.getElementById("total-price");

    if (button && quantityInput && totalPriceSpan) {
        button.addEventListener("click", function () {
            const unitPrice = Number(productSelect.value); 
            const quantity = Number(quantityInput.value);

            const total = calculateTotalPrice(unitPrice, quantity);
            totalPriceSpan.textContent = total;
        });
    }

    


    const main = document.querySelector("main");

    if(main)
    {
        const offerSection =document.createElement("section");

        offerSection.innerHTML =`
        <h3>Special Offer</h3>
            <p>
                Get <strong>10% discount</strong> for orders of
                <strong>5 or more items</strong>!
            </p>
        `;
        main.appendChild(offerSection);
    }

});