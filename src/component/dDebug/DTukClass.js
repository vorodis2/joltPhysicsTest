
export class DTukClass{
    constructor(dC, koren, cont2d, cont3d) {
        
        var self=this
        this.type="DTukClass";
        this._active=false;
        this._arr2d=[];
        this._arr3d=[];

        this.cont2d=cont2d;
        this.cont3d=cont3d;


        this.koren=koren;

        this.dTPoisk=new DTPoisk(this)

        this.dCont=new DCont(dC);

        this.panel=new DPanel(this.dCont);
        this.check=new DCheckBox(this.panel,2,2,"вкл/выкл",function(){
            self.active=this.value
        })

        this.label=new DLabel(this.panel,2,32,"вкл/выкл")
        this.label.width=999
        this.label.fontSize=10
        //this.label.activMouse=false

        var arrPar
        var bTuk=false
        this.mousedown=function(e){ 
            if(bTuk==false){
                bTuk=true
                swert=100
                self.arr2d =[]
                self.arr3d =[]
            }
            
            if(e.target && e.target.dCont){
                arrPar=[]
                self.dTPoisk.getOtNizOne(e.target.dCont,"parent",arrPar);
                for (var i = 0; i < arrPar.length; i++) {
                    if(arrPar[i].uuid == self.dCont.uuid){                        
                        return
                    }
                }
                self.arr2d = self.dTPoisk.poisk2d(e.target.dCont);                
            } 

            setTimeout(function() {
                self.dtTime()
            }, 100);
        }

        this.mousedown3D=function(e){   
            if(bTuk==false){
                bTuk=true
                swert=100
                self.arr2d =[]
                self.arr3d =[]
            }

            if(e.target){
                self.arr3d = self.dTPoisk.poisk3d(e.target); 
                
            }
            setTimeout(function() {
                self.dtTime()
            }, 100);
        }

        this.dtTime=function(e){ 
            bTuk=false;
            this.dragText();
        }    


        var swert=0
        this.dragText=function(){
            
            let s='2dEvetn:\n'//+this._arr2d;
            let sah=0;                     
            for (var i = 0; i < this._arr2d.length; i+=2) {    
                let ss=''
                for (var j = sah - 1; j >= 0; j--) {
                    ss+="_ "
                }
                ss+=this._arr2d[i] +" :: "+this._arr2d[i+1]+"\n";
                s+=ss

                if(swert<ss.length*this.label.fontSize/2) swert=ss.length*this.label.fontSize/2               
                sah++
            }
            s+='\n3dEvetn:\n';
            sah=0;                     
            for (var i = 0; i < this._arr3d.length; i+=2) {    
                let ss=''
                for (var j = sah - 1; j >= 0; j--) {
                    ss+="_ "
                }
                ss+=this._arr3d[i] +" :: "+this._arr3d[i+1]+"\n";
                s+=ss 
                if(swert<ss.length*this.label.fontSize/2) swert=ss.length*this.label.fontSize/2                
                sah++
            }



           

            this.label.dCT.div.innerText=s
            setTimeout(function() {
                self.dragPPP()
            }, 10);
        }

        this.dragPPP=function(){

            this.panel.width=swert+2
            this.panel.height=this.label.getRect().height+this.label.y+2
            this.label.width=swert
        }

        //this.active=true

    }
    set active(value) {
        if(this._active!=value){
            this._active = value; 
            this.check.value=this._active;

            if(this._active==true){
                
                if(this.cont2d && this.cont2d.div){
                    this.cont2d.div.addEventListener('mousedown',this.mousedown)                    
                }
                if(this.cont3d){
                    window.visi3D.addChildMouse(this.cont3d)
                    window.visi3D.addEvent("down",this.mousedown3D)
                }

            }else{
                if(this.cont2d && this.cont2d.div){
                    this.cont2d.div.removeEventListener('mousedown',this.mousedown)
                }
                if(this.cont3d){
                    window.visi3D.removeChildMouse(this.cont3d)
                    window.visi3D.removeEvent("down",this.mousedown3D)
                }
            }


        }       
    }   
    get active() { return  this._active;} 

    set arr2d(value) {
        if(this._arr2d!=value){
            this._arr2d = value; 
            

        }       
    }   
    get arr2d() { return  this._arr2d;} 

    set arr3d(value) {
        if(this._arr3d!=value){
            this._arr3d = value; 
            

        }       
    }   
    get arr3d() { return  this._arr3d;} 

}

