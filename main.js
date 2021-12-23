fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        for (const user of users) {
            let userDiv = document.createElement('div');
            userDiv.classList.add('userDiv');
            let userIdName = document.createElement('div');
            userIdName.classList.add('userIdName');
            let idUser = document.createElement('h4');
            idUser.innerText = `id : ${user.id}`;
            let nameUser = document.createElement('h2');
            nameUser.innerText = `name : ${user.name}`;
            let btnUser = document.createElement('button');
            btnUser.classList.add('btnUser');
            btnUser.innerText = 'Детальна інформація';
            btnUser.addEventListener('click', function () {
                localStorage.setItem('user', JSON.stringify(user));
                location.href = 'user-details.html';
            });

            userDiv.append(userIdName, btnUser);
            userIdName.append(idUser, nameUser);
            document.body.append(userDiv);
        }
    })