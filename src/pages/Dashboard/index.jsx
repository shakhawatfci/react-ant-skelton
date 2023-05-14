import { useEffect } from "react";


export default function Dashboard() {
    useEffect(() => {
        console.log('dashboard');
    }, [])

    return (
        <>
            <h1>Dashboard</h1>
        </>
    )
}