interface User {
    name: string;
    lastName: string;
    age: number;
    password: string;
    car: string;
}
type Users = Array<User>

const users: Users = [{
    name: 'Guy',
    lastName: 'John',
    age: 49,
    password: '2331',
    car: 'volvo'
},
{
    name: 'Guy1',
    lastName: 'John',
    age: 49,
    password: '2331',
    car: 'volvo'
},
{
    name: 'Guy2',
    lastName: 'John',
    age: 49,
    password: '2331',
    car: 'volvo'
},
]


renderUsers(users);



const handleUserFormSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target.children.password.value)
}

const handleSubmit = (e: any) => {
    e.preventDefault();
    let userName: string = e.target.children.name.value;
    let lastName: string = e.target.children.LastName.value;
    let yearOfBirth: number = e.target.children.yearOfBirth.value;
    let password: string = e.target.children.password.value;
    let car = e.target.children.cars.value;


    const newUser: User = ({
        name: userName,
        lastName: lastName,
        age: yearOfBirth,
        password: password,
        car: car
    })
    users.push(newUser)



    renderUsers(users);
}

function renderUsers(users: Users): void {
    const usersDOM = document.getElementById('users');
    let html = ''
    users.forEach(user => {
        html += `<h1>${user.name} ${user.lastName}</h1>
<h2>you are at the age ${new Date().getFullYear() - user.age}</h2>
<h3>your favorite car is ${user.car}</h3>
<h4>Please enter your password:</h4>
<form onSubmit='handleUserFormSubmit(event)'>
<input type="text" name="password" placeholder="password">
<input type="submit" value="OK">
</form>`
    });
    usersDOM.innerHTML = html;
    
}