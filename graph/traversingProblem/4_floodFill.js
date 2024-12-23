//@ts-check
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
function floodFill(image, sr, sc, color) {
  let m = image.length;
  let n = image[0].length;
  let visited = Array(m)
    .fill(undefined)
    .map(() => Array(n).fill(false));
  let direction = [
    { dx: 0, dy: 1 },
    { dx: 0, dy: -1 },
    { dx: 1, dy: 0 },
    { dx: -1, dy: 0 },
  ];
  let queue = [];
  visited[sr][sc] = true;
  queue.push({ iN: sr, jN: sc, parent: image[sr][sc] });
  image[sr][sc]= color

  while (queue.length) {
    let { iN = 0, jN = 0, parent } = queue.shift() ?? {};
    for (let i = 0; i < direction.length; i++) {
      let childIN = iN + direction[i].dx;
      let childJN = jN + direction[i].dy;

      if (
        childIN >= 0 &&
        childIN < m &&
        childJN >= 0 &&
        childJN < n &&
        image[childIN][childJN] === parent &&
        !visited[childIN][childJN]
      ) {
        visited[childIN][childJN] = true;
        image[childIN][childJN] = color;
        queue.push({ iN: childIN, jN: childJN, parent: parent });
      }
    }
  }
  return image;
}
floodFill.run = () => {
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  );
};
module.exports = floodFill;
