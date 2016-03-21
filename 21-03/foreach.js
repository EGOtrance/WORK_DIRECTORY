function ForEach(array,action)
{
	for(var i=0;i<array.length;i++)
	{
		action(array[i]);
	}
}
var numbers=[1,2,3,4,5];
var sum=0;
ForEach(numbers,function(numbers){
	sum+=numbers;
});
console.log(sum);