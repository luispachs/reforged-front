import { useRef } from "react"
import {LoginForm} from "@/ui/Forms/LoginForm"
export default function App() {
  const userRef = useRef(null);
  const passwordRef = useRef(null);
  return (
       <section className="w-full h-screen flex flex-column md:flex-row lg:flex-row">
        <section className="w-full md:w-full lg:w-1/3 flex justify-center items-center p-6">
          <LoginForm/>
        </section>
        <section className="w-0 md:w-0 lg:w-2/3">

        </section>
       </section>
  )
}

