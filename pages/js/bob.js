    const images = [
        "img/sleep1.png",
        "img/sleep2.png",
        "img/sleep3.png",
        "img/sleep4.png",
        "img/sleep5.png",
        // "img/bob.png",
    ];

    let index = 0;
    const imgElement = document.getElementById("slideshow");

    setInterval(() => {
        index = (index + 1) % images.length;
        imgElement.src = images[index];
    }, 1000); // 5000 ms = 5 seconds