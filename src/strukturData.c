#include <stdio.h>
#include <string.h>

#define MAX_MAHASISWA 100

struct Mahasiswa {
    char npm[11];
    char nama[100];
    char tempat_lahir[50];
    char tanggal_lahir[11];
    char prodi[50];
};

struct Mahasiswa daftarMahasiswa[MAX_MAHASISWA];
int jumlahMahasiswa = 0;

// Fungsi untuk menambah data mahasiswa (Create)
void tambahMahasiswa(struct Mahasiswa mhs) {
    if (jumlahMahasiswa < MAX_MAHASISWA) {
        daftarMahasiswa[jumlahMahasiswa++] = mhs;
        printf("Mahasiswa berhasil ditambahkan.\n");
    } else {
        printf("Kapasitas maksimum mahasiswa tercapai.\n");
    }
}

// Fungsi untuk menampilkan semua data mahasiswa (Read)
void tampilkanMahasiswa() {
    printf("\nData Mahasiswa:\n");
    for (int i = 0; i < jumlahMahasiswa; i++) {
        printf("%d. NPM: %s, Nama: %s, Tempat Lahir: %s, Tanggal Lahir: %s, Prodi: %s\n", 
            i + 1,
            daftarMahasiswa[i].npm, 
            daftarMahasiswa[i].nama, 
            daftarMahasiswa[i].tempat_lahir, 
            daftarMahasiswa[i].tanggal_lahir, 
            daftarMahasiswa[i].prodi);
    }
}

// Fungsi untuk memperbarui data mahasiswa berdasarkan NPM (Update)
void updateMahasiswa(char npm[]) {
    for (int i = 0; i < jumlahMahasiswa; i++) {
        if (strcmp(daftarMahasiswa[i].npm, npm) == 0) {
            printf("Masukkan data baru untuk NPM %s:\n", npm);
            printf("Nama: ");
            scanf(" %[^\n]s", daftarMahasiswa[i].nama);
            printf("Tempat Lahir: ");
            scanf(" %[^\n]s", daftarMahasiswa[i].tempat_lahir);
            printf("Tanggal Lahir (YYYY-MM-DD): ");
            scanf(" %[^\n]s", daftarMahasiswa[i].tanggal_lahir);
            printf("Prodi: ");
            scanf(" %[^\n]s", daftarMahasiswa[i].prodi);
            printf("Data mahasiswa berhasil diperbarui.\n");
            return;
        }
    }
    printf("Mahasiswa dengan NPM %s tidak ditemukan.\n", npm);
}

// Fungsi untuk menghapus data mahasiswa berdasarkan NPM (Delete)
void hapusMahasiswa(char npm[]) {
    for (int i = 0; i < jumlahMahasiswa; i++) {
        if (strcmp(daftarMahasiswa[i].npm, npm) == 0) {
            for (int j = i; j < jumlahMahasiswa - 1; j++) {
                daftarMahasiswa[j] = daftarMahasiswa[j + 1];
            }
            jumlahMahasiswa--;
            printf("Mahasiswa dengan NPM %s berhasil dihapus.\n", npm);
            return;
        }
    }
    printf("Mahasiswa dengan NPM %s tidak ditemukan.\n", npm);
}

int main() {
    struct Mahasiswa m1 = {"1234567890", "Budi Santoso", "Jakarta", "2000-01-01", "Teknik Informatika"};
    struct Mahasiswa m2 = {"0987654321", "Siti Aminah", "Bandung", "1999-05-12", "Sistem Informasi"};
    
    // Menambah data mahasiswa
    tambahMahasiswa(m1);
    tambahMahasiswa(m2);

    // Menampilkan semua data mahasiswa
    tampilkanMahasiswa();

    // Memperbarui data mahasiswa
    updateMahasiswa("1234567890");

    // Menampilkan semua data mahasiswa setelah update
    tampilkanMahasiswa();

    // Menghapus data mahasiswa
    hapusMahasiswa("0987654321");

    // Menampilkan semua data mahasiswa setelah hapus
    tampilkanMahasiswa();

    return 0;
}
