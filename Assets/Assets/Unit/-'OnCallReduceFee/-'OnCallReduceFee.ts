import { eve, eveTS, Layer, ResArgs, SkillKind, TsInit, VarUnit } from "csharp";
import {   fullN } from "FullName";


let create=function(a:ResArgs){
    let re=eveTS.NewUnitTemplate_ReName(fullN.Unit.___,fullN.Unit.__OnCallReduceFee) as VarUnit;


    let intit =re.GetComponent("TsInit") as TsInit;
    intit.AddStartInitAction(()=>{
        re.AddMesh(fullN.Mesh.M_SpeedUpMesh);

        let use=eve.CreatSkill(fullN.Skill.ThrowMagic).Origin();
        eve.AddSkill(re,use,SkillKind.Input,0);

        let S_ReduceFee=eve.CreatSkill(fullN.Skill.S_ReduceFee).Origin();
        eve.AddSkill(re,S_ReduceFee,SkillKind.TriggerSkill,0);

    })
    return re;
}



