document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const closeSidebar = document.getElementById('close-sidebar');
    const mainContent = document.querySelector('.main-content');

   
    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('sidebar-active');
        mainContent.classList.toggle('main-content-shift');
    });

    
    closeSidebar.addEventListener('click', function() {
        sidebar.classList.remove('sidebar-active');
        mainContent.classList.remove('main-content-shift');
    });
});