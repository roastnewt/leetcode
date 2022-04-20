/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function(numCourses, prerequisites) {

  // build graph of prereqs
  // Map [vertex, [edge]]
  let graph = new Map();
  for (let [vertex, edge] of prerequisites) {
      if (graph.has(vertex)) {
          let edges = graph.get(vertex);
          edges.push(edge);
          graph.set(vertex, edges);
      } else {
          graph.set(vertex, [edge]);
      }
  }

  // Find loops
  // checked === cleared of loops, to avoid rechecking
  // seen === already visited in current path, must be a loop
  let checked = new Set();
  let seen = new Set();

  let hasLoops = (vertex) => {
      if (!graph.has(vertex)) {
          // vertex not in graph, has no prereqs
          return false;
      }
      if (seen.has(vertex)) {
          // already seen this vertex in current check, found loop
          return true;
      }
      if (checked.has(vertex)) {
          // already cleared this vertex of loops
          // don't need to check again
          return false;
      }

      // mark vertex as seen in case we get back here in a loop
      seen.add(vertex);
      let loops = false;
      // follow every edge, check those verticies for loops
      for (let edge of graph.get(vertex)) {
          loops = loops || hasLoops(edge);
      }
      seen.delete(vertex);

      if (!loops) {
          // if no loops, add this vertex to already cleared verticies
          // to avoid repeated work
          checked.add(vertex);
      }

      return loops;

  }

  // check every course for loops in prereqs.
  for (let i = 0; i < numCourses; i++) {
      if (hasLoops(i)) {
          return false;
      }
  }
  // no loops if we got here
  return true;

};

module.exports = canFinish