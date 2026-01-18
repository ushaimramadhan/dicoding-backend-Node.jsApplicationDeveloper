function parseURL(url) {
  try {
    // Mencoba membuat objek URL baru
    return new URL(url);
  } catch (error) {
    // Jika gagal (input bukan URL valid), kembalikan null
    return null;
  }
}