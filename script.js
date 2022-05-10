document.querySelector('button').addEventListener('click', () => {
    // Mengambil data berat badan dalam bentuk Kg
    const beratBadan = document.querySelector('.bBadan').value;
    // Mengambil data tinggi badan
    const tinggiBadanCm = document.querySelector('.tBadan').value;
    // Mengconvert tinggi badan kedalam meter
    const tinggiBadanMeter = tinggiBadanCm / 100;
    // mengkuadratkan hasil realDataTinggiBadan
    const realDataTinggiBadan = tinggiBadanMeter ** 2;
    // membagi data berat badan dengan hasil convert tinggi badan dikali 2
    const hasil = beratBadan / realDataTinggiBadan;
    // tampilkan hasil IMT
    document.querySelector('.hasil').innerHTML = hasil.toFixed(1);
    // const tampilIMT = hasil.toFixed(1);
    // Tambahkan pesan tentang hasil dari IMT baik berupa kurus, normal, gemuk
    let tampilHasilAkhir = '';
    if (hasil < 17.0) { //jika hasil lebih kecil dari 17.0
        tampilHasilAkhir = 'Kamu termasuk kategori berbadan Kurus, dan termasuk kekurangan berat badan tingkat berat!';
    } else if (hasil >= 17.0 && hasil <= 18.4) { //jika hasil antara 17.0 sampai 18.4
        tampilHasilAkhir = 'Kamu termasuk kategori berbadan Kurus, dan termasuk kekurangan berat badan tingkat ringan!';
    } else if (hasil >= 18.5 && hasil <= 25.0) {
        tampilHasilAkhir = 'Selamat, kamu termasuk kategori berbadan Normal!';
    } else if (hasil >= 25.1 && hasil <= 27.0) {
        tampilHasilAkhir = 'Kamu termasuk kategori berbadan Gemuk tingkat ringan!';
    } else if (hasil > 27.0) {
        tampilHasilAkhir = 'Kamu termasuk kategori berbadan Gemuk tingkat berat!';
    }

    document.querySelector('.reset').addEventListener('click', function () {
        // Me-reset form input dan output
        const beratBadan = (document.querySelector('.bBadan').value = '');

        const tinggiBadanCm = (document.querySelector('.tBadan').value = '');

        document.querySelector('.kategori').innerHTML = '';

        document.querySelector('.hasil').innerHTML = '';
    });

    document.querySelector('.kategori').innerHTML = tampilHasilAkhir;
    // console.log(tampilHasilAkhir);
});