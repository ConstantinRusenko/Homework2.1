//  Created by Rusenko Constantin on 01.11.2018.

var array = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]; //10

function waterLevel(arr) {
    var waterLevel = 0;

    for (i = 0; i < array.length; i++) {
        var rightMax = 0;
        var leftMax = 0;
        var minimalMaxLevel;
        for (rightInd = i; rightInd < array.length; rightInd++) {
            rightMax = Math.max(rightMax,arr[rightInd]);
        }

        for(leftInd = i; leftInd >= 0; leftInd--) {
            leftMax = Math.max(leftMax, arr[leftInd]);
        }

        minimalMaxLevel = Math.min(leftMax,rightMax);
        if(minimalMaxLevel > arr[i]) {
            waterLevel += minimalMaxLevel - arr[i];
        }
    }
    console.log('Water level: ',waterLevel);
}

waterLevel(array);

