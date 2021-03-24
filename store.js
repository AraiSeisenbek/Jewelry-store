fetch("https://my-json-server.typicode.com/AraiSeisenbek/mockjson/posts")
.then(response => response.json( ))
.then(postsArray => renderAllPosts(postsArray))

function renderAllPosts(postsArray) {
    postsArray.forEach(post => renderOnePost(post))
}

const findDiv = document.querySelector("#jewellery_box")
function renderOnePost(post){
    const newElement = document.createElement("div")
    newElement.className = "content"
    newElement.innerHtml = `
    <div class = "item-card">
    <div class = "center">
    <img src = "${post.url}" class="image" alt="">
    <h3>${post.title}</h3>
    <p>Price: ${post.price}</p>
    <button class="add-item">Add to Cart </button>
    </div>
    </div>
    `
    findDiv.append(newElement)
}

