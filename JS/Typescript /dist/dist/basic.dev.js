"use strict";

var userSchema = joi.object({
  name: joi.string(),
  age: joi.number()
});
var user = {
  name: 'tal',
  age: 49,
  status: 'married',
  kids: ['Shir', 'Bar', "Ahava"]
};
console.log(user);

function handleSubmit(e) {
  try {
    e.preventDefault();
    console.log(e.target.children);
    var name = e.target.children.name.value;
    var age = e.target.children.age.value;
    console.dir(name, age);
    console.log(name, age);

    var _userSchema$validate = userSchema.validate({
      name: name,
      age: age
    }),
        error = _userSchema$validate.error,
        value = _userSchema$validate.value;

    if (error) throw new Error(error);
    console.log(value);
    user.name = value.name;
    user.age = value.age;
    console.log(user);
  } catch (e) {
    console.error(e);
  }
}