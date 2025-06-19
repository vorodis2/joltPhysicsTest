

export class DGallPlus  {
    constructor(par,fun) {        
        this.type="DGallPlus";
        var self=this;
        this.par=par;
        this._index = -1

        this.panel

        let point={x:0, y:0}
        let point1={x:0, y:0}
        let point2={x:0, y:0}
        let dist=0;
        let dist1=0; 

        var ii, jj,jjj, ww, hh, bat, sahLoad, wM, hM, sliderOtstup;
        var rect;
        this.getIn=function(b){
            let r=0;
            if(this.par.array.length==0){
                r=0;
            }






            dist1=999999999999
            rect = this.par.div.getBoundingClientRect();
            point.x=dcmParam.globXY.x-rect.x;
            point.y=dcmParam.globXY.y-rect.y; 

            if(b){
                if(point.x<0)return -1
                if(point.y<0)return -1                 
                if(point.x>this.par._width)return -1
                if(point.y>this.par._height)return -1                  
            }



        

            ii = 0;
            jj = 0;
            sliderOtstup = this.otstup1 + this.otstup * 2;
            ww = 1;
            if (this.par._kolII > this.par.array.length)ww = this.par.array.length * (this.par._widthPic + this.par._otstup) + this.par._otstup;
            hh = this.par._heightPic + this.par._otstup * 2;
            for (var i = 0; i < this.par.array.length; i++) {
                

                point1.x = ii * (this.par._widthPic + this.par._otstup) + this.par._otstup+this.par._widthPic/2;
                point1.y = jj * (this.par._heightPic + this.par._otstup) + this.par._otstup+this.par._heightPic/2;                
                
                dist=this.getDistance(point1, point);  
                if(dist<dist1){
                    dist1=dist
                    r=i
                }
                if (this.par.array[i].x + this.par._widthPic + this.par._otstup > ww)ww = this.par.array[i].x + this.par._widthPic + this.par._otstup;
                hh = (jj + 1) * (this.par._heightPic + this.par._otstup) + this.par._otstup;
                ii++;
                if (ii >= this.par._kolII) {
                    ii = 0;
                    jj++;
                }

                point2.x = ii * (this.par._widthPic + this.par._otstup) + this.par._otstup+this.par._widthPic/2;
                point2.y = jj * (this.par._heightPic + this.par._otstup) + this.par._otstup+this.par._heightPic/2;    
            }


            dist=this.getDistance(point2, point);  
            if(dist<dist1){
                dist1=dist
                r=this.par.array.length
            }



            return r
        }


        this.dragPoint = function (i, b) {   
            jjj=i/this.par._kolII
            jj=Math.floor(jjj)
            ii=i-jj*this.par._kolII  
            point1.x = ii * (this.par._widthPic + this.par._otstup) + this.par._otstup;
            point1.y = jj * (this.par._heightPic + this.par._otstup) + this.par._otstup;  
            if(b){
                point1.x +=this.par._widthPic/2;
                point1.y += this.par._heightPic/2;  
            }            
        }      

        this.getDistance = function (p1, p2) {            
            return Math.sqrt(Math.pow((p1.x - p2.x), 2) + Math.pow((p1.y - p2.y), 2));
        };


        this.dragIndex=function( ){
            if(this._index==-1){
                if(this.panel.parent!==undefined){
                    this.par.remove(this.panel);
                }
            }else{
                if(this.panel==undefined){
                    this.panel=new DPanel()
                }

                if(this.panel.parent==undefined){
                    this.par.add(this.panel);
                }

                this.panel.width=this.par._widthPic
                this.panel.height=this.par._heightPic
                this.panel.color=dcmParam.getColor(this.par._color1)
                //this.panel.alpha=0.5
                this.dragPoint(this._index, false);

                this.panel.x=point1.x;
                this.panel.y=point1.y;

            }

            this.par.draw()
        }
        
    }


