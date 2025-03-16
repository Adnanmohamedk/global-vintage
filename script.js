const cars = [
    {
        name: "Ford Mustang",
        image: "images/mustang.jpg",
        description: "A classic American muscle car."
    },
    {
        name: "Chevrolet Camaro",
        image: "images/camaro.jpg",
        description: "A stylish and powerful sports car."
    },
    {
        name: "Tesla Model S",
        image: "images/tesla.jpg",
        description: "An all-electric luxury sedan with cutting-edge technology."
    }
];

const carGallery = document.querySelector('.car-gallery');

cars.forEach(car => {
    const carItem = document.createElement('div');
    carItem.classList.add('car-item');
    carItem.innerHTML = `
        <img src="${car.image}" alt="${car.name}" loading="lazy" style="border-radius:5px;">
        <h3>${car.name}</h3>
        <p>${car.description}</p>
    `;
    carGallery.appendChild(carItem);
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const button = this.querySelector('button');
    button.innerText = 'Sending...';
    button.disabled = true;

    // Simulate a network request
    setTimeout(() => {
        alert('Thank you for your message! We will get back to you soon.');
        button.innerText = 'Send Message';
        button.disabled = false;
        this.reset();
    }, 2000); // Simulate a 2-second delay
});