let btnchange = document.querySelector('.change-btn')
btnchange.addEventListener('click', () => {
    let getuser = async function () {
        let users = await fetch('https://randomuser.me/api/')
        let pequ = await users.json()
        let arr = pequ.results
        let results = arr.map((e) => {
            let names = document.querySelector('.names')
            names.innerHTML = `${e.name.title}  ${e.name.first}  ${e.name.last}`
            let usersImg = document.querySelector('.profile-img')
            let bgImg = document.querySelector('.background-img')
            let email = document.querySelector('.email')
            email.innerHTML = `<a href="mailto:${e.email}"> <strong>Email: </strong>${e.email}</a>`
            bgImg.src = `${e.picture.large}`
            usersImg.src = ` ${e.picture.large} `
            let usersphone = document.querySelector('.usersphone')
            usersphone.innerHTML = `<strong>Phone: </strong>${e.phone}`
        })


        console.log(pequ);


    }
    getuser()

})



// let users = fetch('https://randomuser.me/api/')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);

//     })