    set index(value) {
        if (this._index != value) {
            this._index = value;  
            this.dragIndex()                       
        }
    }
    get index() {
        return this._index;
    }

}




export class DragGallery extends DGallery {
    constructor(dCont, _x, _y, _fun, par) {  
        super(dCont, _x, _y, _fun);
        this.par=par
       

        this._index=-1;
        this.par=par
        var self=this

        this.sLink="src"//tovar.icon"
        this.sText="text";

        this.dGallPlus=new DGallPlus(this)


        this.createZamen=function(){ 
            var r=new DGOBox(this.content, 0, 0, this.downBtn,  this);                 
            return r;
        }

        this.rectDinam={x:0,y:0,w:0,h:0}
        this.zScrol=0
        var ii, jj,idd, ww, hh, bat, sahLoad, wM, hM, sliderOtstup;
        // перерисовка галереи///////////////////////////////////
        this.draw = function () {
            if (this.preDraw) this.preDraw();

            this.rectDinam.x=this.rectDinam.y=this.otstup
            this.rectDinam.w=this.rectDinam.h=this.otstup
            
            ii = 0;
            jj = 0;
            sliderOtstup = this.otstup1 + this.otstup * 2;
            ww = 1;
            if (this._kolII > this.array.length)ww = this.array.length * (this._widthPic + this._otstup) + this._otstup;
            hh = this._heightPic + this._otstup * 2;


            for (var i = 0; i < this.array.length; i++) {

                if(this.dGallPlus.index == i){
             
                    ii++;
                    if (ii >= this._kolII) {
                        ii = 0;
                        jj++;
                    }
                }
                

                this.array[i].x = ii * (this._widthPic + this._otstup) + this._otstup;
                this.array[i].y = jj * (this._heightPic + this._otstup) + this._otstup;
              
                if(this.rectDinam.w<this.array[i].x+this._widthPic){
                    this.rectDinam.w=this.array[i].x+this._widthPic
                }
                 if(this.rectDinam.h<this.array[i].y+this._widthPic){
                    this.rectDinam.h=this.array[i].y+this._heightPic
                }


                if (this.array[i].x + this._widthPic + this._otstup > ww)ww = this.array[i].x + this._widthPic + this._otstup;
                hh = (jj + 1) * (this._heightPic + this._otstup) + this._otstup;
                ii++;
                if (ii >= this._kolII) {
                    ii = 0;
                    jj++;
                }

                

            }
            this.bh=false;
            this.bv=false;

            if (ww > this._width) this.bh = true;
            
            this.scrollBarH.visible = this.bh


            if (hh > this._height) this.bv = true;
            
            this.scrollBarV.visible = this.bv


            this.scrollBarH.widthContent = ww;
            this.scrollBarV.heightContent = hh;


            if (ww > this._width) {
                wM = this._width;
            } else {
                wM = ww;
            }
            if (hh > this._height) {
                hM = this._height;
            } else {
                hM = hh;
            }

            this.ww = ww;
            this.wM = wM;
            this.hh = hh;
            this.hM = hM;
            // this.scrollBarH     внизу
            // this.scrollBarV     сбоку

            //  this._boolPositScrol = true;//выворот положений
            // this._boolPositOtctup= true;//внутурь/наружу

            if (this._boolPositScrol) {
                if (this._boolPositOtctup) {
                    this.scrollBarH.y = hM - this.otstup - this._otstup1+this.zScrol;
                    this.scrollBarV.x = wM - this.otstup - this._otstup1+this.zScrol;
                } else {
                    this.scrollBarH.y = hM + this.otstup+this.zScrol;
                    this.scrollBarV.x = wM + this.otstup+this.zScrol;
                }


            } else {
                if (this._boolPositOtctup) {
                    this.scrollBarH.y = this.otstup+this.zScrol;
                    this.scrollBarV.x = this.otstup+this.zScrol;
                } else {
                    this.scrollBarH.y = -this.otstup - this._otstup1+this.zScrol;
                    this.scrollBarV.x = -this.otstup - this._otstup1+this.zScrol;
                }
            }

            if(this.panel!=undefined){          
                this.panel.width=this._width;
                this.panel.height=this._height;

                this.panel1.width=this._width;
                this.panel1.height=this._height;
            }

            
            this.rectDinam.h+=this.otstup

            this.dragIE()
            if (this.postDraw) this.postDraw();
        };
    } 
}
export class DGOBox extends DBox {
    constructor(_cont, _x, _y, _fun,par) {  
        super(_cont, _x, _y, _fun);
        this.par=par

        var self=this
        var otstup=2

        this.objectKey = undefined;
        this.object = undefined;

        this.label.fontSize=dcmParam.fontSize
        this.label.width=333

        this.draw = function () {
            
            this.image.width=this.height- this._otstup * 2;
            this.image.height=this.height - this._otstup * 2;

            this.image.x = this._otstup
            this.image.y = this._otstup

            this.label.x = this.image.width + this._otstup * 2;
            this.label.y = this.height-this.label.fontSize-this._otstup
            if (this.postDraw) this.postDraw();
        };



        this.startLoad = function (_obj) {        
            this.object = _obj;
           
            let r=this.setII(this.par.sLink, _obj)
            
            this.image.link = r;
            r=this.setII(this.par.sText, _obj)            
            this.label.text=r
            this.label.visible = true;

            self.funLoad();
        };

        ////////////////////////////
        var b,link;
        // Добавление картинки и текста, пошаговая загрузка.
        this.startLoad = function (_obj) { 
            this.object = _obj;
            let r=this.setII(this.par.sLink, _obj)           
            this.image.link = r;
            r=this.setII(this.par.sText, _obj)            
            this.label.text=r
            this.label.visible = true;
            self.funLoad();
            this.draw();
        };
        var ass
        var dooo
        this.setII = function (s, o) { 
            ass=s.split('.');
            let r=null;
            dooo=o
            for (var i = 0; i < ass.length; i++) {
                if(dooo[ass[i]]){
                    dooo=dooo[ass[i]]
                }            
            }
            return dooo
        }   
        ////////////////////////////////



        
        

        if(dcmParam.mobile==false){
            this.image.image.removeEventListener("mousedown", this.mouseDown)
            this.panel.div.removeEventListener("mousedown", this.mouseDown)
        }else{
            this.image.image.removeEventListener("touchstart", this.mouseDown)
            this.panel.div.removeEventListener("touchstart", this.mouseDown)
        } 
        this.mouseDown = function (e) {   
            if (self.fun) self.fun();
        };



        if(dcmParam.mobile==false){
            this.image.image.addEventListener("mousedown", this.mouseDown)
            this.panel.div.addEventListener("mousedown", this.mouseDown)
        }else{
            this.image.image.addEventListener("touchstart", this.mouseDown)
            this.panel.div.addEventListener("touchstart", this.mouseDown)
        }
    }
}















