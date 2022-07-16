import { Layer, nn,  SkillKind, VarUnit } from "csharp";

let init=function(u:VarUnit){
    {
        let p=Layer.CreatSkill("ThrowMagic").Origin()
        u.AddSkill(p,SkillKind.Input,0)
    }
{
    let a= u.AddMesh("M'VFX_Area")
    a.ExTrySetExtension(nn.R,3);
}
    
{
    u.AddMesh("M'SpeedUpMesh")

}
    
{
    let buff=Layer.CreatSkill("Skill_Buff_SpeedUpArea").Origin()
    u.AddSkill(buff,0);
}


    
}