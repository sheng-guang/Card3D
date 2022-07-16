using System.Collections;
using System.Collections.Generic;
using UnityEngine;

using System;

public class SendBack : Unit
{
    [ColorUsage(true, true)]
    public Color c=Color.cyan;
    public float r=5;
    public override void OnSetID_Awake()
    {
        base.OnSetID_Awake();
        AddSkill(CreatSkill<ThrowMagic>().Origin(), SkillKind.Input, 0);
        AddSkill(CreatSkill<Skill_SendBack>().Origin(), SkillKind.becall);
        {
            var n = AddMesh("M'VFX_Area");
            n.Ex<float>(nn.R).SetIGet(r);
            n.Ex<Color>(nn.color).SetIGet(c);
        }
    }
}


