import { signInWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";
import { useLocation, useNavigate } from "react-router";
import * as Yup from "yup";
import { auth, db } from "../../../utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { adminLogged, adminLogout, adminSelector } from "../../../redux/lib/adminSlice";
import { useEffect } from "react";
import { loaded, loadingStart } from "../../../redux/lib/loading";



export default function AdminLogin() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const admin = useAppSelector(adminSelector)
    const { pathname } = useLocation()

    const schema = Yup.object({
        email: Yup.string().required(),
        password: Yup.string().min(6).max(32).required(),
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: schema,
        onSubmit: () => {
            onLogin();
        },
    });


    const onLogin = () => {
        dispatch(loadingStart())
        signInWithEmailAndPassword(
            auth,
            formik.values.email,
            formik.values.password
        )
            .then((userCredential) => {
                const uid = userCredential.user.uid;
                getUserFromFireStore(uid);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };

    useEffect(() => {
        dispatch(adminLogout())
    }, [])

    useEffect(() => {
        if (pathname.includes('/admin/login')) {
            import('../../../assets/css/style.bundle.css')
        }
    }, [pathname])

    useEffect(() => {
        dispatch(loaded())
        if (admin.logged && admin.userDetails.role !== 'Admin') {
            alert('You are not a Admin')
            dispatch(adminLogout())
            formik.resetForm()
        }
    }, [admin.logged])

    const getUserFromFireStore = async (uid: string) => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", uid));
            const docRef = await getDocs(q);
            docRef.forEach((doc) => {
                dispatch(adminLogged({ ...doc.data(), id: doc.id } as {
                    id: string,
                    email: string,
                    uid: string,
                    role: string,
                    username: string,
                }));
            });
            navigate('/admin')
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="d-flex flex-column flex-root">
            {/*begin::Page bg image*/}
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "body { background-image: url('assets/media/auth/bg10.jpeg'); } [data-bs-theme=\"dark\"] body { background-image: url('assets/media/auth/bg10-dark.jpeg'); }"
                }}
            />
            {/*end::Page bg image*/}
            {/*begin::Authentication - Sign-in */}
            <div className="d-flex flex-column flex-lg-row flex-column-fluid">
                {/*begin::Aside*/}
                <div className="d-flex flex-lg-row-fluid">
                    {/*begin::Content*/}
                    <div className="d-flex flex-column flex-center pb-0 pb-lg-10 p-10 w-100">
                        {/*begin::Image*/}
                        <img
                            className="theme-light-show mx-auto mw-100 w-150px w-lg-300px mb-10 mb-lg-20"
                            src='/public/images/agency.png'
                            alt=""
                        />
                        <img
                            className="theme-dark-show mx-auto mw-100 w-150px w-lg-300px mb-10 mb-lg-20"
                            src="assets/media/auth/agency-dark.png"
                            alt=""
                        />
                        {/*end::Image*/}
                        {/*begin::Title*/}
                        <h1 className="text-gray-800 fs-2qx fw-bold text-center mb-7">
                            Fast, Efficient and Productive
                        </h1>
                        {/*end::Title*/}
                        {/*begin::Text*/}
                        <div className="text-gray-600 fs-base text-center fw-semibold">
                            In this kind of post,
                            <a href="#" className="opacity-75-hover text-primary me-1">
                                the blogger
                            </a>
                            introduces a person they’ve interviewed
                            <br />
                            and provides some background information about
                            <a href="#" className="opacity-75-hover text-primary me-1">
                                the interviewee
                            </a>
                            and their
                            <br />
                            work following this is a transcript of the interview.
                        </div>
                        {/*end::Text*/}
                    </div>
                    {/*end::Content*/}
                </div>
                {/*begin::Aside*/}
                {/*begin::Body*/}
                <div className="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12">
                    {/*begin::Wrapper*/}
                    <div className="bg-body d-flex flex-column flex-center rounded-4 w-md-600px p-10">
                        {/*begin::Content*/}
                        <div className="d-flex flex-center flex-column align-items-stretch h-lg-100 w-md-400px">
                            {/*begin::Wrapper*/}
                            <div className="d-flex flex-center flex-column flex-column-fluid pb-15 pb-lg-20">
                                {/*begin::Form*/}
                                <form
                                    className="form w-100"
                                    id="kt_sign_in_form"
                                    onSubmit={formik.handleSubmit}

                                >
                                    {/*begin::Heading*/}
                                    <div className="text-center mb-11">
                                        {/*begin::Title*/}
                                        <h1 className="text-dark fw-bolder mb-3">Sign In</h1>
                                        {/*end::Title*/}
                                        {/*begin::Subtitle*/}
                                        <div className="text-gray-500 fw-semibold fs-6">
                                            Your Social Campaigns
                                        </div>
                                        {/*end::Subtitle=*/}
                                    </div>
                                    {/*begin::Heading*/}
                                    {/*begin::Login options*/}

                                    {/*begin::Input group=*/}
                                    <div className="fv-row mb-8">
                                        {/*begin::Email*/}
                                        <input
                                            type="text"
                                            placeholder="Email"
                                            name="email"
                                            id="email"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            autoComplete="off"
                                            className="form-control bg-transparent"
                                        />
                                        {/*end::Email*/}
                                    </div>
                                    {/*end::Input group=*/}
                                    <div className="fv-row mb-3">
                                        {/*begin::Password*/}
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            name="password"
                                            id="password"
                                            value={formik.values.password}
                                            onChange={formik.handleChange}
                                            autoComplete="off"
                                            className="form-control bg-transparent"
                                        />
                                        {/*end::Password*/}
                                    </div>
                                    {/*end::Input group=*/}
                                    {/*begin::Wrapper*/}
                                    <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
                                        <div />
                                        {/*begin::Link*/}
                                        <a
                                            href="../../demo18/dist/authentication/layouts/overlay/reset-password.html"
                                            className="link-primary"
                                        >
                                            Forgot Password ?
                                        </a>
                                        {/*end::Link*/}
                                    </div>
                                    {/*end::Wrapper*/}
                                    {/*begin::Submit button*/}
                                    <div className="d-grid mb-10">
                                        <button
                                            type="submit"
                                            id="kt_sign_in_submit"
                                            className="btn btn-primary"
                                        >
                                            {/*begin::Indicator label*/}
                                            <span className="indicator-label">Sign In</span>
                                            {/*end::Indicator label*/}
                                            {/*begin::Indicator progress*/}
                                            <span className="indicator-progress">
                                                Please wait...
                                                <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                            </span>
                                            {/*end::Indicator progress*/}
                                        </button>
                                    </div>
                                    {/*end::Submit button*/}
                                    {/*begin::Sign up*/}
                                    <div className="text-gray-500 text-center fw-semibold fs-6">
                                        Not a Member yet?
                                        <a
                                            href="../../demo18/dist/authentication/layouts/overlay/sign-up.html"
                                            className="link-primary"
                                        >
                                            Sign up
                                        </a>
                                    </div>
                                    {/*end::Sign up*/}
                                </form>
                                {/*end::Form*/}
                            </div>
                            {/*end::Wrapper*/}
                            {/*begin::Footer*/}
                            <div className="d-flex flex-stack align-items-center justify-content-center">

                                {/*begin::Links*/}
                                <div className="d-flex fw-semibold text-primary fs-base gap-5">
                                    <a href="../../demo18/dist/pages/team.html" target="_blank">
                                        Terms
                                    </a>
                                    <a
                                        href="../../demo18/dist/pages/pricing/column.html"
                                        target="_blank"
                                    >
                                        Plans
                                    </a>
                                    <a href="../../demo18/dist/pages/contact.html" target="_blank">
                                        Contact Us
                                    </a>
                                </div>
                                {/*end::Links*/}
                            </div>
                            {/*end::Footer*/}
                        </div>
                        {/*end::Content*/}
                    </div>
                    {/*end::Wrapper*/}
                </div>
                {/*end::Body*/}
            </div>
            {/*end::Authentication - Sign-in*/}
        </div>

    )
}
