import {  eve, eveInputSkill, eveTS, IInputSkill_Delegate, InputSkill_Delegate, Layer
    , nn,  ResArgs,  SkillKind, SkillListKind,  VarUnit } from "csharp";
import { fullN } from "FullName";
import { $generic, off } from "puerts";

let s0=function(){
    let re=eve.CreatSkill(fullN.Skill.InputSkill_Delegate).Origin() as InputSkill_Delegate;  
    eveInputSkill.EnableOneTargetMode(re);
    eveInputSkill.EnableNewSkill(re,fullN.Skill.S_Silence,SkillListKind.Stack);
    re.testNodeUseful.AddFunc((s,node)=>{
        if(node.NodeKind!=1)return;
        if(eve.IsSpaceInSpace(node.GetUnit())==false){
            re.testNodeUseful.re(false);
        }
    })
    return re;
}
let create=function(a:ResArgs){
    let re=eveTS.NewUnitTemplate_ReName(fullN.Unit.___,fullN.Unit.__Silence) as VarUnit;
    re.ActOnSetID_Awake.AddAct((x)=>{
        eve.AddSkill(re,s0(),SkillKind.Input,0);
    })
        
    return re;
    

}
