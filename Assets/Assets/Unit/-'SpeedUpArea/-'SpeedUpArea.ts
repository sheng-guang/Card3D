import { eve, eveTS, Layer, nn, ResArgs, SkillKind, VarUnit } from "csharp";
import { fullN } from "FullName";

let create= function(a:ResArgs){
    let re= eveTS.NewUnitTemplate_ReName(fullN.Unit.___,fullN.Unit.__SpeedUpArea) as VarUnit;  

    re.ActOnSetID_Awake.AddAct((u)=>{
        let use=eve.CreatSkill(fullN.Skill.ThrowMagic).Origin()
        re.AddSkill(use,SkillKind.Input,0);


        let a=re.AddMesh(fullN.Mesh.M_VFX_Area);
        re.AddMesh(fullN.Mesh.M_SpeedUpMesh);
        a.ExTrySetExtension(nn.R,3);

        let buff=Layer.CreatSkill(fullN.Skill.Skill_Buff_SpeedUpArea).Origin()
        eve.AddSkill(re,buff,SkillKind.BuffSkill);
    })
    return re;
}