// Sorting algorithms

// Bubble Sort
// Not terribly efficient, but bubble sort, selection, and insertion are easy to implement

function bubbleSort2(arr) {
    for (let i=0; i<arr.length; i++) {
      // arr.length-i
      for (let j=0; j<arr.length-i; j++) {
        console.log(arr[j], arr[j+1]);
        console.log("The current state of the arr", arr)
        if (arr[j] > arr[j+1]) {
          let temp = arr[j];
          arr[j] = arr[j+1]
          arr[j+1] = temp;
        }
        
      }
      
    }
    return arr;
  }
  // Let's see what this looks like.
  console.log(bubbleSort3([99, 34, 5, 6, 2, 1, 30]))

  function bubbleSort3(arr) {
    let swapped;
    for (let i=0; i<arr.length; i++) {
      // arr.length-i
      swapped = false;
      for (let j=0; j<arr.length-i; j++) {
        console.log(arr[j], arr[j+1]);
        console.log("The current state of the arr", arr)
        if (arr[j] > arr[j+1]) {
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            swapped = true;
        }
        
      }
      if (!swapped) break;
      
    }
    return arr;
}

function merge(arr1, arr2) {
    const results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }

    console.log(results);

    return results;
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    console.log(arr);

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

mergeSort([5, 73, 123, 74, 12, 834, 53, 9, 1, 0, 84, 123, 523, 6123, 73452, 642, 321, 24, 512]);