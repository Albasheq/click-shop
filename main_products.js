   function goToProduct(page) {
        window.location.href = page;
    }
    // لمنع حدث onclick للبطاقة عند الضغط على زر أضف للسلة
    function addToCart(event, productName) {
        event.stopPropagation();
        alert(`تم إضافة المنتج "${productName}" إلى السلة!`);
        // هنا يمكنك إضافة الكود الفعلي لإضافة المنتج للسلة
    }
    //-----------------------------------------------------------
    //input

    // 🔍 فلترة المنتجات
    document.getElementById("searchInput").addEventListener("keyup", function () {
        let filter = this.value.toLowerCase();
        let products = document.querySelectorAll(".product");
        products.forEach(product => {
            let productName = product.querySelector("h3").textContent.toLowerCase();
            product.style.display = productName.includes(filter) ? "block" : "none";
        });
    });