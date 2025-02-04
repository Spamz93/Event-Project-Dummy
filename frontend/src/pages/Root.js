import { Outlet } from "react-router-dom"

import MainNavigation from "../components/MainNavigation"

function RootLayout(){
    return (
        <>
        <MainNavigation />
        <main>
            <Outlet />     
        </main>
        </>
    )
}

//Outlet defines where the content of the child routes should be rendered. (zapomni)
export default RootLayout