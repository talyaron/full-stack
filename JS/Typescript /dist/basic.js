var users = [{
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
];
renderUsers(users);
var handleUserFormSubmit = function (e) {
    e.preventDefault();
    console.log(e.target.children.password.value);
};
var handleSubmit = function (e) {
    e.preventDefault();
    var userName = e.target.children.name.value;
    var lastName = e.target.children.LastName.value;
    var yearOfBirth = e.target.children.yearOfBirth.value;
    var password = e.target.children.password.value;
    var car = e.target.children.cars.value;
    var newUser = ({
        name: userName,
        lastName: lastName,
        age: yearOfBirth,
        password: password,
        car: car
    });
    users.push(newUser);
    renderUsers(users);
};
function renderUsers(users) {
    var usersDOM = document.getElementById('users');
    var html = '';
    users.forEach(function (user) {
        html += "<h1>" + user.name + " " + user.lastName + "</h1>\n<h2>you are at the age " + (new Date().getFullYear() - user.age) + "</h2>\n<h3>your favorite car is " + user.car + "</h3>\n<h4>Please enter your password:</h4>\n<form onSubmit='handleUserFormSubmit(event)'>\n<input type=\"text\" name=\"password\" placeholder=\"password\">\n<input type=\"submit\" value=\"OK\">\n</form>";
    });
    usersDOM.innerHTML = html;
}
