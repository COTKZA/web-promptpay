import { useState } from "react";
import Container from "../layouts/Container";

const Home = () => {
  const [requestExampleCopied, setRquestExampleCopied] =
    useState<boolean>(false);
  const [responseExampleCopied, setResponseExampleCopied] =
    useState<boolean>(false);

  const requestExample = `{
        "qrData": "004600060000010103006022500676838621007608515903651021H9104476C"
    }`;

  const responseExample = `{
        "type": "SLIP",
        "slipVerification": {
            "transfer": {
            "transactionRef": "202504270001234567",
            "transactionDateTime": "2025-04-27T10:30:00+07:00",
            "fromBankName": "SCB",
            "fromAccountNo": "123-4-56789-0",
            "fromAccountName": "นาย ตัวอย่าง ทดสอบ",
            "toBankName": "KTB",
            "toAccountNo": "987-6-54321-0",
            "toAccountName": "นาย ปลายทาง ทดสอบ",
            "amount": {
                "amount": 500.00,
                "currency": { "code": "THB", "symbol": "฿" }
            }
            }
        },
        "contact": { "website": "promptpay.jirasak.com" }
        }`;

  const handleRquestExampleCopy = () => {
    navigator.clipboard.writeText(requestExample);
    setRquestExampleCopied(true);
    setTimeout(() => setRquestExampleCopied(false), 3000);
  };

  const handleResponseExampleCopy = () => {
    navigator.clipboard.writeText(responseExample);
    setResponseExampleCopied(true);
    setTimeout(() => setResponseExampleCopied(false), 3000);
  };

  return (
    <Container>
      <div>
        <h1 className="text-gray-800 text-4xl font-bold">Verify Slip</h1>
        <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600 text-4xl font-semibold">
          API Docs
        </span>
        <p className="text-gray-700 font-medium">
          ตรวจสอบสลิปโอนเงินผ่าน QR Data — ไม่ต้องจัดการ token เอง ส่งแค่ qrData
          รับผลทันที
        </p>

        {/* Endpoint */}
        <div className="mt-10">
          <div className="flex flex-row items-center gap-2">
            <span className="text-gray-900 font-bold text-lg uppercase whitespace-nowrap">
              Endpoint
            </span>
            <div className="border border-gray-400 w-full"></div>
          </div>
          <div className="bg-[#18181B] p-3 flex flex-col sm:flex-row sm:items-center gap-3 rounded-xl mt-1">
            <div className="bg-yellow-500 px-3 py-1 text-center rounded-lg shrink-0">
              <span className="font-bold text-white">POST</span>
            </div>
            <div className="text-white font-normal break-all text-sm sm:text-base">
              https://api-promptpay.jirasak.com/api/qr/scan
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex flex-row items-center gap-2">
            <span className="text-gray-900 font-bold text-lg uppercase whitespace-nowrap">
              x-api-key
            </span>
            <div className="border border-gray-400 w-full"></div>
          </div>
          <div className="bg-[#18181B] p-3 flex flex-col sm:flex-row sm:items-center gap-3 rounded-xl mt-1">
            <div className="bg-red-500 px-3 py-1 text-center rounded-lg shrink-0">
              <span className="font-bold text-white">Value</span>
            </div>
            <div className="text-white font-normal break-all text-sm sm:text-base">
              lQ3plfYqZAysuGgSD1wW0DgPxxXSw8ildqzyMea15hvVU0M3EdRaWgRWYWFRH9sZhvir7Ho9cBgkP3Ta94AkzMoUhKbDwAgu2YP2r2z1jYp5yDowlV0eR3h8SyHHCTmJ
            </div>
          </div>
        </div>

        {/* Request Body */}
        <div className="mt-10">
          <div className="flex flex-row items-center gap-2">
            <span className="text-gray-900 font-bold text-lg uppercase whitespace-nowrap">
              Request Body
            </span>
            <div className="border border-[#3F3F46] w-full"></div>
          </div>
          <div className="mt-1 rounded-xl overflow-x-auto border border-[#3F3F46]">
            <table className="w-full">
              <thead className="bg-[#27272A]">
                <tr>
                  <th className="px-4 py-3 text-left text-white text-xs font-semibold uppercase tracking-wider">
                    Field
                  </th>
                  <th className="px-4 py-3 text-left text-white text-xs font-semibold uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left text-white text-xs font-semibold uppercase tracking-wider">
                    Required
                  </th>
                  <th className="px-4 py-3 text-left text-white text-xs font-semibold uppercase tracking-wider">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="bg-[#18181B]">
                <tr className="border-t border-[#3F3F46]">
                  <td className="px-4 py-3 text-sky-400 font-mono text-sm">
                    qrData
                  </td>
                  <td className="px-3 py-3">
                    <div className="bg-sky-900 border border-sky-500 text-center text-sky-300 font-medium px-1 py-1 rounded-md">
                      string
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="bg-red-900 border border-red-500 text-center text-red-300 font-medium px-1 py-1 rounded-md">
                      required
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-300 text-sm text-nowrap">
                    Raw string ที่ได้จากการ scan QR Code บนสลิปโอนเงิน
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Request Example */}
        <div className="mt-10">
          <div className="flex flex-row items-center gap-2">
            <span className="text-gray-900 font-bold text-lg uppercase whitespace-nowrap">
              Request Example
            </span>
            <div className="border border-gray-400 w-full"></div>
          </div>
          <div className="rounded-xl border border-[#3F3F46] overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-[#27272A] border-b border-[#3F3F46]">
              <span className="text-xs font-semibold text-white uppercase tracking-wider">
                JSON
              </span>

              <button
                type="button"
                onClick={handleRquestExampleCopy}
                className="text-xs text-gray-400 border border-[#3F3F46] px-3 py-1 rounded-md hover:bg-[#3F3F46] transition-colors"
              >
                {requestExampleCopied ? "Copied!" : "Copy"}
              </button>
            </div>
            {/* body */}
            <pre className="bg-[#18181B] px-6 py-4 text-sm overflow-x-auto">
              <code>
                <span className="text-white">{"{"}</span>
                {"\n"}
                {"  "}
                <span className="text-sky-400">"qrData"</span>
                <span className="text-gray-300">: </span>
                <span className="text-emerald-400">
                  "004600060000010103006022500676838621007608515903651021H9104476C"
                </span>
                {"\n"}
                <span className="text-white">{"}"}</span>
              </code>
            </pre>
          </div>
        </div>

        {/* Response Fields */}
        <div className="mt-10">
          <div className="flex flex-row items-center gap-2">
            <span className="text-gray-900 font-bold text-lg uppercase whitespace-nowrap">
              Response Fields
            </span>
            <div className="border border-[#3F3F46] w-full"></div>
          </div>
          <div className="mt-1 rounded-xl overflow-x-auto border border-[#3F3F46]">
            <table className="w-full">
              <thead className="bg-[#27272A]">
                <tr>
                  <th className="px-4 py-3 text-left text-white text-xs font-semibold uppercase tracking-wider">
                    Field
                  </th>
                  <th className="px-4 py-3 text-left text-white text-xs font-semibold uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left text-white text-xs font-semibold uppercase tracking-wider">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="bg-[#18181B]">
                <tr className="border-t border-[#3F3F46]">
                  <td className="px-4 py-3 text-sky-400 font-mono text-sm">
                    type
                  </td>
                  <td className="px-3 py-3">
                    <div className="bg-sky-900 border border-sky-500 text-center text-sky-300 font-medium px-1 py-1 rounded-md">
                      string
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-300 text-sm text-nowrap">
                    ประเภท เช่น SLIP
                  </td>
                </tr>

                <tr className="border-t border-[#3F3F46]">
                  <td className="px-4 py-3 text-sky-400 font-mono text-sm">
                    slipVerification.transfer.transactionRef
                  </td>
                  <td className="px-3 py-3">
                    <div className="bg-sky-900 border border-sky-500 text-center text-sky-300 font-medium px-1 py-1 rounded-md">
                      string
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-300 text-sm text-nowrap">
                    หมายเลขอ้างอิงธุรกรรม
                  </td>
                </tr>

                <tr className="border-t border-[#3F3F46]">
                  <td className="px-4 py-3 text-sky-400 font-mono text-sm">
                    slipVerification.transfer.transactionDateTime
                  </td>
                  <td className="px-3 py-3">
                    <div className="bg-sky-900 border border-sky-500 text-center text-sky-300 font-medium px-1 py-1 rounded-md">
                      string
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-300 text-sm text-nowrap">
                    วันเวลาที่ทำรายการ
                  </td>
                </tr>

                <tr className="border-t border-[#3F3F46]">
                  <td className="px-4 py-3 text-sky-400 font-mono text-sm">
                    slipVerification.transfer.fromBankName
                  </td>
                  <td className="px-3 py-3">
                    <div className="bg-sky-900 border border-sky-500 text-center text-sky-300 font-medium px-1 py-1 rounded-md">
                      string
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-300 text-sm text-nowrap">
                    ชื่อธนาคารต้นทาง
                  </td>
                </tr>

                <tr className="border-t border-[#3F3F46]">
                  <td className="px-4 py-3 text-sky-400 font-mono text-sm">
                    slipVerification.transfer.fromAccountNo
                  </td>
                  <td className="px-3 py-3">
                    <div className="bg-sky-900 border border-sky-500 text-center text-sky-300 font-medium px-1 py-1 rounded-md">
                      string
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-300 text-sm text-nowrap">
                    เลขบัญชีต้นทาง
                  </td>
                </tr>

                <tr className="border-t border-[#3F3F46]">
                  <td className="px-4 py-3 text-sky-400 font-mono text-sm">
                    slipVerification.transfer.fromAccountName
                  </td>
                  <td className="px-3 py-3">
                    <div className="bg-sky-900 border border-sky-500 text-center text-sky-300 font-medium px-1 py-1 rounded-md">
                      string | null
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-300 text-sm text-nowrap">
                    ชื่อบัญชีต้นทาง
                  </td>
                </tr>

                <tr className="border-t border-[#3F3F46]">
                  <td className="px-4 py-3 text-sky-400 font-mono text-sm">
                    slipVerification.transfer.toBankName
                  </td>
                  <td className="px-3 py-3">
                    <div className="bg-sky-900 border border-sky-500 text-center text-sky-300 font-medium px-1 py-1 rounded-md">
                      string
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-300 text-sm text-nowrap">
                    ชื่อธนาคารปลายทาง
                  </td>
                </tr>

                <tr className="border-t border-[#3F3F46]">
                  <td className="px-4 py-3 text-sky-400 font-mono text-sm">
                    slipVerification.transfer.toAccountNo
                  </td>
                  <td className="px-3 py-3">
                    <div className="bg-sky-900 border border-sky-500 text-center text-sky-300 font-medium px-1 py-1 rounded-md">
                      string
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-300 text-sm text-nowrap">
                    เลขบัญชีปลายทาง
                  </td>
                </tr>

                <tr className="border-t border-[#3F3F46]">
                  <td className="px-4 py-3 text-sky-400 font-mono text-sm">
                    slipVerification.transfer.toAccountName
                  </td>
                  <td className="px-3 py-3">
                    <div className="bg-sky-900 border border-sky-500 text-center text-sky-300 font-medium px-1 py-1 rounded-md">
                      string | null
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-300 text-sm text-nowrap">
                    ชื่อบัญชีปลายทาง
                  </td>
                </tr>

                <tr className="border-t border-[#3F3F46]">
                  <td className="px-4 py-3 text-sky-400 font-mono text-sm">
                    slipVerification.transfer.amount.amount
                  </td>
                  <td className="px-3 py-3">
                    <div className="bg-sky-900 border border-sky-500 text-center text-sky-300 font-medium px-1 py-1 rounded-md">
                      number
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-300 text-sm text-nowrap">
                    จำนวนเงิน
                  </td>
                </tr>

                <tr className="border-t border-[#3F3F46]">
                  <td className="px-4 py-3 text-sky-400 font-mono text-sm">
                    slipVerification.transfer.amount.currency.code
                  </td>
                  <td className="px-3 py-3">
                    <div className="bg-sky-900 border border-sky-500 text-center text-sky-300 font-medium px-1 py-1 rounded-md">
                      string
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-300 text-sm text-nowrap">
                    สกุลเงิน เช่น THB
                  </td>
                </tr>

                <tr className="border-t border-[#3F3F46]">
                  <td className="px-4 py-3 text-sky-400 font-mono text-sm">
                    contact.website
                  </td>
                  <td className="px-3 py-3">
                    <div className="bg-sky-900 border border-sky-500 text-center text-sky-300 font-medium px-1 py-1 rounded-md">
                      string
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-300 text-sm text-nowrap">
                    promptpay.jirasak.com
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Request Example */}
        <div className="mt-10">
          <div className="flex flex-row items-center gap-2">
            <span className="text-gray-900 font-bold text-lg uppercase whitespace-nowrap">
              Response Example
            </span>
            <div className="border border-gray-400 w-full"></div>
          </div>
          <div className="rounded-xl border border-[#3F3F46] overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-[#27272A] border-b border-[#3F3F46]">
              <span className="text-xs font-semibold text-white uppercase tracking-wider">
                200 OK
              </span>

              <button
                type="button"
                onClick={handleResponseExampleCopy}
                className="text-xs text-gray-400 border border-[#3F3F46] px-3 py-1 rounded-md hover:bg-[#3F3F46] transition-colors"
              >
                {responseExampleCopied ? "Copied!" : "Copy"}
              </button>
            </div>
            {/* body */}
            <pre className="bg-[#18181B] px-6 py-4 text-sm overflow-x-auto">
              <code>
                <span className="text-white">{"{"}</span>
                {"\n"}
                {"  "}
                <span className="text-sky-400">"type"</span>
                <span className="text-gray-300">: </span>
                <span className="text-emerald-400">"SLIP"</span>
                <span className="text-gray-300">,</span>
                {"\n"}
                {"  "}
                <span className="text-sky-400">"slipVerification"</span>
                <span className="text-gray-300">: </span>
                <span className="text-white">{"{"}</span>
                {"\n"}
                {"    "}
                <span className="text-sky-400">"transfer"</span>
                <span className="text-gray-300">: </span>
                <span className="text-white">{"{"}</span>
                {"\n"}
                {"      "}
                <span className="text-sky-400">"transactionRef"</span>
                <span className="text-gray-300">: </span>
                <span className="text-emerald-400">"202504270001234567"</span>
                <span className="text-gray-300">,</span>
                {"\n"}
                {"      "}
                <span className="text-sky-400">"transactionDateTime"</span>
                <span className="text-gray-300">: </span>
                <span className="text-emerald-400">
                  "2025-04-27T10:30:00+07:00"
                </span>
                <span className="text-gray-300">,</span>
                {"\n"}
                {"      "}
                <span className="text-sky-400">"fromBankName"</span>
                <span className="text-gray-300">: </span>
                <span className="text-emerald-400">"SCB"</span>
                <span className="text-gray-300">,</span>
                {"\n"}
                {"      "}
                <span className="text-sky-400">"fromAccountNo"</span>
                <span className="text-gray-300">: </span>
                <span className="text-emerald-400">"123-4-56789-0"</span>
                <span className="text-gray-300">,</span>
                {"\n"}
                {"      "}
                <span className="text-sky-400">"fromAccountName"</span>
                <span className="text-gray-300">: </span>
                <span className="text-emerald-400">"นาย ตัวอย่าง ทดสอบ"</span>
                <span className="text-gray-300">,</span>
                {"\n"}
                {"      "}
                <span className="text-sky-400">"toBankName"</span>
                <span className="text-gray-300">: </span>
                <span className="text-emerald-400">"KTB"</span>
                <span className="text-gray-300">,</span>
                {"\n"}
                {"      "}
                <span className="text-sky-400">"toAccountNo"</span>
                <span className="text-gray-300">: </span>
                <span className="text-emerald-400">"987-6-54321-0"</span>
                <span className="text-gray-300">,</span>
                {"\n"}
                {"      "}
                <span className="text-sky-400">"toAccountName"</span>
                <span className="text-gray-300">: </span>
                <span className="text-emerald-400">"นาย ปลายทาง ทดสอบ"</span>
                <span className="text-gray-300">,</span>
                {"\n"}
                {"      "}
                <span className="text-sky-400">"amount"</span>
                <span className="text-gray-300">: </span>
                <span className="text-white">{"{"}</span>
                {"\n"}
                {"        "}
                <span className="text-sky-400">"amount"</span>
                <span className="text-gray-300">: </span>
                <span className="text-amber-400">500.00</span>
                <span className="text-gray-300">,</span>
                {"\n"}
                {"        "}
                <span className="text-sky-400">"currency"</span>
                <span className="text-gray-300">: </span>
                <span className="text-white">{"{ "}</span>
                <span className="text-sky-400">"code"</span>
                <span className="text-gray-300">: </span>
                <span className="text-emerald-400">"THB"</span>
                <span className="text-gray-300">, </span>
                <span className="text-sky-400">"symbol"</span>
                <span className="text-gray-300">: </span>
                <span className="text-emerald-400">"฿"</span>
                <span className="text-white">{" }"}</span>
                {"\n"}
                {"      "}
                <span className="text-white">{"}"}</span>
                {"\n"}
                {"    "}
                <span className="text-white">{"}"}</span>
                {"\n"}
                {"  "}
                <span className="text-white">{"}"}</span>
                <span className="text-gray-300">,</span>
                {"\n"}
                {"  "}
                <span className="text-sky-400">"contact"</span>
                <span className="text-gray-300">: </span>
                <span className="text-white">{"{ "}</span>
                <span className="text-sky-400">"website"</span>
                <span className="text-gray-300">: </span>
                <span className="text-emerald-400">
                  "promptpay.jirasak.com"
                </span>
                <span className="text-white">{"} "}</span>
                {"\n"}
                <span className="text-white">{"}"}</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
