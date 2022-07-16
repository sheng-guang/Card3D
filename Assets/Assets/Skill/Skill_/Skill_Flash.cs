using System.Collections;
using System.Collections.Generic;
using UnityEngine;

using System;
public class Flash : LongSkil_Delegate
{

    public override void OnSetID_LoadStructure()
    {
        base.OnSetID_LoadStructure();
        fixStart.AddNode(new SN_SetUp_Player());
        fixStart.AddNode(new SN_SetSpace_Spce());

        //A_Fix.Add(new SN_SetSpace_Spce());
        fix.AddNode(new SN_SetPoss())
            .Set(nn.Point,new Func<Vector3>(StartV3))
            .Set(nn.OffSet, Vector3.up);

        fix.AddNode(new SN_SetPoss())
            .Set(nn.Unit, new Func<Unit>(SelfHero))
            .Set(nn.Point, new Func<Vector3>(TarV3));
    }


}