import { Suspense, lazy } from "react";
import MainLayout from "../layout/MainLayout";
import Loder from "../componant/Loder";


const ProgressTodo = lazy(() => import("../componant/ProgressTodo"))


const ProgressTodoPage = () => {
    return (
        <MainLayout>
            <Suspense fallback={<Loder></Loder>}>
                <ProgressTodo />
            </Suspense>
        </MainLayout>
    )
}

export default ProgressTodoPage;