function phAnalyzer (pH) {
  if ( pH >= 1 && pH <= 6 ) {
    console.log("ACID");
  } else if ( pH === 7 ) {
    console.log("NEUTRAL");
  } else if ( pH >= 8 && pH <= 14 ) {
    console.log("ALKALINE")
  } else {
    console.log("Invalid pH value")
  }

}
console.log(phAnalyzer(7))
