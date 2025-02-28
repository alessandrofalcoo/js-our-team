const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const cardsEl = document.querySelector('.cards');

function addMembers(img, name, role, email) {
  cardsEl.innerHTML += `<div class="card mb-3 bg-black text-white">
                  <div class="row">
                    <div class="col-4">
                        <img src="./assets/${img}" class="img-fluid" alt="">
                    </div>
                    <div class="col-8 col-sm-10 col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                            <p class="card-text">${role}</p>
                            <p class="card-text text-primary">${email}</p> 
                        </div>
                      </div>
                  </div>
              </div>
            </div> 
`
}

for (let i = 0; i < teamMembers.length; i++) {
  const thisMember = teamMembers[i];
  const name = thisMember.name.toUpperCase();
  const role = thisMember.role;
  const email = thisMember.email;
  const img = thisMember.img;
  addMembers(img, name, role, email);
}
