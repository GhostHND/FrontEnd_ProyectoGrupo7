import Page from "@components/Page";
import { DateField, Field } from "@components/InputField";
import ActionField from "@components/ActionField";
import { Button } from "@components/Buttons";
import { INewProducto } from "@store/Services/Productos";

export interface IProductoDetailUx {
  isLoading: boolean;
  error: any;
  form: INewProducto;
  onReturnClick: () => void;
  onSubmitDeleteHandler: () => void;
  onChangeHandler: (name: string, value: string | number) => void;
  onSubmitUpdateHandler: () => void;
}

const ProductoDetailUx = ({
  form,
  isLoading,
  error,
  onChangeHandler,
  onReturnClick,
  onSubmitDeleteHandler,
  onSubmitUpdateHandler,
}: IProductoDetailUx) => {
  return (
    <Page pageTitle="Nuevo Producto">
      {isLoading && <div>Loading...</div>}
      {error && <div>Error al cargar CashFlow</div>}
      {form && (
        <section>
          <img src={form.imagen} />
          <Field
            name="nombre"
            onChange={(e) => {
              onChangeHandler(e.target.name, e.target.value);
            }}
            labelText="Nombre"
            value={form.nombre}
          />
          <Field
            name="descripcion"
            labelText="Descripción"
            onChange={(e) => {
              onChangeHandler(e.target.name, e.target.value);
            }}
            value={form.descripcion}
          />
          <Field
            name="precio"
            labelText="Precio"
            onChange={(e) => {
              onChangeHandler(e.target.name, e.target.value);
            }}
            value={String(form.precio)}
            type="number"
          />
          <Field
            name="stock"
            labelText="Cantidad disponible"
            onChange={(e) => {
              onChangeHandler(e.target.name, e.target.value);
            }}
            value={String(form.stock)}
            type="number"
          />
          <DateField
            onChange={(e) => {
              onChangeHandler(e.target.name, e.target.value);
            }}
            labelText="Fecha"
            name="date"
            value={String(form.date)}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
            }}
          >
            <ActionField>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onReturnClick();
                }}
              >
                Atrás
              </Button>
            </ActionField>
            <ActionField>
              <Button
                style={{ backgroundColor: "#0984e3", color: "white" }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onSubmitUpdateHandler();
                }}
              >
                Actualizar
              </Button>
            </ActionField>
            <ActionField>
              <Button
                style={{ backgroundColor: "#d63031", color: "white" }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onSubmitDeleteHandler();
                }}
              >
                Eliminar
              </Button>
            </ActionField>
          </div>
        </section>
      )}
    </Page>
  );
};

export default ProductoDetailUx;
