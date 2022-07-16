using System.Collections;
using System.Collections.Generic;
using UnityEngine;

using System;

public class Skill_Buff_SpeedUpArea : BuffSkill
{
    public Skill_Buff_SpeedUpArea()
    {
        ForEachAct = this.ForEach;
    }
    public override string FullName => "-'SpeedUpArea";

    public override void OnSetID_LoadStructure()
    {
        base.OnSetID_LoadStructure();
        unit.Event.SpaceCall.Listen(SpaceChange);
    }

    public void SpaceChange()
    {
        if (eve.IsSpace(unit, UnitSpace.Space)) 
        { BuffSys.ListenDataChange(this,BuffSys.FreshVersionMonitor); }
        else 
        { BuffSys.CancelListene(this, BuffSys.FreshVersionMonitor); }
    }


    public override void FreshActive()
    {
        base.FreshActive();
        //todo
        if (eve.IsSpaceInSpace(unit)) { eve.ForEachCallListUnit(ForEachAct); }

    }
    Action<Unit> ForEachAct;

    public void ForEach(Unit u)
    {
        string key = ID + "|" + FullName;
        if (u.Distance(up) > 3) return;
        if (eve.TryGetBuff(u, key, out var b))
        {
            b.SetKV(nn.FreshVersion, null);

        }
        else
        {
            b = new B_SpeedUp();
            b.key=key;
            eve.AddBuff(u, b, key);
            //u.LogAllBuff();
            //Debug.Log("add buff" + b.GetHashCode());
            b.SetKV(nn.FreshVersion, null);

        }
    }

}


public class B_SpeedUp : Buff
{
    public override string FullName => "SpeedUp";

    public override void OnSetUp()
    {
        base.OnSetUp();
        BuffSys.ListenDataChange(this,BuffSys.FreshVersionMonitor);
        BuffSys.WillApplyToData(this, Up.unit.speed);

    }
    public override void SetKV(string key, object o)
    {
        base.SetKV(key, o);
        if (key == nn.FreshVersion) StillActiveVersion = NowVersion;
    }
    public int StillActiveVersion;
    public override void FreshRemove()
    {
        
        base.FreshRemove();
        if (StillActiveVersion < NowVersion)
        {
            //Debug.Log($"remove self {this.GetHashCode() }   stillactive"+StillActiveVersion+"      nowVersion   "+NowVersion);
            eve.RemoveBuff(this);

        }
        //todo ÎªÊ²Ã´£¿
        else BuffSys.AddNeedFreshData(Up.unit.speed);
    }
    public override void Apply()
    {
        base.Apply();
        if (Up.unit.speed.Value_Buffed.HasValue == false) return;
        Up.unit.speed.Value_Buffed += 5;
    }

}