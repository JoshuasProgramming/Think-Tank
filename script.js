//grabbing each section
const section_1_hover_btn = document.getElementById('section_1_hover_btn');
const section_2_hover_btn = document.getElementById('section_2_hover_btn');
const section_3_hover_btn = document.getElementById('section_3_hover_btn');
const section_4_hover_btn = document.getElementById('section_4_hover_btn');
const section_5_hover_btn = document.getElementById('section_5_hover_btn');

//grabbing the dropdown content of section 1
const section_1_dropdown_content = document.getElementById('section_1_dropdown_content');


//adding an event listener so that once the user presses the section...
section_1_hover_btn.addEventListener("click", (e)=> {

    //...we'll check whether or not the dropdown section has already been activated or not (display:inline;)

    //Whenever the dropdown section has been activated...
    if(section_1_dropdown_content.style.display == "inline"){

        //...we'll deactivate the dropdown section (display:none)
        section_1_dropdown_content.style.display = "none";

        //make space above the section (top and bottom)
        section_1_hover_btn.style.margin = "1.5% 0% 1.5% 0%";

        //Take away the transition of the sections moving down
        section_1_dropdown_content.style.transition = "0s"
        section_1_hover_btn.style.transition = "0s";

        //change the color of the section to a darker pink
        section_1_hover_btn.style.background = "#F5706C";

        //leave this event function when finished.
        return;
    }

    //Whenever the dropdown section has been deactivated...
    else if(section_1_dropdown_content.style.display = "none"){
        //...we'll activate the dropdown section (display:none)
        section_1_dropdown_content.style.display = "inline";

        //Make space below the dropdown content to avoid overlapping between section2 and the dropdown.
        section_1_dropdown_content.style.margin = "0% 0% 1% 0%";
        section_1_hover_btn.style.margin = "0% 0% -0.5% 0%";
        
        //Take away the transition of the sections moving 
        section_1_dropdown_content.style.transition = "0s"
        section_1_hover_btn.style.transition = "0s";

        //change the color of section-1 back to it's original color
        section_1_hover_btn.style.background = "#db5956";

        //make the width of the section fill the available space
        section_1_hover_btn.style.width = "-webkit-fill-available";

        //leave this event function when finished
        return;
    }
});


