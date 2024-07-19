var sidenav = document.querySelector(".side-navbar")


function shownavbar()
{
    sidenav.style.left="0%"
}
function closenavbar()
{
    sidenav.style.left="-60%"
}

document.addEventListener('DOMContentLoaded', () => {
    const dobInput = document.getElementById('dob');
    const ageInput = document.getElementById('age');
    const stateSelect = document.getElementById('state');
    const citySelect = document.getElementById('city');

    // Set max date for dobInput to today
    const today = new Date().toISOString().split('T')[0];
    dobInput.setAttribute('max', today);

    dobInput.addEventListener('change', () => {
        const dob = new Date(dobInput.value);
        const today = new Date();
        
        let age = today.getFullYear() - dob.getFullYear();
        const m = today.getMonth() - dob.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
            age--;
        }

        if (age < 18) {
            alert('Age must be 18 or above.');
            dobInput.value = '';
            ageInput.value = '';
            return;
        }

        ageInput.value = age;
    });

    stateSelect.addEventListener('change', () => {
        const state = stateSelect.value;
        citySelect.innerHTML = '';

        if (state === 'State1') {
            citySelect.innerHTML += '<option value="City1">Coimbatore</option>';
            citySelect.innerHTML += '<option value="City2">Trichy</option>';
        } else if (state === 'State2') {
            citySelect.innerHTML += '<option value="City3">Kochi</option>';
            citySelect.innerHTML += '<option value="City4">Thiruvananthapuram</option>';
        } else {
            citySelect.innerHTML = '<option value="">Select a state first</option>';
        }
    });
});

