import Navigation from "./public/js/Navigation.js";
import {routes} from "./routes.js";

const APP = document.getElementById('app');
const NAVIGATION = document.getElementById('navigation');

const ROUTER = async () => {
    let hash = location.hash.split("#")[1] || '/';

    NAVIGATION.innerHTML = await Navigation.view();
    await Navigation.after()

    if (!routes[hash]) {
        routes[hash] = Error404;
    }

    APP.innerHTML = await routes[hash].view();
    routes[hash].after();
}

window.addEventListener('hashchange', async () => {
    await ROUTER();
});

export default ROUTER;
