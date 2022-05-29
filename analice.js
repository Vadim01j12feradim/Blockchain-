class transaction{
    constructor(data){
        this.data = data;
        this.childs = [];
    }
    addChild(newChild){
        this.childs.push(newChild);
    }
    getChild(index){
        return this.childs[index];
    }
    getLengsChilds(){
        return this.childs.length;
    }
    getData(){
        return this.data;
    }
}





class chain{
    constructor(blocks){
        this.blocks = blocks;
        this.actual=10;
        this.containers=[];
        this.trans=[];
    }
    getcontainers(){

        let temp=0;
        let flag=false;
        let ac='';
        
         do{
            if (this.blocks.charAt(this.actual)=='[') {
                temp++;
            }
            if (this.blocks.charAt(this.actual)==']') {
                temp--;
            }
            if (this.blocks.charAt(this.actual)=='{') {
                ac='';
                this.actual++;
                flag=true;
            }
                if (this.blocks.charAt(this.actual)=='}') {
                    //alert(ac);
                    ac = ac.replace(/\,/g, "<br>"); 
                    ac = ac.replace(/:/g, ": "); 
                    ac = ac.replace(/\"/g, ""); 
                    this.containers.push(ac);
                    flag=false;
                }
                if (flag) {
                    ac+=this.blocks.charAt(this.actual);
                }
            this.actual++;
        }while (temp!=0);
        // let i=0
        // ac='<h2>Bloques de 4 ceros de dificultad</h2>'
        // while (i<this.containers.length) {
        //     ac+="<div class='block'>";
        //     ac+='<img class="blockimg"width="40px" src="images/cubo.png" type="text" alt="" onclick="nq()" srcset=""><br>';

        //     ac+=this.containers[i];
        //     ac+="</div>";
        //     i++
        // }
        // ac+="<h2>Bloques de transacciones</h2>"
        // document.getElementById('blocks').innerHTML=ac;
        this.actual+=32;
    }
    getsecond(){
        alert(this.blocks);
        let ac='';
        //alert(this.blocks.substring(this.actual,this.actual+5))
        do{
            let temp=0;
            let flag=false;
            ac='';
            let data=new transaction("");
            do{
            if (this.blocks.charAt(this.actual)=='[') {
                if (temp==1) {
                    //alert(this.blocks.substring(this.actual,this.actual+5))
                    ac = ac.replace(/\,/g, "<br>"); 
                    ac = ac.replace(/:/g, ": "); 
                    ac = ac.replace(/\"/g, ""); 
                    data = new transaction(ac);
                    ac='';
                    this.actual++;
                }
                //alert(temp)
                temp++;
            }
            if (this.blocks.charAt(this.actual)==']') {
                temp--;
            }
            if (this.blocks.charAt(this.actual)=='{') {
                ac='';
                this.actual++;
                flag=true;
            }
                if (this.blocks.charAt(this.actual)=='}') {
                    //alert(ac);
                    // if(ac.length==0){
                    //     alert("Regreso")
                    //     this.actual = this.actual-data.getData()-8;
                    //     break;
                    // }
                    ac = ac.replace(/\,/g, "<br>"); 
                    ac = ac.replace(/:/g, ": "); 
                    ac = ac.replace(/\"/g, ""); 
                    data.addChild(ac);
                    // alert(ac);
                    ac="";
                    flag=false;
                }
                if (flag) {
                    ac+=this.blocks.charAt(this.actual);
                }
            this.actual++;
        }while (temp!=0 || data.getLengsChilds()==0);
        let comp = data.getLengsChilds();
        if (comp==0) {
            this.getcontainers();
        }else{
            //alert("se cumple: "+this.blocks.length+" Llevo: "+this.actual)
            this.actual+=32;
            this.trans.push(data);
        }
        }while (this.blocks.length>this.actual);



        let i=0
        ac='<h2>Bloques de 5 ceros de dificultad</h2>'
        while (i<this.containers.length) {
            ac+="<div class='block'>";
            ac+='<img class="blockimg"width="40px" src="images/cubo.png" type="text" alt="" onclick="nq()" srcset=""><br>';
            ac+=this.containers[i];
            ac+="</div>";
            i++
        }
        //ac+="<h2>Bloques de transacciones</h2>"
        //document.getElementById('blocks').innerHTML=ac;
        console.log(this.trans);
        i=0
        ac+="<h2>Bloques de transacciones</h2>"
        while (i<this.trans.length) {
            ac+="<div class='blockpay'>";
            ac+='<img class="blocki"width="40px" src="images/pay.png" type="text" alt="" onclick="nq()" srcset=""><br>';
            ac+=this.trans[i].getData();
            
            let j=0;
            while (j<this.trans[i].getLengsChilds()) {
                ac+="<div class='subpay'>";
                ac+=this.trans[i].getChild(j);
                ac+="</div>";
                j++;
            }
            
            
            ac+="</div>";
            i++
        }
        
        document.getElementById('blocks').innerHTML=ac;
    }

}
function nq() {
    blocks = document.getElementById('content').value;
    document.getElementById('blocks').innerHTML=blocks;
    blocks = blocks.replace(/ /g, ""); 
    blocks = blocks.replace(/\n/g, ""); 
    let norm = new chain(blocks);
    norm.getcontainers();
    norm.getsecond();
    //alert(blocks[10]);
}
