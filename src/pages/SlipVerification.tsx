import { ToastContainer } from "react-toastify";
import Container from "../layouts/Container";
import { toastError, toastWarning } from "../utils/toast";
import { useState, type ChangeEvent, type MouseEvent } from "react";
import QrScanner from "qr-scanner";
import axios from "axios";

const SlipVerification = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  // const [imageFile, setImageFile] = useState<File | null>(null);

  const [qrData, setQrData] = useState<string>("");
  const [slipLoading, setSlipLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<any>(null);

  const allowedType = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!allowedType.includes(file.type)) {
      toastWarning("รองรับเฉพาะไฟล์ JPG, JPEG, PNG, WEBP เท่านั้น");
      return;
    }

    try {
      const result = await QrScanner.scanImage(file, {
        returnDetailedScanResult: true,
      });
      setQrData(String(result.data));

      // setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    } catch (error: any) {
      toastError("ไม่พบ QR Code ในภาพ");
    }
  };

  const handleCheckSlip = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!qrData) {
      toastWarning("กรุณาอัปโหลดสลิปโอนเงิน");
      return;
    }

    try {
      setSlipLoading(true);
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}`,
        {
          qrData: qrData,
        },
        {
          headers: {
            "x-api-key": import.meta.env.VITE_API_KEY,
          },
        },
      );
      setResponse(res.data);
    } catch (error: any) {
      toastError(error.response?.data?.error);
      toastError(error.response?.data?.message);
    } finally {
      setQrData("");
    }
  };

  return (
    <Container>
      <div>
        <div className="mt-4 mb-6">
          <h1 className="text-3xl font-bold mb-1">ตรวจสอบสลิปโอนเงิน</h1>
          <span className="text-gray-500 font-normal">
            อัปโหลดรูปสลิป ระบบจะอ่าน QR โค้ดในสลิปเพื่อดึงข้อมูลธุรกรรม
          </span>
        </div>

        <div className="rounded-xl border border-gray-300 p-6 space-y-4">
          <form action="">
            <div className="mb-4">
              <label htmlFor="slip" className=" block text-sm font-medium mb-2">
                เลือกรูปสลิป
              </label>
              <input
                type="file"
                id="slip"
                name="slip"
                accept="image/jpeg,image/jpg,image/png,image/webp"
                onChange={handleImageChange}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-base transition focus:outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
              />
            </div>

            {imagePreview && (
              <div className="mb-4 rounded-lg border border-gray-300 overflow-hidden">
                <img
                  src={imagePreview}
                  alt="slip"
                  className="w-full max-h-96 object-contain bg-gray-200"
                  loading="lazy"
                />
              </div>
            )}

            {qrData && (
              <div className="text-center mb-4 mt-4">
                <span className="text-sky-400 font-bold">QrData:</span>
                <span className="ml-2 text-gray-600 break-all whitespace-pre-wrap">
                  {qrData ?? "ยังไม่มี"}
                </span>
              </div>
            )}

            <button
              type="submit"
              onClick={handleCheckSlip}
              disabled={slipLoading}
              className="w-full px-3 py-2 bg-gray-800 hover:bg-gray-900 rounded-xl text-md font-bold text-white"
            >
              {slipLoading ? "กำลังตรวจสอบสลิป" : "ตรวจสอบสลิป"}
            </button>
          </form>
        </div>

        {response && (
          <div className="rounded-xl border border-[#3F3F46] overflow-hidden mt-6">
            <div className="flex items-center justify-between px-4 py-4 bg-[#27272A] border-b border-[#3F3F46]">
              <span className="text-md font-semibold text-white uppercase tracking-wider">
                ผลการตรวจสอบ
              </span>
            </div>
            {/* body */}
            <pre className="bg-[#18181B] px-6 py-4 text-sm overflow-x-auto">
              <code className="w-full whitespace-pre-wrap break-all overflow-x-auto text-sm text-white">
                {JSON.stringify(response, null, 2)}
              </code>
            </pre>
          </div>
        )}
      </div>
      <ToastContainer />
    </Container>
  );
};

export default SlipVerification;
