using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class StackPauseTime_ :StackSkill_Delegate
{
    public IGet<float> PauseTime = 0f.ToIGet < float>();
    public StackPauseTime_()
    {
        setKV.AddAct((s, k, v) =>
        {
            if (k == nn.TimeLeft)
            {
                v.TryToIGet_ref(ref PauseTime);
            }

        });

        stackStart.AddFunc(() =>
        {
            //Debug.Log("pause: " + PauseTime.Value);
            eve.PauseSkillForSeconds(this, PauseTime.Value);
            return SNResult.ToNext;
        });
        runToBreak.AddFunc(() =>
        {
            //Debug.Log("pause: " + PauseTime.Value);
            return eve.SN_TestPause(this);
        });
    }


}

//let create = function(a: ResArgs){
//    let PauseTime=0;
//let re = new StackSkill_Delegate();
//re.A_setKV.AddAct((s, k, v) => {
//    // console.log("setkv  "+k+"   "+v);
//    if (k == nn.TimeLeft) PauseTime = v;
//})

//    re.A_StackStart.AddFunc(() => {
//        eve.PauseSkillForSeconds_EnsureComp(re, PauseTime);
//        return SkillNodeResult.ToNext;
//    })
//    re.A_Run_ToBreak.AddFunc(() => {
//        return eve.SN_TestPause(re);
//    })
//    return re;
//}