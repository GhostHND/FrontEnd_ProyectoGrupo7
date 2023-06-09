import Page from "@components/Page";
import { IProducto, IGetAllProductosResponse } from "@store/Services/Productos";
import ErrorField from "@components/ErrorField";
import Card from "@components/Card";
import Paging from "@components/Paging";
import { formatCurrency } from "@helpers/NumberFormat";

import "./Productos.css";
import { Button } from "@components/Buttons";
interface IProductosUxProps {
  error?: any;
  data?: IGetAllProductosResponse;
  isLoading?: boolean;
  changePageLimit?: (page: number, limit: number) => void;
  addPageClick?: () => void;
  viewDetailClick?: (id: string) => void;
}
const ProductoCard = (
  item: IProducto,
  viewDetailClick: (id: string) => void
) => {
  return (
    <Card
      key={item._id}
      onClick={() => { 
        viewDetailClick(item._id);
      }}
    >
      <img src={item.imagen} />
      <h2>{item.nombre}</h2>
      <p>{item.descripcion}</p>
      <hr/>
      <p>Disponibles: {item.stock}</p>
      <p> {item.precio}</p>
      <span>{new Date(item.date).toLocaleDateString()}</span>
    </Card>
  );
};
const ProductoUx = ({
  error,
  data,
  isLoading,
  changePageLimit = (p, l) => {
    console.log("PG", { p, l });
  },
  addPageClick = () => {},
  viewDetailClick = (id) => {},
}: IProductosUxProps) => {
  return (
    <Page pageTitle="Productos">
      <Button
        style={{ backgroundColor: "#0984e3",color:"white" }}
        onClick={() => {
          addPageClick();
        }}
      >
        Nuevo producto
      </Button>
      <section className="ProductosHolder">
        {isLoading && <div>Loading...</div>}
        {error && <ErrorField>Error al cargar Productos</ErrorField>}
        {data &&
          data.items.map((o: IProducto) => ProductoCard(o, viewDetailClick))}
      </section>
      <Paging
        currentPage={data?.page || 1}
        totalPages={data?.totalPages || 0}
        pageLimit={data?.itemsPerPage || 10}
        onPageChange={(page) => {
          changePageLimit(page, data?.itemsPerPage || 10);
        }}
        onLimitChange={(limit) => {
          changePageLimit(data?.page || 1, limit);
        }}
      />
    </Page>
  );
};

export default ProductoUx;
