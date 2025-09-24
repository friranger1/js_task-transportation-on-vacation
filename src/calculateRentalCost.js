/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const total = pricePerDay * days;
  let discount = 0;

  if (days >= 3 && days <= 6) {
    discount = 20;
  }

  if (days >= 7) {
    discount = 50;
  }

  return total - discount;
}

module.exports = calculateRentalCost;
