/**
* Код свободный, и может быть использован в разных проектах как разработчиком так и другими программистами. Если юзаете диписуйте себя в шапку и мои контакты не удоляйте)))
* Разработчик и владелец данного кода Сидоров Евгений vorodis2:
* The code is free and can be used in different projects by both the developer and other programmers. If you use write yourself in a hat and do not delete my contacts)))
* Developer and owner of this code Sidorov Evgeniy vorodis2
* contacts:
* site: vorodis2
* mail: vorodis2@gmail.com
* skype: vorodis2
* phone: +380951026557
*/


export function CanvasImage () {
	var self=this
	var rez1 = new THREE.Vector3(0, 0, 0);

	/** Перевод градусы в радианы.
     * @example var rad = degress * calc.DEG2RAD; */
	this.DEG2RAD = Math.PI / 180;

	/**
     * Получение угла между двумя точками радианы  -PI - 0 - PI
     * @param {Point} a - Первая точка.
     * @param {Point} b - Вторая точка.
     * @return {number} угол между точками.
     */
	this.getNaxPixAlpha = function (b64,fun) {
		let bm=new DBitmapData(2,2,null,function(){
			let x=0;
			let x1=this.width;
			let ww,hh


			let b,b1,po
			let ra	

			b=false					
			for (var i = 0; i < this.width; i++) {
				b1=false
				for (var j = 0; j < this.height; j++) {
					ra=this.getPixel(i,j)
					if(ra[3]>2){
						b1=true
						break
					}
				}
				if(!b && b1){
					b=true
					x=i;
				}
				if(b1){
					x1=i;
				}
			}
			ww=x1-x+1

			let y=0;
			let y1=this.height;

			b=false					
			for (var i = 0; i < this.height; i++) {
				b1=false
				for (var j = 0; j < this.width; j++) {
					ra=this.getPixel(j,i)
					if(ra[3]>5){
						b1=true
						break
					}
				}

				if(!b && b1){
					b=true
					y=i;
				}
				if(b1){
					y1=i;
				}
			}
			hh=y1-y+1
			let bm1=self.getRect(this,x,x1,y,y1)
			fun(bm1.getData())
		})
		bm.load(b64)
	};








	let bmr=new DBitmapData(2,2)
	this.getRect = function (bm, x,x1, y,y1) {
		let ww,hh
		ww=x1-x+1
		hh=y1-y+1
		bmr.width=ww;
		bmr.height=hh;	
		let ra
		for (var i = 0; i < ww; i++) {			
			for (var j = 0; j < hh; j++) {
				ra=bm.getPixel(x+i,y+j)				
				bmr.setPixel(i,j,ra)
			}
		}
		bmr.upDate()
		return bmr;
	}


	var canvas = document.createElement('canvas');	
    this.getIn=function(b64, _wh, fun, ot){
    	var elem = document.createElement('canvas');
        elem.height = elem.width =  _wh;
        var ctx = elem.getContext('2d', { willReadFrequently: true });

        let oot=0
        if(ot)oot=ot


        let bm = new DBitmapData(2,2,null,function(){
			this.upDate()
			
			let s=_wh/(this.width+oot*2);
			if(s>_wh/(this.height+oot*2)){
				s=_wh/(this.height+oot*2);
			}

			let ww=Math.round((this.width-oot*2)*s)
			let hh=Math.round((this.height-oot*2)*s)

			let xx=(_wh-ww)/2///+oot;
			let yy=(_wh-hh)/2//+oot;
			ctx.drawImage(bm.canvas,xx, yy,ww,hh);

        	fun(elem.toDataURL())
        	

        })
        bm.load(b64)
    }





    this.resizeImageFile=function(b64, fun, _w, _h,_name, _boolB64){
        resizeImageFile(b64, fun, _w, _h,_name, _boolB64)
    }


    function resizeImageFile(b64, fun, _w, _h,_name, _boolB64) {            
        const img = new Image();
        img.onload = () => {
            //fun(img);
            const elem = document.createElement('canvas');
    
            if(_boolB64==undefined)
            if(_w!=undefined && _w > img.naturalWidth){
                fun(null);
                return;
            }
           

            elem.width = _w==undefined ? img.naturalWidth : _w;
            elem.height = _h==undefined ? img.naturalHeight : _h;
        
            const ctx = elem.getContext('2d', { willReadFrequently: true });
            ctx.drawImage(img, 0, 0, elem.width, elem.height);

            if(_boolB64!=undefined){
                let b6=elem.toDataURL()                    
                fun(b6);
                return 
            }
            ctx.canvas.toBlob((blob) => {
                const image = new File([blob], _name==undefined ? "icon.png" : _name);
                fun(image);
                
            }, 'image/png');                
        }
        img.src = b64;           
    }






	this.getAngle = function (a, b) {
		b = b || rezNull;
		a = a || rezNull;
		return Math.atan2(b.y - a.y, b.x - a.x);
	};
	


};
