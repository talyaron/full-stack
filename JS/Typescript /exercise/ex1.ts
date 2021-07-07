//create runing horse

//create function that add images to the DOM;
function add(a: number, b: number, c: number = 5): number {
    return a + b + c;
}

console.log(add(2, 4));

const root: HTMLElement | null = document.getElementById('root');
console.dir(root);

const root1: HTMLElement | null = document.querySelector('#root');
console.dir(root1);

function setImageToElement(imageUrl: string, parentElement: HTMLElement | null): HTMLImageElement | undefined {
    if (parentElement !== null) {
        const img: HTMLImageElement = document.createElement('img');
        img.setAttribute("src", imageUrl);
        parentElement.appendChild(img);
        return img;
    } else {
        return undefined;
    }
}

const pone: HTMLImageElement | undefined = setImageToElement('http://www.simplycaribbean.net/wp-content/uploads/2017/09/PONE460.jpg', root);
setImageToElement('https://www.w3schools.com/images/colorpicker.gif', root1);

//what will appen if I use user input?

function setImage(ev: KeyboardEvent): void {
    try {
        const target = ev.target as HTMLInputElement;
        if (target === null) throw new Error('no target on event');
        console.dir(target)

        if (ev.key === 'Enter' && target.value.length > 0) {
            setImageToElement(target.value, root);
        }
    } catch (e) {
        console.error(e)
    }
}
