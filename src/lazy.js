
const isIntersecting = (entry) => {
    return entry.isIntersecting;
}

const loadImage = (entry) => {
    const container = entry.target;
    const imagen = container.querySelector('img');
    const imageUrl = imagen.dataset.src;
    imagen.src = imageUrl;
    console.log(container.nodeName);
    observer.unobserve(container);
}

const observer = new IntersectionObserver((entries  ) => {
entries
.filter(isIntersecting)
.forEach(loadImage)
})

export const registerImage = (image) => {
    observer.observe(image);
}