export class DTPoisk{
    constructor(par) {
        var self=this
        this.type="DTukClass";
        this._active=false;
        this.par=par; 
        this.arrayC=[]
        this.array=[]

        var objPar1={}
        var objPar={}
        var arrPar=[]
        var p
        this.poisk2d=function(dCont){
            if(!dCont)return []
            let r=[];
            objPar={} 
            arrPar=[]
            
            this.getOtNizOne(dCont,"parent",arrPar);

            objPar1=this.creatGlaf(this.par.koren);
            var aa=[]
            
            for (var i = 0; i < arrPar.length; i++) {
                if(objPar[arrPar[i].uuid]){  
                    this.getGlafArr(objPar1,arrPar[i],aa)
                    break
                }                
            }           

            let rr=[]
            for (var i = aa.length - 1; i >= 0; i--) {                
                rr.push(aa[i].par.type,aa[i].name)
            }
           

          
            return rr   
        }







        this.getGlafArr=function(o, op, arr){
            
            if(o.obj.uuid==op.uuid){               
                return true
            }
            let a=[]
            let rez=false
            for (var i = 0; i < o.arr.length; i++) {
                if(this.getGlafArr(o.arr[i],op,arr)==true){                    
                    arr.push(o.arr[i]);
                    return true
                }
            }


            return rez
        }


        var sahw=0
        this.creatGlaf=function(o, par, name){
           
            
            if(o.type==undefined)return
            if( typeof o.type !='string')return                 
            if( typeof o.type =='object')return     
            if(o.type=="DCont")return
            if(o.type=="Object3D")return  
            
            if(o.type=="DCM")return 

            let ss= o.type[0];
            let ss1= ss.toLowerCase()
            if(o.type[0]==o.type[0].toLowerCase()){
                
                return 
            } 



            if(o.uuid==undefined){                
                o.uuid=sahw+"_"+Math.random()  
                sahw++
            }
            

            let r={
                obj:o,                
                par:par,
                arr:[],
                name:name
            }    

            if(objPar[o.uuid]!=undefined)return
            objPar[o.uuid]=o.type//typeof o.type//o.type    

            for(var s in o){
                if( typeof o[s]=='object' ){
                    if(!o[s])continue
                    if(o[s].length){
                        if(o[s][0]){
                         
                            for (var i = 0; i < o[s].length; i++) {
                                let od=this.creatGlaf(o[s][i],o,s+":array:"+i)
                                if(od){
                                    r.arr.push(od);
                                }
                            }

                            continue
                        }else{
                            continue
                        }
                    }    

                    let od=this.creatGlaf(o[s],o,s)
                    if(od){
                        r.arr.push(od);
                    }
                }
            }    

            return r
        }






        this.poisk3d=function(dCont){
            if(!dCont)return []
            let r=[];
            objPar={} 
            arrPar=[]
            
            this.getOtNizOne(dCont,"parent",arrPar);

            objPar1=this.creatGlaf33(this.par.koren);
            var aa=[];
               
            for (var i = 0; i < arrPar.length; i++) {               
                if(objPar[arrPar[i].uuid]){                        
                    this.getGlafArr33(objPar1,arrPar[i],aa)
                    break
                }                
            }           

            let rr=[]
            for (var i = aa.length - 1; i >= 0; i--) {                
                rr.push(aa[i].par.type,aa[i].name)
            }
           

          
            return rr   
        }


        this.creatGlaf33=function(o, par, name,saa){
            if(saa==undefined)saa=0
            
            if(o.type==undefined)return
            if( typeof o.type !='string')return                 
            if( typeof o.type =='object')return     
            if(o.type=="DCont")return
            //if(o.type=="Object3D")return  
            
            if(o.type=="DCM")return 

            let ss= o.type[0];
            let ss1= ss.toLowerCase()
            if(o.type[0]==o.type[0].toLowerCase()){
                
                return 
            } 



            if(o.uuid==undefined){                
                o.uuid=sahw+"_"+Math.random()  
                sahw++
            }
            

            let r={
                obj:o,                
                par:par,
                arr:[],
                name:name
            }    



            if(objPar[o.uuid]!=undefined)return
            objPar[o.uuid]=o.type//typeof o.type//o.type    

            for(var s in o){
                if( typeof o[s]=='object' ){
                    if(!o[s])continue

                    if(o.type!=="Object3D"){
                        if(o[s].type=="Object3D"){
                            o[s].xuy=o;
                        }
                    }    

  
                    if(o[s].length){
                        if(o[s][0]){
                         
                            for (var i = 0; i < o[s].length; i++) {
                                let od=this.creatGlaf33(o[s][i],o,s+":array:"+i)
                                if(od){
                                    r.arr.push(od);
                                }
                            }

                            continue
                        }else{
                            continue
                        }
                    }  /**/  

                    /**/
                let od=this.creatGlaf33(o[s],o,s,saa+1)
                    if(od){
                        r.arr.push(od);
                    }
                }
            }    

            return r
        }

         this.getGlafArr33=function(o, op, arr){
            
            if(o.obj.uuid==op.uuid){               
                return true
            }
            let a=[]
            let rez=false

            let app=[]


            for (var i = 0; i < o.arr.length; i++) {
                
                if(this.getGlafArr33(o.arr[i],op,arr)==true){

                    if(o.arr[i].obj.xuy){
                        o.arr[i].name=o.arr[i].obj.xuy.type
                    }
                    
                    
                    arr.push(o.arr[i])
                    return true                     
                }

                
            }
           

            return rez
        }






        this.getOtNizOne=function(o,n,a){            
            a.push(o)
            if(o[n]!=undefined){                
                this.getOtNizOne(o[n],n,a)
            }
        }
    }
}


