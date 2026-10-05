let ispasscorrect = true;
if (ispasscorrect == true) {
  console.log("login successfully");
} else {
  console.log("try again");
}

// Online Order Approval
let ispaydone = false;
if (ispaydone == true) {
  console.log("Approved");
} else {
  console.log("Rejected");
}

// result system
let marks = Number(prompt("enter your marks"));
if (marks >= 50) {
  console.log("pass");
} else {
  console.log("fail");
}

// online attendance
let isontime = true;
if (isontime == true) {
  console.log("present");
} else {
  console.log("absent|late ");
}

// discount eligibility
let isPremiumUser = true;
if (isPremiumUser == true) {
  console.log("discount Applied");
} else {
  console.log("no discount");
}

// emplpoye perfomance rating systam
let performanceScore = prompt("enter perfomance score");
if (performanceScore >= 90 && performanceScore <= 100) {
  console.log("Excellent");
} else if (performanceScore >= 70 && performanceScore < 90) {
  console.log("Good");
} else if (performanceScore >= 50 && performanceScore < 70) {
  console.log("Average");
} else if (performanceScore >= 0 && performanceScore < 50) {
  console.log("poor");
} else {
  console.log("invalid Number");
}
