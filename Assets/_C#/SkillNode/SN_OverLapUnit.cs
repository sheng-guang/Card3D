using System.Collections;
using System.Collections.Generic;
using UnityEngine;

using System;

public class SN_Wait_OverLap_OneUnit_OrBreak : SKillNode, IGet<Unit>
{
    /// <summary>   r (reach)   </summary>
    public SN_Wait_OverLap_OneUnit_OrBreak() { }
    public override void OnSetSelf()
    {
        base.OnSetSelf();
        F_TestUnit.SetSelf(self);
        Act_GetResult = GetResult;
    }

    public Func1<Skill, Unit, bool> F_TestUnit
        = new Func1<Skill, Unit, bool>().SetDef(true);
    public void GetResult(Unit u)
    {
        //Debug.Log(u);
        if (u == null) return;
        if (F_TestUnit.Invoke(u)) Result = u;
    }
    Unit Result;
    public Action<Unit> Act_GetResult;

    public Unit Value { get; set; }
    public override void Set_(string key, object o)
    {
        base.Set_(key, o);
        if (key == nn.R) o.TryToIGet_ref(ref r);
    }
    IGet<float> r = 5.0f.ToIGet<float>();
    public override int Fix_1Exit_2ToNext_4Break()
    {
        //Debug.Log("overlap test");
        Result = null;
        eve.OverlapUnit(unit.RealPoss, r.Value, Act_GetResult);
        //todo  «∑Ò «break
        if (Result == null) return Break_TryThisAgain;
        //Debug.Log("Result= "+Result);
        Value = Result;
        return ToNext;
    }
}