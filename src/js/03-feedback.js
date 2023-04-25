import throttle from 'lodash.throttle';

const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const submit = document.querySelector('form');
const STORAGE_KEY = 'feedback-form-state';

// add to LS
const addDataToLS = () => {
    input.addEventListener('input', throttle((saveEmailValueToLS), 500));
    textarea.addEventListener('input', throttle((saveMessageValueToLS), 500));
};
addDataToLS();

function saveEmailValueToLS(e) {
    const dataLS = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const email = e.target.value;
    dataLS.email = email;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataLS));
};

function saveMessageValueToLS(e) {
    const dataLS = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const message = e.target.value;
    dataLS.message = message;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataLS));
};

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
submit.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};