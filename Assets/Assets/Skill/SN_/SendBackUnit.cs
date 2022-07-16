using System.Collections;
using System.Collections.Generic;
using UnityEngine;

using System;


/// <summary>
/// OverLapResultName
/// </summary>
public class SN_SendBack_Unit : SKillNode
{
    public override void Set_(string key, object o)
    {
        base.Set_(key, o);
        if (key == nn.OverLapResult) o.TryToIGet_ref(ref TargetUnit);
    }
    IGet<Unit> TargetUnit;
    public override int Fix_1Exit_2ToNext_4Break()
    {
        Unit u = TargetUnit.Value ;
        if (u == null) return Break_TryThisAgain;
        eve.SetV(u, -u.rig.velocity);
        return ToNext;
    }
}


//public class F_OnllyFireBall:Func0Node<Skill,Unit,bool>
//{
//    public override void Invoke(Unit p1)
//    {
//        if (p1 is FireBall) { re(true);return; }
//        re(false);
//        return;
//    }
//}





