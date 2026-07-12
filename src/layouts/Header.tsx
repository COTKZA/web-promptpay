import { useState } from "react";
import { IoHomeSharp } from "react-icons/io5";
import { MdClose, MdMenu, MdOutlineQrCode2 } from "react-icons/md";
import { RiQrScan2Line } from "react-icons/ri";
import { NavLink } from "react-router";

const Header = () => {
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <header className="h-16 bg-white border-b border-gray-300">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
        <NavLink to="/">
          <div className="flex items-center justify-center gap-2">
            {/* <div className="bg-linear-to-r from-emerald-400 to-cyan-400 px-1 py-1 rounded-md">
              <PiQrCodeFill className="text-2xl text-white" />
            </div> */}
            <span className="font-bold text-xl xl:text-2xl flex gap-2">
              <span className="text-red-400">Jirasak</span>
              <span className="text-sky-600">Prompt</span>
              <span className="text-gray-900">Pay</span>
            </span>
          </div>
        </NavLink>

        <nav className="hidden md:block">
          <ul className="flex items-center">
            <li className="px-3 py-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `font-semibold flex justify-center gap-1 ${isActive ? "text-sky-500" : "text-gray-600 hover:text-sky-600"}`
                }
              >
                <IoHomeSharp className="text-xl" />
                <span>Docs</span>
              </NavLink>
            </li>
            <li className="px-3 py-2">
              <NavLink
                to="/payment/qrcode"
                className={({ isActive }) =>
                  `font-semibold flex justify-center gap-1 ${isActive ? "text-sky-500" : "text-gray-600 hover:text-sky-600"}`
                }
              >
                <MdOutlineQrCode2 className="text-xl" />
                <span>สร้าง QR</span>
              </NavLink>
            </li>
            <li className="px-3 py-2">
              <NavLink
                to="/payment/slip-verification"
                className={({ isActive }) =>
                  `font-semibold flex justify-center gap-1 ${isActive ? "text-sky-500" : "text-gray-600 hover:text-sky-600"}`
                }
              >
                <RiQrScan2Line className="text-xl" />
                <span>เช็คสลิป</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="block md:hidden items-center gap-2">
          <button onClick={() => setMenu(true)} type="button">
            <MdMenu className="text-xl" />
          </button>
        </div>
      </div>

      {menu && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setMenu(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${
          menu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 h-16 border-b border-gray-200">
          <span className="font-bold text-lg">เมนู</span>
          <button onClick={() => setMenu(false)} type="button">
            <MdClose className="text-2xl text-gray-600" />
          </button>
        </div>

        <nav className="p-4">
          <ul className="flex flex-col gap-2">
            <li>
              <NavLink
                to="/"
                onClick={() => setMenu(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition ${
                    isActive
                      ? "bg-sky-50 text-sky-500"
                      : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                <IoHomeSharp className="text-xl" />
                <span>Docs</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/payment/qrcode"
                onClick={() => setMenu(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition ${
                    isActive
                      ? "bg-sky-50 text-sky-500"
                      : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                <MdOutlineQrCode2 className="text-xl" />
                <span>สร้าง QR</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/payment/slip-verification"
                onClick={() => setMenu(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition ${
                    isActive
                      ? "bg-sky-50 text-sky-500"
                      : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                <RiQrScan2Line className="text-xl" />
                <span>เช็คสลิป</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
