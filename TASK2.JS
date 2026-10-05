// ==========================================
// CASE 1: Student Score Analysis
// ==========================================
console.log("=== CASE 1: STUDENT SCORE ANALYSIS ===");

const studentName = "Andi";
const assignment = 80;
const midterm = 75;
const finalExam = 90;

const finalScore = (assignment * 0.3) + (midterm * 0.3) + (finalExam * 0.4);

const status = finalScore >= 70 ? "Passed" : "Failed";

const category = finalScore >= 85 ? "Excellent" : (finalScore >= 70 ? "Good" : "Failed");

console.log(`Student: ${studentName}`);
console.log(`Assignment: ${assignment}`);
console.log(`Midterm: ${midterm}`);
console.log(`Final Exam: ${finalExam}`);
console.log(`Final Score: ${finalScore}`);
console.log(`Status: ${status}`);
console.log(`Category: ${category}`);


console.log("\n==========================================\n");


// ==========================================
// CASE 2: Simple Shopping Checkout
// ==========================================
console.log("=== CASE 2: SIMPLE SHOPPING CHECKOUT ===");

const customerName = "Budi";
const productPrice = 150000;
const quantity = 3;
const discountPercent = 10;

function calculateTotal(price, qty, discountRate) {
  const subtotal = price * qty;
  const discountAmount = (subtotal * discountRate) / 100;
  const totalAfterDiscount = subtotal - discountAmount;

  return {
    subtotal: subtotal,
    discountAmount: discountAmount,
    totalAfterDiscount: totalAfterDiscount
  };
}

const calculateShipping = (totalAfterDiscount) => {
  return totalAfterDiscount >= 500000 ? 0 : 20000;
};

const checkoutDetails = calculateTotal(productPrice, quantity, discountPercent);
const shippingCost = calculateShipping(checkoutDetails.totalAfterDiscount);
const totalPayment = checkoutDetails.totalAfterDiscount + shippingCost;

console.log(`Customer: ${customerName}`);
console.log(`Product Price: Rp${productPrice}`);
console.log(`Quantity: ${quantity}`);
console.log(`Subtotal: Rp${checkoutDetails.subtotal}`);
console.log(`Discount: Rp${checkoutDetails.discountAmount}`);
console.log(`After Discount: Rp${checkoutDetails.totalAfterDiscount}`);
console.log(`Shipping: Rp${shippingCost}`);
console.log(`Total Payment: Rp${totalPayment}`);