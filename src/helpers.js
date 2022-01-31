/** Returns randomly selected item from array of items. */

function choice(items) {
    const idx = Math.floor(Math.random() * items.length);
    return items[idx];
}

/** Removes first matching item from items array, if it exists,
 *  and returns that item.
 *  If no matching item exists, returns undefined.
 */

function remove(items, item) {
    const idx = items.indexOf(item);
    if (idx > -1) {
        items.splice(idx, 1);
        return item;
    }
    return undefined;
}

export { choice, remove };