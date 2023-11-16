import {BrowserRouter, Route, Routes} from "react-router-dom"
import Error404Page from "../pages/error-404-page/Error404Page"
import ContactsPage from "../pages/contacts-page/ContactsPage"

const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route element={<ContactsPage/>} path={"/"}/>
            <Route element={<Error404Page/>} path={"/*"}/>
        </Routes>
    </BrowserRouter>
}

export default Router