import { useState } from "react";
import { IoHomeSharp } from "react-icons/io5";
import { MdMenu, MdOutlineQrCode2 } from "react-icons/md";
import { RiQrScan2Line } from "react-icons/ri";
import { NavLink } from "react-router";

const Header = () => {
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <header className="h-16 bg-white border-b border-gray-300">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
        <NavLink to="/">
          <div className="shrink-0 flex items-center">
            <img src="/images/icons/logo.png" alt="logo" className="h-18 w-auto object-contain" />
          </div>
        </NavLink>

        <nav className="hidden md:block">
          <ul className="flex items-center">
            {/* <li className="px-3 py-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `font-semibold flex justify-center gap-1 ${isActive ? "text-sky-500" : "text-gray-600 hover:text-sky-600"}`
                }
              >
                <IoHomeSharp className="text-xl" />
                <span>Docs</span>
              </NavLink>
            </li> */}
            <li className="px-3 py-2">
              <NavLink
                to="/"
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
          <button
            onClick={() => setMenu(true)}
            type="button"
            className="p-1 text-gray-700 hover:text-sky-600 transition-colors"
          >
            <MdMenu className="text-2xl" />
          </button>
        </div>
      </div>

      {menu && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-xs md:hidden"
          onClick={() => setMenu(false)}
        >
          <div
            className="absolute top-0 right-0 w-64 h-full bg-white shadow-xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-300">
              <span className="font-bold text-lg text-gray-800">เมนู</span>
              <button
                type="button"
                onClick={() => setMenu(false)}
                className="p-1 text-gray-500"
              >
                <MdMenu className="text-2xl" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto py-2">
              <ul className="flex flex-col">
                <li>
                  <NavLink
                    to="/"
                    onClick={() => setMenu(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-6 py-3 font-medium transition-colors ${isActive ? "text-sky-600 bg-sky-50 border-r-4 border-sky-500" : "text-gray-600 hover:bg-gray-50 hover:text-sky-600"}`
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
                      `flex items-center gap-3 px-6 py-3 font-medium transition-colors ${isActive ? "text-sky-600 bg-sky-50 border-r-4 border-sky-500" : "text-gray-600 hover:bg-gray-50 hover:text-sky-600"}`
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
                      `flex items-center gap-3 px-6 py-3 font-medium transition-colors ${isActive ? "text-sky-600 bg-sky-50 border-r-4 border-sky-500" : "text-gray-600 hover:bg-gray-50 hover:text-sky-600"}`
                    }
                  >
                    <RiQrScan2Line className="text-xl" />
                    <span>เช็คสลิป</span>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
