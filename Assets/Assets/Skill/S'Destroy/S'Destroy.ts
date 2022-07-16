import { eve, LongSkil_Delegate,  ResArgs,   SNResult,   UnityEngine } from "csharp";

let create=function(a:ResArgs){
    let re=new LongSkil_Delegate();
    let s=function(){
        // eve.SetUP(re.unit,re.player);
        // eve.SetSpace(re.unit,Pack.UnitSpace.Space);
        return SNResult.ToNext;
    
    }
    re.fixStart.AddFunc(s);

    let f=function(){
        let to=re.TarUnit();
        console.log(to);
        eve.DestoryUnit(to);
        return SNResult.ToNext;
    
    }
    re.fix.AddFunc(f);

    return re;
}