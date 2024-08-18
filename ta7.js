function convertToCelsius(temp) {
    let res = (temp - 32) * (5/9);
    res = res.toFixed(1);
    console.log(res);
}

function convertToFahrenheit(temp) {
    let res = (temp * (9/5) + 32);
    res = res.toFixed(1);
    console.log(res);
}