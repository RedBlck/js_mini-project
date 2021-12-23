let user = JSON.parse(localStorage.getItem('user'));
let userConteiner = document.createElement('div');
userConteiner.classList.add('userConteiner');
let button = document.createElement('button');
button.classList.add('btn');
button.innerText = 'post of current user';
for (userKey in user) {
    let userDiv = document.createElement('div');
    userDiv.classList.add('userDiv');
    if (userKey === 'address') {
        userDiv.innerText = 'address :';
        for (adressKey in user.address) {
            let adressDiv = document.createElement('div');
            adressDiv.classList.add('paddingBot');
            if (adressKey === 'geo') {
                adressDiv.innerText = `geo: ${user.address.geo.lat} ${user.address.geo.lng}`;
            } else {
                adressDiv.innerText = `${adressKey}: ${user.address[`${adressKey}`]}`;
            }
            userDiv.append(adressDiv);
        }
    } else if (userKey === 'company') {
        userDiv.innerText = 'company :';
        for (companyKey in user.company) {
            let companyDiv = document.createElement('div');
            companyDiv.classList.add('paddingBot');
            companyDiv.innerText = `${companyKey}: ${user.company[`${companyKey}`]}`;
            userDiv.append(companyDiv);
        }
    } else {
        userDiv.innerText = `${userKey}: ${user[`${userKey}`]}`;
    }
    userConteiner.append(userDiv, button);
}
let titleContainer = document.createElement('div');
titleContainer.classList.add('titleContainer');
let titleContainerDiv = document.createElement('div');
titleContainerDiv.classList.add('titleStyle');
fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
    .then(value => value.json())
    .then(posts => {
        for (const post of posts) {
            let postContainer = document.createElement('div');
            postContainer.classList.add('postContainer');
            let titleDiv = document.createElement('div');
            titleDiv.innerText = `${post.title}`;
            let titleBtn = document.createElement('button');
            titleBtn.innerText = 'post';
            titleBtn.classList.add('titleBtn');
            titleBtn.addEventListener('click', function () {
                localStorage.setItem('post', JSON.stringify(post));
                location.href = 'post-details.html';
            });
            postContainer.append(titleDiv, titleBtn);
            titleContainerDiv.append(postContainer);
            titleContainer.append(titleContainerDiv);
        }
    });
button.addEventListener('click', function () {
    titleContainer.classList.toggle('titleContainer');
});
userConteiner.append(titleContainer);
document.body.append(userConteiner);
