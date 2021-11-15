//The prices of big macs in each country's respective currency

let UsBigMacPrice = 5.66;
let SwissBigMacPrice = 6.50;
let SweedenBigMacPrice = 52.88;
let IndiaBigMacPrice = 130.07;
let TurkeyBigMacPrice = 14.99;
let UkraineBigMacPrice = 62.00;

//PPP - Purchasing Power Parity

let PPPUsAndSwitzerland = UsBigMacPrice/SwissBigMacPrice;
let PPPUsAndSweeden = UsBigMacPrice/SweedenBigMacPrice;
let PPPUsAndIndia = UsBigMacPrice/IndiaBigMacPrice;
let PPPUsAndTurkey = UsBigMacPrice/TurkeyBigMacPrice;
let PPPUsAndUkraine = UsBigMacPrice/UkraineBigMacPrice;

//Currency Exchange rate Nov.15th 2021

let CHFandUSD = 1.09;   // 1 Swiss Franc equals 1.09 U.S Dollars
let SEKandUSD = 0.11;    // 1 Swedish Krona equals 0.11 U.S Dollars
let INRandUSD = 0.013;   // 1 Indian Rupee equals 0.013 U.S Dollars
let TRYandUSD = 0.099;   // 1 Turkish lira equals 0.099 U.S Dollars
let UAHandUSD = 0.038;   // 1 Ukrainian hryvnia equals 0.038 U.S Dollars

//Now we find the index with the formula

let indexRateCHFandUSD = ((PPPUsAndSwitzerland - CHFandUSD)/CHFandUSD)*100;
let indexRateSEKandUSD = ((PPPUsAndSweeden - SEKandUSD)/SEKandUSD)*100;
let indexRateINRandUSD = ((PPPUsAndIndia - INRandUSD)/INRandUSD)*100;
let indexRateTRYandUSD = ((PPPUsAndTurkey - TRYandUSD)/TRYandUSD)*100;
let indexRateUAHandUSD = ((PPPUsAndUkraine - UAHandUSD)/UAHandUSD)*100;

//Console.log outputs the index values

console.log=("The list of indexes: respectively CHF to US, SEK to USD, INR to USD, TRY to USD and UAH to USD"
+ indexRateCHFandUSD +' '+ indexRateSEKandUSD +' '+ indexRateINRandUSD +' '+ indexRateTRYandUSD +' '+ indexRateUAHandUSD);

//Some boolean comparisons

let compareCHFindexAndSEKindex = Boolean(indexRateCHFandUSD>indexRateSEKandUSD);
console.log=("Is the CHF against USD index larger than the SEK against USD index?" + compareCHFindexAndSEKindex);

let compareCHFindexAndTRYindex = Boolean(indexRateCHFandUSD>indexRateTRYandUSD);
console.log=("Is the CHF against USD index larger than the TRY against USD index?" + compareCHFindexAndTRYindex);

let compareINRindexAndUAHindex = Boolean(indexRateINRandUSD>indexRateUAHandUSD);
console.log=("Is the INR against USD index larger than the UAH against USD index?" + compareINRindexAndUAHindex);

