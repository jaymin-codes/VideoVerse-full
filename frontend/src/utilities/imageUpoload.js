const handleImageUpload = (e, setImage, setImagePreview) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
    setImage(file);
  } else {
    setImagePreview(null);
    setImage(null);
  }
};

export default handleImageUpload;