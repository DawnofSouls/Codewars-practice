function isValidWalk(walk) {
  function isValidWalk(walk) {
    let ns = 0, we = 0; 
      for (let dir of walk) { 
        if (dir == 'n') ns += 1; 
        if (dir == 's') ns -= 1; 
        if (dir == 'w') we += 1; 
        if (dir == 'e') we -= 1; 
      } 
  
      return walk.length == 10 && ns === 0 && we === 0; 
  }
}

  console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));
  console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));