import { Suspense, lazy } from "react"
import MainLayout from "../layout/MainLayout"
import Loder from "../componant/Loder"


const CancelTodo = lazy(() => import("../componant/CancelTodo"))
 
 const CancelTodoPage = () => {
     return (
         <MainLayout>
            <Suspense fallback={<Loder></Loder>}>
                <CancelTodo />
            </Suspense>
         </MainLayout>
     )
 }
 
 export default CancelTodoPage