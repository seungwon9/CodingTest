function solution(arr) {
    const rows = arr.length;
    const cols = arr[0].length;

    if (rows > cols) {
        for (let i = 0; i < rows; i++) {
            while (arr[i].length < rows) {
                arr[i].push(0);
            }
        }
    } else if (cols > rows) {
        while (arr.length < cols) {
            arr.push(new Array(cols).fill(0));
        }
    }

    return arr;
}