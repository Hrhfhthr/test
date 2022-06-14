console.log("#1");
for(let i=0;i<4;i++){
        console.log("5 5 5 5 5 5")
}
console.log("_____________________________");
for(let i=0;i<4;i++){
        console.debug("1 2 3 4 5 6 7 8 9 10");
}
console.log("_____________________________");
for(let i=4;i!=8;i++){
	for(let j=1;j!=10;j++){
	process.stdout.write(i+""+j+" ");
	}
	console.log();
}
console.log("_____________________________");
let q="";
for(let i=1;i!=6;i++){
q+="5 ";
	console.log(q);
}
console.log("_____________________________");
let q1="";
for(let i=6;i!=1;i--){
	for(let j=1;j!=i;j++){
	process.stdout.write("1 ")
	}
	console.log();
}
console.log("_____________________________");
for(let i=1;i!=6;i++){
        for(let j=1;j<=i;j++){
        process.stdout.write(i+" ")
        }
        console.log();
}
console.log("_____________________________");
let q2=5;
for(let i=5;i!=0;i--){
        for(let j=1;j<=i;j++){
        process.stdout.write(q2+" ")
        }
        console.log();
	q2++;
}
console.log("_____________________________");
let q3=10;
for(let i=1;i!=6;i++){
        for(let j=1;j<=i;j++){
        process.stdout.write(q2+" ")
        }
        console.log();
        q2+=10;
}
console.log("_____________________________");
let q4=5;
for(let i=6;i!=1;i--){
        for(let j=1;j<=i;j++){
        process.stdout.write(q3+" ")
        }
        console.log();
        q4+=5;
}
console.log("_____________________________");
console.log("#2");
let i;
let j;
for(i=1;i<=300;i++){
let sum=0;
	for(j=1;j<=i;j++){
	if(i%j==0){
	sum=sum+1;
	}
	}
	if(sum==5){
console.log(i)
	}
}
console.log("_____________________________");
console.log("#3");
let i1;
let j1;
for(i1=200;i1<=500;i1++){
let sum1=0;
        for(j1=1;j1<=i1;j1++){
        if(i1%j1==0){
        sum1=sum1+1;
        }
        }
        if(sum1==6){
console.log(i1)
        }
}
console.log("_____________________________");
console.log("#4");
let a;
let b;
for(a=50;a<=270;a++){
let sum2=0;
        for(b=1;b<=a;b++){
        if(a%b==0){
        sum2=sum2+1;
        }
        }
        if(sum2==3){
console.log(a)
        }
}
console.log("_____________________________");
console.log("#6");
let a1;
let b1;
for(a1=1;a1<=100;a1++){
let sum3=0;
        for(b1=1;b1<=a1;b1++){
        if(a1%b1==0){
        sum3=sum3+1;
        }
        }
        if(sum3==2){
console.log(a1)
        }
}
console.log("_____________________________");
console.log("#7");
let x;
let y;
for(x=50;x<=70;x++){
let sum4=0;
        for(y=1;y<=x;y++){
        if(x%y==0){
        sum4=sum4+y;
        }
        }
console.log(x+" summa delitelya: "+sum4 ); 
        
}
console.log("_____________________________");
console.log("#8");
let x1;
let y1;
let r=0;
for(x1=100;x1<=300;x1++){
let sum5=0;
        for(y1=1;y1<=x1;y1++){
        if(x1%y1==0){
        sum5=sum5+y1;
        }
        }
	if(sum5==50){
		r++;
console.log(x1+" summa delitelya: "+sum5 );
	}
}
if(r==0){
console.log("net chisel summa cotorih ravna 50");
}
console.log("_____________________________");
console.log("#9");
let x2;
let y2;
for(x2=300;x2<=600;x2++){
let sum6=0;
        for(y2=1;y2<=x2;y2++){
        if(x2%y2==0){
        sum6=sum6+y2;
        }
        }
        if(sum6%10==0){
console.log(x2+" summa delitelya: "+sum6 );
        }
}





