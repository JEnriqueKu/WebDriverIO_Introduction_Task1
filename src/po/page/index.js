import {HomePage} from "./HomePage.js";
import {PastePage} from "./PastePage.js";


/**
 *
 * @param name {'home' | 'pastePage'}
 * @param url
 * @returns {*}
 */
function pages(name, url = "") {
    const items = {
        home: new HomePage(),
        pastepage: new PastePage(url)
    }
    return items[name.toLowerCase()];
}

export {
    pages
}