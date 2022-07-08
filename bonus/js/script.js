/*
# ****BONUS**
//  1. Formattare le date in formato italiano (gg/mm/aaaa)
 //2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola  => LF).
 //3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.
*/

let i = 1;

const posts = [
  {
    id: i++,
    autorName: 'Negan Smith',
    autorImage: 'img/negan_smith.webp',
    date: '05/25/2015',
    postText: "Hello guys, I'm so exciting for the final season, are you excited like me? ",
    postImage: 'img/season-final-twd.jpeg',
    numberLikes: 105,
  },
  {
    id: i++,
    autorName: 'Peter Parker',
    autorImage: 'img/peter_parker.jpeg',
    date: '10/21/2018',
    postText: 'lorem amet, consectet ipsum dolor amet, consectet sit amet, consectet',
    postImage: 'img/spideman-meme.jpeg',
    numberLikes: 87,
  },
  {
    id: i++,
    autorName: 'Anthony Yamata',
    date: '02/04/2012',
    postText: ' amet, consectet  amet, consectet lorem ipsum dolor sit amet, consectet',
    numberLikes: 42,
  },
  {
    id: i++,
    autorName: 'Negan Smith',
    autorImage: 'img/negan_smith.webp',
    date: '06/23/2015',
    postText: 'lorem ipsum amet, consectet dolor amet, consectet sit amet, consectet',
    postImage: 'https://unsplash.it/300/300?image=8',
    numberLikes: 205,
  },
];

//#Functions
const getInitialName = (name)=> {
  let initialName = name.charAt(0);
  for (let i=0; i<name.length; i++) {
    if (name[i] == " "){
      initialName += name.charAt(i + 1);
    }
  }

  return initialName;
}

getLocalDate = (d)=> {
  const date = new Date(d);
  return date.toLocaleDateString();
}

const postContainer = document.querySelector(".posts-list");

let postList = "";

for (const post of posts) {
  postList += `<div class="post">
  <div class="post__header">
    <div class="post-meta">
      <div class="post-meta__icon">`

      if (post.hasOwnProperty("autorImage")) {
        postList += `<img class="profile-pic" src="${post.autorImage}" alt="${post.autorName}" />`

      } else {
        postList += `<div class="profile-pic-default">${getInitialName(post.autorName)}</div>`
      }

      postList += `
      </div>
      <div class="post-meta__data">
        <div class="post-meta__author">${post.autorName}</div>
        <div class="post-meta__time">${getLocalDate(post.date)}</div>
      </div>
    </div>
  </div>
  <div class="post__text">
    ${post.postText}
  </div>`

  if (post.hasOwnProperty("postImage")) {
  postList += `<div class="post__image">
                <img src="${post.postImage}" alt="" />
               </div> `
  }

  postList += `
  <div class="post__footer">
    <div class="likes js-likes">
      <div class="likes__cta">
        <button class="like-button js-like-button" href="#" data-postid="${post.id}">
          <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
          <span class="like-button__label">Mi Piace</span>
        </button>
      </div>
      <div class="likes__counter">Piace a <b id="like-counter-1" class="js-likes-counter">${post.numberLikes}</b> persone</div>
    </div>
  </div>
</div>`

}
postContainer.innerHTML = postList;

const buttonLike = document.querySelectorAll(".js-like-button");
const likesCounter = document.querySelectorAll(".js-likes-counter")

for (let i = 0; i < buttonLike.length; i++) {
  buttonLike[i].addEventListener("click", (e)=> {

    if (!buttonLike[i].classList.contains("like-button--liked")) {
      buttonLike[i].classList.add("like-button--liked");
      likesCounter[i].innerHTML = `${posts[i].numberLikes + 1}</b> `;

    }else {
      buttonLike[i].classList.remove("like-button--liked");
      likesCounter[i].innerHTML = `${posts[i].numberLikes}</b> `;
    }
  })
}