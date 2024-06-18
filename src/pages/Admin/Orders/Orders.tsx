import { collection, getDocs } from "firebase/firestore"
import { db } from "../../../utils/firebase"
import { useEffect, useState } from "react"
import { Orders } from "../../../types"


export default function OrdersList() {
    const [orders, setOrders] = useState<Orders[]>([])


    const getOrders = async () => {
        await getDocs(collection(db, 'orders')).then((query) => {
            const data = query.docs.map((doc) => ({ ...doc.data(), id: doc.id } as Orders))
            setOrders(data)
        })
    }

    useEffect(() => {
        getOrders()
    }, [])

    return (
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
                                    data-kt-ecommerce-order-filter="search"
                                    className="form-control form-control-solid w-250px ps-12"
                                    placeholder="Search Order"
                                />
                            </div>
                            {/*end::Search*/}
                        </div>
                        {/*end::Card title*/}
                        {/*begin::Card toolbar*/}
                        <div className="card-toolbar flex-row-fluid justify-content-end gap-5">
                            {/*begin::Flatpickr*/}
                            <div className="input-group w-250px">
                                <input
                                    className="form-control form-control-solid rounded rounded-end-0"
                                    placeholder="Pick date range"
                                    id="kt_ecommerce_sales_flatpickr"
                                />
                                <button
                                    className="btn btn-icon btn-light"
                                    id="kt_ecommerce_sales_flatpickr_clear"
                                >
                                    <i className="ki-duotone ki-cross fs-2">
                                        <span className="path1" />
                                        <span className="path2" />
                                    </i>
                                </button>
                            </div>
                            {/*end::Flatpickr*/}
                            <div className="w-100 mw-150px">
                                {/*begin::Select2*/}
                                <select
                                    className="form-select form-select-solid"
                                    data-control="select2"
                                    data-hide-search="true"
                                    data-placeholder="Status"
                                    data-kt-ecommerce-order-filter="status"
                                >
                                    <option />
                                    <option value="all">All</option>
                                    <option value="Cancelled">Cancelled</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Denied">Denied</option>
                                    <option value="Expired">Expired</option>
                                    <option value="Failed">Failed</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Processing">Processing</option>
                                    <option value="Refunded">Refunded</option>
                                    <option value="Delivered">Delivered</option>
                                    <option value="Delivering">Delivering</option>
                                </select>
                                {/*end::Select2*/}
                            </div>
                            {/*begin::Add product*/}
                            <a
                                href="../../demo18/dist/apps/ecommerce/catalog/add-product.html"
                                className="btn btn-primary"
                            >
                                Add Order
                            </a>
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
                            id="kt_ecommerce_sales_table"

                        >
                            <thead>
                                <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                                    <th className="w-10px pe-2">
                                        <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                data-kt-check="true"
                                                data-kt-check-target="#kt_ecommerce_sales_table .form-check-input"
                                                defaultValue={1}
                                            />
                                        </div>
                                    </th>
                                    <th className="min-w-100px">Order ID</th>
                                    <th className="min-w-175px">Customer</th>
                                    <th className="text-end min-w-70px">Status</th>
                                    <th className="text-end min-w-100px">Total</th>
                                    <th className="text-end min-w-100px">Date Added</th>
                                    <th className="text-end min-w-100px">Date Modified</th>
                                    <th className="text-end min-w-100px">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="fw-semibold text-gray-600">
                                {orders.length > 0 && (
                                    orders.map(order => (
                                        <tr key={order.id}>
                                            <td>
                                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        defaultValue={1}
                                                    />
                                                </div>
                                            </td>
                                            <td data-kt-ecommerce-order-filter="order_id">
                                                <a
                                                    href="../../demo18/dist/apps/ecommerce/sales/details.html"
                                                    className="text-gray-800 text-hover-primary fw-bold"
                                                >
                                                    {order.orderNumber}
                                                </a>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    {/*begin:: Avatar */}
                                                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                                        <a href="../../demo18/dist/apps/user-management/users/view.html">
                                                            <div className="symbol-label fs-3 bg-light-warning text-warning">
                                                                {order.firstname.charAt(0)}
                                                            </div>
                                                        </a>
                                                    </div>
                                                    {/*end::Avatar*/}
                                                    <div className="ms-5">
                                                        {/*begin::Title*/}
                                                        <a
                                                            href="../../demo18/dist/apps/user-management/users/view.html"
                                                            className="text-gray-800 text-hover-primary fs-5 fw-bold"
                                                        >
                                                            {order.firstname} {order.lastname}
                                                        </a>
                                                        {/*end::Title*/}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-end pe-0" data-order="Refunded">
                                                {/*begin::Badges*/}
                                                <div className="badge badge-light-info">{order.status}</div>
                                                {/*end::Badges*/}
                                            </td>
                                            <td className="text-end pe-0">
                                                <span className="fw-bold">${order.totalPrice}</span>
                                            </td>
                                            <td className="text-end" data-order="2023-07-17">
                                                <span className="fw-bold">{order.date}</span>
                                            </td>
                                            <td className="text-end" data-order="2023-07-18">
                                                <span className="fw-bold">{order.dateModified}</span>
                                            </td>
                                            <td className="text-end">
                                                <a
                                                    href="#"
                                                    className="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-placement="bottom-end"
                                                >
                                                    Actions
                                                    <i className="ki-duotone ki-down fs-5 ms-1" />
                                                </a>
                                                {/*begin::Menu*/}
                                                <div
                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                    data-kt-menu="true"
                                                >
                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="../../demo18/dist/apps/ecommerce/sales/details.html"
                                                            className="menu-link px-3"
                                                        >
                                                            View
                                                        </a>
                                                    </div>
                                                    {/*end::Menu item*/}
                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="../../demo18/dist/apps/ecommerce/sales/edit-order.html"
                                                            className="menu-link px-3"
                                                        >
                                                            Edit
                                                        </a>
                                                    </div>
                                                    {/*end::Menu item*/}
                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a
                                                            href="#"
                                                            className="menu-link px-3"
                                                            data-kt-ecommerce-order-filter="delete_row"
                                                        >
                                                            Delete
                                                        </a>
                                                    </div>
                                                    {/*end::Menu item*/}
                                                </div>
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

    )
}
