import { z } from 'zod';

export const NewProductSchema = z.object(
    {
        reference: z.string().uppercase().nonempty("Referencia es requeridad"),
        description: z.string().nonempty("El campo descripción es requerido"),
        cost:z.float64().positive("El costo debe ser positivo"),
        salePrice:z.float64().positive("El precio de venta debe ser positivo"),
        y:z.number().positive("el campo alto debe ser positivo"),
        x:z.number().positive("el campo ancho debe ser positivo"),
        z:z.number().positive("el campo largo debe ser positivo"),
        minimalStock:z.number().int().positive("El punto minimo debe ser un numero entero positivo"),
        maximalStock:z.number().int().positive("El punto maximo debe ser un numero entero positivo"),
        gtin:z.number().int().positive("El campo GTIN debe ser un numero entero positivo"),
        productImage:z.file().mime(["image/jpeg","image/png"]),
        unit :z.enum([
                    "KG",
                    "CM",
                    "MT",
                    "GR",
                    "ML",
                    "UN"
                    ]),
        
                    

    }
);