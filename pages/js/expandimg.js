function expandpic(event) {
    const container = event.currentTarget; // clicked slideshow container
    const overlay = document.getElementById("overlay");
    const zoomContainer = document.getElementById("zoomedImageContainer");

    // Clear previous images
    zoomContainer.innerHTML = "";

    // Find currently visible slide
    const visibleSlide = container.querySelector(".mySlides[style*='display: block'], .mySlides2[style*='display: block']");
    if (!visibleSlide) return;

    // Copy all images in that slide
    const imgs = visibleSlide.querySelectorAll("img");
    imgs.forEach(img => {
        const clone = img.cloneNode(true);
        clone.style.width = "auto"; // optional: let CSS control size
        clone.style.height = "80vh"; // scale nicely
        zoomContainer.appendChild(clone);
    });

    // Show overlay and zoom container
    overlay.style.display = "block";
    zoomContainer.style.display = "flex";

    // Click overlay to close
    overlay.onclick = () => {
        overlay.style.display = "none";
        zoomContainer.style.display = "none";
        zoomContainer.innerHTML = "";
    };
}





