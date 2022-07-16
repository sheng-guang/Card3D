using System.Collections;
using System.Collections.Generic;
using UnityEngine;

using System;
public class SN_AddSkillToStack : SKillNode
{
    public override void Set_(string key, object o)
    {
        base.Set_(key, o);
        if (key == nn.Skill) o.TryToIGet_ref(ref s);
    }
    IGet<IStackSkill> s;
    public override void OnSetSelf()
    {
        base.OnSetSelf();
        if(s == null)s=self.ToIGet<IStackSkill>();
    }
    public override int Fix_1Exit_2ToNext_4Break()
    {
        var to = s.Value;
        if (to == null) return ToNext;
        to.AddToStackSkillList();
        return Break_TryThisAgain+ToNext;
    }

}

[Api]
public class SN_PauseSkill_SelfPlayer : SKillNode
{
    public bool firstTime = true;
    public override int Fix_1Exit_2ToNext_4Break()
    {
        if (firstTime)
        {
            firstTime = false;
            self.ServerSetPausing(player.ID);
        }
        return eve.SN_TestPause(self);
    }
}


