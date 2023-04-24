import throttle from 'lodash.throttle';

const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const submit = document.querySelector('form');
const STORAGE_KEY = 'feedback-form-state';

// add to LS
const addDataToLS = () => {
    const dataLS = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    input.addEventListener('input', throttle((e) => {
        const email = e.target.value;
        dataLS.email = email;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(dataLS));
    },500)
    );
    textarea.addEventListener('input', throttle((e) => {
        const message = e.target.value;
        dataLS.message = message;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(dataLS));
    }, 500)
    );
};
addDataToLS();

// reload page
const onPageReload = () => {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedData) {
        input.value = savedData.email;
        textarea.value = savedData.message;
    };
};
onPageReload();

// submit
submit.addEventListener('submit', (e) => {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
});