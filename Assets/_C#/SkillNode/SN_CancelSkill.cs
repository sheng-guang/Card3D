using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SN_CancelStackSkill : SKillNode
{
    public override void Set_(string key, object o)
    {
        base.Set_(key, o);
        if (key == nn.Skill) o.TryToIGet_ref(ref ss);
    }
    IGet<Skill> ss = 0.ToIGet<Skill>();
    public override int Fix_1Exit_2ToNext_4Break()
    {
        var sk = ss.Value;
        if (sk == null) return ToNext;

        Debug.Log("remove       "+ sk);
        GameLogicFunctions.RemoveStackSkill(sk);
        GameLogicFunctions.RemoveLongSkill(sk);
        return ToNext;
    }
}
