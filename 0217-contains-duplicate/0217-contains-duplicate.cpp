class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        unordered_map<int,int> s;
        for(int i=0;i<nums.size();i++)
            s[nums[i]]++;
        for(auto x:s)
            if(x.second>1)
                return true;
        return false;
    }
};