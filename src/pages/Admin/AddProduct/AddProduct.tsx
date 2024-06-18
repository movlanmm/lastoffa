import { FormikProps, useFormik } from "formik";
import Dropzone from "../../../components/Dropzone";
import * as Yup from "yup";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db, storage } from "../../../utils/firebase";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid'
import { useAppDispatch } from "../../../redux/store";
import { loaded, loadingStart } from "../../../redux/lib/loading";
import { Categories } from "../Categories/Categories";
import { Link } from "react-router-dom";
type IFile = {
    fayl: File;
    preview: string
}
export default function AddProduct() {
    const [selectedImages, setSelectedImages] = useState<IFile[]>([]);
    const [values, setValues] = useState<MyValues>({} as MyValues)
    const [categories, setCategories] = useState<Categories[]>([])
    const [url, setUrl] = useState<string[]>([])
    const [progress, setprog] = useState<number>(0)
    const dispatch = useAppDispatch()

    const schema = Yup.object({
        status: Yup.string().required(),
        name: Yup.string().required(),
        categories: Yup.string().required(),
        tags: Yup.string().required(),
        desc: Yup.string().required(),
        color: Yup.string().required(),
        dimensions: Yup.string().required(),
        price: Yup.string().required(),
        sizes: Yup.string().required(),
        type: Yup.string().required(),
        storage: Yup.string().required(),
        weight: Yup.string().required(),
        stock: Yup.string().required()

    })
    interface MyValues {
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

    const formik: FormikProps<MyValues> = useFormik<MyValues>({
        initialValues: {
            categories: '',
            status: '',
            tags: '',
            desc: '',
            color: '',
            dimensions: '' + 'cm',
            images: [],
            name: '',
            price: '',
            sizes: '',
            storage: '',
            type: '',
            weight: '',
            stock: ''

        },
        validationSchema: schema,
        onSubmit: values => {
            setValues(values)
            uploadImages()
        }
    })

    useEffect(() => {
        if (progress === 100) {
            addProduct(values)
        }
    }, [progress])

    useEffect(() => {
        getCategories()
    }, [])

    
    const uploadImages = () => {
        dispatch(loadingStart())
        if (!selectedImages.length) {
            return;
        }
        const promises: any = [];
        selectedImages.forEach((file) => {
            const id = uuidv4();
            const storageRef = ref(storage, `images/${id}-${file.fayl.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file.fayl);
            promises.push(
                new Promise((resolve, reject) => {
                    uploadTask.on(
                        "state_changed",
                        (snapshot) => {
                            const progress = Math.round(
                                (snapshot.bytesTransferred / snapshot.totalBytes) * 100

                            );
                            console.log(progress)
                        },
                        (error) => {
                            console.error(error);
                            toast.error(`Yüklənərkən xəta baş verdi`);
                            reject(error);
                        },
                        async () => {
                            try {
                                const downloadURL = await getDownloadURL(
                                    uploadTask.snapshot.ref
                                );
                                resolve(downloadURL);
                            } catch (error) {
                                console.error(error);
                                reject(error);
                            }
                        }
                    );
                })
            );
        })

        Promise.all(promises)
            .then((downloadURLs) => {
                setUrl((prevURLs) => [...downloadURLs, ...prevURLs]);
                setprog(100)
            })
            .catch((error) => toast.success(`Xəta baş verdi: ${error.message}`));
    };

    const addProduct = async (values: MyValues) => {
        try {
            await addDoc(collection(db, 'products'), {
                ...values,
                images: url
            })
            formik.resetForm()
            dispatch(loaded())
            setprog(0)
            setUrl([])
            setSelectedImages([])
            toast.success('Product Added')
        } catch (error) {
            console.log(error);

        }
    }

    const getCategories = async () => {
        await getDocs(collection(db, 'categories')).then(query => {
            const data = query.docs.map(doc => ({ ...doc.data(), id: doc.id } as Categories))
            setCategories(data)
        })
    }

    return (
        <>
            <div
                id="kt_content_container"
                className="d-flex flex-column-fluid align-items-start container-xxl"
            >
                {/*begin::Post*/}
                <div className="content flex-row-fluid" id="kt_content">
                    {/*begin::Form*/}
                    <form
                        id="kt_ecommerce_add_product_form"
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
                                            id="kt_ecommerce_add_product_status"
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
                                        name="status"
                                        id="status"
                                        value={formik.values.status}
                                        onChange={formik.handleChange}
                                    >
                                        <option hidden>Select</option>
                                        <option value="published">
                                            Published
                                        </option>
                                        <option value="inactive">Inactive</option>
                                    </select>
                                    {/*end::Select2*/}
                                    {/*begin::Description*/}
                                    <div className="text-muted fs-7">Set the product status.</div>
                                    {/*end::Description*/}
                                    {/*begin::Datepicker*/}
                                    <div className="d-none mt-10">
                                        <label
                                            htmlFor="kt_ecommerce_add_product_status_datepicker"
                                            className="form-label"
                                        >
                                            Select publishing date and time
                                        </label>
                                        <input
                                            className="form-control"
                                            id="kt_ecommerce_add_product_status_datepicker"
                                            placeholder="Pick date & time"
                                        />
                                    </div>
                                    {/*end::Datepicker*/}
                                </div>
                                {/*end::Card body*/}
                            </div>
                            {/*end::Status*/}
                            {/*begin::Category & tags*/}
                            <div className="card card-flush py-4">
                                {/*begin::Card header*/}
                                <div className="card-header">
                                    {/*begin::Card title*/}
                                    <div className="card-title">
                                        <h2>Product Details</h2>
                                    </div>
                                    {/*end::Card title*/}
                                </div>
                                {/*end::Card header*/}
                                {/*begin::Card body*/}
                                <div className="card-body pt-0">
                                    {/*begin::Input group*/}
                                    {/*begin::Label*/}
                                    <label className="form-label">Categories</label>
                                    {/*end::Label*/}
                                    {/*begin::Select2*/}
                                    <select
                                        className="form-select mb-2"
                                        name="categories"
                                        id="categories"
                                        value={formik.values.categories}
                                        onChange={formik.handleChange}
                                    >
                                        <option hidden>Select</option>
                                        {categories.length > 0 && (
                                            categories.map(cat => (
                                                <option key={cat.id} value={cat.categoryName}>{cat.categoryName}</option>
                                            ))
                                        )}
                                    </select>
                                    {/*end::Select2*/}
                                    {/*begin::Description*/}
                                    <div className="text-muted fs-7 mb-7">
                                        Add product to a category.
                                    </div>
                                    {/*end::Description*/}
                                    {/*end::Input group*/}
                                    {/*begin::Button*/}
                                    <Link
                                        to={'/admin/add-category'}
                                        className="btn btn-light-primary btn-sm mb-10"
                                    >
                                        <i className="ki-duotone ki-plus fs-2" />
                                        Create new category
                                    </Link>
                                    {/*end::Button*/}
                                    {/*begin::Input group*/}
                                    {/*begin::Label*/}
                                    <label className="form-label d-block">Tags</label>
                                    {/*end::Label*/}
                                    {/*begin::Input*/}
                                    <input
                                        id="tags"
                                        name="tags"
                                        className="form-control mb-2"
                                        value={formik.values.tags}
                                        onChange={formik.handleChange}
                                    />
                                    {/*end::Input*/}
                                    {/*begin::Description*/}
                                    <div className="text-muted fs-7">Add tags to a product.</div>
                                    {/*end::Description*/}
                                    {/*end::Input group*/}
                                </div>
                                {/*end::Card body*/}
                            </div>
                            {/*end::Category & tags*/}
                        </div>
                        {/*end::Aside column*/}
                        {/*begin::Main column*/}
                        <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">

                            {/*end:::Tabs*/}
                            {/*begin::Tab content*/}
                            <div className="tab-content">
                                {/*begin::Tab pane*/}
                                <div
                                    className="tab-pane fade show active"
                                    id="kt_ecommerce_add_product_general"
                                    role="tab-panel"
                                >
                                    <div className="d-flex flex-column gap-7 gap-lg-10">
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
                                                    <label className="required form-label">Product Name</label>
                                                    {/*end::Label*/}
                                                    {/*begin::Input*/}
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        id="name"
                                                        value={formik.values.name}
                                                        onChange={formik.handleChange}
                                                        className="form-control mb-2"
                                                        placeholder="Product name"

                                                    />
                                                    {/*end::Input*/}
                                                    {/*begin::Description*/}
                                                    <div className="text-muted fs-7">
                                                        A product name is required and recommended to be unique.
                                                    </div>
                                                    {/*end::Description*/}
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                <div>
                                                    {/*begin::Label*/}
                                                    <label className="form-label">Description</label>
                                                    {/*end::Label*/}
                                                    {/*begin::Editor*/}
                                                    <div
                                                        className="min-h-200px mb-2"
                                                    >
                                                        <textarea
                                                            style={{ width: '100%', height: '200px', borderColor: 'lightgray', outline: 'none', padding: 10,borderRadius:10 }} name="desc" id="desc" value={formik.values.desc} onChange={formik.handleChange}></textarea>
                                                    </div>
                                                    {/*end::Editor*/}
                                                    {/*begin::Description*/}
                                                    <div className="text-muted fs-7">
                                                        Set a description to the product for better visibility.
                                                    </div>
                                                    {/*end::Description*/}
                                                </div>
                                                {/*end::Input group*/}
                                            </div>
                                            {/*end::Card header*/}
                                        </div>
                                        {/*end::General options*/}
                                        {/*begin::Media*/}
                                        <div className="card card-flush py-4">
                                            {/*begin::Card header*/}
                                            <div className="card-header">
                                                <div className="card-title">
                                                    <h2>Media</h2>
                                                </div>
                                            </div>
                                            {/*end::Card header*/}
                                            {/*begin::Card body*/}
                                            <Dropzone selectedImages={selectedImages} setSelectedImages={setSelectedImages} />
                                            {/*end::Card header*/}
                                        </div>
                                        {/*end::Media*/}
                                    </div>

                                    <div className="d-flex flex-column gap-7 gap-lg-10 mt-10">
                                        {/*begin::Inventory*/}
                                        <div className="card card-flush py-4">
                                            {/*begin::Card header*/}
                                            <div className="card-header">
                                                <div className="card-title">
                                                    <h2>Inventory</h2>
                                                </div>
                                            </div>
                                            {/*end::Card header*/}
                                            {/*begin::Card body*/}
                                            <div className="card-body pt-0">
                                                {/*begin::Input group*/}
                                                <div className="mb-10 fv-row">
                                                    {/*begin::Label*/}
                                                    <label className="required form-label">Price</label>
                                                    {/*end::Label*/}
                                                    {/*begin::Input*/}
                                                    <input
                                                        type="text"
                                                        name="price"
                                                        id="price"
                                                        value={formik.values.price}
                                                        onChange={formik.handleChange}
                                                        className="form-control mb-2"
                                                        placeholder="Price"
                                                    />
                                                    {/*end::Input*/}
                                                    {/*begin::Description*/}
                                                    <div className="text-muted fs-7">
                                                        Enter the product Price.
                                                    </div>
                                                    {/*end::Description*/}
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                <div className="mb-10 fv-row">
                                                    {/*begin::Label*/}
                                                    <label className="required form-label">Storage</label>
                                                    {/*end::Label*/}
                                                    {/*begin::Input*/}
                                                    <input
                                                        type="text"
                                                        name="storage"
                                                        id="storage"
                                                        value={formik.values.storage}
                                                        onChange={formik.handleChange}
                                                        className="form-control mb-2"
                                                        placeholder="Storage"
                                                    />
                                                    {/*end::Input*/}
                                                    {/*begin::Description*/}
                                                    <div className="text-muted fs-7">
                                                        Enter the product Storage.
                                                    </div>
                                                    {/*end::Description*/}
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                <div className="mb-10 fv-row">
                                                    {/*begin::Label*/}
                                                    <label className="required form-label">Weight</label>
                                                    {/*end::Label*/}
                                                    {/*begin::Input*/}
                                                    <div className="d-flex gap-3">
                                                        <input
                                                            type="number"
                                                            name="weight"
                                                            id="weight"
                                                            value={formik.values.weight}
                                                            onChange={formik.handleChange}
                                                            className="form-control mb-2"
                                                            placeholder="Weight"

                                                        />
                                                        <input
                                                            type="number"
                                                            name="stock"
                                                            id="stock"
                                                            value={formik.values.stock}
                                                            onChange={formik.handleChange}
                                                            className="form-control mb-2"
                                                            placeholder="Stock"
                                                        />
                                                    </div>
                                                    {/*end::Input*/}
                                                    {/*begin::Description*/}
                                                    <div className="text-muted fs-7">
                                                        Enter the product weight.
                                                    </div>
                                                    {/*end::Description*/}
                                                </div>
                                                {/*end::Input group*/}

                                                <div className="mb-10 fv-row">
                                                    {/*begin::Label*/}
                                                    <label className="required form-label">Dimensions</label>
                                                    {/*end::Label*/}
                                                    {/*begin::Input*/}
                                                    <div className="d-flex gap-3">
                                                        <input
                                                            type="text"
                                                            name="dimensions"
                                                            id="dimensions"
                                                            value={formik.values.dimensions}
                                                            onChange={formik.handleChange}
                                                            className="form-control mb-2"
                                                            placeholder="Dimensions"

                                                        />
                                                        <input
                                                            type="Text"
                                                            name="type"
                                                            id="type"
                                                            value={formik.values.type}
                                                            onChange={formik.handleChange}
                                                            className="form-control mb-2"
                                                            placeholder="Type"
                                                        />
                                                    </div>
                                                    {/*end::Input*/}
                                                    {/*begin::Description*/}
                                                    <div className="text-muted fs-7">
                                                        Enter the product Dimensions.
                                                    </div>
                                                    {/*end::Description*/}
                                                </div>

                                                <div className="mb-10 fv-row">
                                                    {/*begin::Label*/}
                                                    <label className="required form-label">Sizes</label>
                                                    {/*end::Label*/}
                                                    {/*begin::Input*/}
                                                    <input
                                                        type="text"
                                                        name="sizes"
                                                        id="sizes"
                                                        value={formik.values.sizes}
                                                        onChange={formik.handleChange}
                                                        className="form-control mb-2"
                                                        placeholder="Sizes"
                                                    />
                                                    {/*end::Input*/}
                                                    {/*begin::Description*/}
                                                    <div className="text-muted fs-7">
                                                        Enter the product Sizes.
                                                    </div>
                                                    {/*end::Description*/}
                                                </div>
                                                <div className="mb-10 fv-row">
                                                    {/*begin::Label*/}
                                                    <label className="required form-label">Colors</label>
                                                    {/*end::Label*/}
                                                    {/*begin::Input*/}
                                                    <input
                                                        type="text"
                                                        name="color"
                                                        id='color'
                                                        value={formik.values.color}
                                                        onChange={formik.handleChange}
                                                        className="form-control mb-2"
                                                        placeholder="Colors"
                                                    />
                                                    {/*end::Input*/}
                                                    {/*begin::Description*/}
                                                    <div className="text-muted fs-7">
                                                        Enter the product Colors.
                                                    </div>
                                                    {/*end::Description*/}
                                                </div>
                                            </div>
                                            {/*end::Card header*/}
                                        </div>
                                        {/*end::Inventory*/}
                                    </div>
                                </div>
                                {/*end::Tab pane*/}
                            </div>
                            {/*end::Tab content*/}
                            <div className="d-flex justify-content-end">
                                {/*begin::Button*/}
                                <a
                                    href="../../demo18/dist/apps/ecommerce/catalog/products.html"
                                    id="kt_ecommerce_add_product_cancel"
                                    className="btn btn-light me-5"
                                >
                                    Cancel
                                </a>
                                {/*end::Button*/}
                                {/*begin::Button*/}
                                <button
                                    type="submit"
                                    id="kt_ecommerce_add_product_submit"
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
                    {/*end::Form*/}
                </div>
                {/*end::Post*/}
            </div>
        </>
    )
}
