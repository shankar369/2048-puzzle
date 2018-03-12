var myForm = document.forms.value;


myForm.onsubmit = function(){
    
   var size = Number(myForm.size.value);

   document.write("size is :"+size);


   

};

var size =4;

var board = document.getElementById("board");
/*board.style.marginTop = '100px';
board.style.marginLeft= '500px';
board.style.height = (size * 100) + 2*size+ "px";
board.style.width = (size * 100)+2*size+"px";
board.style.border = "1px solid black"
board.style.borderColor = "black";*/
var count = 0;
var boxpos = 0;
var mt = 0;


for(var i=0;i<size;i++){
    var node = document.createElement("div");
    node.className = 'row';
    node.id = 'row' + i;
    
    for(var j=0;j<size;j++){
        var block = document.createElement("div");
        block.className = "block";
        block.id = 'block-'+i+'-'+j;
        block.innerHTML = '';
        count++;
        node.appendChild(block);
        }

        board.appendChild(node);
    }

board.style.height = (size*100)+(size*5)+5 +'px';
board.style.width = (size*100)+(size*5)+5 +'px';

var x1 = Math.floor((Math.random() * size ));
var y1 = Math.floor((Math.random() * size ));

var rand = document.getElementById("block-"+x1+'-'+y1);
rand.innerHTML=2;

var x2 = Math.floor((Math.random() * size ));
var y2 = Math.floor((Math.random() * size ));

while((x1 == x2) && (y1 == y2)){
    x2 = Math.floor((Math.random() * size ));
    y2 = Math.floor((Math.random() * size ));
}

rand = document.getElementById("block-"+x2+'-'+y2);



rand.innerHTML=2;

document.onkeydown = function(event){
    if(event.keyCode == 37 || event.keyCode == 65 )moveLeft();
    if(event.keyCode == 38 || event.keyCode == 87 )moveUp();
    if(event.keyCode == 39 || event.keyCode == 68 )moveRight();
    if(event.keyCode == 40 || event.keyCode == 83 )moveDown();
}

function anotherMove(){
    var x2 = Math.floor((Math.random() * size ));
    var y2 = Math.floor((Math.random() * size ));

    var rand = document.getElementById("block-"+x2+'-'+y2);
    
    while(Number(rand.innerHTML) != '')
    {
        x2 = Math.floor((Math.random() * size ));
        y2 = Math.floor((Math.random() * size ));
        rand = document.getElementById("block-"+x2+'-'+y2);
    }
    
    rand.innerHTML=2;
    

document.onkeydown = function(event){
    if(event.keyCode == 37 || event.keyCode == 65 )moveLeft();
    if(event.keyCode == 38 || event.keyCode == 87 )moveUp();
    if(event.keyCode == 39 || event.keyCode == 68 )moveRight();
    if(event.keyCode == 40 || event.keyCode == 83 )moveDown();
}

}


function moveLeft(){
    shiftLeft();

    for(var i =0;i<size;i++){
        for(var j=0;j<size;j++){
            rand = document.getElementById("block-"+i+'-'+j);
            if(rand.innerHTML!=''){
                for(var k=j+1;k<size;k++){
                    var rand2 = document.getElementById("block-"+i+'-'+k);
                    if(rand2.innerHTML!=''){
                        if(rand.innerHTML == rand2.innerHTML){
                            rand.innerHTML =Number(rand.innerHTML)+ Number(rand2.innerHTML);
                            rand2.innerHTML ='';
                            j=k-1;
                            break;
                        }
                        else{
                            j=k-1;
                            break;
                        }
                    }
                }
            }

        }

        }
        shiftLeft();
        anotherMove();

}

