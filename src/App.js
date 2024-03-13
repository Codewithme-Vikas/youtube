import { Provider } from 'react-redux';
import { RouterProvider,  createBrowserRouter } from 'react-router-dom';


import './App.css';

import Head from './components/Head';
import Body from './components/Body';
import ErrorPage from './components/ErrorPage';

import store from "./utlis/store";
import Maincontainer from './components/Maincontainer';
import WatchPage from './components/WatchPage'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Body />,
        errorElement: <ErrorPage />,
        children : [
            {
                // index : true,
                path : "/",
                element : <Maincontainer/>
            },
            {
                path : "watch",
                element : <WatchPage/>
            }
        ]
    },
]);


function App() {
    return (
        <Provider store={store}>
            <div className="">

                <Head />

                <RouterProvider router={router}>

                </RouterProvider>

            </div>
        </Provider>
    );
}

export default App;




/*
    Head
    Body
        sidebar
            menuitems
        Maincontainer
            buttonList
            vidoecontainer
                videoCard

*/