import { BuffSys,  Buff_Delegate,  CallKind,  eve,  nn,  Skill,   SNResult,   StackSkill_Delegate,  TriggerSkill_Delegate,  UnitSpace } from "csharp"
import { fullN } from "FullName";

let newBuff=function(){
    let re=new Buff_Delegate();
    let toReduce=0;
    re.A_setKV.AddAct((b,key,arg)=>{
        if(key==nn.BuffUpgrade){toReduce++}
    })
    re.A_Apply.AddAct((b)=>{
        let lastCous = re.Up.unit.ManaCost.Value_Buffed.Value;

        re.Up.unit.ManaCost.SetValueBuffed(lastCous-toReduce);
    })
    return re;
}
let create=function(){
    let re=new TriggerSkill_Delegate();

    re.onCall.AddAct((skil,c)=>{
        if(c.Kind!=CallKind.OnSummon)return;

        
        c.AddReactionAct(()=>{
            var stackSkill=eve.CreatSkill(fullN.Skill.S_StackPause_).Origin() as StackSkill_Delegate;
            eve.SetSkillImageName(stackSkill,fullN.Skill.S_ReduceFee);
            
            stackSkill.runToBreak.AddFunc(()=>{
                let key=re.ID+"|"+re.FullName;
                let to=eve.GetBuff(re.unit,key);
                if(to==null)
                {
                    to=newBuff();
                    eve.AddBuff(re.unit,to,key);

                    eve.WillApplyToData(to,to.Up.unit.ManaCost)
                }
                to.SetKV(nn.BuffUpgrade,null);
                
                eve.AddNeedFreshData(re.unit.ManaCost);
                return SNResult.Exit;
            })





            eve.SetSkillUp(stackSkill,re.unit);
            eve.AddToStackSkillList(stackSkill);

        })

    })
    // let re=new BuffSkill_Delegate();
    // re.A_OnSetID_LoadStructure.AddAct((x)=>{
    //     re.unit.Event.SpaceCall.Listen(()=>{
    //         if(eve.IsSpace(re.unit,UnitSpace.Space)){
    //             BuffSysData.ListenDataChange(re,BuffSys.FreshVersionMonitor);
    //         }
    //         else{
    //             BuffSysData.CancelListene(re,BuffSys.FreshVersionMonitor);
    //         }
    //     })
    // })
    // re.A_FreshActive.AddAct((b)=>{
    //     console.log("fresh active");
    // })
    return re;
}