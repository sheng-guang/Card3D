using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Skill_AddAnyCard : Skill
{
    public override void OnSetID_LoadStructure()
    {
        base.OnSetID_LoadStructure();
        CompChooseUnit c= up.EnsureComponet("-'CompChooseUnit") as CompChooseUnit;
        if (c) c.AddOnClickListener(OnSeledt);
    }
    public void OnSeledt(UnitData fullname)
    {
        var ne = Layer.CreatUnit(fullname.FullName);
        var p = Driver.LocalPlayerID.To<LayerID>().player;
        if (p == null) return;
        eve.SetState(ne, UnitState.Card);
        eve.SetSpace(ne, UnitSpace.Hand);
        eve.SetUP(ne, p);

    }
}
