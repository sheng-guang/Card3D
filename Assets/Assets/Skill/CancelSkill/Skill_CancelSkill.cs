using System.Collections;
using System.Collections.Generic;
using UnityEngine;

using System;

public class Skill_CancelSkill : StackSkill_Delegate
{
    public override void OnSetID_LoadStructure()
    {
        base.OnSetID_LoadStructure();
        runToBreak.AddNode(new SN_PauseSkill_SelfPlayer());
        runToBreak.AddNode(new SN_CancelStackSkill())
            .Set(nn.Skill, new Func< Skill>(TarSkill));
    }
}
