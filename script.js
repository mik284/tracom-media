const container = document.getElementById("b-container")

let data= [
    {
        id: 1,
        name: "mikey",
        status:"software dev",
        postImg:["/post.jpg", "/images/cat.jpg"],
        likes: 0,
        comment:""
    },
     {
        id: 2,
        name: "JoyAnn",
        status:"farmer",
        postImg:["/post.jpg", "/images/cat.jpg"],
        likes: 0,
        comment:""
    },
     {
        id: 3,
        name: "Kariuki",
        status:"content creator",
        postImg:["/post.jpg", "/images/cat.jpg"],
        likes: 0,
        comment:""
    } 
    ,{
        id: 4,
        name: "winnie",
        status:"software dev",
        postImg:["/post.jpg", "/images/cat.jpg"],
        likes: 0,
        comment:""
    },{
        id: 5,
        name: "manasses",
        status:"software dev",
        postImg:["/post.jpg", "/images/cat.jpg"],
        likes: 0,
        comment:""
    },
     {
        id: 6,
        name: "Brian",
        status:"software dev",
        postImg:["/post.jpg", "/images/cat.jpg"],
        likes: 0,
        comment:""
    }
]

// guard clause
if(!localStorage.getItem("tracomStudents")){

    localStorage.setItem("tracomStudents",JSON.stringify(data))
}

// localStorage.clear()


let stringData=localStorage.getItem("tracomStudents")
let tracomStudents = JSON.parse(stringData)


function populateCards(students = tracomStudents){
    let totalStudents=""
    students.forEach((e)=>{
    let postCard = `<div class="b-card card">
            <div class="b-head-section">
              <div class="b-head-info">
                <div class="b-avatar">
                  <img src="/images/avatar.png" alt="" class="b-avatar-img" />
                </div>
                <p class="b-name">${e.name}</p>
                <p class="b-tagname">${e.status}</p>
              </div>
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
            <div class="b-main-img-container">
              <img src="./images/cat.jpg" alt="" class="b-main-img" />
            </div>
            <div class="b-icon-bar">
              <div class="b-pack-one icons">
                <i  id=${'card_'+ e.id} class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-comment"></i>
                <i class="fa-solid fa-paper-plane"></i>
              </div>
              <div class="b-pack-two icons">
                <i class="fa-solid fa-arrow-down"></i>
                <i class="fa-solid fa-bookmark"></i>
              </div>
                <div class="b-likes">
                <div class="b-like-count" style="font-size: 10px"><p id="count" class="b-likes-count-child">${e.likes}</p>Likes</div>
                </div>
            </div>
        </div>
    `
    
    totalStudents+=postCard
    container.innerHTML = totalStudents

})

}

//Populate UI

populateCards()

container.addEventListener("click", getClickedCard);


function getClickedCard(e){
  
    
    if(e.target.classList.contains("fa-solid", "fa-heart")){
       const index = Number( e.target.id.split('_')[1])

      const obj = tracomStudents.find(item => item.id ===index)
        obj.likes +=1
        tracomStudents[index-1] = obj

        //Update localstorage
        localStorage.setItem("tracomStudents",JSON.stringify(tracomStudents))

        populateCards()
        // console.log("XXXXXXXXXXXXXXXXXXXXXX",obj)

  // }
// }
    }

}


// implement search
const searchInput = document.getElementById("searchuser")
searchInput.addEventListener("input", (e)=>{
  const searchTerm = e.target.value.toLowerCase();
    const filteredStudents = tracomStudents.filter(item => item.name.toLowerCase().includes(searchTerm) || item.status.toLowerCase().includes(searchTerm))
  populateCards(filteredStudents)
})




// implement filters e.g more likes , asc or desc