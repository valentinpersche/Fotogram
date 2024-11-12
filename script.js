let pictures = [
  "./img/image1.jpg",
  "./img/image2.jpg",
  "./img/image3.jpg",
  "./img/image4.jpg",
  "./img/image5.jpg",
  "./img/image6.jpg",
  "./img/image7.jpg",
  "./img/image8.jpg",
  "./img/image9.jpg",
  "./img/image10.jpg",
  "./img/image11.jpg",
  "./img/image12.jpg",
  "./img/image13.jpg",
  "./img/image14.jpg",
  "./img/image15.jpg",
  "./img/image16.jpg",
  "./img/image17.jpg",
  "./img/image18.jpg",
  "./img/image19.jpg",
  "./img/image20.jpg",
  "./img/image21.jpg",
  "./img/image22.jpg",
  "./img/image23.jpg",
  "./img/image24.jpg",
  "./img/image25.jpg",
  "./img/image26.jpg",
  "./img/image27.jpg",
  "./img/image28.jpg",
  "./img/image29.jpg",
  "./img/image30.jpg",
  "./img/image31.jpg",
  "./img/image32.jpg",
  "./img/image33.jpg",
  "./img/image34.jpg",
  "./img/image35.jpg",
  "./img/image36.jpg",
  "./img/image37.jpg",
  "./img/image38.jpg",
  "./img/image39.jpg",
  "./img/image40.jpg",
];

let currentIndex = 0;

// Image Render Function
function renderImages() {
  let imageContainer = document.getElementById("imageContainer");
  for (let i = 0; i < pictures.length; i++) {
    imageContainer.innerHTML += imageTemplateFunction(i);
  }
}

// Template Function for Image rendering
function imageTemplateFunction(i) {
  return `  <div class="imageBox">
                     <img onclick="renderDialog(${i})" class="smallImage" src="${pictures[i]}">
                 </div>`;
}

function toggleOverlay() {
  let overlayRef = document.getElementById("overlay");
  overlayRef.classList.toggle("dNone");

  // Remove the noHoverEffect class to re-enable hover effect
  if (overlayRef.classList.contains("dNone")) {
    document.querySelectorAll(".smallImage").forEach((img) => {
      img.classList.remove("noHoverEffect");
    });
    continueScroll();
  } else {
    stopScroll();
  }
}

function renderDialog(i) {
  currentIndex = i;
  let picture = document.getElementById("dialogPictureContainer");
  let pictureName = document.getElementById("pictureName");
  let pictureIndex = document.getElementById("imageCount");

  // Render dialog content
  picture.innerHTML = `<img class="bigImage" src="${pictures[i]}">`;
  pictureName.innerHTML = pictures[i];
  pictureIndex.innerHTML = i + 1 + "/" + pictures.length;

  // Add noHoverEffect class to disable hover effect
  document.querySelectorAll(".smallImage").forEach((img) => {
    img.classList.add("noHoverEffect");
  });

  if (document.getElementById("overlay").classList.contains("dNone")) {
    toggleOverlay();
    stopScroll();
  }
}

// toggle Website scrolling off
function stopScroll() {
  document.body.style.overflow = "hidden";
}

// toggle Website scrolling on
function continueScroll() {
  document.body.style.overflow = "visible";
}

// Next Image / Previous Image Function
function moveForward(event) {
  event.stopPropagation();
  if (currentIndex < pictures.length - 1) {
    currentIndex++;
    renderDialog(currentIndex);
  } else {
    currentIndex = 0;
    renderDialog(currentIndex);
  }
}

function moveBackward(event) {
  event.stopPropagation();
  if (currentIndex > 0) {
    currentIndex--;
    renderDialog(currentIndex);
  } else {
    currentIndex = pictures.length - 1;
    renderDialog(currentIndex);
  }
}
