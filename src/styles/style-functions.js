/**
 * color_switcher - alternates between bootstrap color options according
 * to index of element. More combinations can be added.
 *
 * @param  {int} index index of element
 * @return {string}      bootstrap color class
 */
export function color_switcher(index) {
    switch (index % 3) {
        case 0:
            return "success";
        case 1:
            return "warning";
        case 2:
            return "danger";
        default:
            throw "Invalid index."
    }
}

/**
 * equal_width_ratio - returns an ratio to preserve equal width for multiple
 * colums.
 * It is intended to be used either with 100% or 12(boostrap layout). It is up
 * to user to ensure that the base can be divided by number of colums without
 * a remainder.
 * TODO: Add some simple checks to handle more cases.
 *
 * @param  {int} base       the base to be divied(100 or 12)
 * @param  {int} columns    total number of columns;
 * @return {string}         portion of width
 */
export function equal_width_ratio(base, columns){
    let result = base/columns;
    return result.toString();
}
