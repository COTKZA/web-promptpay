const axios = require("axios");
require("dotenv").config();
const api = process.env.API_URL;

const checkSlip = async (req, res) => {
  try {
    const qrData = req.body.qrData;

    if (!qrData) {
      return res.status(400).json({ message: "required qrData" });
    }

    const response = await axios.post(api, {
      qrData: qrData,
    });

    const { contact, ...data } = response.data;

    res.status(200).json({
      ...data,
      contact: {
        website: "promptpay.jirasak.com",
        // facebook: "Jirasak Suktakua",
      },
    });
  } catch (error) {
    const errorData = error.response?.data || {};
    const { contact, ...errorWithoutContact } = errorData;

    res.status(500).json({
      error: errorWithoutContact,
      contact: {
        website: "promptpay.jirasak.com",
        // facebook: "Jirasak Suktakua",
      },
    });
  }
};

module.exports = checkSlip;
