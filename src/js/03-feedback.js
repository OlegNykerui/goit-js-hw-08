import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('[name="email"]'),
  text: document.querySelector('[name="message" ]'),
};

const STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('submit', event => {
  event.preventDefault();
  if (!refs.email.value || !refs.text.value) {
    alert('Enter all field');
    return;
  }
  console.log(formData);
  refs.form.reset();
  localStorage.removeItem(STORAGE_KEY);
});
refs.form.addEventListener(
  'input',
  throttle(e => {
    formData = { email: refs.email.value, text: refs.text.value };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, 500)
);

const storage = key => {
  try {
    const savedMassege = localStorage.getItem(key);
    return savedMassege === null ? undefined : JSON.parse(savedMassege);
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
};

let formData = storage(STORAGE_KEY);
if (formData) {
  refs.email.value = formData.email;
  refs.text.value = formData.text;
}

//     if (formData) {
//       refs.text.value = formData.text;
//       refs.email.value = formData.email;
//       console.log(savedMessage);
//     }
//   } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//   }

// function populateTextarea() {
//   try {
//     let savedMassege = localStorage.getItem(STORAGE_KEY);
//     let formData = JSON.parse(savedMassege);
//     if (formData) {
//       refs.email.value = formData.email;
//       refs.textarea.value = formData.textarea;
//       // return formData = localData;
//     }
//   } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//   }
// }

// refs.form.addEventListener('submit', e => {
//   e.preventDefault();
//   if (!refs.email.value || !refs.textarea.value) {
//     alert('заполните форму полностью');
//     return;
//   }
//   console.log(formData);
//   refs.form.reset();
//   localStorage.removeItem(STORAGE_KEY);
// });
