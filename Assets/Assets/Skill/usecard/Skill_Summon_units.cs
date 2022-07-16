
using UnityEngine;
using System;
public class Skill_Summon_units : InputSkill_Delegate
{

    public override void OnSetID_LoadStructure()
    {
        base.OnSetID_LoadStructure();

        visible.AddNode(new Visable_OnCard());
        eveInputSkill.EnableOneTargetMode(this);

        eveInputSkill.EnableReach(this, 40f);
        eveInputSkill.EnableNewSkill(this, nameof(Skill_CreatUnit), SkillListKind.Long);
        eveInputSkill.OnNewSkill(this, x => x.ClassSetting.Str(nn.FullName, "-'Wall"));

    }
}
public class Skill_CreatUnit : LongSkil_Delegate
{
    public override void OnSetID_LoadStructure()
    {
        base.OnSetID_LoadStructure();
        fixStart.AddFunc(() =>
        {
            eve.SetSpace(unit, UnitSpace.Space);
            eve.SetPoss(unit, TarV3() + Vector3.up);
            return SNResult.ToNext;
        });
        //A_FixStart.Add(new SN_SetSpace_Spce());
        //A_FixStart.Add(new SN_SetPoss())
        //    .Set(NN.Point, new Func<Vector3>(TarV3))
        //    .Set(NN.OffSet, Vector3.up);
        fix.AddFunc(() =>
        {
            var ToPoss = unit.RealPoss + Vector3.up * 10;
            var ne = Layer.CreatUnit(ClassSetting.Str(nn.FullName));
            var to = eve.getPlayer_offSet(player.ID, 1);
            eve.SetUP(ne, to);
            eve.SetSpace(ne, UnitSpace.Space);
            eve.SetState(ne, UnitState.Space);
            eve.SetPoss(ne, ToPoss);
            var c = new Call(CallKind.OnSummon);
            eve.DoCall(c);
            return SNResult.ToNext;
        });


        //A_Fix.Add(new SN_CreatNewUnitForPlayer())
        //    .Set(NN.FullName, groupData.Ex_Ptr<string>(NN.FullName))
        //    .Set(NN.OffSetY, 10.0f)
        //    .Set(NN.ID_offset, 1);
    }
}