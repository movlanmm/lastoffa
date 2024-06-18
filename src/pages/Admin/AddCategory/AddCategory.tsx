import { addDoc, collection } from "firebase/firestore";
import { useFormik } from "formik"
import * as Yup from "yup";
import { db } from "../../../utils/firebase";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../../redux/store";
import { loaded, loadingStart } from "../../../redux/lib/loading";

export default function AddCategory() {
    const dispatch = useAppDispatch()

    const schema = Yup.object({
        status: Yup.string().required(),
        categoryName: Yup.string().required()
    })


    const formik = useFormik({
        initialValues: {
            status: '',
            categoryName: ''
        },
        validationSchema: schema,
        onSubmit: values => {
            addCategory(values)
            toast.success('New Category Added')
        }
    })


    const addCategory = async (values: { status: string, categoryName: string }) => {
        dispatch(loadingStart())
        try {
            const docRef = await addDoc(collection(db, 'categories'), values)
            console.log(docRef.id);
            formik.resetForm()
            dispatch(loaded())

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div
            id="kt_content_container"
            className="d-flex flex-column-fluid align-items-start container-xxl"
        >
            <div className="content flex-row-fluid" id="kt_content">
                <form
                    id="kt_ecommerce_add_category_form"
                    className="form d-flex flex-column flex-lg-row"
                    onSubmit={formik.handleSubmit}
                >
                    {/*begin::Aside column*/}
                    <div className="d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7 me-lg-10">
                        {/*begin::Status*/}
                        <div className="card card-flush py-4">
                            {/*begin::Card header*/}
                            <div className="card-header">
                                {/*begin::Card title*/}
                                <div className="card-title">
                                    <h2>Status</h2>
                                </div>
                                {/*end::Card title*/}
                                {/*begin::Card toolbar*/}
                                <div className="card-toolbar">
                                    <div
                                        className="rounded-circle bg-success w-15px h-15px"
                                        id="kt_ecommerce_add_category_status"
                                    />
                                </div>
                                {/*begin::Card toolbar*/}
                            </div>
                            {/*end::Card header*/}
                            {/*begin::Card body*/}
                            <div className="card-body pt-0">
                                {/*begin::Select2*/}
                                <select
                                    className="form-select mb-2"
                                    id="status"
                                    name='status'
                                    value={formik.values.status}
                                    onChange={formik.handleChange}
                                >
                                    <option hidden>Select</option>
                                    <option value="published">
                                        Published
                                    </option>
                                    <option value="unpublished">Unpublished</option>
                                </select>
                                {/*end::Select2*/}
                                {/*begin::Description*/}
                                <div className="text-muted fs-7">Set the category status.</div>
                                {/*end::Description*/}
                                {/*begin::Datepicker*/}
                                <div className="d-none mt-10">
                                    <label
                                        htmlFor="kt_ecommerce_add_category_status_datepicker"
                                        className="form-label"
                                    >
                                        Select publishing date and time
                                    </label>
                                    <input
                                        className="form-control"
                                        id="kt_ecommerce_add_category_status_datepicker"
                                        placeholder="Pick date & time"
                                    />
                                </div>
                                {/*end::Datepicker*/}
                            </div>
                            {/*end::Card body*/}
                        </div>
                        {/*end::Status*/}
                    </div>
                    {/*end::Aside column*/}
                    {/*begin::Main column*/}
                    <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
                        {/*begin::General options*/}
                        <div className="card card-flush py-4">
                            {/*begin::Card header*/}
                            <div className="card-header">
                                <div className="card-title">
                                    <h2>General</h2>
                                </div>
                            </div>
                            {/*end::Card header*/}
                            {/*begin::Card body*/}
                            <div className="card-body pt-0">
                                {/*begin::Input group*/}
                                <div className="mb-10 fv-row">
                                    {/*begin::Label*/}
                                    <label className="required form-label">Category Name</label>
                                    {/*end::Label*/}
                                    {/*begin::Input*/}
                                    <input
                                        type="text"
                                        name="categoryName"
                                        id="categoryName"
                                        value={formik.values.categoryName}
                                        onChange={formik.handleChange}
                                        className="form-control mb-2"
                                        placeholder="Product name"
                                    />
                                    {/*end::Input*/}
                                    {/*begin::Description*/}
                                    <div className="text-muted fs-7">
                                        A category name is required and recommended to be unique.
                                    </div>
                                    {/*end::Description*/}
                                </div>
                                {/*end::Input group*/}

                            </div>
                            {/*end::Card header*/}
                        </div>
                        {/*end::General options*/}
                        <div className="d-flex justify-content-end">
                            {/*begin::Button*/}
                            <a
                                id="kt_ecommerce_add_product_cancel"
                                className="btn btn-light me-5"
                            >
                                Cancel
                            </a>
                            {/*end::Button*/}
                            {/*begin::Button*/}
                            <button
                                type="submit"
                                id="kt_ecommerce_add_category_submit"
                                className="btn btn-primary"
                            >
                                <span className="indicator-label">Save Changes</span>
                                <span className="indicator-progress">
                                    Please wait...
                                    <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                </span>
                            </button>
                            {/*end::Button*/}
                        </div>
                    </div>
                    {/*end::Main column*/}
                </form>
            </div>
            {/*end::Post*/}
        </div>

    )
}
