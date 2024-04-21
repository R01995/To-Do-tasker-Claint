import { Suspense, lazy } from "react"
import MainLayout from "../layout/MainLayout"
import Loder from "../componant/Loder"

const Profile = lazy(() => import("../componant/Profile"))

const ProfilePage = () => {
    return (
        <MainLayout>
            <Suspense fallback={<Loder></Loder>}>
                <Profile/>
            </Suspense>
        </MainLayout>
    )
}
export default ProfilePage