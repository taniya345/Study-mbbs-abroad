document.getElementById("leadForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let country = document.getElementById("country").value;

    if (name === "" || email === "" || phone === "" || country === "") {
        alert("Please fill all fields.");
        return;
    }

    document.getElementById("successMsg").classList.remove("hidden");
    this.reset();
});
