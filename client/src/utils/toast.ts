import { toast } from "react-toastify";
import "react-toastify/ReactToastify.css"

// popup success
export const toastSuccess = (message: string) => toast.success(message, {
    position: "top-right",
    autoClose: 2000,
    draggable: true,
    theme: "light",
})

// popup error
export const toastError = (message: string) => toast.error(message, {
    position: "top-right",
    autoClose: 2000,
    draggable: true,
    theme: "light",
})

// popup warning
export const toastWarning = (message: string) => toast.warning(message, {
    position: "top-right",
    autoClose: 2000,
    draggable: true,
    theme: "light",
})