var btnShowCatalog = document.getElementById("showCatalog");
var catalog = document.getElementById("catalogBig");
var catalogSum = document.getElementById("cataSum");
var videos = document.getElementById("videos");
var catalogMain = document.getElementById("catalogSection");
var modal = document.getElementById("modal");
var cataMobileTablet = document.getElementById("cataMobileTablet");
var header = document.getElementsByClassName("header");

// if(window.innerWidth>1300 || window.innerWidth<500){
//     document.querySelector(".catalog-moblie-tablet").style.display="none"
// }

btnShowCatalog.addEventListener("click",()=>{
   

  if (window.innerWidth > 1113) {
    cataMobileTablet.style.display="none";
    modal.style.display = "none";
    if (catalog.className === "menuOn") {
      catalogSum.className="menuOn";
      catalog.className="menuOff";
      catalogSum.style.position = "fixed";
      
      videos.style.marginLeft = "70px";
      videos.className = "video-sum";
      console.log("gu");
   
    }else {
      catalogSum.className = "menuOff";
      catalog.className = "menuOn";
      videos.className = "video-main";
      videos.style.marginLeft = "0px";

      console.log("hi");
    }
  }
  else {
    catalog.display = "none";
    catalog.className="menuOff";
    videos.style.marginLeft = "0px";
    
    catalogSum.className = "menuOff";
    if (window.innerWidth < 620) {
      if (cataMobileTablet.style.display == "block") {
        cataMobileTablet.style.display = "none";
        modal.style.display = "none";
      } else {
        cataMobileTablet.style.display = "block";
        modal.style.display = "block";
        // catalogSum.style.zIndex="0";
        videos.style.zIndex = "1";
        cataMobileTablet.style.width = "200px";
        modal.style.left = "0%";
        // catalog.className="menuOff";
      }
    } else {
      if (cataMobileTablet.style.display == "block") {
        cataMobileTablet.style.display = "none";
        modal.style.display = "none";
        catalogSum.display = "none";
        catalog.className = "menuOff";
      } else {
        cataMobileTablet.style.display = "block";
        modal.style.display = "block";
        catalogSum.style.zIndex = "0";
        videos.style.zIndex = "1";
        cataMobileTablet.style.width = "200px";
        modal.style.left = "0%";
        catalog.className = "menuOff";
      }
    }
  }
  // Hiện input tìm kiếm
  var headerStart = document.getElementById("headerStart");
  var headerEnd = document.getElementById("headerEnd");
  var searchEng = document.getElementById("searchEng");
  var boxInput = document.getElementById("box-input");
  var input = document.getElementsByClassName("search-input_link");
  searchEng.onclick = function () {
    if (window.innerWidth < 620) {
      boxInput.style.display = "flex";
      headerStart.style.display = "none";
      headerEnd.style.display = "none";
    } else {
      headerStart.style.display = "flex";
      headerEnd.style.display = "flex";
    }
  };
}) 

// var btnBack = document.getElementById("btnBack");

// btnBack.onclick = function (x) {
//   if (window.innerWidth < 620) {
//     boxInput.style.display = "none";
//     headerStart.style.display = "flex";
//     headerEnd.style.display = "flex";
//   }
// };
// const menu = document.querySelector(".menu");
// const shortMenu = document.querySelector(".short-menu");
// const menuBtn = document.querySelector(".icon-list");
// const subMenu = document.querySelector(".sub-menu");
// menuBtn.addEventListener("click", () => {
//   if (window.innerWidth < 1270) {
//     subMenu.style.display = "block";
    
//     // document.querySelector(".main-content").style.opacity = "0.5";
//   } else {
//     menu.classList.toggle("showMenu");
//     shortMenu.classList.toggle("show-short-menu");
//     document.querySelector(".main-content").classList.toggle("move-content");
//   }
// });
// document.querySelector(".sub-menu-icon").addEventListener("click", (e) => {
//   subMenu.style.display = "none";
//   document.querySelector(".main-content").style.opacity = "1";
// });