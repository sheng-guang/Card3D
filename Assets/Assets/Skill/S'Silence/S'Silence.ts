import { Buff_Delegate, eve,  ResArgs,   SNResult,   SN_PauseSkill_SelfPlayer, StackSkill_Delegate } from "csharp";

let GetBuff=function(){
    let re=new Buff_Delegate();
    eve.SetBuffImageName(re,"silence");
    return re;
}

let create=function(a:ResArgs){
    var re=new StackSkill_Delegate();
    re.runToBreak.AddNode( new SN_PauseSkill_SelfPlayer());
    re.runToBreak.AddFunc(()=>{
        console.log("silence tar: "+re.TarUnit());
        let to=re.TarUnit();
        eve.Silence(to);

        let key="silence"
        eve.AddBuff(to,GetBuff(),key);
        
        return SNResult.Exit;
    })
    return re;
}