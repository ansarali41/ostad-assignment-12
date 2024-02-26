function hasValidPath(n, edges, source, destination) {
    let adjList = {},
        visited = [];

    for (const edge of edges) {
        adjList[edge[0]] ? adjList[edge[0]].push(edge[1]) : (adjList[edge[0]] = [edge[1]]);

        adjList[edge[1]] ? adjList[edge[1]].push(edge[0]) : (adjList[edge[1]] = [edge[0]]);
    }

    const stack = [source];
    visited[source] = true;

    while (stack.length) {
        const current = stack.pop();
        if (current === destination) return true;
        for (let neighbour of adjList[current]) {
            if (!visited[neighbour]) {
                stack.push(neighbour);
                visited[neighbour] = true;
            }
        }
    }

    return false;
}

// Test cases
console.log(
    hasValidPath(
        3,
        [
            [0, 1],
            [1, 2],
            [2, 0],
        ],
        0,
        2,
    ),
); // Output: true
console.log(
    hasValidPath(
        6,
        [
            [0, 1],
            [0, 2],
            [3, 5],
            [5, 4],
            [4, 3],
        ],
        0,
        5,
    ),
); // Output: false

// ** Overall time complexity: O(|B| + V + E), where |B| is the number of edges, V is the number of vertices, and E is the number of edges.
// ** Overall space complexity: O(V + E),
