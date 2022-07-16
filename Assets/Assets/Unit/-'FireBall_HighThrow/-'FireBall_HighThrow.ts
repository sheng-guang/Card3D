import { eve, eveInputSkill, eveTS, InputSkill_Delegate, Layer, nn,  ResArgs,  SkillKind, System, T$1, VarUnit } from "csharp";
import { fullN } from "FullName";

let s1=function(){
    let s=eve.CreatSkill(fullN.Skill.ThrowMagic).Origin() as InputSkill_Delegate;
    eveInputSkill.SetThrowLine(s,true);
   
    return s;
}
let s2=function(){
    let  s= eve.CreatSkill(fullN.Skill.Skill_FireBallDamage).Origin();
    return s;
}
let create =function(a:ResArgs ){
    let re=eveTS.NewUnitTemplate_ReName(fullN.Unit.___,fullN.Unit.__FireBall_HighThrow) as VarUnit;
    re.ActOnSetID_Awake.AddAct((u)=>{

        eve.AddSkill(re,s1(),SkillKind.Input,0);

        eve.AddSkill(re,s2(),SkillKind.becall);
        re.AddMesh(fullN.Mesh.M_FireBall_Mesh);
    })
    return re;
}



