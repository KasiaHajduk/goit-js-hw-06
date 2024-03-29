const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const parent = document.querySelector(".gallery");
const galleryImages = images
      .map((image) => `<li><img src=${image.url}alt=${image.alt}></li>`)
      .join("");
parent.insertAdjacentHTML("beforeend", galleryImages);
parent.insertAdjacentHTML("beforebegin", "<h2 class='task3'>Art Gallery</h2>");

parent.style.display = 'flex';
parent.style.flexFlow = 'row wrap';
parent.style.padding = '10px'
parent.style.listStyle = 'none';
