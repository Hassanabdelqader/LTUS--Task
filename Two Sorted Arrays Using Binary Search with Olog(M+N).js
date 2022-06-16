/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 function findM(shortArr, longArr) {
    if (shortArr.length > longArr.length)
        return findM(longArr, shortArr);

    let x = shortArr.length;
    let y = longArr.length;

    if ((x === 0) && (y === 0))
        return ' the Arrays is Empty';

    else if (x === 0) {

        if (y % 2 == 0)
            return (longArr[y / 2] + longArr[(y / 2) - 1]) / 2;
        else
            return longArr[Math.floor(y / 2)];


    } else if (y === 0) {

        if (x % 2 == 0)
            return (shortArr[x / 2] + shortArr[(x / 2) - 1]) / 2;
        else
            return shortArr[Math.floor(x / 2)];

    } else {

        let start = 0;
        let end = x;

        while (start <= end) {

            let partx = Math.floor((start + end) / 2);
            let paty = Math.floor((x + y) / 2 - partx);

            let maxlefx = (partx == 0) ? -Infinity : shortArr[partx - 1];
            let minrightx = (partx == x) ? Infinity : shortArr[partx];

            let maxlefy = (paty == 0) ? -Infinity : longArr[paty - 1];
            let minrighty = (paty == y) ? Infinity : longArr[paty];

            if (maxlefx <= minrighty && maxlefy <= minrightx) {
                if ((x + y) % 2 == 0) {
                    return ((Math.max(maxlefx, maxlefy)
                        + Math.min(minrightx, minrighty)) / 2);
                }
                else
                    return Math.min(minrightx, minrighty);
            }
            else if (maxlefy > minrightx) {
                start = partx + 1;

            } else {
                end = partx - 1;
            }


        }
    }

}

