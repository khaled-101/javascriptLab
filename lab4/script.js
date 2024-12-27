// var slide = document.querySelector('#img');
// var images = ["2.jpg", "1.jpg", "4.jpg","3.jpg"];
// var i = 0;
// var interval;
// slide.addEventListener('mouseenter', function () {
//     interval = setInterval(function () {
//         i++
//         slide.src = images[i];
//         if(i == images.length -1){
//             i=0
//         }; 
//     }, 500);
   
   
// });

// slide.addEventListener('mouseleave', function () {
//     clearInterval(interval);
//     slide.src = "2.jpg"; 
// });

fetch('text.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`The response wasn't right `);
        }
        return response.json();
    })
    .then(data => {
        const select = document.getElementById('select');
        const table = document.getElementById('Table');
        const nameCell = document.getElementById('name');
        const emailCell = document.getElementById('email');
        const phoneCell = document.getElementById('phone');
        const addressCell = document.getElementById('address');

        select.innerHTML = '<option value="">Select a person</option>';
        data.forEach((person, index) => {
            select.innerHTML += `<option value="${index}">${person.name}</option>`;
        });

        select.addEventListener('change', () => {
            const selectedIndex = select.value;

            if (selectedIndex === '') {
                table.style.display = 'none'; 
            } else {
                const person = data[selectedIndex];
                nameCell.textContent = person.name;
                emailCell.textContent = person.email;
                phoneCell.textContent = person.phone;
                addressCell.textContent = person.address;
                table.style.display = ''; 
            }
        });
    })
    .catch(error => {
        console.error('There was an error:', error);
    });
