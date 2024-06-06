function ContentHeader() {
    return `<div class="content-header-top">
                <div class="header-left">
                    <button class="turn-left align-center">
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <button class="turn-right align-center">
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                    <div class="search-form align-center">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" class="search-input" />
                    </div>
                </div>
                <div class="header-right">
                    <button class="explore-premium">
                        Explore Premium
                    </button>
                    <button class="install-app">Install App</button>
                    <button class="notification">
                        <i class="fa-regular fa-bell"></i>
                    </button>
                    <button class="user">
                        <i class="fa-solid fa-user">
                            <ul class="user-options">
                                <li class="component">Account</li>
                                <li class="component">Profile</li>
                                <li class="component">
                                    Upgrade to Premium
                                </li>
                                <li class="component">Settings</li>
                                <li class="logout component">
                                    Log out
                                </li>
                            </ul>
                        </i>
                    </button>
                </div>
            </div>
            <div class="filter">
                <button class="all component active">All</button>
                <button class="music component">Music</button>
                <button class="podcasts component">Podcasts</button>
            </div>`;
}

function addContentHeader() {
    const contentHeaderEle = document.querySelector('.content-header');
    contentHeaderEle.innerHTML = ContentHeader();
}

export default ContentHeader;
export { addContentHeader };
