

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@sha/components/ui/dialog";
import { FieldGroup,Field } from "@sha/components/ui/field";
import { Textarea } from "@sha/components/ui/textarea";
import { Input } from "@sha/components/ui/input";
import { Button } from "@sha/components/ui/button";
import addIcon from "@/assets/add.png";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@sha/components/ui/hover-card";
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "@sha/components/ui/combobox";
export function NewProductForm(){
    let units = [
        "KG",
        "CM",
        "MT",
        "GR",
        "ML",
        "UN"
    ];

    return (

                                <form>
                            <DialogTrigger asChild>
                                <Button ><img src={addIcon} className="h-5 w-5"/></Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Crear Nuevo Producto</DialogTitle>
                                    <DialogDescription>Formulario de creación de nuevos productos.<br/><strong>Recuerda:</strong> Debes de contar con toda la información requeridad.</DialogDescription>
                                </DialogHeader>
                                <section >
                                    <FieldGroup className="w-[100%] flex flex-row justify-start items-center gap-3">
                                        <Field className="w-[50%] h-2/5 flex flex-col justify-center items-center" >
                                            <HoverCard>
                                                <HoverCardTrigger>
                                                    <label>Referecia:</label>
                                                </HoverCardTrigger>
                                                <HoverCardContent>
                                                    <p>Referencia selecciónada para identificar el producto</p>
                                                </HoverCardContent>
                                            </HoverCard>
                                            <Input type="text" placeholder="referencia" name="reference" id="reference" required/>
                                        </Field>
                                        <Field className="w-[50%] h-2/5 flex flex-col justify-center items-center" >
                                            <HoverCard>
                                                <HoverCardTrigger>
                                                    <label>Descripci&oacute;n:</label>
                                                </HoverCardTrigger>
                                                <HoverCardContent>
                                                    <p>Descripción del producto, ten en cuenta que esta debe ser detallada para  su facil identificación; agrega medidas, proveedores y caracteristicas fisicas de este</p>
                                                </HoverCardContent>
                                            </HoverCard>
                                            <Textarea placeholder="Descripción de producto" name="description" id="description" className="no-resize"></Textarea>
                                        </Field>
                                    </FieldGroup>
                                    <FieldGroup className="w-[100%] flex flex-row justify-start items-center gap-3">
                                        <Field className="w-[50%] h-2/5 flex flex-col justify-center items-center" >  
                                            <HoverCard>
                                                <HoverCardTrigger>
                                                    <label>Costo:</label>
                                                </HoverCardTrigger>
                                                <HoverCardContent>
                                                    <p>Costo del producto, valor al cual se adquiere este.<br/>
                                                    En caso de ser un producto proceso este deberia ser 0
                                                    </p>
                                                </HoverCardContent>
                                            </HoverCard>
                                            <Input type="number" placeholder="Costo del producto" name="cost" id="cost" min={0} required/>
                                        </Field>
                                        <Field className="w-[50%] h-2/5 flex flex-col justify-center items-center" >  
                                                <HoverCard>
                                                <HoverCardTrigger>
                                                    <label>Precio:</label>
                                                </HoverCardTrigger>
                                                <HoverCardContent>
                                                    <p>Precio de venta del producto.En caso de no ser un producto ofrecido al publico este valor debe ser Cero (0)</p>
                                                </HoverCardContent>
                                            </HoverCard>
                                            <Input type="number" placeholder="Costo del producto" name="cost" id="cost" value="0" required min={0}/>
                                        </Field>
                                    </FieldGroup>
                                </section>
                                <section>
                                    <h3>Medidas de Producto</h3>
                                    <FieldGroup className="w-[100%] flex flex-row justify-start items-center gap-3">
                                        <Field className="w-[30%] h-2/5 flex flex-col justify-center items-center">
                                            <HoverCard>
                                                <HoverCardTrigger>
                                                    <label>Alto:</label>
                                                </HoverCardTrigger>
                                                <HoverCardContent>
                                                    <p>Altura del producto (Eje Y), medida necesaria para calculo de desidades y consumos </p>
                                                </HoverCardContent>
                                            </HoverCard>
                                            <Input type="number" placeholder="Alto del producto 'Y'" name="height" id="height" min={0} required/>
                                        </Field>
                                        <Field className="w-[30%] h-2/5 flex flex-col justify-center items-center">
                                            <HoverCard>
                                                <HoverCardTrigger>
                                                    <label>Ancho:</label>
                                                </HoverCardTrigger>
                                                <HoverCardContent>
                                                    <p>Altura del producto (Eje X), medida necesaria para calculo de desidades y consumos </p>
                                                </HoverCardContent>
                                            </HoverCard>
                                            <Input type="number" placeholder="Ancho del producto 'x'" name="width" id="width" min={0} required/>
                                        </Field>
                                        <Field className="w-[30%] h-2/5 flex flex-col justify-center items-center">
                                            <HoverCard>
                                                <HoverCardTrigger>
                                                    <label>Largo:</label>
                                                </HoverCardTrigger>
                                                <HoverCardContent>
                                                    <p>Largo del producto (Eje Z), medida necesaria para calculo de desidades y consumos </p>
                                                </HoverCardContent>
                                            </HoverCard>
                                            <Input type="number" placeholder="Largo del producto 'Z'" name="long" id="long" min={0} required/>
                                        </Field>
                                    </FieldGroup>
                                    <h3>Puntos Minimos</h3>
                                    <FieldGroup className="w-[100%] flex flex-row justify-start items-center gap-3">
                                        <Field className="w-[50%] h-2/5 flex flex-col justify-center items-center">
                                                <HoverCard>
                                                <HoverCardTrigger>
                                                    <label>Punto Minimo:</label>
                                                </HoverCardTrigger>
                                                <HoverCardContent>
                                                    <p>Cantidad minima del producto con los que se debe contar en bodegas </p>
                                                </HoverCardContent>
                                            </HoverCard>
                                            <Input type="number" placeholder="Punto Minimo" min={0} name="minimal-stock" id="minimal-stock" required/>
                                        </Field>
                                        <Field className="w-[50%] h-2/5 flex flex-col justify-center items-center">
                                                <HoverCard>
                                                <HoverCardTrigger>
                                                    <label>Punto Maximo:</label>
                                                </HoverCardTrigger>
                                                <HoverCardContent>
                                                    <p>Cantidad maxima del producto con los que se debe contar en bodegas </p>
                                                </HoverCardContent>
                                            </HoverCard>
                                            <Input type="number" placeholder="Punto Maximo" min={0} name="maxima-stock" id="maxima-stock" required/>
                                        </Field>
                                    </FieldGroup>
                                    <FieldGroup className="w-[100%] flex flex-col justify-start items-center gap-3">
                                        <Field className="w-[80%] h-2/5 flex flex-col justify-center items-center">
                                                <HoverCard>
                                                <HoverCardTrigger>
                                                    <label>GTIN:</label>
                                                </HoverCardTrigger>
                                                <HoverCardContent>
                                                    <p>Código identificador del producto</p>
                                                </HoverCardContent>
                                            </HoverCard>
                                            <Input type="text" placeholder="GTIN" name="gtin" id="gtin" required/>
                                        </Field>
                                        <Field className="w-[80%] h-2/5 flex flex-col justify-center items-center">
                                                <HoverCard>
                                                <HoverCardTrigger>
                                                    <label>Imagen de referencia:</label>
                                                </HoverCardTrigger>
                                                <HoverCardContent>
                                                    <p>Imagen de referencia del nuevo producto</p>
                                                </HoverCardContent>
                                            </HoverCard>
                                            <Input type="file" placeholder="Imagen de referencia" name="product-image" id="product-image" />
                                        </Field>
                                    </FieldGroup>
                                    <FieldGroup className="w-[100%] flex flex-row justify-start items-center gap-3">
                                        <Field className="w-[50%] h-2/5 flex flex-col justify-center items-center">
                                                <HoverCard>
                                                <HoverCardTrigger>
                                                    <label>Unidad de medidad:</label>
                                                </HoverCardTrigger>
                                                <HoverCardContent>
                                                    <p>Unidad de medidad usada para este producto</p>
                                                </HoverCardContent>
                                            </HoverCard>
                                            <Combobox items={units}>
                                                <ComboboxInput placeholder="Selecciona una unidad"/>
                                                <ComboboxContent>
                                                    <ComboboxEmpty>Elemento no valido</ComboboxEmpty>
                                                    <ComboboxList>
                                                        {
                                                            (unit)=>
                                                                <ComboboxItem key={unit} value={unit}>
                                                                    {unit}
                                                                </ComboboxItem>
                                                            
                                                        }
                                                    </ComboboxList>
                                                </ComboboxContent>
                                            </Combobox>
                                        </Field>
                                        <Field className="w-[50%] h-2/5 flex flex-col justify-center items-center">
                                                <HoverCard>
                                                <HoverCardTrigger>
                                                    <label>Peso</label>
                                                </HoverCardTrigger>
                                                <HoverCardContent>
                                                    <p>Peso unitario del producto.</p>
                                                </HoverCardContent>
                                            </HoverCard>
                                            <Input type="number" placeholder="Peso unitario" min={0} name="weigth" id="weigth" required/>
                                        </Field>
                                    </FieldGroup>
                                </section>
                                <DialogFooter>
                                    <Button>Crear</Button>
                                    <DialogClose>
                                        <Button>Cancelar</Button>
                                    </DialogClose>
                                </DialogFooter>
                            </DialogContent>
                        </form>
    )
}