//create runing horse
//create function that add images to the DOM;
function add(a, b, c) {
    if (c === void 0) { c = 5; }
    return a + b + c;
}
console.log(add(2, 4));
var root = document.getElementById('root');
console.dir(root);
var root1 = document.querySelector('#root');
console.dir(root1);
function setImageToElement(imageUrl, parentElement) {
    if (parentElement !== null) {
        var img = document.createElement('img');
        img.setAttribute("src", imageUrl);
        parentElement.appendChild(img);
        return img;
    }
    else {
        return undefined;
    }
}
var pone = setImageToElement('http://www.simplycaribbean.net/wp-content/uploads/2017/09/PONE460.jpg', root);
setImageToElement('https://www.w3schools.com/images/colorpicker.gif', root1);
//what will appen if I use user input?
function setImage(ev) {
    try {
        var target = ev.target;
        if (target === null)
            throw new Error('no target on event');
        console.dir(target);
        if (ev.key === 'Enter' && target.value.length > 0) {
            setImageToElement(target.value, root);
        }
    }
    catch (e) {
        console.error(e);
    }
}
