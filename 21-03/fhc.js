var arrays=[[1,2,3],[4,5],[6]]
var end_arr=[];
var end=0;
end_arr=arrays.reduce(function (a,b)
{
	console.log(end++)
	console.log(b);
	console.log(a);
	return a.concat(b);
}
,[])
console.log(end_arr);
