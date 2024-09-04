/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const cycle = new Map();
  const visitList = new Array(numCourses).fill(0);
  
  for (let i = 0; i < prerequisites.length; i++) {
    if (!cycle.has(prerequisites[i][0])) cycle.set(prerequisites[i][0], []);
    
    cycle.get(prerequisites[i][0]).push(prerequisites[i][1]);
  }
  
  const hasCycle = (course) => {
    if (visitList[course] === 1) return true;
    if (visitList[course] === 2) return false;
    
    visitList[course] = 1;
    
    if (cycle.has(course)) {
      for (let i = 0; i < cycle.get(course).length; i++) {
        if (hasCycle(cycle.get(course)[i])) return true;
      }
    }
    
    visitList[course] = 2;
    return false;
  };
  
  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(i)) return false;
  }
  
  return true;
};