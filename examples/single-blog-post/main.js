// =======Given Code=======

const blogPost = {
  title: "The Amazing Sloth",
  meta: {
    date: "May 2, 2017"
  },
  post: {
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/MC_Drei-Finger-Faultier.jpg",
    content: "Sloths make very good habitats for other organisms, and a single sloth may be home to several species of moths, beetles, cockroaches, fungi, ciliates, and algae."
  },
  site: {
    name: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/Sloth"
  }
};

// ===================THE LONG WAY===========================

// Don't forget to access the area that you are manipulating
//
// let sloths = document.querySelector(.container);
//
// // Webpage includes header, image, meta, post, and site
// // (all pulled from the CSS)
//
// // -------all of the content of the article------
// let content = document.createElement('article');
//
// // -------------the header------------------------
// let header = document.createElement('h2');
// let headertext = document.createTextNode('The Amazing Sloth');
//
// // --------------------the body----------------------
// let meta = document.createElement('date');
//
// let headerimage = document.setAttribute('src', image);
//
// let post = document.createElement()
// let post = document.createTextNode('Sloths make very good habitats for other organisms, and a single sloth may be home to several species of moths, beetles, cockroaches, fungi, ciliates, and algae');
//
// // ---------------------the footer-------------------
// let site = document.createElement()
//
//
// +++++++AND THEN YOU WOULD APPEND THE CHILDREN+++++++

// ================= Using Template Literals ====================

// create a template that can be manipulated by changing
// the values of the keys in the const blogPost

// 1) start with the article tag for everything to sit inside of

// 2) create your header tags and include your tie into the
//     blogPost with ${}

// 3) call the div class meta to link your blogPost to your
//   CSS and include the date variable in a nested tag

// 4) continue throughout the page to 'divide and conquer'

let template = `
<article>

  <h2>${blogPost.title}</h2>

  <div class = "meta">${blogPost.meta}
    <span class = "date">Written on ${blogPost.date}</span>
  </div>

  <div class = "post">
    <img src= "${blogPost.post.image}">
    ${blogPost.post.content}
  </div>

  <div class = "site">
    Part of this content was pulled from <a href = "${blogPost.site}"</a>
  </div>

</article>
`
// Now we want to connect our template to our document
document.querySelector('.container').innerHTML = template
