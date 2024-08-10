import create from "zustand";

const useStore = create((set) => ({
  formData: {
    nik: "",
    nama: "",
    tempatLahir: "",
    tanggalLahir: "",
    jenisKelamin: "",
    alamat: "",
    agama: "",
    alas: "",
    tinggi: "",
  },
  setFormData: (newData) =>
    set((state) => ({
      formData: { ...state.formData, ...newData },
    })),
  resetFormData: () =>
    set({
      formData: {
        nik: "",
        nama: "",
        tempatLahir: "",
        tanggalLahir: "",
        jenisKelamin: "",
        alamat: "",
        agama: "",
        alas: "",
        tinggi: "",
      },
    }),
}));

export default useStore;
