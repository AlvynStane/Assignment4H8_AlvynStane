const form = document.getElementById("profile-form");
const editProfileButton = document.getElementById("editProfile");
const formSection = document.getElementById("form-section");
const profileSection = document.querySelector(".card");

function loadData() {
    const nameValue = localStorage.getItem('name-value') || 'Alvyn Stane';
    const roleValue = localStorage.getItem('role-value') || 'Front End Designer';
    const availabilityValue = localStorage.getItem('availability-value') || 'Full Time';
    const usiaValue = localStorage.getItem('usia-value') || '19';
    const lokasiValue = localStorage.getItem('lokasi-value') || 'Jakarta';
    const pengalamanValue = localStorage.getItem('pengalaman-value') || '2';
    const emailValue = localStorage.getItem('email-value') || 'email@gmail.com';

    document.getElementById('name-value').textContent = nameValue;
    document.getElementById('role-value').textContent = roleValue;
    document.getElementById('availability-value').textContent = availabilityValue;
    document.getElementById('usia-value').textContent = usiaValue;
    document.getElementById('lokasi-value').textContent = lokasiValue;
    document.getElementById('pengalaman-value').textContent = pengalamanValue;
    document.getElementById('email-value').textContent = emailValue;

    document.getElementById('name-input').value = nameValue;
    document.getElementById('role-input').value = roleValue;
    document.getElementById('availability-input').value = availabilityValue;
    document.getElementById('usia-input').value = usiaValue;
    document.getElementById('lokasi-input').value = lokasiValue;
    document.getElementById('pengalaman-input').value = pengalamanValue;
    document.getElementById('email-input').value = emailValue;
}

window.onload = loadData;

editProfileButton.addEventListener("click", function () {
    profileSection.style.display = "none";
    formSection.classList.remove("d-none");
});

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const profile = {
        name: document.getElementById("name-input").value,
        role: document.getElementById("role-input").value,
        availability: document.getElementById("availability-input").value,
        usia: document.getElementById("usia-input").value,
        lokasi: document.getElementById("lokasi-input").value,
        pengalaman: document.getElementById("pengalaman-input").value,
        email: document.getElementById("email-input").value
    };

    localStorage.setItem("name-value", profile.name);
    localStorage.setItem("role-value", profile.role);
    localStorage.setItem("availability-value", profile.availability);
    localStorage.setItem("usia-value", profile.usia);
    localStorage.setItem("lokasi-value", profile.lokasi);
    localStorage.setItem("pengalaman-value", profile.pengalaman);
    localStorage.setItem("email-value", profile.email);

    loadData();

    formSection.classList.add("d-none");
    profileSection.style.display = "block";
});