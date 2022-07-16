import {  UnityEngine,   eve, LongSkil_Delegate,  ResArgs, UnitSpace, SNResult} from "csharp";
//$generic调用性能不会太好，同样泛型参数建议整个工程，至少一个文件内只做一次
// let List = $generic(System.Collections.Generic.List$1, System.Int32);
// let List = $generic(System.func, System.Int32);
// import { $generic } from "puerts";
// let Tunit = $generic(T$1, Pack.Unit);
// let TV3 = $generic(T$1, UnityEngine.Vector3);

let create = function (a:ResArgs){

    let re=new LongSkil_Delegate();
    re.fixStart.AddFunc(()=>{
        console.log(" s'flash fix start ");
        eve.SetUP(re.unit,re.player);
        eve.SetSpace(re.unit,UnitSpace.Space);
        return SNResult.ToNext;
    })
    
    re.fix.AddFunc(()=>{
        let to= UnityEngine.Vector3.op_Addition(re.StartV3(),UnityEngine.Vector3.up);
        eve.SetPoss(re.unit,to);
        let flashto=re.TarV3();
        // console.log("flash to "+flashto);
        eve.SetPoss(re.SelfHero(),flashto);
        return SNResult.ToNext;
    });

    return re;
    


    // let re=new LSkill()
    // re.A_FixStart.Add("SN_SetUp_Player")
    // re.A_FixStart.Add("SN_SetSpace_Spce")

    // // console.log(dele);
    // re.A_Fix.Add("SN_SetPoss")
    // .Var(NN.Point,TV3.FuncAs(()=>re.StartV3()))
    // .Var(NN.OffSet,UnityEngine.Vector3.up)

    // re.A_Fix.Add("SN_SetPoss")
    // .Var(NN.Unit,Tunit.FuncAs(()=>re.SelfHero()))
    // .Var(NN.Point,TV3.FuncAs(()=>re.TarV3()))

    // let l = new List<Number>();
    // console.log(l);
    // console.log("js re:"+re);

    
}