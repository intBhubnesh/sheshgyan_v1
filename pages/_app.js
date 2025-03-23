// _app.js
import "../styles/tailwind.css";
import React from "react";
import { Provider } from "react-redux";
import { useStore } from "../store";
import { parseCookies, destroyCookie } from "nookies";
import { redirectUser } from "@/utils/auth";
import baseUrl from "@/utils/baseUrl";
import "../styles/bootstrap.min.css";
import "../styles/animate.min.css";
import "../styles/boxicons.min.css";
import "../styles/flaticon.css";
import "../styles/nprogress.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-tabs/style/react-tabs.css";
import "swiper/css";
import "swiper/css/bundle";
import "react-confirm-alert/src/react-confirm-alert.css";
import "@etchteam/next-pagination/dist/index.css";
import "react-loading-skeleton/dist/skeleton.css";
import "../styles/style.css";
import "../styles/responsive.css";
import "../styles/dashboard.css";

import Layout from "../components/_App/Layout";
import LandingLayout from "../components/_App/LandingLayout"; // Import the new layout

function MyApp({ Component, pageProps, router }) {
	const store = useStore(pageProps.initialReduxState);

	// Define the routes that should use the LandingLayout
	const landingPageRoutes = ["/", "/about", "/contact"]; // Add your landing page routes here

	// Determine which layout to use based on the route
	const isLandingPage = landingPageRoutes.includes(router.pathname);
	const AppLayout = isLandingPage ? LandingLayout : Layout;

	return (
		<Provider store={store}>
			<AppLayout>
				<Component {...pageProps} />
			</AppLayout>
		</Provider>
	);
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
	const { elarniv_users_token } = parseCookies(ctx);
	let pageProps = {};

	if (Component.getInitialProps) {
		pageProps = await Component.getInitialProps(ctx);
	}

	if (!elarniv_users_token) {
		const isProtectedRoute =
			ctx.pathname === "/profile/basic-information" ||
			ctx.pathname === "/profile/photo" ||
			ctx.pathname === "/checkout" ||
			ctx.pathname === "/become-an-instructor" ||
			ctx.pathname === "/learning/my-courses" ||
			ctx.pathname === "/instructor/courses" ||
			ctx.pathname === "/admin" ||
			ctx.pathname === "/admin/instructor" ||
			ctx.pathname === "/admin/students" ||
			ctx.pathname === "/admin/partners" ||
			ctx.pathname === "/admin/testimonials" ||
			ctx.pathname === "/admin/categories" ||
			ctx.pathname === "/checkout" ||
			ctx.pathname === "/learning/wishlist";

		if (isProtectedRoute) {
			redirectUser(ctx, "/authentication");
		}
	} else {
		const ifLoggedIn =
			ctx.pathname === "/authentication" ||
			ctx.pathname === "/reset-password";
		if (ifLoggedIn) {
			redirectUser(ctx, "/");
		}

		try {
			const payload = { headers: { Authorization: elarniv_users_token } };
			const url = `${baseUrl}/api/users/update`;
			const response = await fetch(url, payload);
			if (response.ok) {
				const user = await response.json();
				pageProps.user = user;
			} else if (response.status === 404) {
				console.error("User not found");

				destroyCookie(ctx, "elarniv_users_token");
				redirectUser(ctx, "/authentication");
			} else {
				console.error("Invalid token");
			}
		} catch (err) {
			destroyCookie(ctx, "elarniv_users_token");
		}
	}
	return {
		pageProps,
	};
};

export default MyApp;
