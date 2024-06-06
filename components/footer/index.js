function Footer() {
    return `<div class="footer-wrapper">
                <div class="footer-main">
                    <div class="footer-main-section">
                        <a href="" class="footer-main-section-title">FIND A STORE</a>
                        <a href="" class="footer-main-section-title">BECOME A MEMBER</a>
                        <a href="" class="footer-main-section-title">SEND US FEEDBACK</a>
                    </div>
                    <div class="footer-main-section">
                        <a href="" class="footer-main-section-title">Get Help</a>
                        <div class="footer-main-section-items">
                            <a href="" class="footer-main-section-item">Order Status</a>
                            <a href="" class="footer-main-section-item">Delivery</a>
                            <a href="" class="footer-main-section-item">Returns</a>
                            <a href="" class="footer-main-section-item">Payment Options</a>
                            <a href="" class="footer-main-section-item">Contact Us</a>
                        </div>
                    </div>
                    <div class="footer-main-section">
                        <a href="" class="footer-main-section-title">About Store</a>
                        <div class="footer-main-section-items">
                            <a href="" class="footer-main-section-item">News</a>
                            <a href="" class="footer-main-section-item">Careers</a>
                            <a href="" class="footer-main-section-item">Investors</a>
                            <a href="" class="footer-main-section-item">Subtainability</a>
                        </div>
                    </div>
                    <div class="footer-connection">
                        <a href="" class="footer-connection-item">
                            <i class="fa-brands fa-x-twitter"></i>
                        </a>
                        <a href="" class="footer-connection-item">
                            <i class="fa-brands fa-facebook"></i>
                        </a>
                        <a href="" class="footer-connection-item">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a href="" class="footer-connection-item">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                </div>
                <div class="row no-gutters footer-bottom">
                    <div class="footer-copyright">
                        <p>© 2024 Truong Phuc & Duy Dan, Inc. All Rights Reserved</p>
                    </div>
                </div>
            </div>`;
}

function addFooter() {
    const footerEle = document.querySelector('#footer');
    footerEle.innerHTML = Footer();
}

export default Footer;
export { addFooter };
