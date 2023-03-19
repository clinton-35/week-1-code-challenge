// Get input values
const basicSalaryInput = document.getElementById("basic-salary");
const personalReliefInput = document.getElementById("personal-relief");
const insuranceReliefInput = document.getElementById("insurance-relief");
const pensionFundContributionInput = document.getElementById("pension-fund-contribution");
const hospContributionInput = document.getElementById("hosp-contribution");
const housingReliefInput = document.getElementById("housing-relief");
const ownerOccupierInterestInput = document.getElementById("owner-occupier-interest");
const disabilityExemptionInput = document.getElementById("disability-exemption");
const nssfTier1 = document.getElementById("nssf-tier1").value;
const nssfTier2 = document.getElementById("nssf-tier2").value;

// Get the submit button and result output element
const calculateButton = document.getElementById("calculate-button");
const resultOutput = document.getElementById("result-output");

// Define the interest rates for different salary ranges
const interestRates = {
  low: 0.1,
  medium: 0.25,
  high: 0.3
};

// Define the salary ranges
const salaryRanges = {
  low: 24000,
  medium: 32333,
  high: Infinity
};

// Define the NHIF contributions for different salary ranges
const nhifContributions = {
  5999: 150,
  7999: 300,
  11999: 400,
  14999: 500,
  19999: 600,
  24999: 750,
  29999: 850,
  34999: 900,
  39999: 950,
  44999: 1000,
  49999: 1100,
  59999: 1200,
  69999: 1300,
  79999: 1400,
  89999: 1500,
  99999: 1600,
  Infinity: 1700
};

// Function to calculate tax
function calculateTax() {
  // Get the basic salary value
  const basicSalary = Number(basicSalaryInput.value);
  
  // Calculate the interest rate based on salary range
  let interestRate;
  if (basicSalary <= salaryRanges.low) {
    interestRate = interestRates.low;
  } else if (basicSalary <= salaryRanges.medium) {
    interestRate = interestRates.medium;
  } else {
    interestRate = interestRates.high;
  }
  
  // Calculate the taxable income
  const taxableIncome = basicSalary * interestRate;
  
  // Calculate the total benefits
  const totalBenefits = Number(personalReliefInput.value) +
                        Number(insuranceReliefInput.value) +
                        Number(pensionFundContributionInput.value) +
                        Number(hospContributionInput.value) +
                        Number(housingReliefInput.value) +
                        Number(ownerOccupierInterestInput.value) +
                        Number(disabilityExemptionInput.value);
  
  // Calculate the total tax
  const totalTax = taxableIncome - totalBenefits;
  
  // Calculate the NHIF contribution based on basic salary
  let nhifContribution;
  for (const [salaryRange, contribution] of Object.entries(nhifContributions)) {
    if (basicSalary <= Number(salaryRange)) {
      nhifContribution = contribution;
      break;
    }
  }
  let nssf = 0;
  if (basicSalary <= 6000) {
    nssf = basicSalary * 0.06;
  } else if (basicSalary <= 18000) {
    nssf = (6000 * 0.06) + ((basicSalary - 6000) * 0.06);
  } else {
    nssf = (6000 * 0.06) + (12000 * 0.06);
  }

  const tax = basicSalary - nssf;
  
  // Display the result
  resultOutput.textContent = `Your PAYE tax is: ${totalTax.toFixed(2)}, your NHIF contribution is: ${nhifContribution}  and your nssf is:${tax.toFixed(2)} `;
}

// Add event listener to the submit button
calculateButton.addEventListener("click", calculateTax);