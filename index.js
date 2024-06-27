function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42);
  }
  
  function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264;
  }
  
  function distanceTravelledInFeet(startBlock, endBlock) {
    const blocksTravelled = Math.abs(endBlock - startBlock);
    return blocksTravelled * 264;
  }
  
  function calculatesFarePrice(startBlock, endBlock) {
    const feetTravelled = distanceTravelledInFeet(startBlock, endBlock);
  
    if (feetTravelled <= 400) {
      return 0;
    } else if (feetTravelled > 400 && feetTravelled <= 2000) {
      return (feetTravelled - 400) * 0.02;
    } else if (feetTravelled > 2000 && feetTravelled <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  