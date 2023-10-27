document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    const operation = document.querySelector('.operation');
    const result = document.querySelector('.result');

    let writting = [];
    let writted = '';

    const updateScreen = () => {
        writted = writting.join('');
        operation.textContent = writted;
    }

    for (let i = 3; i < buttons.length - 1; i++) {
        const element = buttons[i];

        element.addEventListener('click', (e) => {
            const content = e.target.textContent;
            writting.push(content);
            updateScreen();
        })
    }

    const c = buttons[0];
    const back = buttons[1];
    const percent = buttons[2];
    const equal = buttons[18];

    c.addEventListener('click', () => {
        operation.textContent = '';
        result.textContent = '0';
        writting = [];
    })
    back.addEventListener('click', () => {
        writting.pop();
        updateScreen();
    })
    percent.addEventListener('click', () => {
        writting.push('/100*');
        updateScreen();
    })
    equal.addEventListener('click', () => {

        try {
            result.textContent = eval(writted) ?? 0;
        } catch (error) {
            console.log("error:", { error })
            result.textContent = error.stack.split(':')[0];
        }
    })
}
)