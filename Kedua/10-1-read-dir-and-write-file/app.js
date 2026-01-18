/**
 * @TODO:
 * 1. Baca semua nama folder yang ada di dalam direktori ini
 * 2. Tulis semua nama folder yang ada di dalam direktori ini ke dalam file `out.txt`
 * 3. Pastikan direktori yang ditulis pada `out.txt` diurutkan secara ascending (A-Z).
 * ...
 */

const fs = require('fs');

function readDirAndWriteFile() {
  // 1. Baca isi direktori saat ini
  const items = fs.readdirSync(__dirname, { withFileTypes: true });

  // 2. Filter hanya yang merupakan direktori
  const folders = items
    .filter((item) => item.isDirectory())
    .map((item) => item.name)
    .sort(); // 3. Urutkan secara Ascending (A-Z)

  // 4. Gabungkan dengan koma (TANPA SPASI) sesuai validasi, lalu tulis ke out.txt
  const result = folders.join(",");
  fs.writeFileSync("out.txt", result);
}

readDirAndWriteFile();