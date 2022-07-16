using System.Collections;
using System.Collections.Generic;
using UnityEngine;

using System;

public class UseChangeVToUp : MixSkill_Delegate, IStackSkill
{
    public UseChangeVToUp() 
    {
        //SetOneTarMode(this);

        visible.AddNode(new Visable_OnCard());
        
        tested_Then_RunSkill.AddNode(new SN_GetCopySkill().MarkAs(out var s));
        tested_Then_RunSkill.AddNode(new SN_ApplyOneTar_To_Skill())
            .Set(nn.Skill, s);
        tested_Then_RunSkill.AddNode(new SN_MoveSkillToStackList())
            .Set(nn.Skill, s);

        stackStart.AddNode(new SN_SetUp_Player());
        stackStart.AddNode(new SN_SetSpace_Spce());
        stackStart.AddNode(new SN_SetState_Space());
        stackStart.AddNode(new SN_SetPoss()).Set(nn.Point, new Func<Vector3>(StartV3));
    }


    const float total = 2;
    float Fixed = 0;


    public override bool Run_ToBreak()
    {
        Fixed += TimeSetting.FixedDeltaTime;


        float percent = Fixed / total + 0.1f;
        percent = percent.IfOver1(1);

        Vector3 p = Vector3.Lerp(StartV3() , TarV3(),percent);
        eve.SetPoss(unit, p);
        if (Fixed > total) ExistStack();
        return true;
    }

}
