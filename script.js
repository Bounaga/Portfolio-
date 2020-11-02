const menuBar =  document.getElementById('menubar');
const  navlinks = document.getElementById('mainlist');

function displayNavLinks() 
    {
        if (navlinks.style.display == "block") 
            {

                navlinks.style.display = "none";
            }
        else 
            {
                navlinks.style.display = "block";
            }
    } 

menuBar.addEventListener('click', displayNavLinks);


// document.getElementById('mainlist').style.display = "none";