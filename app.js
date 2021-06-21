window.addEventListener("load", function () {
    let form = document.getElementById("form");
  
    form.addEventListener('submit', (event) =>  {
        event.preventDefault();
        const formDataEntries = new FormData(form).entries();
        const formData = { firstname, lastname, email, mobile, offer, description } = Object.fromEntries(formDataEntries);
        console.log(formData);
    });
  });