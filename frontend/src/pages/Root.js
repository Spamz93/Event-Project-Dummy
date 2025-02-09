import { Outlet, useNavigation } from "react-router-dom"

import MainNavigation from "../components/MainNavigation"

function RootLayout(){
    //const navigation = useNavigation();

    return (
        <>
        <MainNavigation />
        <main>
            {/*navigation.state === 'loading' && <p>Loading...</p> */}
            <Outlet />     
        </main>
        </>
    )
}

//Outlet defines where the content of the child routes should be rendered. (zapomni)
export default RootLayout