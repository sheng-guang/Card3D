using System.Collections;
using System.Collections.Generic;
using UnityEngine;



public class Skill_SendBack : FixSkill_Delegate
{
    public override void OnSetID_LoadStructure()
    {
        base.OnSetID_LoadStructure();
        fix.AddNode(new SN_OnlySpaceInSpace());
        fix.AddNode(new SN_Wait_OverLap_OneUnit_OrBreak().MarkAs(out var re));
        re.F_TestUnit.AddNode(new F_NoHero());
        re.F_TestUnit.AddNode(new F_NoSelf());
        re.F_TestUnit.AddNode(new F_OnlySpaceState());

        fix.AddNode(new SN_SendBack_Unit())
            .Set(nn.OverLapResult, re);
        fix.AddNode(new SN_SetState_Card());
    }


}
public class F_OnlySpaceState : Func1Node<Skill, Unit, bool>
{
    public override void Invoke(Unit p1)
    {
        if (eve.IsState(p1, UnitState.Space) == false) { re(false); return; }
        return;
    }
}
public class F_NoHero : Func1Node<Skill, Unit, bool>
{
    public override void Invoke(Unit p1)
    {
        if (p1.IsHero) { re(false); return; }
        return;
    }
}
public class F_NoSelf:Func1Node<Skill, Unit, bool>
{
    public override void Invoke(Unit p1)
    {
        if(p1==self.unit) { re(false); return; }
        return;
    }
}
public class F_NoFriend : Func1Node<Skill, Unit, bool>
{
    public override void Invoke(Unit p1)
    {
        if(p1.player==self.player) { re(false);return; }
        return;
    }
}
