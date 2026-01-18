const EventEmitter = require('events');

const BasicMath = {
  add: (a, b) => console.log(a + b),
  subtract: (a, b) => console.log(a - b),
};

// Tulis kodemu di bawah ini ...
const eventEmitter = new EventEmitter();

// 1. Tambahkan fungsi add sebagai listener (akan terus berjalan setiap event dipanggil)
eventEmitter.on('calculate', BasicMath.add);

// 2. Tambahkan fungsi subtract sebagai one-time listener (hanya berjalan sekali lalu otomatis dihapus)
eventEmitter.once('calculate', BasicMath.subtract);

// 3. Bangkitkan event calculate dengan angka 2 dan 3
// Output seharusnya:
// 5 (dari add)
// -1 (dari subtract)
eventEmitter.emit('calculate', 2, 3);

// 4. Bangkitkan event calculate dengan angka 5 dan 6
// Output seharusnya hanya:
// 11 (dari add, karena subtract sudah hilang/expired)
eventEmitter.emit('calculate', 5, 6);