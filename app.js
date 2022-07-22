// get elements  

const fiverr_form=document.getElementById('fiverr');





// ?submit fiverr form 

fiverr_form.onsubmit=(e) => {
    e.preventDefault();

// get form value

    const form_data=new FormData(e.target);
   const {date,time}=Object.fromEntries(form_data.entries());

// ? get timestamp 
    // let start_time = Date.now();
    // let end_time   = new Date(date +' '+ time );

    console.log(date);

    
}


