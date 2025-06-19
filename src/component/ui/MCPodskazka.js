/***
Код свободный, и может быть использован в разных проектах как разработчиком так и другими программистами. Если юзаете диписуйте себя в шапку и мои контакты не удоляйте)))
Разработчик и владелец данного кода Сидоров Евгений vorodis2.
The code is free and can be used in different projects by both the developer and other programmers. If you use write yourself in a hat and do not delete my contacts)))
Developer and owner of this code Sidorov Evgeniy vorodis2.
contacts:
site: vorodis2
mail: vorodis2@gmail.com
skype: vorodis2
phone: +380951026557 
website: vorodis2.com
*/







export class MCPodskazka  {
  	constructor(dCont,fun) {  		
  		this.type="MCPodskazka";
  		var self=this;       
        this.fun=fun;

        this.key="ru";
        this.time=700
        this.timeTween=500

        this.sahSim=0


        this.dCont=new DCont(dCont);
        this.dC=new DCont();
        this.ss="white-space: pre;" 
        this.otstup = dcmParam._otstup
                                


        

        this.panel=new DPanel(this.dC) 



        

        // this.panel.alpha = 0.9
        this.panel.boolLine = false;
        this.panel.color = '#f7f7f7';




        this.panel2=new DPanel() 
        this.panel2.width=this.panel2.height=0
        //this.panel2.alpha = 0.9




        self.div3=this.panel2.div
        var deg=45

        
        this.dImage=new DImage(this.panel, this.otstup,this.otstup,null,function(){            
            self.drahImage()            
        }) 
        this.dImage.visible=false

        this.label=new DLabel(this.panel, this.otstup,this.otstup,"asdfasdf")   
        // this.label.dCT.div.setAttribute('style', this.ss);
        this.label.div.setAttribute('style', this.ss);
        this.label.fontSize = dcmParam.fontSizeLitte


           






        this.tween=new TWEEN.Tween(this.dC);


        this.sobOver=function(e){           
            self.startTime(self.time, this)
            
        }

        this.sobOut=function(e){ 
            self.stop()  
        }

       /* this.getObject=function(button){  
            for (var i = this.array.length - 1; i >= 0; i--) {

            }
            return null
        }*/


        this.array=[]
        var sOver,sOut,sah
        this.setBuuton=function(button, objText, _sOver, _sOut, link, lScale){             
           
            if(button.uuid!=undefined){
                sah=-1;
                for (var i = this.array.length - 1; i >= 0; i--) {
                    if(this.array[i].uuid==button.uuid){
                        sah=i;
                        break;

                    }
                }
                if(sah!=-1){
                    this.array[sah].objText=objText
                    return
                }

            }


            if(button.uuid==undefined){
                button.uuid=this.generateRendom(2)

            }
            this.array.push(button) 
            button.xzIdArr=this.array.lenght
            button.objText=objText
            sOver=_sOver||"fun_mouseover"
            sOut=_sOut||"fun_mouseout"

            button.xzzLink=link;
            button.xzzlScale=lScale||1;

            /* button.funOver=this.sobOver;
            button.funOut=this.sobOut;
*/
            
            button[sOver]=this.sobOver;
            button[sOut]=this.sobOut;


        }


        this.twh={x:0, y:0}
        var r
        this.setText=function(text, urlPic, scalePic){ 
           /* for (var i = 0; i < text.length; i++) {
              
            }*/
           
            //text="стена \nперекрытия gdsf gfsdfs  sdf gdsg ssdf gdsgfdsgdsfgxdz df gdas gfgdfsg\n1dsgdsgdsgfdfs\n2dsgdsgdsgfdfs"
            // text="стена \nперекрытия gdsf \ngfsdfs  sdf gdsg \nssdf gdsgfdsgdsfgxdz \ndf gdas gfgdfsg\n1dsgdsgdsgfdfs\n2dsgdsgdsgfdfs"
            // r=this.getTextWidth()//text,this.ss)//,"normal 16px Montserrat white-space")//,'normal 16px Montserrat white-space: pre;');
  
            this.label.text=text;

            var nnnn =  text.split("\n")
            var m = 0;
            for (var i = 0; i < nnnn.length; i++) {
                var mn = this.getTextWidth(nnnn[i])
                if ( mn > m) m = mn
            }
            this.label.width=m
            this.dImage.visible=false;
            this.dImage.urlPic=urlPic;
            this.dImage.scalePic=scalePic;

            this.twh.x=m;
            this.twh.y=(nnnn.length*(this.label.fontSize));



            this.panel.width= this.twh.x+this.otstup*2;
            this.panel.height= this.twh.y+this.otstup*2; 
          
           


            if(urlPic!=undefined){   
                if(this.dImage.link==this.dImage.urlPic) {
                    this.drahImage()
                }            
                this.dImage.link=this.dImage.urlPic
            }
                       
        }

        this.drahImage=function(){ 
            if(this.dImage.urlPic==undefined){
                this.dImage.visible=false
            }else{
                this.dImage.width=this.dImage.picWidth*this.dImage.scalePic;
                this.dImage.height=this.dImage.picHeight*this.dImage.scalePic;
                this.dImage.visible=true
                this.dImage.y=this.twh.y+self.otstup*2;
                this.panel.height= this.dImage.y+this.dImage.height+this.otstup;

                let ww=this.twh.x+this.otstup*2
                if(ww<this.dImage.width+this.otstup*2)ww=this.dImage.width+this.otstup*2

                this.panel.width= ww//this.dImage.y+this.dImage.height+this.otstup;

                this.sizeWindow()

            }
        }




        this.generateRendom =  function (n){
            if(n==undefined)n=2;        
            let s='';
            let s1='';
            let d0;
            for (var i = 0; i < n; i++) {           
                d0=Math.random() * 0xffffffff | 0;
                s1=(d0 & 0xff).toString(16) + (d0 >> 8 & 0xff).toString(16)+ (d0 >> 16 & 0xff).toString(16)+ (d0 >> 24 & 0xff).toString(16)         
                if(s1.length<8){
                    for (var j = 0; j < 8-s1.length+1; j++) {
                        s1+="Z";
                    }
                }
                s+= s1 
                if(i!=n-1)s+="-";
            }       
            return s
        }

        // this.ss="normal 16px Montserrat white-space: pre;" 
        // this.ss="normal 16px Montserrat white-space: nowrap;" 
        // this.ss="white-space: pre;" 

        var dCt2=undefined;
        this.getTextWidth = function(_text, _font) {
            if(this.sahSim!=0){
                return this.sahSim*_text.length
            }


            let strBold = self.label.bold == true ? 'bold ' : ' normal '
            let strSize = self.label.fontSize+'px '
            let strFamily = self.label.fontFamily+''

            let text = _text || self.label.text
            let font = _font || strBold+strSize+strFamily+''
            // font+=" white-space pre;"
       

            if(dCt2==undefined)dCt2 = document.createElement("canvas")
            var canvas = dCt2// getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));    
            var context = canvas.getContext("2d");
            context.font = font;
            var metrics = context.measureText(text);

            
            return metrics.width
        }



        this.start=function(obj){ 
            this.obj = obj
            
            if(obj.objText && obj.objText[this.key]&& obj.objText[this.key]!=""){
                let link
                let scale=1
                if(obj.xzzLink)link=obj.xzzLink;
                if(obj.objText.xzzLink)link=obj.objText.xzzLink;

                if(obj.xzzlScale)scale=obj.xzzlScale;
                if(obj.objText.xzzlScale)scale=obj.objText.xzzlScale;

                this.setText(obj.objText[this.key],link,scale)
            }else{
               this.stop() 
               return; 
            } 


        
            this.dC.alpha=0;
            this.dCont.add(this.dC)
            this.tween.stop();
            this.tween.to({alpha:1},this.timeTween).start();

            this.sizeWindow()


        }

        this.stop=function(){ 
            this.sah=Math.random();
            if(this.dC.parent!=undefined)this.dC.parent.remove(this.dC);
        }    


        this.sah=0;
        this.startTime=function(t,iii){
            if(t==undefined)t=500;
            
            if(iii && iii.objText && iii.objText.xzzlTime)t=iii.objText.xzzlTime
            this.stop()
            this.sah=Math.random();
            var s=this.sah;
            
            
            setTimeout(function() {
                if(self.sah==s){ 

                    self.start(iii);
                }
            }, t);
        } 

        this.testScale = function (c, o) {
            if (c.scale) o.s *= c.scale;
            if (c.parent) {
                self.testScale(c.parent, o);
            }
        };
        this.scaleDrag = { s: 1 };


        var w,h

        var s=1
        this.sizeWindow = function(_w,_h,_s){
            if(_w){
                w=_w;
                h=_h;
                if(_s)s=_s;                
            }

            
            // this.stop();
            
            var l, r, t, b, tColor, bColor;
            if(this.obj && this.dC.parent){
           
                var basis = this.obj.div.getBoundingClientRect();
                self.div3.style.borderStyle     = 'solid'; 

                self.scaleDrag.s = 1;
                self.testScale(this.obj, self.scaleDrag);
                
                basis.y/=self.scaleDrag.s
                basis.x/=self.scaleDrag.s
               
           

                if((h/s)/2 > basis.y/s){                    
                    this.dC.y=basis.y+this.obj.height;
                    t = 0;
                    b = 8.7;
                    this.panel.y=b;
                    this.panel2.y=t;
                } else {                    
                    this.dC.y=basis.y-this.panel.height;
                    t = 8.7;
                    b = 0;
                    this.panel.y=-t;
                    this.panel2.y=this.panel.height-t;
                }

                if((w/s)/2 > basis.x){
                    this.dC.x=basis.x;
                    r=l=5
                    this.panel2.x=(this.obj.width/2-r/2)
                } else {
                    this.dC.x=basis.x-this.panel.width+this.obj.width;
                    r=l=5
                    this.panel2.x=this.panel.width-(r/2+this.obj.width/2)
                }


/*
                self.div3.style.borderColor  = '#ffffff transparent #ffffff transparent';   
                self.div3.style._borderColor = '#000000 #000000 #000000 #000000';   
                self.div3.style.borderWidth  = ''+t+'px '+l+'px '+b+'px '+r+'px';
                self.div3.style.filter       = "progid:DXImageTransform.Microsoft.Chroma(color='#000000')"; */
            }
  		}

  	}
}