function moveRight(){
    shiftRight();
    for(var i =size-1;i>=0;i--){
        for(var j=size-1;j>=0;j--){
            rand = document.getElementById("block-"+i+'-'+j);
            if(rand.innerHTML!=''){
                for(var k=j-1;k>=0;k--){
                    var rand2 = document.getElementById("block-"+i+'-'+k);
                    if(rand2.innerHTML!=''){
                        if(rand.innerHTML == rand2.innerHTML){
                            rand.innerHTML =Number(rand.innerHTML)+ Number(rand2.innerHTML);
                            rand2.innerHTML ='';
                            j=k+1;
                            break;
                        }
                        else{
                            j=k+1;
                            break;
                        }
                    }
                }
            }

        }

        }
        shiftRight();
        anotherMove();

 }

 function moveDown(){
    shiftDown();
    for(var j =size-1;j>=0;j--){
        for(var i=size-1;i>=0;i--){
            rand = document.getElementById("block-"+i+'-'+j);
            if(rand.innerHTML!=''){
                for(var k=i-1;k>=0;k--){
                    var rand2 = document.getElementById("block-"+k+'-'+j);
                    if(rand2.innerHTML!=''){
                        if(rand.innerHTML == rand2.innerHTML){
                            rand.innerHTML =Number(rand.innerHTML)+ Number(rand2.innerHTML);
                            rand2.innerHTML ='';
                            i=k+1;
                            break;
                        }
                        else{
                            i=k+1;
                            break;
                        }
                    }
                }
            }

        }

        }
        shiftDown();
        anotherMove();

 }

 function moveUp(){
    shiftUp()
    for(var j =0;j<size;j++){
        for(var i=0;i<size;i++){
            rand = document.getElementById("block-"+i+'-'+j);
            if(rand.innerHTML!=''){
                for(var k=i+1;k<size;k++){
                    var rand2 = document.getElementById("block-"+k+'-'+j);
                    if(rand2.innerHTML!=''){
                        if(rand.innerHTML == rand2.innerHTML){
                            rand.innerHTML =Number(rand.innerHTML)+ Number(rand2.innerHTML);
                            rand2.innerHTML ='';
                            i=k-1;
                            break;
                        }
                        else{
                            i=k-1;
                            break;
                        }
                    }
                }
            }

        }

        }
        shiftUp();
        anotherMove();

 }


 function shiftLeft(){
    for(var i=0;i<size;i++){
        for(var j=0;j<size;j++){
            var block1 = document.getElementById("block-"+i+'-'+j);
            if(block1.innerHTML == ''){
                for(var k=j+1;k<size;k++){
                    var block2 = document.getElementById("block-"+i+'-'+k);
                    if(block2.innerHTML!=''){
                        block1.innerHTML = block2.innerHTML;
                        block2.innerHTML = '';
                        break;
                    }
                }
            }
        }
    }

 }
 
 function shiftRight(){

    for(var i=size-1;i>=0;i--){
        for(var j=size-1;j>=0;j--){
            var block1 = document.getElementById("block-"+i+'-'+j);
            if(block1.innerHTML == ''){
                for(var k=j-1;k>=0;k--){
                    var block2 = document.getElementById("block-"+i+'-'+k);
                    if(block2.innerHTML!=''){
                        block1.innerHTML = block2.innerHTML;
                        block2.innerHTML = '';
                        break;
                    }
                }
            }
        }
    }

}

function shiftUp(){

    for(var j=0;j<size;j++){
        for(var i=0;i<size;i++){
            var block1 = document.getElementById("block-"+i+'-'+j);
            if(block1.innerHTML == ''){
                for(var k=i+1;k<size;k++){
                    var block2 = document.getElementById("block-"+k+'-'+j);
                    if(block2.innerHTML!=''){
                        block1.innerHTML = block2.innerHTML;
                        block2.innerHTML = '';
                        break;
                    }
                }
            }
        }
    }

    
}

function shiftDown(){
    for(var j=size-1;j>=0;j--){
        for(var i=size-1;i>=0;i--){
            var block1 = document.getElementById("block-"+i+'-'+j);
            if(block1.innerHTML == ''){
                for(var k=i-1;k>=0;k--){
                    var block2 = document.getElementById("block-"+k+'-'+j);
                    if(block2.innerHTML!=''){
                        block1.innerHTML = block2.innerHTML;
                        block2.innerHTML = '';
                        break;
                    }
                }
            }
        }
    }
}
        


