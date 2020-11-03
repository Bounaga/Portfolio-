const menuBar =  document.getElementById('menubar');
const  navlinks = document.getElementById('mainlist');

function displayNavLinks() 
    {
        // navlinks.classList.add('showinmobile');
        navlinks.classList.toggle('showinmobile');
    }

menuBar.addEventListener('click', displayNavLinks);


