const lists = document.querySelector('.lists');
const singleItem = document.querySelector('template');
const dots = document.querySelector('.dots');
const skip = document.querySelector('.skip');
const btnDiv = document.querySelector('.btn-div');
const slideshow = document.querySelector('.slideshow');
const nextBtn = document.querySelector('.next-btn');




  skip.addEventListener('click', (e) => {
    // e.preventDefault();
    // e.stopPropagation();
    dots.style.display = 'none';
    skip.style.display = 'none';
    btnDiv.style.display = 'none';
    slideshow.style.display = 'none';
  
    const fetchData = () => {
      fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => fetchedData(data));
    };
  
    const fetchedData = (data) => {
      if (data) {
        for (const post of data) {
          const itemElement = document.importNode(singleItem.content, true);
          itemElement.querySelector('h3').textContent = post.title;
          itemElement.querySelector('img').src = post.image;
          itemElement.querySelector(
            '.price'
          ).textContent = `Price: $${post.price}`;
          itemElement.querySelector('.rating').textContent =
            'Rating: ' + post.rating.rate + 'Count: ' + post.rating.count;
          itemElement.querySelector('.description').textContent =
            post.description.trim();
          itemElement.querySelector('.category').textContent = post.category;
  
          lists.append(itemElement);
        }
      }
    };
  
    fetchData();
  });
  
  





let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}

