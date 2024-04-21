import { Suspense, lazy } from "react"
import MainLayout from "../layout/MainLayout"
import Loder from "../componant/Loder"


const ComplatedTodo = lazy(() => import("../componant/ComplatedTodo"))

const ComplatedTodoPage = () => {
    return (
        <MainLayout>
            <Suspense fallback={<Loder></Loder>}>
                <ComplatedTodo />
            </Suspense>
        </MainLayout>
    )
}

export default ComplatedTodoPage