import { Suspense, lazy } from "react"
import MainLayout from "../layout/MainLayout"
import Loder from "../componant/Loder"


const Home =lazy(() => import("../componant/Home"))


const HomePage = () => {
    return (
        <MainLayout>
            <Suspense fallback={<Loder></Loder>}>
                <Home></Home>
            </Suspense>
        </MainLayout>
    )
}
export default HomePage