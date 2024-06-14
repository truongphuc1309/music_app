const $ = document.querySelector.bind(document);

const toggleUserOptions = () => {
    const userBtn = $('.user');
    userBtn.onclick = () => {
        userBtn.classList.toggle('active');
    };
};

const logOut = () => {
    const logOutBtn = $('.user .logout');
    logOutBtn.onclick = () => {
        localStorage.removeItem('uid');
        window.parent.location.replace('/pages/auth');
    };
};

export { toggleUserOptions, logOut };
