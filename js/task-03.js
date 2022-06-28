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


const onGallery = document.querySelector('.gallery');

const onImageList = images.map(({ url, alt }) => `<li class='js__item'
  ><img  alt = '${alt}' width = 640 src = ${url}></li>`).join('');

onGallery.insertAdjacentHTML('beforeend', onImageList);



//  second option  with append


// const onAddGallery = images.map(({ url, alt }) => {
//   const onImageList = document.createElement('li');
//   onImageList.classList.add('js-image')

//   const onImage = document.createElement('img');
//   onImage.width = '640';
//   onImage.alt = alt;
//   onImage.src = url;

//   onImageList.appendChild(onImage);
//   onGallery.append(onImageList);
// });


