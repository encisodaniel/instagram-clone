const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
let main = document.getElementById("main");



for (let i = 0; i < posts.length; i++) {
    main.innerHTML += ` <div class="container">
                <div class="profile-container"> 
                    <div>  
                        <img src="${posts[i].avatar}" class="profile-pic"/>
                    </div>
                    <div class="profile-text">
                        <h4>${posts[i].name}</h4>
                        <p>${posts[i].location}</p>
                    </div>
                </div>
                <img ondblclick="like() "src="${posts[i].post}" class="posted-img" />
                <div class="icon-container">    
                    <img id="heart" onclick="like()"src="images/icon-heart.png"/>
                    <img src="images/icon-comment.png"/>
                    <img src="images/icon-dm.png"/>
                </div>
                <div class="liki">
                    <p><strong id="likes">${posts[i].likes} likes</strong></p>
                    <p><span>${posts[i].username}</span> ${posts[i].comment}</p>
                </div>
                <br>
            </div>`
}

let heart = document.getElementById("heart")
let likes = document.getElementById("likes")

function like(event) {
    let split = likes.textContent.split(" ")
    likes.textContent = `${Number(split[0]) + 1} likes`
}
/*  <div class="container">
                <div class="profile-container"> 
                    <div>  
                        <img src="images/avatar-vangogh.jpg" class="profile-pic"/>
                    </div>
                    <div class="profile-text">
                        <h4>Name Last Name</h4>
                        <p>City, Country
                    </div>
                </div>
                <img src="images/post-vangogh.jpg" class="posted-img" />
                <div class="icon-container">    
                    <img src="images/icon-heart.png"/>
                    <img src="images/icon-comment.png"/>
                    <img src="images/icon-dm.png"/>
                </div>
                <div class="liki">
                    <p><strong>2222 likes</strong></p>
                    <p><span>vincey1853</span> just took a few mushrooms lol</p>
                </div>
            </div>*/