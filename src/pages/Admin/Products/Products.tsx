import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db, storage } from "../../../utils/firebase";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import { MyVerticallyCenteredModal } from "../../../components/Modal";
import { deleteObject, ref } from "firebase/storage";
import { useAppDispatch } from "../../../redux/store";
import { loaded, loadingStart } from "../../../redux/lib/loading";

export default function Products() {
  const [products, setProducts] = useState<ProductsValues[]>([])
  const [showModal, setShowModal] = useState(false)
  const [menu, setMenu] = useState<string>('')
  const dispatch = useAppDispatch()

  interface ProductsValues {
    id: string,
    categories: string,
    status: string,
    tags: string,
    desc: string,
    color: string,
    dimensions: string
    images: string[],
    name: string,
    price: string,
    sizes: string,
    storage: string,
    type: string,
    weight: string,
    stock: string
  }

  const getProducts = async () => {
    dispatch(loadingStart())
    await getDocs(collection(db, "products"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id } as ProductsValues));
        setProducts(newData)
        dispatch(loaded())
      })
  }

  const deleteProduct = async (id: string, images: string[]) => {
    await deleteDoc(doc(db, 'products', id))
    toast.success('Deleted')
    getProducts()
    images.map(url => {
      const imageRef = ref(storage, url)
      deleteObject(imageRef).then(() => {
        console.log('deleted');
      }).catch((e) => {
        console.log(e);

      })

    })
  }

  useEffect(() => {
    getProducts()
  }, [])
  return (
    <>
      <div
        id="kt_content_container"
        className="d-flex flex-column-fluid align-items-start container-xxl"
      >
        {/*begin::Post*/}
        <div className="content flex-row-fluid" id="kt_content">
          {/*begin::Products*/}
          <div className="card card-flush">
            {/*begin::Card header*/}
            <div className="card-header align-items-center py-5 gap-2 gap-md-5">
              {/*begin::Card title*/}
              <div className="card-title">
                {/*begin::Search*/}
                <div className="d-flex align-items-center position-relative my-1">
                  <i className="ki-duotone ki-magnifier fs-3 position-absolute ms-4">
                    <span className="path1" />
                    <span className="path2" />
                  </i>
                  <input
                    type="text"
                    data-kt-ecommerce-product-filter="search"
                    className="form-control form-control-solid w-250px ps-12"
                    placeholder="Search Product"
                  />
                </div>
                {/*end::Search*/}
              </div>
              {/*end::Card title*/}
              {/*begin::Card toolbar*/}
              <div className="card-toolbar flex-row-fluid justify-content-end gap-5">
                <div className="w-100 mw-150px">
                  {/*begin::Select2*/}
                  <select
                    className="form-select form-select-solid"
                    defaultValue='all'
                  >
                    <option value="all">All</option>
                    <option value="published">Published</option>
                    <option value="scheduled">Scheduled</option>
                    <option value="inactive">Inactive</option>
                  </select>
                  {/*end::Select2*/}
                </div>
                {/*begin::Add product*/}
                <Link
                  to='/admin/add-product'
                  className="btn btn-primary"
                >
                  Add Product
                </Link>
                {/*end::Add product*/}
              </div>
              {/*end::Card toolbar*/}
            </div>
            {/*end::Card header*/}
            {/*begin::Card body*/}
            <div className="card-body pt-0">
              {/*begin::Table*/}
              <table
                className="table align-middle table-row-dashed fs-6 gy-5"
                id="kt_ecommerce_products_table"
              >
                <thead>
                  <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                    <th className="w-10  pe-2">
                      <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-kt-check="true"
                          data-kt-check-target="#kt_ecommerce_products_table .form-check-input"

                        />
                      </div>
                    </th>
                    <th className="min-w-200px">Product</th>
                    <th className="text-end min-w-100px">Sizes</th>
                    <th className="text-end min-w-70px">Stock</th>
                    <th className="text-end min-w-100px">Price</th>
                    <th className="text-end min-w-100px">Rating</th>
                    <th className="text-end min-w-100px">Status</th>
                    <th className="text-end min-w-70px">Actions</th>
                  </tr>
                </thead>
                <tbody className="fw-semibold text-gray-600">
                  {products.length > 0 && (
                    products.map(product => (
                      <tr key={product.id}>
                        <td>
                          <div className="form-check form-check-sm form-check-custom form-check-solid">
                            <input
                              className="form-check-input"
                              type="checkbox"

                            />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            {/*begin::Thumbnail*/}
                            <Link
                              to={`/admin/edit-product/${product.id}`}
                              className="symbol symbol-50px"
                            >
                              <img src={product.images[0]} style={{ objectFit: 'cover' }} />
                            </Link>
                            {/*end::Thumbnail*/}
                            <div className="ms-5">
                              {/*begin::Title*/}
                              <Link
                                to={`/admin/edit-product/${product.id}`}
                                className="text-gray-800 text-hover-primary fs-5 fw-bold"
                              >
                                {product.name}
                              </Link>
                              {/*end::Title*/}
                            </div>
                          </div>
                        </td>
                        <td className="text-end pe-0">
                          <span className="fw-bold">{product.sizes}</span>
                        </td>
                        <td className="text-end pe-0" >
                          {Number(product.stock) < 10 && <span className="badge badge-light-warning">Low stock</span>}
                          <span className="fw-bold ms-3">{product.stock}</span>
                        </td>
                        <td className="text-end pe-0">{product.price}$</td>
                        <td className="text-end pe-0" data-order="rating-3">
                          <div className="rating justify-content-end">
                            <div className="rating-label checked">
                              <i className="ki-duotone ki-star fs-6" />
                            </div>
                            <div className="rating-label checked">
                              <i className="ki-duotone ki-star fs-6" />
                            </div>
                            <div className="rating-label checked">
                              <i className="ki-duotone ki-star fs-6" />
                            </div>
                            <div className="rating-label">
                              <i className="ki-duotone ki-star fs-6" />
                            </div>
                            <div className="rating-label">
                              <i className="ki-duotone ki-star fs-6" />
                            </div>
                          </div>
                        </td>
                        <td className="text-end pe-0" data-order="Inactive">
                          {/*begin::Badges*/}
                          <div className={`badge ${product.status === 'inactive' ? 'badge-light-danger' : 'badge-light-success'}`} style={{ textTransform: 'capitalize' }}>{product.status}</div>
                          {/*end::Badges*/}
                        </td>
                        <td className="text-end" style={{ position: 'relative' }}>
                          <a
                            onClick={() => {
                              if (menu === product.id) {
                                setMenu('')
                              } else {
                                setMenu(product.id)
                              }
                            }}
                            className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"

                          >
                            Actions
                            <i className="ki-duotone ki-down fs-5 ms-1" />
                          </a>
                          {/*begin::Menu*/}
                          <div
                            className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                            data-kt-menu="true"
                            style={menu === product.id ? { display: 'block', position: 'absolute', top: 60, right: 0, backgroundColor: 'white' } : { display: 'none' }}
                          >
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <Link
                                to={`/admin/edit-product/${product.id}`}
                                className="menu-link px-3"
                              >
                                Edit
                              </Link>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a
                                onClick={() => deleteProduct(product.id, product.images)}
                                className="menu-link px-3"
                                data-kt-ecommerce-product-filter="delete_row"
                              >
                                Delete
                              </a>
                            </div>
                            {/*end::Menu item*/}
                          </div>

                          <MyVerticallyCenteredModal show={showModal}
                            onHide={() => setShowModal(false)} />
                          {/*end::Menu*/}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
              {/*end::Table*/}
            </div>
            {/*end::Card body*/}
          </div>
          {/*end::Products*/}
        </div>
        {/*end::Post*/}
      </div>
    </>
  );
}
