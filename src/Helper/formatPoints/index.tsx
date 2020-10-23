const formatPoints = (point: number) => {
  if (point !== undefined) {
    const points = point.toString().split('.');
    return points[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
};

export default formatPoints;
