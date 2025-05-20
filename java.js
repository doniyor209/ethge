const input = document.getElementById("input");
const select = document.getElementById("select");
const ota = document.getElementById("ota");
const loading = document.getElementById("loading");




let users = [];

async function getData() {
    loading.style.display = "block";
    const res = await fetch("https://randomuser.me/api/?results=100");
    const data = await res.json();
    users = data.results;
    userView(users);
    loading.style.display = "none";
}

function userView(malumot) {
    ota.innerHTML = "";
    malumot.forEach(odam => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
               <img src="${odam.picture.large}" alt="User">
          <h2>${odam.name.first} ${odam.name.last}</h2>
          <p class="info">Age: ${odam.dob.age}</p>
          <p class="info">Email: ${odam.email}</p>
          <p class="info">Phone: ${odam.phone}</p>
          <p class="info">Gender: ${odam.gender}</p>
     
          `
        ota.appendChild(div);
    })

}

input.addEventListener("input", () => {
    const search = input.value.toLowerCase();
    const filteredUsers = users.filter(user => {
        return user.name.first.toLowerCase().includes(search) || user.name.last.toLowerCase().includes(search);
    });
    userView(filteredUsers);
});




select.addEventListener("change", ()=>{
    if (select.value =="age"){
        const sortedUsers = users.sort((a, b) => a.dob.age - b.dob.age);
        userView(sortedUsers);
    }else if (select.value == "name"){
        const sortedUsers = users.sort((a, b) => a.name.first.localeCompare(b.name.first));
        userView(sortedUsers);
    } 
    })


















setTimeout(getData, 2000);







