using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System;

public class SN_Damage : SKillNode
{
    public SN_Damage()
    {
        Func<int> Dam = () =>
        {
            return unit.atk.Value_Buffed.Value;
        };
        Dam.TryToIGet_ref(ref Damage);
    }
    public override void Set_(string key, object o)
    {
        base.Set_(key, o);
        if (key == nn.TargetUnit) o.TryToIGet_ref(ref TargetUnit);
    }
    IGet<Unit> TargetUnit=((object)null).ToIGet<Unit>();
    IGet<int> Damage=0.ToIGet<int>();
    public override int Fix_1Exit_2ToNext_4Break()
    {
        if (TargetUnit.Value == null) return ToNext;
        eve.DoDamage(TargetUnit.Value, Damage.Value);
        //LayerExtra
        return ToNext;
    }
}
