let post = JSON.parse(localStorage.getItem('post'));
let bodyContainer = document.createElement('div');
let postContainer = document.createElement('div');
postContainer.classList.add('postContainer');
for (postElement in post) {
    let postDiv = document.createElement('div');
    postDiv.innerText = `${postElement}: ${post[`${postElement}`]}`;
    postContainer.append(postDiv);
}
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(comments => {
        let commentContainer = document.createElement('div');
        commentContainer.classList.add('commentContainer');
        for (const comment of comments) {
            let commentDiv = document.createElement('div');
            commentDiv.classList.add('commentDiv');
            for (commentKey in comment) {
                let divElement = document.createElement('div');
                divElement.classList.add('divElement');
                divElement.innerText = `${commentKey}: ${comment[`${commentKey}`]}`
                commentDiv.append(divElement);
            }
            commentContainer.append(commentDiv);
        }
        bodyContainer.append(commentContainer);
    });
bodyContainer.append(postContainer)
document.body.append(bodyContainer);