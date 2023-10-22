import { createBrowserRouter } from 'react-router-dom';
import Main from "../page/main/main";
import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '',
				element: <Main />,
			},
		],
	},
]);

export default router;
