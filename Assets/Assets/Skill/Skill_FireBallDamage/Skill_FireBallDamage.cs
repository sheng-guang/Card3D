using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Skill_FireBallDamage : FixSkill_Delegate
{

    public override void OnSetID_LoadStructure()
    {
        //oooooo
        base.OnSetID_LoadStructure();
        fix.AddNode(new SN_OnlySpaceInSpace());
        fix.AddNode(new SN_Wait_OverLap_OneUnit_OrBreak().MarkAs(out var re))
            .Set(nn.R, 0.5f);
        re.F_TestUnit.AddNode(new F_NoSelf());
        re.F_TestUnit.AddNode(new F_OnlySpaceState());
        re.F_TestUnit.AddNode(new F_NoFriend());

        fix.AddFunc(() =>
        {
            {
                var to = eve.CreatSkill<StackPauseTime_>().Branch(this) as StackSkill_Delegate;
                eve.AddSkillOnlyLink(unit, to);
                to.SetKV(nn.TimeLeft, 0.6f);
                eve.SetSkillImageName(to, "FireBallDamage");
                to.runToBreak.AddNode(new SN_Damage()).Set(nn.TargetUnit, re);
                to.AddToStackSkillList();
            }

            {
                var to2 = eve.CreatSkill<LongSkil_Delegate>().Branch(this) as LongSkil_Delegate;
                eve.AddSkillOnlyLink(unit, to2);
                //to2.A_Fix.AddFunc(() =>
                //{
                //    return SNResult.ToNext + SNResult.Break_TryThisAgain;
                //});
                to2.fix.AddNode(new SN_SetState_Card());
                to2.AddToLongSkillList();
            }

            return   SNResult.ToNext;

        });



    }
}
