function checkBracketPair(string) {
  let stringArr = string.split("");

  let count = 0;
  stringArr.forEach(currentItem => {
    if (currentItem == "{") {
      count += 1;
    } else if (currentItem == "}") {
      count -= 1;
    }
  });
  console.log(count);
  if (count == 0) {
    console.log("String Contains Valid Pairs");
  } else {
    console.log("String is Not Valid");
  }
}

checkBracketPair("{{{}}");

function createPhoneNumber(numbers) {
  let PhoneNumber = "(";
  for (let i = 0; i < numbers.length; i++) {
    if (i <= 1) {
      PhoneNumber = PhoneNumber + numbers[i];
    } else if (i == 2) {
      PhoneNumber = PhoneNumber + numbers[i] + ") ";
    } else if (i <= 4) {
      PhoneNumber = PhoneNumber + numbers[i];
    } else if (i == 5) {
      PhoneNumber = PhoneNumber + numbers[i] + "-";
    } else {
      PhoneNumber = PhoneNumber + numbers[i];
    }
  }
  console.log("Logged OutPut:: createPhoneNumber -> PhoneNumber", PhoneNumber);
}

function createPhoneNumberBetter(numbers) {
  let format = "(xxx) xxx-xxxx";
  for (let j = 0; j < numbers.length; j++) {
    format = format.replace("x", numbers[j]);
  }
  console.log("Logged OutPut:: createPhoneNumberBetter -> format", format);
}

function isIsogram(str) {
  let lowStr = str.toLowerCase();
  for (let index = 0; index < lowStr.length; index++) {
    if (lowStr.substring(index + 1).includes(lowStr[index])) {
      return false;
    }
  }
  return true;
}

function longest(s1, s2) {
  let uniqArr = [...new Set(s1 + s2)];
  uniqArr = uniqArr.sort().join("");

  console.log("Logged OutPut:: longest -> uniqArr", uniqArr);
  return uniqArr;
}

function getUniqArrayFromCode(arr) {
  let UniqArray = [];

  for (const item of arr) {
    if (UniqArray.indexOf(item) === -1) {
      UniqArray.push(item);
    }
  }
  console.log("Logged OutPut:: getUniqArrayFromCode -> UniqArray", UniqArray);
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
createPhoneNumberBetter([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
isIsogram("Saurav");
longest("aretheyhere", "yestheyarehere");
getUniqArrayFromCode(["a", "r", "e", "t", "h", "e", "y", "h", "e", "r", "e"]);
