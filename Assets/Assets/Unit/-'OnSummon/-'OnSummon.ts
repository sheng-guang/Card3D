import { nn, Layer, SkillKind, VarUnit } from "csharp";
import { fullN } from "FullName";

let init=function(u:VarUnit){
    {
        let p=Layer.CreatSkill(fullN.Skill.ThrowMagic).Origin()
        u.AddSkill(p,SkillKind.Input,0)
    }
    {
        let s=Layer.CreatSkill(fullN.Skill.S_OnSummonAddAtk).Origin();
        u.AddSkill(s,SkillKind.TriggerSkill);
    }
// {
//     let a= u.AddMesh("M'VFX_Area")
//     a.Ex_TrySetExtension(NN.R,3);
// }
    
{
    u.AddMesh(fullN.Mesh.M_SpeedUpMesh);

}
    
// {
//     let buff=Pack.Layer.CreatSkill("Skill_Buff_SpeedUpArea").Origin()
//     u.AddSkill(buff,0);
// }


    
}