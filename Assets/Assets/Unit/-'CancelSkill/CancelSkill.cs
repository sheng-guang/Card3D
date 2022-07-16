using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CancelSkill : Unit
{
    public override void OnSetID_Awake()
    {
        base.OnSetID_Awake();
        var to = CreatSkill<UseMagicCard>().Origin() as InputSkill_Delegate;
        eveInputSkill.EnableNewSkill(to, nameof(Skill_CancelSkill), SkillListKind.Stack);
        to.testNodeUseful.AddNode(new TestNodeUseful_IsStackSkill());

        AddSkill(to, SkillKind.Input, 0);

    }
}
