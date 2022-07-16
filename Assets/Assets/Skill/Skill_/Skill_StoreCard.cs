using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Skill_StoreCard :MixSkill_Delegate
{

    public Skill_StoreCard()
    {
        //SetOneTarMode(this);
        visible.AddNode(new Visable_OnSpace());

        testNodeUseful.AddNode(new TestNodeUseful_IsSpace()).Set(nn.NodeKind, 1).Set(nn.space, UnitSpace.Hand); 
        testNodeUseful.AddNode(new TestNodeUseful_isSelfTeam()).Set(nn.NodeKind, 1);
        testNodeUseful.AddNode(new TestNodeUseful_CanAddFollower()).Set(nn.NodeKind, 1);
    }


    public override void Tested_Then_RunSkill(InputForm f)
    {
        var to = f.Child.LayerID.Value.To<Unit>();
        eve.SetUP(to, unit);
    }
}
/// <summary>
/// NodeKind  reversal
/// </summary>
public class TestNodeUseful_CanAddFollower : TestNodeUseful_Node
{
    public override void Set_(string key, object o)
    {
        base.Set_(key, o);
        if (key == nn.NodeKind) o.TryToIGet_ref(ref NodeKind);
        else if (key == nn.reversal) o.TryToIGet_ref(ref ReversalTest);
    }
    IGet<int> NodeKind = 1.ToIGet<int>();
    IGet< bool> ReversalTest = false.ToIGet<bool>();
   bool needRule => ReversalTest.Value ? false : true;
    public override void Invoke(InputNode p1)
    {
        if (p1.NodeKind != NodeKind.Value) return;
        if (p1.HaveUnit(out var to) == false) { re(false); return; }
        if(self.up.CanAddFollower(to)!=needRule) { re(false); return; }
        return;
    }
}
/// <summary>
/// NodeKind reversal
/// </summary>
public class TestNodeUseful_isSelfTeam : TestNodeUseful_Node
{
    public override void Set_(string key, object o)
    {
        base.Set_(key, o);
        if (key == nn.NodeKind) o.TryToIGet_ref(ref NodeKind);
        else if (key == nn.reversal) o.TryToIGet_ref(ref ReversalTest);
    }
    IGet<int> NodeKind;
   IGet< bool> ReversalTest=false.ToIGet<bool>();
    bool NeedIsFriend => ReversalTest.Value ? false : true;
    public override void Invoke(InputNode p1)
    {
        if (p1.NodeKind != NodeKind.Value) return;
        if (p1.HaveUnit(out var to) == false) { re(false); return; }
        if (to.IsFriend(self.up)!= NeedIsFriend) { re(false); return; }
        return;
    }
}
/// <summary>
/// NodeKind space
/// </summary>
public class TestNodeUseful_IsSpace : TestNodeUseful_Node
{
    public override void Set_(string key, object o)
    {
        base.Set_(key, o);
        if (key == nn.NodeKind) o.TryToIGet_ref(ref NodeKind);
        else if (key == nn.space) o.TryToIGet_ref(ref NeedSpace);
    }
   IGet< int> NodeKind;
   IGet< int> NeedSpace;
    public override void Invoke(InputNode p1)
    {
        if (p1.NodeKind != NodeKind.Value) return;
        if (p1.HaveUnit(out var to) == false) { re(false);return; }
        if (to.IsSpace(NeedSpace.Value) == false) { re(false);return; }
        return;

    }
}


