
import { NewProductForm } from "@/ui/Forms/NewProductForm";
import { Dialog } from "@sha/components/ui/dialog";

export default function ProductPage() {
    return (
        <section className="w-[100%] min-h-[75dvh]">
            <section className="w-[100%] flex flex-row items-center">
                <article className="w-[60%] md:w-[70%] lg:w-[90%] flex justify-start items-center"><h2 className="font-bold text-lg">Productos.</h2></article>
                <article className="w-[40%] md:w-[30%] lg:w-[10%] flex justify-center items-center">
                    <Dialog>
                        <NewProductForm/>
                    </Dialog>
                </article>
            </section>
        </section>
    );
}
