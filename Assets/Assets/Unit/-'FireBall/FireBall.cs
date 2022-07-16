using System.Collections;
using System.Collections.Generic;
using UnityEngine;

using System;

public class FireBall : Unit
{

    public override void OnSetID_Awake()
    {
        base.OnSetID_Awake();
        AddSkill(CreatSkill<ThrowMagic>().Origin(), SkillKind.Input, 0);
        AddSkill(CreatSkill<Skill_FireBallDamage>().Origin(), SkillKind.becall);
        AddMesh("M'FireBall_Mesh");

        //speed.Value_Base = 6;
    }
    
}
