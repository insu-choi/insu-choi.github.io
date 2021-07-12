import { items } from "./Items.js";

export function getList(id) {
        
    const promise = new Promise((resolve, reject) => {
        window.setTimeout(function () {
            resolve(items[id ? id : 'root']);
        }, 1000);
    });

    return promise;
}