/*
import { MGBProducts } from './MGBProducts.js';

export class MGBlaxz  {
  	constructor(param,fun) {  		
        this.type="MGBlaxz";
        var self=this;
       
        this.fun=fun

        this._index = -1

        this.param = param;     
        this._active=true;

        this.height=100
        this.width=this.param.sizeBase2-this.param.otstup
        this.heightXZ=this.param.otstup*2+this.param.wh
        this.dCont=new DCont();


        this.dCont.visible=this._active;    

        this.dCont.x=this.param.otstup
        this.dCont.y=this.param.otstup*4+this.param.wh
       




        this.panel=undefined

        this.init=function(){  
            if(this.panel!=undefined){
                return;
            }

            this.panel=new DPanel(this.dCont)
            this.panel.width=this.width-4;
                
            this.labelError=new DLabel(this.panel,0,0,"Ошибка пирогов!")
            this.labelError.visible=false;

            this.mgbProducts=new MGBProducts(this,function(s,p,p1){
                
                if(s=="dragp20"){
                    
                    self.fun(s)
                    self.dragStart();
                }
            });
        }


        this.dragp20=function(){

        }



        this.array=[]
        this.arrayCesh=[]
        this.sob=function(s,p){
            if(s=="+"){
                if(this.objectAAAA==null){

                }else{
                    
                    if(this.objectAAAA.tovar)if(this.objectAAAA.tovar.obj)if(this.objectAAAA.tovar.obj.obj){
                        delete this.objectAAAA.tovar.obj.obj
                    }
          


                    var s=JSON.stringify(this.objectAAAA);
                    var o=JSON.parse(s);
                    self.obj.array.splice(this.idReal,0,o);
                    self.dragStart();
                 
                    self.fun("dragp20")
                    var d=self._index
                    self._index=-1
                    self.index=d
                }
                
               
                return
            }

            if(s=="-"){
  

                if(this.idReal!=-1)if(self.obj.array[this.idReal]!=undefined){
                   
                    self.obj.array.splice(this.idReal,1)
                    self.dragStart();
                    self.fun("dragp20")

                    var d=self._index
                    self._index=-1
                    self.index=d

                } 
                return
            }

            if(s=="gTrue"||s=="gFalse"){                
                if(this.idReal!=-1)if(self.obj.array[this.idReal]!=undefined){                   
                    self.obj.array.splice(this.idReal,1)
                    self.dragStart();
                } 
            }
      
            if(s=="index"){
                self.index=this.idArrArr
            }
        }   

        
        this.clear=function(){ 
            this.array.length=0
            for (var i = 0; i < this.arrayCesh.length; i++) {
                this.arrayCesh[i].clear();
            }
        }

        //БЕРЕМ новый блок
        this.getBlok=function(id, key){ 

            for (var i = 0; i < this.arrayCesh.length; i++) {
                if(this.arrayCesh[i].id==id){
                    if(this.arrayCesh[i].active==false){                     
                        return this.arrayCesh[i];
                    }
                }                
            }
    


            this.arrayCesh.push(new MGBBlok(this,this.panel,this.sob))
            this.arrayCesh[this.arrayCesh.length-1].idArr=this.arrayCesh.length-1
            this.arrayCesh[this.arrayCesh.length-1].idSet(id, key);


      
            return this.arrayCesh[this.arrayCesh.length-1]
        }





        this.dragModel=function(){
            if(!this.object|| !this.obj){
                this.height=100
                this.labelError.visible=true;
                return 
            }
            this.labelError.visible=false;



            

            this.dragStart();
         

        }

        var arrDin=[]
        var blok
        var ii, jj
        this.dragStart=function(){

            this.clear()
            trace("#^",this.object.array, this.obj.array)
            
            jj=0;
            for (var i = 0; i < this.object.array.length; i++) {
                arrDin.length=0;                

                for (var j = jj; j < this.obj.array.length; j++) {
                    // group ID                 // ветка товаров group  
                    if(this.object.array[i].id==this.obj.array[j].id){
                        arrDin.push(this.object.array[i], this.obj.array[j], j) 
                        jj=j+1
                    }else{                   
                        j=999999999999999999;
                    }
                }         

                if(arrDin.length==0){                    
                    blok=this.getBlok(this.object.array[i].id, this.object.array[i].key);
                    blok.setObj(this.object.array[i], this.array.length, null, -1,0);
                    blok.active=true;
                    blok.idArrArr=this.array.length
                    this.array.push(blok);
                    
                }else{
                    for (var j = 0; j < arrDin.length; j+=3) {
                        
                        blok=this.getBlok(arrDin[j].id, arrDin[j].key);
                        blok.setObj(arrDin[j], this.array.length, arrDin[j+1], arrDin[j+2],arrDin.length/3);
                        blok.active=true;
                        blok.idArrArr=this.array.length
                        this.array.push(blok);

                        if(arrDin.length==3){
                           // blok.bool1Act=true
                        }else{                          
                            if(j==arrDin.length-3){                              
                                blok.bool1Act=false;
                            }else{                              
                                blok.bool1Act=true;
                            }
                        }
                    } 
                }                
            }
            this.dragStart1();
        }


        


        this.dragStart1=function(){            
            for (var i = 0; i < this.array.length; i++) {
                this.array[i].dCont.y=this.param.otstup+i*(this.param.otstup+this.heightXZ)
            }
            this.panel.height=this.array.length*(this.param.otstup+this.heightXZ)+this.param.otstup
            this.height=this.panel.height

        }


        this.bl
        this.creatIndex=function(oNa){
            
            this.bl=this.array[self._index];

            var sig=this.array[this.index].object
            var ooo={}
            ooo.id=sig.id;
            ooo.key=sig.name;
            ooo.name=sig.name;

           
          
            var key="null"
            var id =-1

            
            key=oNa.key;
            id=oNa.id
           
            ooo.tovar={
                id:id,
                key:key,               
                active:true,
                price:110,
                blok:this.bl.getBlok()
            } 

   

            var ss=this.getPisss(this.bl);
        
            self.obj.array.splice(ss,0,ooo)
           

            this.korColorIndex(oNa)
        } 

        this.getPisss=function(bl){
            var ss=0;
            for (var i = 0; i < this.array.length; i++) {
                if(bl.uuid==this.array[i].uuid){
                    break
                }else{
                    if(this.array[i].objectAAAA!=null)ss+=1;
                }
            }
            return ss
        } 

        var aaa=[] 
        this.korColorIndex=function(oNa){
     
            var uuidD=this.bl.uuid;
            aaa.length=0
            self.dragStart();

            if(this.bl.boolColor==true){
                for (var i = this.array.length-1; i >=0; i--) {
                //for (var i = 0; i < this.array.length; i++) {    
                    if(this.array[i].boolColor==true){                    
                        if(this.array[i].uuid!=uuidD){
                            if(this.array[i].color==this.bl.color){
                                if(this.array[i].idOt!=this.bl.idOt){
                                    if(this.array[i].objectAAAA!=null){
                                        var ss=this.getPisss(this.array[i])                                        
                                        aaa.push(ss)
                                    
                                    }
                                    
                                }
                            }
                            
                        }
                    }
                }
            } 
            if(aaa.length!=0){
                for (var i = 0; i < aaa.length; i++) {
                    self.obj.array.splice(aaa[i],1)
                }
                self.dragStart();
            }        
            
            self.dragStart();
          

            let ii=self._index;
            self._index=-1;
            self.index=ii;
        }





        this.object=undefined
        this.obj=undefined
        var oo
        this.setGateau=function(o){
            this.object=o;
            trace(">>>>",o)
            //oo=mhbd.getArKey(o.key,o.id);
            oo=mhbd.getKeyId(o.key,o.id);
            trace(">oo>>",oo)
            if(oo!=null){                
                this.object.productsObj = oo.productsObj;
            }

            this.dragModel();
        }


        this.setGat=function(o){
            this.obj=o;
            if(  o.array instanceof Array){
       
            }else{
                o.array=[]
             
            }
           
            this.dragModel()
        }


        this.sobMenu=function(s,p,e){
            
        }

  		this.sizeWindow = function(w,h,s){ 
      				
  		}
        this.init(); 
  	}


    set active(value) {
        if (this._active != value) {
            this._active = value;
            this.dCont.visible=this._active;             
        }
    }
    get active() {
        return this._active;
    }

    set index(value) {
        if (this._index != value) {
            this._index = value;
            for (var i = 0; i < this.array.length; i++) {
                if(i==this._index){
                    this.array[i].avtiVisi=true

                    this.mgbProducts.setGroup(this.array[i].object)

                    this.mgbProducts.setTowar(this.array[i].objectAAAA)
                    
                } else{
                    this.array[i].avtiVisi=false
                }   
            }            
        }
    }
    get index() {
        return this._index;
    }

}

export class MGBBlok  {
    constructor(par,cont,fun) {        
        this.type="MGBBlok";
        var self=this;
        this.par=par
        this.fun=fun
        this._active=true;
        this._avtiVisi=false;

        this.uuid=calc.generateRendom(2);

        this.param=par.param

        this._bool=false;
        this._boolAct=false;

        this._bool1=false;
        this._bool1Act=false;

        this._height=this.param.wh+this.param.otstup*2;

        this.dCont=new DCont(cont);
        this.dCont.x=this.param.otstup

        this.panel=new DPanel(this.dCont,0,0)
        this.panel.width=this.par.width-this.param.otstup*3;
        this.panel.height=this._height;

        this.button=new DButton(this.panel,0,0,"",function(){           
           self.fun("index");          
        })
        this.button.width=this.panel.width
        this.button.height=this.panel.height
        this.button.alpha=0.01
        this.button.color="#000000";



        this.image=new DImage(this.panel, this.param.otstup, this.param.otstup)
        this.image.width=50;
        this.image.height=50;
        this.label=new DLabel(this.panel, 60, this.param.otstup)

        this.image.activMouse=false
        this.label.activMouse=false
        this.label.fontSize=10;
        this.label.width=this.panel.width- this.label.x

        this.id=-1 
        this.key="null";
        this.object; 

      

        
        this.idSet = function(id,key){

            this.id=id;
            this.key=key;
            mhbd.getKeyId(key,id,function(e){
                self.object = e; 
                self.image.link= e.icon;
                self.label.text=self.idArr+" : "+self.id+" : "+e.name


                if(self.param.debug==false){
                    languages.setCompObj(self.label, e, "text");
                }else{
                    var bb=new DButton(self.panel,0,0,""+self.id,function(){           
                        var s=self.par.param.serverNa+"adminAll.html?key=group&type=creat&id="+self.object.id;
                        if(self.par.param.localServer){
                            s=self.par.param.localServer+"?key=group&type=creat&id="+self.object.id;
                        }
                        
                        window.open(s);     
                    })
                    bb.width=20
                    bb.height=10
                    bb.fontSize=8
                  
                }

            });
        }

        this.dCBool=new DCont(this.dCont);







        ///Возможность спрятать товар////////////////////
        this.dCBool=new DCont(this.dCont);
        this.dCBool.visible=this._bool;

        this.batBool0=new DButton(this.dCBool,this.image.x,this.image.y+this.image.height/2,"",function(){
           // self.boolA=true;
           self.fun("gTrue");
           //self.boolAct=true
        })
        this.batBool0.width=this.batBool0.height=this.image.height/2
        this.batBool0.boolFond=false
        mhbd.getKeyId("group1",21,function(e){
            self.batBool0.link=e.icon
        })

        this.batBool1=new DButton(this.dCBool,this.image.x,this.image.y+this.image.height/2,"",function(){
           // self.boolA=true;
           self.fun("gFalse");
          // self.boolAct=false
        })
        this.batBool1.width=this.batBool1.height=this.image.height/2
        this.batBool1.boolFond=false
        mhbd.getKeyId("group1",20,function(e){
            self.batBool1.link=e.icon;
        })


        this.batBool1.visible=this._boolAct
        this.batBool0.visible=!this._boolAct

        ///////////////////////////////////////


        ///Возможность добовлять толщину////////////////////
        this.dCBool1=new DCont(this.dCont);
        this.dCBool1.visible=true;

        this.batBool10=new DButton(this.dCBool1,this.image.x+this.image.height+6+25,32,"",function(){
            //self.boolA=true;
            self.fun("-");
        })
        this.batBool10.width=this.batBool10.height=this.image.height/2
   
        mhbd.getKeyId("group1",23,function(e){
            self.batBool10.link=e.icon;
        })


        ///+++
        this.batBool11=new DButton(this.dCBool1,this.image.x+this.image.height+2,32,"",function(){
            //self.boolA=true;
            self.fun("+")
        })
        this.batBool11.width=this.batBool11.height=this.image.height/2
  

        mhbd.getKeyId("group1",22,function(e){
            self.batBool11.link=e.icon
        })

        
        this.batBool10.visible=this._bool
        this.batBool11.visible=this._bool1

        ///////////////






        this.redrag=function(){


        }

        this.idSpis
        var boolNum=parseInt( "1000000",2);//Обезательный
        var boolNum1=parseInt("0100000",2);//Можем добавить 
        var boolNum2=parseInt("0010000",2);//только один в цвете
        var boolNum3=parseInt("0000001",2);//Сохроняем в товаре


        var boolNum4=parseInt("0001000",2);//Не можем сбросить!!!!!


        this.b4=false


        this.boolColor=false
        this.idOt=0
        this.color
        this.objectAAAA=null
        this.idReal=-1


        this.setObj=function(o, idSpis,aaa, idReal,kol){   
  
            this.panel.color=o.color;
            this.color=o.color;
            this.idOt=o.id



            this.idReal=idReal;
            this.objectAAAA=aaa;
            this.idSpis=idSpis;
            var sBool=o.strB;
            var nBool=parseInt(o.strB,2);

            var bbb=false
            if((nBool&boolNum)!==0)bbb=true;
          
            var bbb1=false
            if((nBool&boolNum1)!==0)bbb1=true;

            this.boolColor=false
            if((nBool&boolNum2)!==0)this.boolColor=true;

            this.b=false
            if((nBool&boolNum3)!==0)this.b=true;
          
            

            this.b4=false;
            if((nBool&boolNum4)!==0)this.b4=true;




            this.s=o.arrText[3]
            var bp2=false
            var b=false;
            var b1=false;
            if(idReal!==-1){//Да он есть в наличии
                if(bbb1){//Имеет возможность добовлять
                    b=true
                }

                if(bbb){//обяз
                    if(kol>=2){
                        b1=true
                        

                    }
                }else{
                    b1=true
                }

                if(kol>=2){
                    bp2=true
                }
            }
            trace("&&bp2=====",bp2)
            if(this.b4==true)b1=false


            //trace("&&",b1,idReal,bbb,kol,bbb1)    
            if(!b1 &&idReal!==-1){//Да он есть в наличии

                if(bbb1){//Имеет возможность добовлять
                    trace("&&&&")
                }
            }    
         


            this.bool=b;
            this.bool1=b1;
        }


        this.b=true;
        this.s="";

        this.getBlok=function(){
            return {b:this.b,s:this.s}
        }   



        this.clear=function(){
            this.active=false;
        }

    }

    set active(value) {
        if (this._active != value) {
            this._active = value;
            this.dCont.visible=this._active; 
             
        }
    }
    get active() {
        return this._active;
    }

    set avtiVisi(value) {
        if (this._avtiVisi != value) {
            this._avtiVisi = value;         
            this.button.alpha=this._avtiVisi?0.2:0.01 
        }
    }
    get avtiVisi() {
        return this._avtiVisi;
    }

  


    set bool1(value) {
        if (this._bool1 != value) {
            this._bool1 = value;
            this.batBool10.visible=this._bool1; 
             
        }
    }
    get bool1() {
        return this._bool1;
    }


    set bool(value) {
        if (this._bool != value) {
            this._bool = value;           
            this.batBool11.visible =this._bool; 
        }
    }
    get bool() {
        return this._bool;
    }

   
}

*/