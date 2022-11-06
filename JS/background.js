const images = ["night.jpg", "sky.jpg", "windmill.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `back/${chosenImage}`;

document.body.appendChild(bgImage);