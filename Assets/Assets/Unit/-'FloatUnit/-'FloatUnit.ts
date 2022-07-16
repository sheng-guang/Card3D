import {  eve, eveInputSkill, eveTS, InputSkill_Delegate, Layer, MixSkill_Delegate, nn,  ResArgs,  Skill,  SkillKind, SkillListKind, System, VarUnit } from "csharp";
import { fullN } from "FullName";
import { $generic, off } from "puerts";
let s1=function(){
    let re=eve.CreatSkill(fullN.Skill.UseMagicCard).Origin() as InputSkill_Delegate;
    re.testNodeUseful.AddFunc((s,node)=>{
        if(node.NodeKind!=1)return;
        if(node.GetUnit())return;
         re.testNodeUseful.re(false);
    })
eveInputSkill.EnableReach(re,6);
eveInputSkill.EnableNewSkill(re,fullN.Skill.S_floatUnit,SkillListKind.Long);
return re;
}

let create =function (a:ResArgs){
    let re=eveTS.NewUnitTemplate_ReName(fullN.Unit.___,fullN.Unit.__FloatUnit) as VarUnit;
    re.ActOnSetID_Awake.AddAct(()=>{
        eve.AddSkill(re,s1(),SkillKind.Input,0);
    })
    console.log(re);
    return re;
}


