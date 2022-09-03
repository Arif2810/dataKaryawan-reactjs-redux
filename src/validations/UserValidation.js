const UserValidation = (values) => {
  const errors = {};

  if (!values.nama || values.nama === "") {
    errors.nama = "Data must be filled";
  }

  if (!values.propinsi || values.propinsi === "") {
    errors.propinsi = "Data must be filled";
  }

  if (!values.kabupaten || values.kabupaten === "") {
    errors.kabupaten = "Data must be filled";
  }

  if (!values.kecamatan || values.kecamatan === "") {
    errors.kecamatan = "Data must be filled";
  }

  if (!values.kelurahan || values.kelurahan === "") {
    errors.kelurahan = "Data must be filled";
  }

  return errors
};

export default UserValidation;
