import axios from "axios";

export const uploadImages = async (uploadFile) => {

    let file = new FormData();
    file.append('file', uploadFile);
    file.append("upload_preset", "product")
    file.append("cloude_name", "dheweokqn")

    let res = await axios.post(`https://api.cloudinary.com/v1_1/dheweokqn/image/upload`, file)
    return res.data.secure_url
} 