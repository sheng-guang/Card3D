    using System.Collections;
using System.Collections.Generic;
using UnityEngine;

using System;

public class AirDropWall : Unit
{
    public override void OnSetID_Awake()
    {
        base.OnSetID_Awake();
        {
            var s = eve.CreatSkill<ThrowMagic>().Origin();
            eve.AddSkill(this, s, SkillKind.Input, 0);
        }
        {
            var skill = eve.CreatSkill<OnTouchLand>().Origin();
            skill.SetKV(nn.FullName, "-'Wall");
            eve.AddSkill(this,skill, SkillKind.becall);
        }

    }
}

public class OnTouchLand : FixSkill_Delegate
{
    public override void SetKV(string key, object o)
    {
        base.SetKV(key, o);
        if (key == nn.FullName) o.TryToIGet_ref(ref Name);

    }
    IGet<string> Name = "-".ToIGet<string>();

    public override void OnSetID_LoadStructure()
    {
        base.OnSetID_LoadStructure();
        fix.AddNode(new SN_OnlySpaceInSpace());
        fix.AddNode(new SN_WaitTouchLand_OrBreak())
            .Set(nn.R, 0.2f);



        fix.AddNode(new SN_CreatNewUnitForPlayer())
            .Set(nn.FullName, Name)
            .Set(nn.OffSetY, 10f);
        fix.AddNode(new SN_SetState_Card());
    }
}


