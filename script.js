const members = [
  { nama: 'Jeni', email: 'Jeni@email.com', minat: 'Web Development' },
  { nama: 'Abdur', email: 'Abdur@email.com', minat: 'UI/UX Design' },
  { nama: 'Abu', email: 'abu@email.com', minat: 'Data Science' }
];

function renderTable() {
  const tableBody = document.getElementById('memberTableBody');
  if (!tableBody) return;

  tableBody.innerHTML = '';

  members.forEach((member, index) => {
    tableBody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${member.nama}</td>
        <td>${member.email}</td>
        <td>${member.minat}</td>
      </tr>
    `;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderTable();

  const memberForm = document.getElementById('memberForm');

  if (memberForm) {
    memberForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const nama = document.getElementById('nama').value;
      const email = document.getElementById('email').value;
      const minat = document.getElementById('minat').value;

      const newMember = { nama, email, minat };
      members.push(newMember);

      alert('Data anggota berhasil ditambahkan!');

      const resultBox = document.getElementById('resultBox');
      resultBox.classList.remove('d-none');
      resultBox.innerHTML = `
        <h5>Hasil Input</h5>
        <p class="mb-1"><strong>Nama:</strong> ${nama}</p>
        <p class="mb-1"><strong>Email:</strong> ${email}</p>
        <p class="mb-0"><strong>Bidang Minat:</strong> ${minat}</p>
      `;

      memberForm.reset();
      console.log('Data anggota sementara:', members);
    });
  }
});

const imageList = [
  'https://gudangwisata.com/wp-content/uploads/2025/11/Telaga-Warna-1-scaled.jpg',
  'http://anekatempatwisata.com/wp-content/uploads/2015/07/Gunung-Bromo-Jawa-Timur.jpg'
];

let imageIndex = 0;

function changeImage() {
  const image = document.getElementById('galleryImage');
  if (!image) return;

  imageIndex = (imageIndex + 1) % imageList.length;
  image.src = imageList[imageIndex];
}

function showInfo() {
  alert('Ini adalah halaman multimedia wisata Indonesia.');
}

function playAudio() {
  const audio = document.getElementById('communityAudio');
  if (audio) audio.play();
}

function pauseAudio() {
  const audio = document.getElementById('communityAudio');

  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
}