



export class Vspluvashka {
    constructor(dCont, x, y, fun) {
        this.type = "Vspluvashka";
        var self = this;
        this.fun = fun;
        this.dC = dCont
        this.dCont = new DCont(this.dC)
        this.dCont.x = x;
        this.dCont.y = y;

        this.key = "vspluvashka" + Math.random()
        this.dCont.div[this.key] = this;
        this._active = true

        // new DPanel(this.dCont,0,-255);



        this.mousedown = function(e) {
            trace(">>>>>e>>",e)
            let dd = self.getDivKey(e.target, self.key)
            if (dd != null) {

            } else {

                let tN=time-new Date().getTime()
                trace(">>>tN==",tN)
                if(Math.abs(tN)<100){
                    return
                }
                self.active = false
                if(self.fun)self.fun()
            }
        }
        this.getDivKey = function(div, key) {
            if (div[key] != undefined) return div[key];
            if (div.parentElement) {
                return this.getDivKey(div.parentElement, key)
            }
            return null;
        }
        var time=0
        this.dragActive = function() {

            if (this._active) {
                time=new Date().getTime()
                trace(">>>time==",time)
                document.addEventListener('mousedown', self.mousedown)

            } else {
                document.removeEventListener('mousedown', self.mousedown)
            }
        }

    }

    set active(value) {
        if (this._active != value) {
            this._active = value
            this.dCont.visible = this._active
           
            if (this._active) {
                //this.dC.add(this.dCont)                

            } else {
                // this.dC.remove(this.dCont)         
            }
            this.dragActive()
        }
    }
    get active() {
        return this._active;
    }
}