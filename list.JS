var newlist=new Array("hbdjkc","bscsjc","gerg","rgshsh")
var index,last,add;
while(add=prompt("enter")){
    last=newlist.length-1;
    while(last>=0 && newlist[last]>add){
        newlist[last+1]=newlist[last];
        last--;
    }
    newlist[last+1]=add;
    document.write("new list is :")
    for(index=0;index<newlist.length;index++){
        document.write(newlist[index],"<br/>  ")
    }
    document.write("<br/>")
}