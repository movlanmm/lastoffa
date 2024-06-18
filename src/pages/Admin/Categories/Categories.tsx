import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react"
import { db } from "../../../utils/firebase";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


export  interface Categories {
        id: string
        categoryName: string,
        status: string

    }
    export default function Categories() {
        
        const [menu, setMenu] = useState<string>()
        const [categories, setCategories] = useState<Categories[]>([])
        
        
        const deleteCategory = async(id:string)=>{
            await deleteDoc(doc(db,'categories',id))
            toast.success('Deleted')
            getCategories()
        }
        
        const getCategories = async () => {
            await getDocs(collection(db, "categories"))
                .then((querySnapshot) => {
                    const newData = querySnapshot.docs
                        .map((doc) => ({ ...doc.data(), id: doc.id } as Categories));
                    setCategories(newData)
                })
        }
        useEffect(() => {
            getCategories()
        }, [])
        
    return (
        <div
            id="kt_content_container"
            className="d-flex flex-column-fluid align-items-start container-xxl"
        >
            {/*begin::Post*/}
            <div className="content flex-row-fluid" id="kt_content">
                {/*begin::Category*/}
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
                                    data-kt-ecommerce-category-filter="search"
                                    className="form-control form-control-solid w-250px ps-12"
                                    placeholder="Search Category"
                                />
                            </div>
                            {/*end::Search*/}
                        </div>
                        {/*end::Card title*/}
                        {/*begin::Card toolbar*/}
                        <div className="card-toolbar">
                            {/*begin::Add customer*/}
                            <Link
                                to={'/admin/add-category'}
                                className="btn btn-primary"
                            >
                                Add Category
                            </Link>
                            {/*end::Add customer*/}
                        </div>
                        {/*end::Card toolbar*/}
                    </div>
                    {/*end::Card header*/}
                    {/*begin::Card body*/}
                    <div className="card-body pt-0">
                        {/*begin::Table*/}
                        <table
                            className="table align-middle table-row-dashed fs-6 gy-5"
                            id="kt_ecommerce_category_table"
                        >
                            <thead>
                                <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                                    <th className="w-10px pe-2">
                                        <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                data-kt-check="true"
                                                data-kt-check-target="#kt_ecommerce_category_table .form-check-input"

                                            />
                                        </div>
                                    </th>
                                    <th className="min-w-250px">Category</th>
                                    <th className="min-w-150px">Category Type</th>
                                    <th className="text-end min-w-70px">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="fw-semibold text-gray-600">
                                {categories.length > 0 && (
                                    categories.map(category => (
                                        <tr key={category.id}>
                                            <td>
                                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"

                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex">
                                                    {/*begin::Thumbnail*/}

                                                    {/*end::Thumbnail*/}
                                                    <div className="ms-5">
                                                        {/*begin::Title*/}
                                                        <a
                                                            href="../../demo18/dist/apps/ecommerce/catalog/edit-category.html"
                                                            className="text-gray-800 text-hover-primary fs-5 fw-bold mb-1"
                                                            data-kt-ecommerce-category-filter="category_name"
                                                        >
                                                            {category.categoryName}
                                                        </a>
                                                        {/*end::Title*/}

                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {/*begin::Badges*/}
                                                <div className="badge badge-light-success" style={{ textTransform: 'capitalize' }}>{category.status}</div>
                                                {/*end::Badges*/}
                                            </td>
                                            <td className="text-end" style={{ position: 'relative' }}>
                                                <a
                                                    onClick={() => {
                                                        if(menu === category.id){
                                                            setMenu('')
                                                        } else{
                                                            setMenu(category.id)
                                                        }
                                                    }}
                                                    className="btn btn-sm btn-light btn-active-light-primary btn-flex btn-center"

                                                >
                                                    Actions
                                                    <i className="ki-duotone ki-down fs-5 ms-1" />
                                                </a>
                                                {/*begin::Menu*/}
                                                <div
                                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                                    data-kt-menu="true"
                                                    
                                                    style={menu === category.id ? { display: 'block', position: 'absolute', top: 60, right: 0, backgroundColor: 'white' } : { display: 'none' }}
                                                >
                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <Link
                                                        to={`/admin/edit-category/${category.id}`}
                                                            className="menu-link px-3"
                                                        >
                                                            Edit
                                                        </Link>
                                                    </div>
                                                    {/*end::Menu item*/}
                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a
                                                            onClick={()=>deleteCategory(category.id)}
                                                            className="menu-link px-3"
                                                            
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
                {/*end::Category*/}
            </div>
            {/*end::Post*/}
        </div>

    )
}
