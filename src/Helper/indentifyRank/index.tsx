const identifyRank = (point: number) => {
  switch (true) {
    case point > 3000:
      return 'Gold';
    case point > 1500:
      return 'Silver';
    case point > 1000:
      return 'Bronze';
    default:
      return 'Plastic';
  }
};

export default identifyRank;
