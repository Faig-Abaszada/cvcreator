import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Blogs from "../views/Blogs";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";
import ForgotPassword from "../views/auth/ForgotPassword";
import Profile from "../views/auth/Profile";
import Admin from "../views/auth/Admin";
import CreatePost from "../views/CreatePost";
import BlogPreview from "../components/BlogPreview";
import ViewBlog from "../views/ViewBlog";
import EditBlog from "../views/EditBlog";
import CreateCv from "../views/CreateCv";


import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            title: "Home",
            requiresAuth: false,
        }
    },
    {
        path: "/blogs",
        name: "Blogs",
        component: Blogs,
        meta: {
            title: "Blogs",
            requiresAuth: false,
        }
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            title: "Login",
            requiresAuth: false,
        }
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta: {
            title: "Register",
            requiresAuth: false,
        }
    },
    {
        path: "/forgot-password",
        name: "ForgotPassword",
        component: ForgotPassword,
        meta: {
            title: "Forgot Password",
            requiresAuth: false,
        }
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
        meta: {
            title: "Profile",
            requiresAuth: true,

        }
    },
    {
        path: "/admin",
        name: "Admin",
        component: Admin,
        meta: {
            title: "Admin",
            requiresAuth: true,
            requiresAdmin: true,
        }
    },
    {
        path: "/create-post",
        name: "CreatePost",
        component: CreatePost,
        meta: {
            title: "Create Post",
            requiresAuth: true,
            requiresAdmin: true,
        }
    },
    {
        path: "/post-preview",
        name: "BlogPreview",
        component: BlogPreview,
        meta: {
            title: "Blog Preview",
            requiresAuth: true,
            requiresAdmin: true,
        }
    },
    {
        path: "/view-blog/:blogid",
        name: "ViewBlog",
        component: ViewBlog,
        meta: {
            title: "View Blog Post",
            requiresAuth: false,
        }
    },
    {
        path: "/edit-blog/:blogid",
        name: "EditBlog",
        component: EditBlog,
        meta: {
            title: "Edit Blog Post",
            requiresAuth: true,
            requiresAdmin: true,
        }
    },
    {
        path: "create-cv",
        name: "CreateCv",
        component: CreateCv,
        meta: {
            title: "Create CV",
            requiresAuth: false
        }
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | asan-cv`;
    next();

});

router.beforeEach(async(to, from, next) => {
    let user = firebase.auth().currentUser;
    let admin = null;

    if (user) {
        const dataBase = await db.collection('users').doc(firebase.auth().currentUser.uid);
        const dbResult = await dataBase.get();
        admin = dbResult.data().admin;
    }
    if (to.matched.some((res) => res.meta.requiresAuth)) {
        if (user) {
            if (to.matched.some((res) => res.meta.requiresAdmin)) {
                if (admin) {
                    return next();
                }
                return next({ name: "Home" });

            }
            return next();
        }
        return next({ name: "Home" });
    }
    return next();

})


export default router;