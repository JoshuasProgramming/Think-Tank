//grabbing each section of the website and the hidden paragraph, 'section_1_dropdown_content'
const section_1_hover_btn = document.getElementById('section_1_hover_btn');
const section_2_hover_btn = document.getElementById('section_2_hover_btn');
const section_3_hover_btn = document.getElementById('section_3_hover_btn');
const section_4_hover_btn = document.getElementById('section_4_hover_btn');
const section_5_hover_btn = document.getElementById('section_5_hover_btn');

const section_1_dropdown_content = document.getElementById('section_1_dropdown_content');

//adding an event listener so that once the user presses the section...
section_1_hover_btn.addEventListener("click", (e)=> {

    //...we'll check whether or not the dropdown section has been already been activated or not (display:inline;)

    //Whenever the dropdown section has been activated...
    if(section_1_dropdown_content.style.display == "inline"){
        //...we'll deactivate the dropdown (display:none)
        section_1_dropdown_content.style.display = "none";

        //leave this event function
        return;
    }

    //Whenever the dropdown section has been activated...
    else if(section_1_dropdown_content.style.display = "none"){
        //...we'll deactivate the dropdown (display:none)
        section_1_dropdown_content.style.display = "inline";

        //leave this event function
        return;
    }
});
