import { collection, getDocs } from "firebase/firestore"
import { db } from "../../../utils/firebase"
import { useEffect, useState } from "react"
import { User } from "../../../types"


export default function Users() {
    const [users,setUsers]  = useState<User[]>([])


    const getUsers = async()=>{
        await getDocs(collection(db,'users')).then((query=>{
            const data = query.docs.map(doc=>({...doc.data(),id:doc.id} as User))
            setUsers(data)
        }))
    }

    useEffect(()=>{
        getUsers()
    },[])

  return (
    <div
  id="kt_content_container"
  className="d-flex flex-column-fluid align-items-start container-xxl"
>
  {/*begin::Post*/}
  <div className="content flex-row-fluid" id="kt_content">
    {/*begin::Card*/}
    <div className="card">
      {/*begin::Card header*/}
      <div className="card-header border-0 pt-6">
        {/*begin::Card title*/}
        <div className="card-title">
          {/*begin::Search*/}
          <div className="d-flex align-items-center position-relative my-1">
            <i className="ki-duotone ki-magnifier fs-3 position-absolute ms-5">
              <span className="path1" />
              <span className="path2" />
            </i>
            <input
              type="text"
              data-kt-customer-table-filter="search"
              className="form-control form-control-solid w-250px ps-13"
              placeholder="Search Customers"
            />
          </div>
          {/*end::Search*/}
        </div>
        {/*begin::Card title*/}
        {/*begin::Card toolbar*/}
        <div className="card-toolbar">
          {/*begin::Toolbar*/}
          <div
            className="d-flex justify-content-end"
            data-kt-customer-table-toolbar="base"
          >
            {/*begin::Filter*/}
            <div className="w-150px me-3">
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
                <option value="active">Active</option>
                <option value="locked">Locked</option>
              </select>
              {/*end::Select2*/}
            </div>
            {/*end::Filter*/}
            {/*begin::Export*/}
            <button
              type="button"
              className="btn btn-light-primary me-3"
              data-bs-toggle="modal"
              data-bs-target="#kt_customers_export_modal"
            >
              <i className="ki-duotone ki-exit-up fs-2">
                <span className="path1" />
                <span className="path2" />
              </i>
              Export
            </button>
            {/*end::Export*/}
            {/*begin::Add customer*/}
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#kt_modal_add_customer"
            >
              Add Customer
            </button>
            {/*end::Add customer*/}
          </div>
          {/*end::Toolbar*/}
          {/*begin::Group actions*/}
          <div
            className="d-flex justify-content-end align-items-center d-none"
            data-kt-customer-table-toolbar="selected"
          >
            <div className="fw-bold me-5">
              <span
                className="me-2"
                data-kt-customer-table-select="selected_count"
              />
              Selected
            </div>
            <button
              type="button"
              className="btn btn-danger"
              data-kt-customer-table-select="delete_selected"
            >
              Delete Selected
            </button>
          </div>
          {/*end::Group actions*/}
        </div>
        {/*end::Card toolbar*/}
      </div>
      {/*end::Card header*/}
      {/*begin::Card body*/}
      <div className="card-body pt-0">
        {/*begin::Table*/}
        <table
          className="table align-middle table-row-dashed fs-6 gy-5"
          id="kt_customers_table"
        >
          <thead>
            <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
              <th className="w-10px pe-2">
                <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    data-kt-check="true"
                    data-kt-check-target="#kt_customers_table .form-check-input"
                    defaultValue={1}
                  />
                </div>
              </th>
              <th className="min-w-125px">Customer Name</th>
              <th className="min-w-125px">Email</th>
              <th className="min-w-125px">Status</th>
              <th className="min-w-125px">IP Address</th>
              <th className="min-w-125px">Created Date</th>
              <th className="text-end min-w-70px">Actions</th>
            </tr>
          </thead>
          <tbody className="fw-semibold text-gray-600">
            {users.length> 0 && (
                users.map(user=>(
                    <tr key={user.id}>
                    <td>
                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue={1}
                        />
                      </div>
                    </td>
                    <td>
                      <a
                        href="../../demo18/dist/apps/ecommerce/customers/details.html"
                        className="text-gray-800 text-hover-primary mb-1"
                        style={{textTransform:'capitalize'}}
                      >
                        {user.username}
                      </a>
                    </td>
                    <td>
                      <a href="#" className="text-gray-600 text-hover-primary mb-1">
                       {user.email}
                      </a>
                    </td>
                    <td>
                      {/*begin::Badges*/}
                      <div className="badge badge-light-success">Active</div>
                      {/*end::Badges*/}
                    </td>
                    <td>216.62.22.238</td>
                    <td>05 May 2023, 11:05 am</td>
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
                            href="../../demo18/dist/apps/customers/view.html"
                            className="menu-link px-3"
                          >
                            View
                          </a>
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className="menu-item px-3">
                          <a
                            href="#"
                            className="menu-link px-3"
                            data-kt-customer-table-filter="delete_row"
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
          {/*end::Table body*/}
        </table>
        {/*end::Table*/}
      </div>
      {/*end::Card body*/}
    </div>
    {/*end::Card*/}
  
  </div>
</div>

  
  )
}
