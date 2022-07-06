/*
# Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore,
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.
*Non è necessario creare date casuali, inventatele*
*Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=3)
*/

let i = 1;

const post = [
  {
    id: i++,
    autorName: 'Negan Smith',
    autorImage: 'https://unsplash.it/300/300?image=3',
    date: '05/25/2015',
    postText: 'lorem ipsum dolor sit amet, consectet',
    postImage: 'https://unsplash.it/300/300?image=8',
    numberLikes: 105,
  },
  {
    id: i++,
    autorName: 'Peter Parker',
    autorImage: 'https://unsplash.it/300/300?image=4',
    date: '10/21/2018',
    postText: 'lorem ipsum dolor sit amet, consectet',
    postImage: 'https://unsplash.it/300/300?image=5',
    numberLikes: 87,
  },
  {
    id: i++,
    autorName: 'Anthony Yamata',
    autorImage: 'https://unsplash.it/300/300?image=7',
    date: '02/04/2012',
    postText: 'lorem ipsum dolor sit amet, consectet',
    numberLikes: 42,
  },
  {
    id: i++,
    autorName: 'Negan Smith',
    autorImage: 'https://unsplash.it/300/300?image=3',
    date: '06/23/2015',
    postText: 'lorem ipsum dolor sit amet, consectet',
    postImage: 'https://unsplash.it/300/300?image=8',
    numberLikes: 205,
  },
];

console.log(post);