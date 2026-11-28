// Seleksi elemen DOM
const inputTugas = document.getElementById('input-tugas');
const prioritasTugas = document.getElementById('prioritas-tugas');
const btnTambah = document.getElementById('btn-tambah');
const daftarTugas = document.getElementById('daftar-tugas');
const infoSisa = document.getElementById('info-sisa');
const btnHapusSelesai = document.getElementById('btn-hapus-selesai');
const filterBtns = document.querySelectorAll('.filter-btn');
const tanggalEl = document.getElementById('tanggal-hari-ini');

// Tampilkan tanggal hari ini
const opsiTanggal = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
tanggalEl.textContent = new Date().toLocaleDateString('id-ID', opsiTanggal);

// Ambil data dari LocalStorage atau gunakan array kosong
let tugasList = JSON.parse(localStorage.getItem('tugasList')) || [];
let filterAktif = 'semua';

// Fungsi simpan ke LocalStorage
function simpanData() {
    localStorage.setItem('tugasList', JSON.stringify(tugasList));
}

// Fungsi render daftar tugas ke layar
function renderTugas() {
    daftarTugas.innerHTML = '';

    const tugasTerfilter = tugasList.filter(item => {
        if (filterAktif === 'belum') return !item.selesai;
        if (filterAktif === 'selesai') return item.selesai;
        return true;
    });

    tugasTerfilter.forEach(item => {
        const li = document.createElement('li');
        if (item.selesai) li.classList.add('selesai');

        li.innerHTML = `
      <div class="info-item" onclick="toggleSelesai(${item.id})">
        <input type="checkbox" ${item.selesai ? 'checked' : ''}>
        <span class="teks-tugas">${item.teks}</span>
        <span class="badge badge-${item.prioritas}">${item.prioritas}</span>
      </div>
      <button class="btn-hapus" onclick="hapusTugas(${item.id})">✕</button>
    `;

        daftarTugas.appendChild(li);
    });

    const sisa = tugasList.filter(item => !item.selesai).length;
    infoSisa.textContent = `${sisa} tugas tersisa`;
}

// Tambah tugas baru
function tambahTugas() {
    const teks = inputTugas.value.trim();
    if (teks === '') {
        alert('Silakan tulis tugas terlebih dahulu!');
        return;
    }

    const tugasBaru = {
        id: Date.now(),
        teks: teks,
        prioritas: prioritasTugas.value,
        selesai: false
    };

    tugasList.push(tugasBaru);
    inputTugas.value = '';
    simpanData();
    renderTugas();
}

// Ubah status selesai/belum
function toggleSelesai(id) {
    tugasList = tugasList.map(item =>
        item.id === id ? { ...item, selesai: !item.selesai } : item
    );
    simpanData();
    renderTugas();
}

// Hapus satu tugas
function hapusTugas(id) {
    tugasList = tugasList.filter(item => item.id !== id);
    simpanData();
    renderTugas();
}

// Event Listeners
btnTambah.addEventListener('click', tambahTugas);
inputTugas.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') tambahTugas();
});

btnHapusSelesai.addEventListener('click', () => {
    tugasList = tugasList.filter(item => !item.selesai);
    simpanData();
    renderTugas();
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterAktif = btn.dataset.filter;
        renderTugas();
    });
});

// Render awal saat halaman dibuka
renderTugas();