
// =======================
//   Menu Mobile 
// =======================
let menuMobile = {
    btn: document.querySelector(".asideMenu"),
    menuHidden: true,
    style: "",

    menuInMobileMode: function () {

        let bodyWidth = parseInt(getComputedStyle(document.body,).width);

        if(bodyWidth < 800 ) 
        {
            return true;
        }
        else 
        {
            return false;
        }
    },

    menuIsHidden: function () {
            this.style = getComputedStyle(this.btn,);
            menuHeight = parseInt(this.style.height);

            if(menuHeight < 60) {
                return true;
            }else {
                return false;
            }
    },

    showMenu: function () {
        
        if( this.menuInMobileMode() )
        {
            if( this.menuIsHidden() )
            {
                this.btn.style.height = "auto";
            }
            else
            {
                this.btn.style.height = "56px";
            }
        }
        
    }
    
}

menuMobile.btn.addEventListener("click", () => {
    menuMobile.showMenu();
});