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

export class DinLoadScript  {
    constructor(arrLink, fun) {        
        this.type="DinLoadScript";
        var self=this; 
        var head = window.document.getElementsByTagName('head')[0]
        var sah=0;
        function dragSah(){
            if(arrLink[sah]==undefined){
                if(fun)fun()
                return
            }

            let s=arrLink[sah].split(".")
            let s1=s[s.length-1].toUpperCase()

            if(s1=="JS"){                
                var script = document.createElement("script");                
                script.onload = function(){                   
                    sah++;
                    dragSah()
                }
                document.head.appendChild(script);
                script.src = arrLink[sah];
               return
            }

            if(s1=="CSS"){ 
                const link = document.createElement('link');
                link.onload = function(){ 
                    sah++;
                    dragSah()
                }
                link.rel = 'stylesheet';
                link.type = 'text/css';
                link.href = arrLink[sah]               
                document.head.appendChild(link);
                return
            }
        }
        dragSah();
    }
}

