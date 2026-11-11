
const library=[];
function Book(title,author,pages,read){
    this.id= crypto.randomUUID(),
    this.title= title
    this.author= author
    this.pages= pages
    this.read="NO"
}  
Book.prototype.readStatus=function(){
    
    if(this.read==="YES"){
     this.read = "NO"
    }else if(this.read==="NO"){
        this.read= "YES"
    }
};
function addBookToLibrary(){
const book1=new Book("The Man Died","Wole Soyinka",256)
const book2=new Book("Think Big","Ben Carson",265)
const book3=new Book("Think Big","Ben Carson",265)
const book4=new Book("Think Big","Ben Carson",265)
const book5=new Book("Think Big","Ben Carson",265)
const book6=new Book("Think Big","Ben Carson",265)
const book7=new Book("Think Big","Ben Carson",265)
const book8=new Book("Think Big","Ben Carson",265)
const book9=new Book("Think Big","Ben Carson",265)
const book10=new Book("Think Big","Ben Carson",265)

library.push(book1,book2,book3,book4,book5,book6,book7,book8,book9,book10)

}
function displayBooks(){
       const div=document.querySelector("#book-cards")
       div.innerHTML = ""
    library.forEach(book => {
        const card=document.createElement("div")
        card.classList.add("card")
        card.dataset.id=book.id;
        div.appendChild(card)
        card.innerHTML= `<div>
                          <p>TITLE:${book.title}</p>
                          <p>AUTHOR:${book.author}</p>
                          <p>PAGES:${book.pages}</p>
                          <p>READ:${book.read}</p>
                          <p>ID:${book.id}</p>
                                  <div class="read-remove">
                          <button class="read-button">READ</button>
                          <button class="remove-button">REMOVE</button>
                                  </div>
                          </div>`;

readButton = card.querySelector(".read-button")
removeButton = card.querySelector(".remove-button")
readButton.addEventListener("click",()=>{
    let bookId=card.dataset.id
    let book= library.find(function(book){
        return book.id===bookId;
        
    })
    book.readStatus();
    displayBooks();
});
removeButton.addEventListener("click",()=>{
    let bookId=card.dataset.id
        
    let index = library.findIndex(book=>book.id===bookId);
    library.splice(index,1);
    displayBooks();

    });
});
    
}
const dialog = document.querySelector(".dialog")
const closeButton = document.querySelector(".close-dialog")
const openButton = document.querySelector(".open-dialog")
const bookForm = document.querySelector(".book-form")
openButton.addEventListener("click",()=>{
  dialog.showModal();
});
closeButton.addEventListener("click",()=>{
    dialog.close();
});

bookForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const titleInput = document.querySelector("#title")
    const authorInput = document.querySelector("#author")
    const pagesInput = document.querySelector("#pages")
    const readInput = document.querySelector("#read")

    const addBook = new Book(
        titleInput.value,
        authorInput.value,
        pagesInput.value,
        readInput.value
    )
    library.push(addBook);
    displayBooks();
    dialog.close();
})



addBookToLibrary();
displayBooks();
