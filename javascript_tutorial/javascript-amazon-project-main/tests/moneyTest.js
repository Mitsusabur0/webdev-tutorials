import { formatCurrency } from "../scripts/utils/money.js";

console.log('##############################');
console.log('test suite: formatCurrency')
console.log('\nconverts cents to dollars');
if (formatCurrency(2095) === '20.95') {
    console.log('Passed');
} else {
    console.log('Failed');
}

console.log('\nworks with 0');
if (formatCurrency(0) === '0.00') {
    console.log('Passed');
} else {
    console.log('Failed');
}

console.log('\nrounds up to the nearest cent');
if (formatCurrency(2000.5) === '20.01') {
    console.log('Passed');
} else {
    console.log('Failed');
}
console.log('##############################');

