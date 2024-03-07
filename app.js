// var booklist=document.querySelectorAll('#book-list li:nth-child(2)');
// console.log(booklist);
// booklist.forEach(book=>{
// //     console.log(book);
// // })
// var booklist=document.querySelectorAll('#book-list li .name');
// booklist.forEach(books=>{
//     console.log(books.textContent+='here');
// })

//traversing dom frmo child to parent and parent to child

// const booklist=document.querySelector('#book-list');

// console.log('the parent node of #book-list is ',booklist.parentNode);
// console.log('the parent node of #book-list is ',booklist.parentElement.parentElement);

// console.log(booklist.children);

//how to traverse in dom from sibling to sibling

// console.log("book-list next sibling is ",booklist.nextSibling);
// console.log("book-list next sibling is ",booklist.nextElementSibling);
// console.log("book-list next sibling is ",booklist.previousElementSibling);
// console.log("book-list next sibling is ",booklist.previousSibling);



// // events in dom
// var h2=document.querySelector('h2');
// h2.addEventListener('click',function(event){
//     console.log(event.target);
//     console.log(event);
// })

// var buttons=document.querySelectorAll('#book-list .delete');

// buttons.forEach(function(btn){
//     btn.addEventListener('click',function(event){
//         //removing the li tag wheree the delete buttion is in so we hve toget the parent elemtn 
//         const li=event.target.parentElement;

//         li.parentNode.removeChild(li);


//     });
// });
//preventing the default behaviour 
// const link=document.querySelector('#page-banner a');
// link.addEventListener('click',function(event)
// {
//     event.preventDefault();
//     console.log('navigation to ',event.target.textContent,'was prevented');
// })

// we have  prevented the default behaviour





//event bubbling
