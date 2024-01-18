"use client"



import { ToastContainer, toast } from 'react-toastify';

export default function Providers({ children, session }) {
    return (
        <>
            {children}
            <ToastContainer />
        </>
    )
}