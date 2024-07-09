//java example 1

public int add(String numbers) {
    if (numbers.isEmpty()) {
        return 0;
    } else {
        String delimiter = ",";
        String nums = numbers;

        if (numbers.startsWith("//")) {
            int delimiterIndex = numbers.indexOf("//") + 2;
            delimiter = numbers.substring(delimiterIndex, delimiterIndex + 1);
            nums = numbers.substring(numbers.indexOf("\n") + 1);
        }

        // Split numbers using the delimiter and also handle new lines
        String[] numsArray = nums.split("[,\n" + delimiter + "]");
        int sum = 0;
        List<Integer> negativeNumbers = new ArrayList<>();

        for (String num : numsArray) {
            if (!num.isEmpty()) {
                int numInt = Integer.parseInt(num);
                if (numInt < 0) {
                    negativeNumbers.add(numInt);
                }
                sum += numInt;
            }
        }

        if (!negativeNumbers.isEmpty()) {
            throw new IllegalArgumentException("Negative numbers not allowed: " + negativeNumbers);
        }

        return sum;
    }
}


//java script example first

function add(numbers) {
    if (numbers === "") {
        return 0;
    }

    var numberArray = extractNumbers(numbers);
    let sum = 0;
    let negatives = [];
    for (let num of numberArray) {
        let parsedNum = parseInt(num, 10);
        if (isNaN(parsedNum)) {
            continue;
        }
        if (parsedNum < 0) {
            negatives.push(parsedNum);
        }
        sum += parsedNum;
    }
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
    }
    return sum;
}


function extractNumbers(inputStr) {
    var regex = /-?\d+/g;
    var numbersArray = inputStr.match(regex);
    if (numbersArray) {
        numbersArray = numbersArray.map(function (numStr) {
            return parseInt(numStr, 10);
        });
    } else {
        numbersArray = [];
    }
    return numbersArray;
}

console.log(add(""));  // case 1
console.log(add("1"));  //case 2
console.log(add("1,5,3")); // case 3
console.log(add("1\n2,3")); // case 4
console.log(add("//;\n1;2;3;77"));  // case 5
try {
    console.log(add("1,-2,3"));   // case 6
} catch (e) {
    console.error(e.message);
}
try {
    console.log(add("//;\n1;-2;3;-4")); // case 7
} catch (e) {
    console.error(e.message);
}


//java script example second

function add(numbers) {
    if (numbers === "") {
        return 0;
    }
    let delimiter = /,|\n/; 
    let customDelimiterMatch = numbers.match(/^\/\/(.+)\n/);
    if (customDelimiterMatch) {
        delimiter = new RegExp(customDelimiterMatch[1]); // return  /;/
        numbers = numbers.slice(customDelimiterMatch[0].length); //case 5 retrun 1;2
    }
    let numberArray = numbers.split(delimiter); //case 5 => 3
    let sum = 0;
    let negatives = [];
    for (let num of numberArray) {
        let parsedNum = parseInt(num, 10);
        if (isNaN(parsedNum)) {
            continue;
        }
        if (parsedNum < 0) {
            negatives.push(parsedNum);
        }
        sum += parsedNum;
    }
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
    }
    return sum;
}


console.log(add(""));  // case 1
console.log(add("1"));  //case 2
console.log(add("1,5")); // case 3
console.log(add("1\n2,3")); // case 4
console.log(add("//;\n1;2"));  // case 5
try {
    console.log(add("1,-2,3"));   // case 6
} catch (e) {
    console.error(e.message); 
}
try {
    console.log(add("//;\n1;-2;3;-4")); // case 7
} catch (e) {
    console.error(e.message);
}


