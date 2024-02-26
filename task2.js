function countConnectedComponents(A, B) {
    const graph = new Map();

    // Construct the adjacency list representation of the graph
    for (const [u, v] of B) {
        if (!graph.has(u)) graph.set(u, []);
        if (!graph.has(v)) graph.set(v, []);
        graph.get(u).push(v);
        graph.get(v).push(u);
    }

    const visited = new Set();
    let components = 0;

    // DFS function to explore the graph and count connected components
    function dfs(node) {
        visited.add(node);
        if (!graph.has(node)) return;
        for (const neighbor of graph.get(node)) {
            if (!visited.has(neighbor)) {
                dfs(neighbor);
            }
        }
    }

    // Iterate over all nodes and perform DFS to find connected components
    for (let i = 1; i <= A; i++) {
        if (!visited.has(i)) {
            dfs(i);
            components++;
        }
    }

    return components;
}

// Test cases
console.log(
    countConnectedComponents(4, [
        [1, 2],
        [2, 3],
    ]),
); // Output: 2
console.log(
    countConnectedComponents(3, [
        [1, 2],
        [2, 1],
    ]),
); // Output: 2

// **Time Complexity: O(A + |B|), where A is the number of nodes and |B| is the number of edges.

// **Space Complexity: O(A + |B|)
