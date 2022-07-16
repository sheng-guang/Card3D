import {  eve, eveInputSkill, eveTS, InputSkill_Delegate, Layer, nn,  ResArgs,  SkillKind, SkillListKind, System, T$1, TsInit, VarUnit } from "csharp";
import { fullN } from "FullName";
// import { $generic } from "puerts";
// let T_int = $generic(T$1, System.Int32);

let createSkill=function(){
    let re=eve.CreatSkill(fullN.Skill.InputSkill_Delegate).Origin() as InputSkill_Delegate;
    eveInputSkill.EnableOneTargetMode(re);
    eveInputSkill.EnableNewSkill(re,fullN.Skill.S_flash,SkillListKind.Long);
    return re;
}

let create =function(a:ResArgs){
    let re=eveTS .NewUnitTemplate_ReName(fullN.Unit.___,fullN.Unit.__Flash) as VarUnit;
    re.ActOnSetID_Awake.AddAct((u)=>{
        eve.AddSkill(re,createSkill(),SkillKind.Input,0);
    })

    return re;
}
