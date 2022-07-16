
 import {  eve, eveInputSkill, eveTS, InputSkill_Delegate, Layer, nn,  ResArgs,  SkillKind, SkillListKind, System,  VarUnit } from "csharp";
import { fullN } from "FullName";
import { $generic } from "puerts";

let s0=function(){
    let re=eve.CreatSkill(fullN.Skill.InputSkill_Delegate).Origin() as InputSkill_Delegate
    eveInputSkill.EnableOneTargetMode(re);
    eveInputSkill.EnableReach(re,10);
    eveInputSkill.EnableNewSkill(re,fullN.Skill.S_Destroy,SkillListKind.Long);
    return re;
}
let create =function(a:ResArgs){
    let re=eveTS.NewUnitTemplate_ReName(fullN.Unit.___,fullN.Unit.__Destory) as VarUnit;
    re.ActOnSetID_Awake.AddAct((x)=>{
        eve.AddSkill(re,s0(),SkillKind.Input,0);    
    })
    return re;
}
// let init=function(u:VarUnit){
//     let s=Layer.CreatSkill("UseMagicCard").Origin()
//     u.AddSkill(s,SkillKind.Input,0)
//     s.Var(nn.Reach,6)
//     s.Var(nn.SkillName,"S'Destroy")
//     s.VarInt32(nn.SkillListKind,SkillListKind.Long)
    
// }