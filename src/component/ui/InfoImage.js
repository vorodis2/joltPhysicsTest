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


/*
окно поверх с инпутами
*/



export class InfoImage  {
    constructor() {          
        var self=this   
        this.type="InfoImage";

        this.otstup=2;
        this.otstup2=10;
        this.dCont=new DCont();

        this.window=new DWindow(this.dCont,0,0,this.type)

        this.bmd=new DBitmapData(2,2,null,function(){            
            self.obj.width=this.width;
            self.obj.height=this.height;
            self.obj.whText=self.obj.width+"x"+this.height+"px";
            self.fff(self.obj);
        })

        this.window.content.add(this.bmd.getDCont())

        this.image=new Image()
        this.image.onload = function () {
            self.bmd.load(self.obj.src)
        }
        this.image.onerror = function () {
            self.fff(null)
        }

        this.fff
        this.obj
        this.setSRC=function(src, fun){

            if(!src){
                fun(null)
                return
            }
            this.fff=fun;


            let a=src.split('.')
            let key=a[a.length-1].toUpperCase();

            let a1=src.split('/')
            let name=a1[a1.length-1];


            this.obj={}
            this.obj.key=key
            this.obj.name=name
            this.obj.src=src


            this.image.src=src
            //this.bmd.load(src)
        }


    }
}


