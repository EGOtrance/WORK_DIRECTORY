function range(start,end,step)
{
	var n=[];
	var count=0;
	if (arguments.length<=2)
	{
		step=1;
	}
	if (step<0) 
		for(var i=start;i>=end;i+=step)
		{
			n.push(i);
		}
	else
		for(var i=start;i<=end;i+=step)
		{
			n.push(i);
		}
	return n;
}
function sum(rang)
{
	var EndSum=0;
	for(var i=0;i<rang.length;i++)
	{
		EndSum+=rang[i];
	}
	return EndSum;
}
console.log(sum(range(1,10)))
console.log(range(5,2,-1))
