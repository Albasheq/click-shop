 const images = document.querySelectorAll(".images-wrapper img");
    const dots = document.querySelectorAll(".dot");

    let current = 0;

    function showImage(index) {
      images.forEach((img, i) => {
        img.classList.remove("active");
        dots[i].classList.remove("active");
      });
      images[index].classList.add("active");
      dots[index].classList.add("active");
    }

    function nextImage() {
      current = (current + 1) % images.length;
      showImage(current);
    }

    function prevImage() {
      current = (current - 1 + images.length) % images.length;
      showImage(current);
    }

    function currentImage(index) {
      current = index;
      showImage(current);
    }

    document.getElementById("addCart").addEventListener("click", () => {
      alert("✅ تمت إضافة المنتج إلى السلة!");
    });

    document.getElementById("goHome").addEventListener("click", () => {
      window.location.href = "main_products.html"; // ضع رابط الصفحة الرئيسية هنا
    });