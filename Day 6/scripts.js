// Trishul Patterm
for(i=0;i<=10;i++){
    for(j=0;j<=20;j++){
        if((j==0 && i<=5) || (i==5) || (j==10) || (j==20 && i<=5) ){
            document.write("*");
    }
    else{
        document.write("&nbsp;&nbsp;");
     }
    }
    document.write("<br/>");
    }



    //  Name Pattern for U
    
    for(i=0; i<=10; i++){
    for(j=0; j<=20; j++){
            if((j==0 && i<=8) || (j==10 && i<=8) || (i==8 && j<=14)){

            document.write("*");
        }
        else{
            document.write("&nbsp; &nbsp;");
        }
    }
    document.write("<br/>");
}

// Name Pattern for T

for(i=0; i<=10; i++){
    for(j=0; j<=20; j++){
            if((j==5 && i<=8) || (i==0 && j<=15)){
        document.write("*");
    }
    else{
        document.write("&nbsp; &nbsp;");
    }
}
document.write("<br/>");
}

// Name Pattern For S

for(i=0; i<=5; i++){
    for(j=0; j<=10; j++){
        if((j==5-i || j==5+i)){
            document.write("*");
        }
        else{
            document.write("&nbsp; &nbsp;");        
    }
}
document.write("<br/>");
}

// Name Pattern for A

for(i=0; i<=10; i++){
    for(j=0; j<=20; j++){
        if((i<=0) || (j==0) || (i==5) || (j==14)){
            document.write("*");
        }
        else{
            document.write("&nbsp; &nbsp;");        
    }
}
document.write("<br/>");
}


