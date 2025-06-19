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


///Локальная БД юзает PHP
export class MHBDPHP {
    constructor(par, obj, fun,aLeng) {          
    var self=this
    this.type="MHBDPHP"
    this.aLeng=aLeng

    this.par=par;
    this.obj=obj;
    this.fun=fun;

    this.param=par.param;

    this.active=true

    this.idUzer=10;
    this.uzer=null;
    

    this.plusLinkKey="";



    this.objectBase=null;

    

    this.loadRec=function(){
        

        for(let s in this.obj){
            let ss=s
            if(this.obj[ss]==null){
                
                $.ajax({
                    url: "resources/date/"+ss+"/config.json?"+Math.random(),
                    success: function function_name(data) {  
                                           
                        if(typeof data === "string") {
                            var conf = JSON.parse(data)
                            self.objectBase = conf;
                        } else self.objectBase = data;
                        
                        let oi={}
                        for (var i = 0; i < self.objectBase.array.length; i++) {
                            oi[self.objectBase.array[i].id]=self.objectBase.array[i]
                        }
                        self.objectBase.oi=oi


                        self.obj[ss]=self.objectBase

                        self.loadRec()         
                    }                    
                }); 
                return
                
            }
        }
        self.objectBase=this.obj;
        self.fun()
    }  

    this.loadRec()




    this.load=function(fun){       
        $.ajax({
            url: "resources/date/config.json?"+Math.random(),
            success: function function_name(data) {                         
                if(typeof data === "string") {
                    var conf = JSON.parse(data)
                    self.objectBase = conf;
                } else self.objectBase = data;
                start();           
                                 
            },
            error:function function_name(data) {
                self.objectBase ={}
          
                start();
            }
        }); 
        function start(){        
            fun()
        }
    }



    this.save=function(key){ 
        if(self.active==false)return
        if(key)okj[key]=true;
        for(var s in okj){
            if(this.objectBase[s]!=undefined && this.objectBase[s].array!=undefined){
                let os= {array:this.objectBase[s].array}
                var ss  =JSON.stringify(os); 
                var l = "../../resources/date/"+s+"/config.json"; 
                $.post(
                    "src/component/MHBDPHP.php", 
                    {tip:"saveJSON", link:l, text:ss}, 
                    function(data){ 
                               
                       
                    }
                );
            }
        }

        okj={}
               
    }
    var okj={}
    this.sah=0
    this.saveTime=function(k){
        okj[k]=true
        this.sah++;
        var s=this.sah;
        setTimeout(function() {
            if(self.sah==s)self.save();
        }, 100);
    } 




    this.deleteId=function(key,id,fun){
        trace(">>>>>>>>>>selkey,idkkey,idey,idkey,idf.objectBase[key][i]>>>>",key,id,self.objectBase[key])
        if(self.active==false)return
        if(self.objectBase[key])
        for (var i = 0; i < self.objectBase[key].array.length; i++) {           
            if(id==self.objectBase[key].array[i].id){
                trace(">>>>>>>>>>.array.array.array.arrayself.objectBase[key][i]>>>>",self.objectBase[key].array[i])
                var o=self.objectBase[key].array[i];
                let link="../../resources/date/"+key+"/"+id
                trace(">>>>>>link>",link)
                
                self.objectBase[key].array.splice(i,1)

                $.post(
                    "src/component/MHBDPHP.php", 
                    {tip:'removeDirRec', dir:link}, 
                    function(data){  }
                );
                

                this.saveTime(key)
                this.save(key)
                if(fun)fun(o);
                return o
            }

        }

        if(fun)fun(null);
        return null       
    }

    var svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" id="devLib_DCI2" style="width: 200px; height: 200px;"><path/><filter id="f2" x="-9" width="18" y="-9" height="18" color="#0a0a0a"><feGaussianBlur in="SourceGraphic" stdDeviation="9"/></filter><g><g filter="url(#f2)"><line x1="-50" y1="-50" x2="-50" y2="-50"/><text x="12.548799905800479" y="110.46540856291963" font-size="124.36241121023168px" font-family="Arial" fill="#0a0a0a">t000</text><text x="8.24740473843525" y="184.80450049285966" font-size="60px" font-family="Arial" fill="#0a0a0a" ia="0">t111</text></g><g filter="url(#f2)"><line x1="-50" y1="-50" x2="-50" y2="-50"/><text x="12.548799905800479" y="110.46540856291963" font-size="124.36241121023168px" font-family="Arial" fill="#0a0a0a" ia="0">t000</text><text x="8.24740473843525" y="184.80450049285966" font-size="60px" font-family="Arial" fill="#0a0a0a" ia="1">t111</text></g></g><text x="12.548799905800479" y="110.46540856291963" font-size="124.36241121023168px" font-family="Arial" fill="#fdfdfd" ia="0">t000</text><text x="8.24740473843525" y="184.80450049285966" font-size="60px" font-family="Arial" fill="#fdfdfd" ia="1">t111</text></svg>'
    this.creat=function(key,fun){


        var o={}
        var id=1;

        
        if(self.active==false)return o

        var id=0
        for (var i = 0; i < self.objectBase[key].array.length; i++) {           
            if(id<=self.objectBase[key].array[i].id)id=self.objectBase[key].array[i].id;
        }
        o.id=id+1;
        o.ru=key+"_"+o.id+"_ru";
        o.en=key+"_"+o.id+"_en";
        o.bg=key+"_"+o.id+"_bg";
        o.cn=key+"_"+o.id+"_cn";
        o.uuid=key+"_"+o.id+"_uuid";
        

        o.t=key[0];
        //o.sort=1;
        o.json={};


        o.icon= "resources/date/"+key+"/"+o.id+"/i/name.svg"     //"not.png";

        var svg1=svg+'' 
        svg1 = svg1.replace(/t111/g, ""+key);
        svg1 = svg1.replace(/t000/g, ""+o.id);
        
        self.objectBase[key].array.push(o);
        let dir="../../resources/date/"+key+"/"+o.id
        $.post("src/component/MHBDPHP.php",{tip:'mkdir', dir:dir}, function(data){ 
            $.post("src/component/MHBDPHP.php",{tip:'mkdir', dir:dir+"/i"}, function(data){ 
                
                const blob = new Blob([svg1], { type : 'plain/svg' });
                var file = new File([blob], "name.svg");
                mhbd.saveFile(file, key, o.id, (date) => {

                    if(fun)fun(o);
                }, "i/")
                

              
               /* var mystring = svg;
                var myblob = new Blob([mystring], {
                    type: 'text/plain'
                });*/
                
                
            })  
        });
        this.saveTime(key)


        return o;
    } 


    /* ,
    file,    <= FormDataFile
    obj,     <= Obj to set in
    keyType, <= GroupName
    keyParam,<= For example "icon"
    fun      <= on success
    */
   /* this.setFile=function(file,obj,keyType,keyParam,fun){
       
        

        if(obj[keyParam+"Id"]!=undefined)if(obj[keyParam+"Id"]>=1){            
            var iK=obj[keyParam+"Id"];
            var o={}
            o.type="DELETE";
            o.url=this.param.server+keyType+"/files/"+iK+"/";
            o.success= function function_name(data) { 
                     
            }
            if(self.token)
            o.headers = {
                'Authorization': 'Token ' + self.token
            };


            $.ajax(o)
        }

        

        if(obj)if(obj[keyParam]){

        }
        


        var formData= new FormData(); 
        //formData.append('file', file);
        formData.append('src', file);
        formData.append('rel_obj', obj.id);  
        //formData.append(keyType+"_obj", obj.id); 




        
        var o={}
        o.type="POST";
        o.url=this.param.server+keyType+"/files/";

        o.data=formData;
        o.processData=false
        o.contentType=false

         if(self.token)
        o.headers = {
            'Authorization': 'Token ' + self.token
        };
        

        o.success= function function_name(data) { 
            
            obj[keyParam]=data.src;
            mhbd.setParam( keyType, obj.id, keyParam,data.src)
            

            if(obj[keyParam+"Id"]!=undefined){
                obj[keyParam+"Id"]=  data.id
                mhbd.setParam( keyType, obj.id, keyParam+"Id",data.id)
            } 

            let ss=data.src
           
            

            fun(ss);           
        }
        o.error=function function_name(data) {
            if(self.debug==true)console.error("не верная загрузка xУУУУУz")
        }        
        $.ajax(o);
    }*/

    this.getIdResCol=function(keyType){
        var _id=1;
        for (var i = 0; i < self.objectBase[keyType].length; i++) { 
            for (var j = 0; j < self.objectBase[keyType][i].files.length; j++) { 
              
                if(_id<=self.objectBase[keyType][i].files[j])_id=self.objectBase[keyType][i].files[j];
            } 
        }
        _id++
        return _id;
    }

    this.getIdResObj=function(keyType, id, bool){
        
        for (var i = 0; i < self.objectBase[keyType].array.length; i++) { 
            for (var j = 0; j < self.objectBase[keyType].array[i].files.length; j++) {  
                        
                if(id==self.objectBase[keyType].array[i].files[j]){
                    if(bool)return j

                    return self.objectBase[keyType].array[i];
                }
            } 
        }
        
        return null;
    } 


    
    this.saveFile=function(file,keyType,id,fun,sp){    
        if(self.active==false)return   
        oo=this.getKeyId(keyType,id);
        if(sp==undefined)sp=''
        if(oo==null){
            if(fun)fun(null);
           
        }
        var idK=this.getIdResCol(keyType);
        var name=file.name;
        
        let ss="../../resources/date/"+keyType+"/"+id+"/"+sp+name;
        if(sp==""){

            this.setFileLink( file, ss,  function(e){
                if(fun)fun(e)  
            })
        }else{
            let dir="../../resources/date/"+keyType+"/"+id+"/"+sp
            $.post(
                "src/component/MHBDPHP.php", 
                {tip:'isDir', dir:dir}, 
                function(data){   
                    if(data=="notDir") {
                        $.post(
                            "src/component/MHBDPHP.php", 
                            {tip:'mkdir', dir:dir}, 
                            function(data){                             
                                self.setFileLink( file, ss,  function(e){
                                    if(fun)fun(e)  
                                })
                            }
                        );
                    }  else{
                        self.setFileLink( file, ss,  function(e){
                            if(fun)fun(e)  
                        })
                    }                       

                }
            );
        }
        


    }

    this.setFileLink=function(file,link,fun){   

        if(self.active==false)return
        let data = new FormData();
        data.append('tip', 'saveFile');
        data.append('file', file);
        data.append('dest', link);

        let aa=link.split('esources')
        return $.ajax({
            url: "src/component/MHBDPHP.php",
            dataType: 'text',
            cache: false,
            contentType: false,
            processData: false,
            data: data,
            type: 'post',
            success: function function_name(data) { 

                var o= {src: "resources"+aa[1]}

                if(fun)fun(o)   
            }
        });
    }

    this.fileSave =function(file, link, fun){ 
        if(self.active==false)return
        let data = new FormData();
        data.append('tip', 'saveFile');
        data.append('file', file);
        data.append('dest', link);
        
        return $.ajax({
            url: "src/component/MHBDPHP.php",
            dataType: 'text',
            cache: false,
            contentType: false,
            processData: false,
            data: data,
            type: 'post',
            success: function function_name(data) {                  
                if(fun)fun(data)   
            }
        });

    }


    this.clearFile=function(keyType,id,fun,str){
        console.error("@@@@@@@@@Было убито@",keyType,id)   
        if(self.active==false)return 
        return 

        var oo2=this.getIdResObj(keyType,id)
       
        if(oo2){
            var ii=this.getIdResObj(keyType,id,true)
            var n=oo2.fname[ii]


            
            var l="../../resources/date/"+keyType+"/"+oo2.id+"/"+n
           
            $.post(
                "src/component/MHBDPHP.php", 
                {tip:'unlink', dir:l}, 
                function(data){                    
                    oo2.fname.splice(ii,1);
                    oo2.files.splice(ii,1);
                    self.save(keyType);
                    if(fun)fun();
                }
            );
        }else{
            if(fun)fun();
        }
    }
    let sahCFA=0
    var oooCFA
    this.clearFileAll=function(key,id,fun,sp){
        if(self.active==false)return
        if(sp==undefined)sp=''
        var l="../../resources/date/"+key+"/"+id+"/"+sp
        
        $.post(
                "src/component/MHBDPHP.php", 
                {tip:'removeDirRec', dir:l}, 
                function(data){                    
                    
                    $.post(
                        "src/component/MHBDPHP.php", 
                        {tip:'mkdir', dir:"../../resources/date/"+key+"/"+id}, 
                        function(data){                             
                            if(fun)fun();
                        }
                    );
                }
            );

    }



   




    var kkk,aa
    this.getKeyList=function(key,fun, bool, str, str1){       
        
        if(key.indexOf("sorts")!==-1){
            aa=key.split("/");
            if(aa[1]=="sorts"){
                var a=[]
                for (var i = 0; i < self.objectBase[aa[0]].length; i++) {

                    
                    
                    if(self.objectBase[aa[0]][i].sort==aa[2]*1){
                        a.push(self.objectBase[aa[0]][i])
                    }
                }
                if(fun)fun(a)
                return a
            }
        }   

        if(key.indexOf("sort")!==-1){

            aa=[
                {id: 1, name: 'Не установлено'},
                {id: 2, name: 'xz1'},
                {id: 3, name: 'xz2'},
                {id: 4, name: 'xz3'},
                {id: 5, name: 'xz4'}
            ]
            if(fun)fun(aa)
            return aa
        }


        if(self.objectBase[key]){
            if(fun)fun(self.objectBase[key])
            return self.objectBase[key] 
        }

        if(fun)fun(null);
        return null;
    }

    this.getNull=function(){  
        let o={
            name:"null",
            uuid:"null_"+this.generateRendom(1),
            icon: "not.png",
            iconId: -1,

        }
        return o
    }



    this.objId={}
    this.objDin={};
    this.funGetKeyId=undefined
    var globIter = 0;
    let bbb
    this.getKeyId=function(key,id,fun, bool){  
        
        if(self.objectBase[key]){
            for (var i = 0; i < self.objectBase[key].array.length; i++) {
                if(self.objectBase[key].array[i].id==id){

                    if(fun)fun(self.objectBase[key].array[i])
                    return self.objectBase[key].array[i]
                }
            }
        }

        bbb=false;



        
        let o = this.getNull()
        if(fun)fun(o)
        return o;/**/



      
    }



    var oo, pp
    this.setParam=function(keyType,id,param,value,fun){        
        oo=this.getKeyId(keyType,id)
        if(oo==null){
            if(fun)fun(null)
            return null;
        }

        if(oo[param]){
            pp=value
            if(typeof value === 'string'){
                if(value[0]){
                    if(value[0]=="{"||value[0]=="["){//Это джейсон
                        pp=JSON.parse(value)
                    }
                }
            }          
            oo[param]=pp;
            this.saveTime(keyType);
            if(fun)fun(oo)
            return oo;
        }


        if(fun)fun(null)
        return null;      
    }


    this.getArKey=function(key,id){
        for (var i = 0; i < this.param[key].length; i++) {
            if(this.param[key][i].id==id)return this.param[key][i]
        }
        return null;
    }   

    this.getURLParameters=function(paramName, url){
        return getURLParameters(paramName, url);
    }


    function getURLParameters(paramName, url){
            var sURL = window.document.URL.toString();
            if(url!=undefined){
                sURL=url
            }

            var arrParams = sURL.split("/");                        
            if (sURL.indexOf("?") > 0) {
                var arrParams = sURL.split("?");
                var arrURLParams = arrParams[1].split("&");
                var arrParamNames = new Array(arrURLParams.length);
                var arrParamValues = new Array(arrURLParams.length);

                arrParams = sURL.split("?");
                arrURLParams = arrParams[1].split("&");
                arrParamNames = new Array(arrURLParams.length);
                arrParamValues = new Array(arrURLParams.length);


                var i = 0;
                for (i = 0; i < arrURLParams.length; i++) {
                    var sParam =  arrURLParams[i].split("=");
                    arrParamNames[i] = sParam[0];
                    if (sParam[1] != "")
                        arrParamValues[i] = unescape(sParam[1]);
                    else
                        arrParamValues[i] = null;
                }

                for (i=0; i<arrURLParams.length; i++) {
                    if (arrParamNames[i] == paramName) {

                        return arrParamValues[i];
                    }
                }
                return null;
            }
        }

    
        var aaaa, oo,bbbb
        this.creatParamKategor=function(){
           /*
            for (var i = 0; i < this.param.group3.length; i++) {
                if(this.param.group3[i].name.indexOf("grabla")!=-1){
                    
                    aaaa=this.param.group3[i].name.split("_");
                    bbbb=aaaa[2].split(":");
                    let idd=aaaa[1]*1

                    

                    oo=this.getArKey("group",aaaa[1]*1);
                    if(oo){
                        if(oo.products==undefined)oo.products=[]
                        if(oo.productsObj==undefined)oo.productsObj=[]    
                            
                        
                        oo.products.push(this.param.group3[i].id);
                        oo.productsObj.push(this.param.group3[i]);
                    }

                    if(this.param.group3[i].type3d==undefined){

                    }

                    let o3d={}
                    o3d.type="material"
                    o3d.id=bbbb[0]*1;
                    o3d.color=bbbb[1];

                    o3d.typeNa="base";
                    o3d.w=bbbb[2]*1;
                    o3d.h=bbbb[3]*1;

                    o3d.price=aaaa[3]*1

                    this.param.group3[i].d3MatColor=bbbb[1]
                    this.param.group3[i].d3MatId=bbbb[0]*1

                    this.param.group3[i].d3Width=bbbb[2]*1
                    this.param.group3[i].d3Height=bbbb[3]*1
                   
                    this.param.group3[i].type3d=o3d;                    
                }
            }
            


            for (var i = 0; i < this.param.group2.length; i++) {
                if(this.param.group2[i].name.indexOf("grabla")!=-1){                    
                    aaaa=this.param.group2[i].name.split("_");

                    oo=this.getArKey("group3",aaaa[1]*1);
                    if(oo){
                        if(oo.sellers==undefined){
                            oo.sellers=[]
                            oo.sellersObj=[]
                        }
                        oo.sellers.push(this.param.group2[i].id);
                        oo.sellersObj.push(this.param.group2[i]);
                    }
                }
            }*/

      

            this.creatParamKategor1()
        }

        this.creatParamKategor1=function(){
            for (var i = 0; i < this.param.group.length; i++) {
                
                oo=this.param.group[i]
                if(oo.products){
                    oo.productsObj=[]; 


                    for (var j= 0; j < oo.products.length;j++) {
                        
                        var o=this.getArKey("group3", oo.products[j])
                        oo.productsObj[j]=o
                    }
                }  
            }


            

        }

        var od,od1
        this.getSRC=function(key, id){
            let sr='not.png'
            od=this.getKeyId(key, id)

            if(od){
                od1=this.getInfo(od)
                sr=od1.src
            }
            return sr
        }


        this.getInfo=function(o){
            let r={
                src:"not.png",
                id:-1
            }
            if(this.aLeng){
                for (var i = 0; i < this.aLeng.length; i++) {
                    r[this.aLeng[i].key]="xz"
                }
            }
            

            if(o.key!=undefined && o.n && o.s){//это дерево, надо по кею вернуть 
                if(this.objectBase[o.key] && this.objectBase[o.key].oi && this.objectBase[o.key].oi[o.id]){
                    o=this.objectBase[o.key].oi[o.id]
                }
            }



            if(o){
                if(o.id){
                    r.id=o.id;                
                    for (var i = 0; i < this.aLeng.length; i++) {
                        if(o[this.aLeng[i].key])r[this.aLeng[i].key]=o[this.aLeng[i].key]
                    }

                }
                if(o.icon){
                    
                    r.src=o.icon
                }else{                   

                    if(o.obj && o.uuid!=undefined){
                        if(o.obj.orig){//larvij                
                            r.src="resources/date/"+o.uuid.split('_')[0]+"/"+o.id+"/original.png"                       
                        } 
                        if(o.obj.emissive){//larvij                
                            r.src="resources/date/"+o.uuid.split('_')[0]+"/"+o.id+"/original.png"                       
                        }  
                    }

                    if(o.orig){
                        if(o.mod){//larvij 
                            r.src="resources/date/o3ds/"+o.id+"/original.png" 
                        }
                       
                     
                    }
                }

                
                
                 
            }



            
            

            return r
        }

        var aa, aa2
        this.getLink=function(_s){




           
            if(_s==undefined)return "not.png"//прямой линк
            

            aa=_s.split('/')
            if(aa.length==1)return _s//прямой линк
            aa2=_s.split('resources/date//')
            if(aa2.length==2){
                return "resources/date/"+aa2[1]
            }
            aa2=_s.split('resources/date/')
            if(aa2.length==2){
                return "resources/date/"+aa2[1]
            }

            if(aa[0]=="date") {
                var ss=_s.replace('date', "resources/date/")
                return ss
                //this.param.host+_s;  
            }
            
            if(_s.indexOf('http://77.222.60.51')!=-1){
              
                return _s.replace('http://77.222.60.51', this.param.host)
            }

            if(aa[0]=="http:" ||aa[0]=="https:") return _s
           
            

            
            return _s
        } 


        this.setPHP = function(obj, fun){ 
            if(self.active==false)return
            var s="src/component/MHBDPHP.php";        
            $.post(s, obj, function(data){          
                if (fun) fun(data);
            });

        }

        this.generateRendom =  function (n){
            if(n==undefined)n=1;        
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
    }
}