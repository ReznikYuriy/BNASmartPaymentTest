function shortestPath(grid, start, end) {
    const numRows = grid.length;
    const numCols = grid[0].length;

    const directions = [
        [-1, 0], // up
        [1, 0],  // down
        [0, -1], // left
        [0, 1]   // right
    ];

    function isValid(x, y) {
        return x >= 0 && x < numRows && y >= 0 && y < numCols && grid[x][y] === 0;
    }

    const queue = [[start[0], start[1], 0]];
    const visited = Array.from({ length: numRows }, () => Array(numCols).fill(false));
    const parent = Array.from({ length: numRows }, () => Array(numCols).fill(null));

    visited[start[0]][start[1]] = true;

    while (queue.length > 0) {
        const [x, y, steps] = queue.shift();

        if (x === end[0] && y === end[1]) {
            const path = [];
            let cx = x, cy = y;
            while (cx !== null && cy !== null) {
                path.unshift([cx, cy]);
                const prev = parent[cx][cy];
                if (prev) {
                    cx = prev[0];
                    cy = prev[1];
                } else {
                    break;
                }
            }
            return { path, steps };
        }

        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            if (isValid(nx, ny) && !visited[nx][ny]) {
                visited[nx][ny] = true;
                parent[nx][ny] = [x, y]; // Store the previous cell
                queue.push([nx, ny, steps + 1]);
            }
        }
    }

    return null;
}
const grid1 = [
    [0, 0, 1],
    [1, 0, 0],
    [0, 1, 0]
];
const start1 = [0, 0];
const end1 = [2, 2];

const result1 = shortestPath(grid1, start1, end1);
console.log(result1);
/**
 * {
  path: [ [ 0, 0 ], [ 0, 1 ], [ 1, 1 ], [ 1, 2 ], [ 2, 2 ] ],
  steps: 4
}
 */

const grid2 = [
    [0, 0, 1],
    [1, 0, 1],
    [0, 1, 0]
];
const start2 = [0, 0];
const end2 = [2, 2];

const result2 = shortestPath(grid2, start2, end2);
console.log(result2);
/**
 * null
 */