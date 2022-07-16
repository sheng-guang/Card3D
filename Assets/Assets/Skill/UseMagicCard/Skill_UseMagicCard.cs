using System.Collections;
using System.Collections.Generic;
using UnityEngine;

using System;

[Api]
public class UseMagicCard : InputSkill_Delegate
{

    public override void OnSetID_LoadStructure()
    {
        
        base.OnSetID_LoadStructure();

       eveInputSkill.EnableOneTargetMode(this);

    }

}
