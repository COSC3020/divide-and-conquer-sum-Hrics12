function divideAndConquerSum(arr) {
    //returns 0 because there is nothing to sort
    if (arr.length === 0)
        return 0;
    //returns the only value in the array
    if (arr.length === 1)
        return arr[0];
    //Take the length of array and splits into thirds
    var cent1 = Math.round(arr.length / 3);
    //Takes a third of array and multiplies it by 2 to get the last 3rd of array
    var cent2 = cent1 * 2;

    //Recursive call running the function in each 3rd of the array
    return divideAndConquerSum(arr.slice(0, cent1)) + divideAndConquerSum(arr.slice(cent1, cent2)) + divideAndConquerSum(arr.slice(cent2));
}


// -----|---------|----
//    cent1     cent2
//This was just my visual aid to help process
