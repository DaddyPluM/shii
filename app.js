async function fetchPosts(){
    const response = await fetch ("https://jsonplaceholder.typicode.com/posts?_limit=5");
    const posts = await response.json();

    const container = document.getElementById('posts-container');

    container.innerHTML = "";
    posts.forEach(post => {
        const div = document.createElement("div");
        div.innerClassName = "post";
        div.innerHTML = " <h2>$(post.title)</h2> <p>$(post.body)</p>"
        container.appendChild(div);
    });
}

document.getElementById("loadPostBtn")
    .addEventListener("click", fetchPosts);