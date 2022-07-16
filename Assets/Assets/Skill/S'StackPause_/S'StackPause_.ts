import { eve, ResArgs, SNResult, StackSkill_Delegate } from "csharp";

let create=function(a:ResArgs){
    let re=new StackSkill_Delegate();
    re.stackStart.AddFunc(()=>{
        eve.PauseSkillForPlayer(re,re.player.ID);
        return SNResult.ToNext;
    })
    re.runToBreak.AddFunc(()=>{
        return eve.SN_TestPause(re);
    })
    return re;

}


