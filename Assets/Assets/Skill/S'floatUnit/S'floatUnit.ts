import {  UnityEngine, eve, LongSkil_Delegate, ResArgs, UnitSpace, SKillNode, SNResult} from "csharp";

let create = function (a:ResArgs){
    // console.log("js enter");
    let re=new LongSkil_Delegate();
    let s=function(){
        eve.SetUP(re.unit,re.player);
        eve.SetSpace(re.unit,UnitSpace.Space);
        return SKillNode.ToNext;
    }
    re.fixStart.AddFunc(s);

    let f=function(){
        let to=UnityEngine.Vector3.op_Multiply(UnityEngine.Vector3.up,5);
        to=UnityEngine.Vector3.op_Addition(re.StartV3(),to);
        eve.SetPoss(re.unit,to);
        if(re.TarUnit()==null)return SNResult.Exit;
        let flashto=UnityEngine.Vector3.op_Multiply(UnityEngine.Vector3.up,5);
        flashto=UnityEngine.Vector3.op_Addition(re.TarV3(),flashto);
        // console.log("flash to "+flashto);
        eve.SetPoss(re.TarUnit(),flashto);
        
       return SNResult.Exit;
    }
    re.fix.AddFunc(f);

    return re;

    
}