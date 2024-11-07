// Array of image data
const images = [
    {
        fullSize: 'assert/img(11).jpg',
        thumbnail: 'assert/img(1).jpg',
        caption: 'Beach View'
    },
    {
        fullSize: 'assert/img(22).jpg',
        thumbnail: 'assert/img(2).jpg',
        caption: 'Mountains with water'
    },
    {
        fullSize: 'assert/img(33).jpg',
        thumbnail: 'assert/img(3).jpg',
        caption: 'Living Room'
    }
];

// DOM elements
const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const caption = document.getElementById('caption');
const closeBtn = document.getElementById('close-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Variable to store the current image index
let currentIndex = 0;

// Function to display thumbnails dynamically
function displayThumbnails() {
    images.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image.thumbnail;
        thumbnail.alt = image.caption;
        thumbnail.classList.add('thumbnail');
        thumbnail.addEventListener('click', () => openLightbox(index));
        gallery.appendChild(thumbnail);
    });
}

// Function to open the lightbox with the selected image
function openLightbox(index) {
    currentIndex = index;
    lightboxImage.src = images[currentIndex].fullSize;
    caption.textContent = images[currentIndex].caption;
    lightbox.style.display = 'flex'; // Show lightbox
    updateNavButtons();
}

// Function to close the lightbox
function closeLightbox() {
    lightbox.style.display = 'none'; // Hide lightbox
}

// Function to go to the previous image
function prevImage() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    openLightbox(currentIndex);
}

// Function to go to the next image
function nextImage() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    openLightbox(currentIndex);
}

// Function to update navigation buttons based on current index
function updateNavButtons() {
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === images.length - 1;
}

// Event listeners
closeBtn.addEventListener('click', closeLightbox);
prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);

// Initialize the gallery
displayThumbnails();
