using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System;
public class MixSkill_Res : MixSkill_Delegate
{

    public Action<MixSkill_Res> F_Load;
    public override void OnSetID_LoadStructure()
    {
        base.OnSetID_LoadStructure();
        F_Load?.Invoke(this);

    }

}