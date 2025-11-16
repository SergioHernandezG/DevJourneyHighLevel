document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector('#Form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        Swal.fire({
            title: "Thanks for your answer!",
            text: "Your data has been submitted successfully.",
            icon: "success"
        }).then((result) => {
            if (result.isConfirmed) {
                // Back to home page
                window.location.href = "../Honeywell.html"; 
            }
        });
    });
});