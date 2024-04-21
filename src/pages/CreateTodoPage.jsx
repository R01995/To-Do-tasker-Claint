import { Suspense, lazy } from "react";
import MainLayout from "../layout/MainLayout";
import Loder from "../componant/Loder";



const CreateTodo = lazy(() => import("../componant/CreateTodo"))


const CreateTodoPage = () => {
    return (
        <MainLayout>
            <Suspense fallback={<Loder></Loder>}>
                <CreateTodo />
            </Suspense>
        </MainLayout>
    )
}
export default CreateTodoPage;