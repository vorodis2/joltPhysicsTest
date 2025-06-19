

export class DGarmoshka extends DCont{
    constructor(dCont, _x, _y, _fun) {
        super();
        var self=this
        this.type="DGarmoshka";
        this.uuid=dcmParam.generateRendom(2) 
        this.infoThis=`
            var dGarmoshka = new DGarmoshka(this.dCont,0,0,function(){});  
            .add("name") //добавить экземпляр       
            .getObj .setObj Сохронение размеров и выключашек 
        `

        if(dCont!=undefined)if(dCont.add!=undefined)dCont.add(this);         
        this.x=_x||0; 
        this.y=_y||0;
        this.fun=_fun
      
        this.array=[];
        this.arrayCheh=[]
        this._width=200;
        this._height=200; 
        this.heightContent=200
        this.boolStartOpen=true

        this._fontSizeLitte=dcmParam.fontSizeLitte

        this._bPanel=true;              
        this._otstup=dcmParam._otstup;
        this._wh=dcmParam.wh

        this._color=dcmParam._color1;
        this._colorB=dcmParam.compToHexArray(dcmParam.hexDec(this._color), -30);;

        this.alphaAct=0.2;

        var lb=false;
        this.panel=undefined
        this.dC=new DCont(this)
        this.init=function (){
            if(lb)return
            lb=true;            
            this.panel=new DPanel(this.dC);
            this.dCont=new DCont(this.dC);  

            this.dClip = new DClip(this.dCont, 0, this._otstup, function() {               
                self.drahCont();  
            })
            this.dClip.heightContent = this.heightContent;
            this.dClip.time = 100;
            this.dClip.width= this._width;
            this.dClip.height= this._height-this._otstup*2;
            this.dClip.fun_drahYY = function(v) {
                if(self.fun)self.fun("drah")
                          
            }
            this.dClip.sbv=2
            this.content=this.dClip.content

            this.drag();
        }

        this.sob=function(){ 
            this.dragWW()
            self.drag()
            if(self.fun)self.fun("drah")

        } 

        this.drahCont=function(){ 

        }

        this.add=function(text){ 
            let t=text||"xz"
            
            let dWindow=new DWindowMy(this.content, 0,0,t,this.sob)

            dWindow.fontSize=this._fontSizeLitte//dcmParam.fontSizeLitte;
            dWindow.wh= this._wh// dcmParam.fontSizeLitte+4;  

            dWindow.dragBool=false;
            dWindow.minimize=this.boolStartOpen;
            dWindow.color=dcmParam.color1


            dWindow.idArr=this.array.length;
            this.array.push(dWindow);
            this.drag();
            return dWindow;
        }



        




        this.drag=function(){
            this.dClip.width= this._width;
            this.dClip.height= this._height-this._otstup*2;
            this.panel.width=this._width;
            this.panel.height=this._height;
            let yy=0//this._otstup
            for (var i = 0; i < this.array.length; i++) {
                this.array[i].width=this._width - this._otstup*2
                this.array[i].x = this._otstup;
                this.array[i].y = yy;
                if(!this.array[i].minimize){
                    yy+=this.array[i].height
                }else{
                    yy+=this._wh
                }
                
            }
            this.heightContent = yy;
            this.dClip.heightContent = yy;

            /*this.array.length=0;
            for (var i = 0; i < this.arrayCheh.length; i++) {
                if(this.arrayCheh[i].active==true){
                    this.array.push(this.arrayCheh[i])
                }
            }
            



            this.panel.width=this._width;
            this.panel.height=this._height;
            if(this.array.length==0)return
            
            if(this._bVrtikal == false)this.dragW(dShtor);
            else this.dragH(dShtor);*/
        }




        this.getObj=function(){
            var o={};  
            o.dCValue=  this.dClip.value;
            o.array=[]
            for (var i = 0; i < this.array.length; i++) {
                o.array[i]={
                    minimize:this.array[i].minimize

                }
            }

            return o
        }
        this.setObj=function(o){
            if(o.dCValue) this.dClip.value=o.dCValue;
            for (var i = 0; i < o.array.length; i++) {
                if(this.array[i])this.array[i].minimize= o.array[i].minimize
            }
           
        }

       
        this.init()
    } 

    set width(value) { 
        if(this._width!=value){ 
            this._width=value;            
            this.drag();
            
        }
    }   
    get width() { return  this._width} 


    set height(value) { 
        if(this._height!=value){ 
            this._height=value;            
            this.drag();
            
        }
    }   
    get height() { return  this._height} 







    set otstup(value) { 
        if(this._otstup!=value){ 
            this._otstup=value;
            for (var i = 0; i < this.arrayCheh.length; i++) {
                this.arrayCheh[i].otstup=this._otstup;
            }  
            this.dClip.y= this._otstup   
            this.drag();
        }
    }   
    get otstup() { return  this._otstup} 


    set color(value) { 
        if(this._color!=value){ 
            this._color=value;
            this._colorB=dcmParam.compToHexArray(dcmParam.hexDec(this._color), -30);;
            this.panel.color=this._color;
            for (var i = 0; i < this.arrayCheh.length; i++) {
                this.arrayCheh[i].color=this._color;
            }      
            this.drag();
        }
    }   
    get color() { return  this._color} 


            
}

export class DWindowMy extends DWindow{
    constructor(dCont, _x, _y, t,_fun) {
        super(dCont, _x, _y, t,_fun);
        var self=this


        this.dragWW=function(){
            this.button.label.width=1333
        }

    }

    set width(value) {
        if (this._width != value) {
            this._width = value;
            this.panel.width = value;
            this.button.width = value;
            this.button.label.width=1333
            this.buttonScale.x = value - this._wh / 2;
            if(this.dragWW)this.dragWW()
            this.dragD();
        }
    }
    get width() {
        return this._width;
    }
}












