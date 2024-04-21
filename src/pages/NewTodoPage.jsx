import { Suspense, lazy } from "react";
import MainLayout from "../layout/MainLayout";
import Loder from "../componant/Loder";

const NewTodo = lazy(() => import("../componant/NewTodo"));

const NewTodoPage = () => {
    return (
       <MainLayout>
           <Suspense fallback={<Loder></Loder>}>
               <NewTodo />
           </Suspense>
       </MainLayout>
    )
}

export default NewTodoPage;
