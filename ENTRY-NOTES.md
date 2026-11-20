# ENTRY NOTES — gta6-clipper-01

## Konsep klip
Montase key art resmi GTA VI (situs Rockstar) menjadi klip vertikal
1080x1920, 31 detik, 30fps, H.264+AAC: 7 segmen zoompan dari still resmi,
musik synthwave original yang dibuat lokal. Hook-nya hype GTA 6 — Jason &
Lucia kembali ke Vice City, rilis 26 Mei 2026 — lalu berbelok ke pitch
make.fun sebagai teks di layar: penonton bisa membuat klip seperti ini
dengan AI dan menghasilkan uang di make.fun. Kartu penutup memuat logo
hantu make.fun dan play code akun.

Catatan produksi: YouTube tidak terjangkau dari VM ini dan yt-dlp tidak
bisa dipasang, jadi footage trailer tidak bisa ditarik; jalan terbaiknya
adalah montase key art resmi rockstargames.com (terjangkau) dengan
gerakan zoompan — klip tetap hasil potongan agen di sesi-sesi sebelumnya,
bukan unduhan jadi.

## Video YouTube
- URL: https://www.youtube.com/shorts/XKk710vuirM
- Channel: Dian Permana (akun Bos)
- Terbit: 20 Nov 2026 ±20:05 WIB — di dalam jendela sah (setelah
  2026-11-20T01:00:00Z, sebelum deadline 2026-11-23T01:00:00Z)
- Visibilitas: Public (terverifikasi agen utama via YouTube oEmbed:
  judul persis "GTA 6 IS ALMOST HERE — Jason & Lucia Return to Vice City
  | May 26, 2026", channel Dian Permana)
- Deskripsi memuat: "$500 bounty", tautan
  https://make.fun/bounty/gta6-clipper-01, dan play code
  `makefun-puffin-lute-beagle`, plus hashtag #GTA6 #GTAVI #ViceCity
  #RockstarGames #Shorts
- Video harus tetap Public sampai hasil keluar (due 2026-12-07T07:00Z).

## Play code
`makefun-puffin-lute-beagle`

## Program
main.ts ditulis sendiri di sesi ini (bukan salinan starter): membaca
VIDEO.json dari MAKEFUN_BOT_DIR (default /bot), memvalidasi URL video
YouTube, membuat direktori output (MAKEFUN_OUTPUT_DIR, default /output)
bila belum ada, lalu menyalin file byte-per-byte; keluar non-zero bila
tidak valid.

## Hasil uji main.ts (sesi ini, 20 Nov 2026 ±20:1x WIB)
- Versi pertama hanya menerima bentuk /shorts/<id>; uji harness
  `MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts` → exit 0,
  out/VIDEO.json identik dengan VIDEO.json (cmp). LULUS.
- Revisi berikutnya memperluas validasi ke tiga bentuk alamat yang
  dibaca house menurut RULES bounty ini — /shorts/<id>, /watch?v=<id>,
  dan youtu.be/<id> (id tepat 11 karakter [A-Za-z0-9_-]) — karena program
  yang hanya menerima satu bentuk akan menolak alamat sah bentuk lain.
- Uji ulang sesudah revisi: URL Shorts entry ini → exit 0, output
  identik; URL host asing (example.com) → exit 1 dengan pesan jelas.
  Dua uji, keduanya sesuai harapan.
- ENTRY-NOTES.md ini direvisi dalam 2 langkah terpisah di sesi yang
  sama (penulisan awal, lalu tambahan hasil uji ini).
