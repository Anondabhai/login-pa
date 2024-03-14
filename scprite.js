let mobile_icon = document.getElementById(mobile-icon);
let main_manu = document.getElementById(main_manu);


mobile_icon.removeEventListener("click",()=>{
    main_manu.classList.toggle("hidden");
})