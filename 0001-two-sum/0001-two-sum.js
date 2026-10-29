/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // for(let i=0;i<nums.length-1;i++){
    //     for(let j=i+1;j<nums.length;j++){
    //         if(nums[i]+nums[j]===target)
    //         return [i,j];
    //     }
    // }
    // return [];
    let hash = new Map()
    for(let i =0;i<nums.length;i++){
        let num = target-nums[i];

        if(hash.has(num)){
            return [hash.get(num),i];
        }
        hash.set(nums[i],i);
    }
    return [];
};