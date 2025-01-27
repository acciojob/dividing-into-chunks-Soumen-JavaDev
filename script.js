const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
   let ans=[];
	let currarr=[]
	let currsum=0;
	for(let num of arr){
		if(currsum +num > n){
			ans.push(currarr);
			currsum=0; 
			currarr=[]
		}
		currarr.push(num);
		currsum+=num;
	}
	if(currarr.length>0){
		ans.push(currarr);
	}
	return ans;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
