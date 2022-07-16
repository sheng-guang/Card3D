using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemyTarget : Unit
{
    public override void OnSetID_Awake()
    {
        base.OnSetID_Awake();
        var to = CreatSkill<Skill_Summon_units>().Origin();
        eve.AddSkill(this, to, SkillKind.Input, 0);
        //to.SetKV(nn.FullName, "-'Wall");

    }
}
