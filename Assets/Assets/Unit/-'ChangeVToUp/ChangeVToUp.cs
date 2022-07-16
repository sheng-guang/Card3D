using System.Collections;
using System.Collections.Generic;
using UnityEngine;

using System;

public class ChangeVToUp : Unit
{
    public override void OnSetID_Awake()
    {
        base.OnSetID_Awake();     
        AddSkill(CreatSkill<UseChangeVToUp>(), SkillKind.Input, 0);
    }
}