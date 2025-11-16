document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector('#Form');

    form.addEventListener('click', function(event) {
        event.preventDefault(); 

            Swal.fire({
            title: "Personal Data",
            html: `
                <form id="Form">
                    <label for="name">Name:</label><br>
                    <input type="text" id="name" name="name"><br><br>

                    <label for="LastName">Last Name:</label><br>
                    <input type="text" id="LastName" name="LastName"><br><br>

                    <label for="email">email:</label><br>
                    <input type="email" id="email" name="email"><br><br>

                    <label for="phone">Phone:</label><br>
                    <input type="tel" id="phone" name="phone"><br><br>
                </form>
            `,
            showCancelButton: true,
            confirmButtonText: "Submit",
            showLoaderOnConfirm: true,
            preConfirm: async (login) => {
                try {
                // Back to home page
                window.location.href = "Honeywell.html"; 

                } catch (error) {
                Swal.showValidationMessage(`
                    Request failed: ${error}
                `);
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
            }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                title: `${result.value.login}'s avatar`,
                imageUrl: result.value.avatar_url
                });
            }
            }).then((result) => {
            if (result.isConfirmed) {
                // Back to home page
                window.location.href = "Honeywell.html"; 
            }
        });
    });
});