a=process.argv.slice(2),s=a[0]||'',r=''
for(i=0;i<s.length;i++)
for(j=i+1;j<=s.length;j++)
(t=s.slice(i,j)).length>r.length&&a.every(x=>x.includes(t))&&(r=t)
console.log(r)