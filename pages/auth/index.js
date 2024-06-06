import validate from '../../utils/validator.js';
import userService from '../../services/user.service.js';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

class App {
    static transform() {
        const signUpBtn = $('.sign-up-btn');
        const signInBtn = $('.sign-in-btn');
        const signUpForm = $('.sign-up');
        const signInForm = $('.sign-in');
        signUpBtn.onclick = () => {
            signInForm.classList.add('transform');
            signUpForm.classList.add('transform');

            setTimeout(() => {
                signUpForm.classList.add('up');
                signInForm.classList.remove('up');
                signInForm.classList.remove('transform');
                signUpForm.classList.remove('transform');
            }, 460);
        };

        signInBtn.onclick = () => {
            signInForm.classList.add('transform');
            signUpForm.classList.add('transform');

            setTimeout(() => {
                signInForm.classList.add('up');
                signUpForm.classList.remove('up');
                signInForm.classList.remove('transform');
                signUpForm.classList.remove('transform');
            }, 460);
        };
    }

    static logIn ({ email, password }) {
        const user = userService.login ({ email, password });
        
        if (!user) {
            const message = document.querySelector('.sign-in>.message');
            message.innerHTML = 'Email or Password invalid!';
        }
        else {
            localStorage.setItem('uid', user.id);
            window.location.replace('/');
        }
    }

    static validateForm() {
        validate('.sign-up');
        validate('.sign-in', this.logIn);
    }

    static showPassword() {
        const showPasswordBtns = $$('.show-password');
        for (let btn of showPasswordBtns) {
            btn.onclick = () => {
                const input = btn.parentElement.querySelector('input');
                if (input.type === 'password') {
                    btn.classList.remove('fa-eye');
                    btn.classList.add('fa-eye-slash');
                    input.type = 'text';
                } else {
                    btn.classList.add('fa-eye');
                    btn.classList.remove('fa-eye-slash');
                    input.type = 'password';
                }
            };
        }
    }
    static start() {
        this.transform();
        this.validateForm();
        this.showPassword();
    }
}

App.start();
