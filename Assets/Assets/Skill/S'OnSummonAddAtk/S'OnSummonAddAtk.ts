import {  GameLogicFunctions, eve,   TriggerSkill_Delegate, CallKind, CallReaction_Delegate, CallSys, Buff_Delegate, StackSkill_Delegate, Skill_Delegate, ResArgs, Skill, Call, BuffSys, Layer, Driver, nn, SNResult} from "csharp";
import { fullN } from "FullName";


let newBuff=function(){
    let re=new Buff_Delegate();
    eve.SetBuffImageName(re,"-'Hero1")
    let toAdd=0;
    re.A_setKV.AddAct((b,key,arg)=>{
        if(key==nn.BuffUpgrade)toAdd++;
    })
    re.A_Apply.AddAct((b)=>{
        let lastAtk=re.Up.unit.atk.Value_Base.Value;
        re.Up.unit.atk.SetValueBuffed(lastAtk+toAdd);
    })
    return re;
}



let create = function (a:ResArgs){
    let re=new TriggerSkill_Delegate();

    re.onCall.AddAct((skill,call)=>{
        if(call.Kind!=CallKind.OnSummon)return;





        call.AddReactionAct(()=>{
            var stackSkill=eve.CreatSkill(fullN.Skill.StackPauseTime_).Origin() as StackSkill_Delegate;
            eve.SetSkillImageName(stackSkill,"add atk");

            stackSkill.VarFloat(nn.TimeLeft,0.6);
            stackSkill.runToBreak.AddFunc(()=>{
                let key=re.ID+"|"+re.FullName;
                let to=eve.GetBuff(re.unit,key);
                if(to==null){
                    to=newBuff();
                    eve.AddBuff(re.unit,to,key);

                    eve.WillApplyToData(to,to.Up.unit.atk);
                }
                to.SetKV(nn.BuffUpgrade,null);
                eve.AddNeedFreshData(skill.unit.atk);
                return SNResult.Exit;
            })





            
            eve.SetSkillUp(stackSkill,re.unit);
            eve.AddToStackSkillList(stackSkill);
            
        });
    })
    


    return re;
}

