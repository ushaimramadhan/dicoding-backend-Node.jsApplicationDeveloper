/**
 * @TODO:
 * 1. Baca semua nama folder yang ada di dalam direktori ini
 * 2. Tulis semua nama folder yang ada di dalam direktori ini ke dalam file `out.txt`
 * 3. Pastikan direktori yang ditulis pada `out.txt` diurutkan secara ascending (A-Z).
 *
 * Contoh:
 * Jika dalam direktori ini terdapat folder `aaa`, `bbb`, dan `ccc`,
 * maka file `out.txt` akan berisi -> aaa,bbb,ccc
 *
 * Catatan:
 * - Anda bisa men-generate kembali folder-folder dengan menjalankan berkas `generate-folders.js`
 * - Hindari untuk mengubah kode yang sudah ada sebelumnya
 */

const fs = require('fs');

function readDirAndWriteFile() {
  // 1. Baca isi direktori saat ini
  const items = fs.readdirSync(__dirname, { withFileTypes: true });

  // 2. Filter hanya yang merupakan direktori DAN bukan folder sistem (seperti .git atau node_modules jika ada)
  const folders = items
    .filter((item) => item.isDirectory())
    .map((item) => item.name)
    .sort(); // 3. Urutkan secara Ascending (A-Z)

  // 4. Gabungkan dengan koma dan spasi, lalu tulis ke out.txt
  const result = folders.join(", ");
  fs.writeFileSync("out.txt", result);
}

readDirAndWriteFile();
