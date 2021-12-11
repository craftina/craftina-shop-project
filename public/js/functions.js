document.addEventListener("DOMContentLoaded", () => {

    // document.querySelector("#sidebar").mCustomScrollbar({
    //     theme: "minimal"
    // });

    document.querySelector('#dismiss, .overlay').addEventListener('click', () => {
        document.querySelector('#sidebar').classList.remove('active');
        // document.querySelector('.overlay').classList.remove('active');
    });

    document.querySelector('#sidebarCollapse').addEventListener('click', () => {
        document.querySelector('#sidebar').classList.add('active');
        // document.querySelector('.overlay').classList.add('active');
        // document.querySelector('.collapse.in').classList.toggle('in');
        // document.querySelector('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

});