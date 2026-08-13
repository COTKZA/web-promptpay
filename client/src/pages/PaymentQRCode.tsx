import { useState, type SubmitEventHandler } from "react";
import PromptPay from "promptpay-qr";
import QRCode from "qrcode";
import Container from "../layouts/Container";
import { toastSuccess, toastWarning } from "../utils/toast";
import { ToastContainer } from "react-toastify";

const PaymentQRCode = () => {
  const [promptpayId, setPromptpayId] = useState<string>("");
  const [amount, setAmount] = useState<number | undefined>(undefined);

  const [generatedPromptPayId, setGeneratedPromptPayId] = useState<string>("");
  const [generatedAmount, setGeneratedAmount] = useState<number | undefined>(
    undefined,
  );

  const [qrImage, setQrImage] = useState<string>("");

  const handleGenerateQR: SubmitEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!promptpayId.trim()) {
      toastWarning("กรุณากรอกเบอร์โทร 10 หลัก หรือ บัตรประชาชน 13 หลัก");
      return;
    }

    if (promptpayId.trim().length !== 10 && promptpayId.trim().length !== 13) {
      toastWarning("กรุณากรอกเบอร์โทร 10 หลัก หรือ บัตรประชาชน 13 หลัก");
      return;
    }

    const payload = PromptPay(promptpayId, {
      amount: amount ? Number(amount) : undefined,
    });

    const qr = await QRCode.toDataURL(payload);

    setQrImage(qr);

    setGeneratedPromptPayId(promptpayId);
    setGeneratedAmount(amount);
  };

  // copy image
  const handleCopyQr = async () => {
    if (!qrImage) return;

    const response = await fetch(qrImage);
    const blob = await response.blob();
    const item = new ClipboardItem({ [blob.type]: blob });
    await navigator.clipboard.write([item]);

    toastSuccess("คัดลอกรูป QR สำเร็จ");
  };

  // download image
  const handleDownloadQR = () => {
    if (!qrImage) return;

    const downloadLink = document.createElement("a");
    downloadLink.href = qrImage;
    downloadLink.download = `promptpay-qr-${promptpayId}.png`;
    downloadLink.click();
  };

  return (
    <Container>
      <div>
        <h1 className="text-3xl font-bold mt-4 mb-6">สร้าง QR PromptPay</h1>

        <div className="rounded-xl border border-gray-300 p-6 space-y-4">
          <form onSubmit={handleGenerateQR}>
            <div className="mb-4">
              <label
                htmlFor="promptpayId"
                className=" block text-sm font-medium mb-2"
              >
                เบอร์โทรศัพท์ / เลขบัตรประชาชน PromptPay
              </label>
              <input
                type="text"
                id="promptpayId"
                name="promptpayId"
                value={promptpayId}
                onChange={(e) => setPromptpayId(e.target.value)}
                minLength={10}
                maxLength={13}
                placeholder="เบอร์โทร 10 หลัก หรือ บัตรประชาชน 13 หลัก"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-base transition focus:outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
              />
            </div>
            <div>
              <label
                htmlFor="amount"
                className=" block text-sm font-medium mb-2"
              >
                จำนวนเงิน (บาท) — ไม่ระบุก็ได้
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                step={1}
                placeholder="0.00"
                maxLength={13}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-base transition focus:outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
              />
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="w-full px-3 py-2 bg-gray-800 hover:bg-gray-900 rounded-xl text-md font-bold text-white"
              >
                สร้าง QRCODE
              </button>
            </div>
          </form>
        </div>

        {qrImage && (
          <div className="mt-6 rounded-xl border border-gray-300 bg-card p-6 flex flex-col items-center gap-4">
            <div className="flex items-center justify-center">
              <img
                src={qrImage}
                className="w-64 h-64 rounded-lg border border-gray-300"
                alt="qr-code"
                loading="lazy"
              />
            </div>

            <div className="flex flex-col items-center gap-0.5">
              <span className="text-gray-800 font-bold">
                พร้อมเพย์: {generatedPromptPayId}
              </span>
              <span className="text-gray-800 font-bold">
                จำนวนเงิน: {generatedAmount ?? "ไม่ได้กำหนด หรือ 0"} บาท
              </span>
            </div>

            <div className="flex gap-2 w-full">
              <button
                type="button"
                onClick={handleCopyQr}
                className="w-full px-3 py-2 bg-gray-800 hover:bg-gray-900 rounded-xl text-md font-bold text-white"
              >
                คัดลอกรูป
              </button>
              <button
                type="button"
                onClick={handleDownloadQR}
                className="w-full px-3 py-2 border border-gray-300 bg-white hover:bg-gray-100 rounded-xl text-md font-bold text-gray-800"
              >
                ดาวโหลด
              </button>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </Container>
  );
};

export default PaymentQRCode;
