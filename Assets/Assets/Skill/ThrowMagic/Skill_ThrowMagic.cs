using System.Collections;
using System.Collections.Generic;
using UnityEngine;

using System;

public class ThrowMagic : InputSkill_Delegate
{
    public override void OnSetID_LoadStructure()
    {
        eveInputSkill.EnableOneTargetMode(this);
        eveInputSkill.EnableReach(this, 15.0f);
        eveInputSkill.EnableThrowOffset(this, 1f, 0.5f);
        eveInputSkill.EnableThrowLine(this, false);
        eveInputSkill.EnableNewSkill(this, nameof(_ThrowMagic),SkillListKind.Long);
    }

}
public class _ThrowMagic : StackLongSkill_Delegate
{
    public override void OnSetID_LoadStructure()
    {
        base.OnSetID_LoadStructure();
        //long------------------------------------------------------------------------------------------------------------------------
        fixStart.AddNode(new SN_UseMana());
        fixStart.AddNode(new SN_SetUp_Player());
        fixStart.AddNode(new SN_SetSpace()).Set(nn.space, UnitSpace.Space);
        //
        fix.AddNode(new SN_ShowBeforeMagicEffect())
            .Set(nn.StartPoint, new Func<Vector3>(StartV3))
            .Set(nn.Direction, new Func<Vector3>(DirV3))
            .Set(nn.TimeLeft, 0.2f);
        fix.AddNode(new SN_AddSkillToStack());
        fix.AddNode(new SN_SetState()).Set(nn.state, UnitState.Space);
        fix.AddNode(new SN_ThrowUnit())
            .Set(nn.TarGetPoint, new Func<Vector3>(TarV3))
            .Set(nn.HighThrow, ClassSetting.NBool(nn.HighThrow));
        //stack------------------------------------------------------------------------------------------------------------------------
        runToBreak.AddNode(new SN_PauseSkill_SelfPlayer());
    }
}
