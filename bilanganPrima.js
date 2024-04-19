// membuat function untuk membuat array dari 1 sampai 100
function dataNumberArray(number) {
    const data = [];
    for (let i = 1; i <= number; i++) {
        data.push(i);
    }
    return data;
}

// membuat function untuk print data
function printData(data) {
    const result = data.reverse().map((item) => {
        if (isBilanganPrima(item)) {
            return '';
        } else if (item % 3 === 0 && item % 5 === 0) {
            return 'FooBar';
        } else if (item % 3 === 0) {
            return 'Foo';
        } else if (item % 5 === 0) {
            return 'Bar';
        } else {
            return item;
        }
    });
    return result.filter((item) => item !== '').join(', ');
}

// membuat function untuk mengecek bilangan prima
function isBilanganPrima(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num !== 1;
}


// execute function
const dataArray = dataNumberArray(100);
console.log(printData(dataArray));
// end execute function


