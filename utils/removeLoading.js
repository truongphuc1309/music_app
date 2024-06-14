const removeLoading = () => {
    const loadings = document.querySelectorAll('.loadingLR, .loadingTD');
    setTimeout(() => {
        loadings.forEach((e) => {
            try {
                e.classList.remove('loadingTD');
            } catch {}

            try {
                e.classList.remove('loadingLR');
            } catch {}
        });
    }, 2000);
};

export default removeLoading;
