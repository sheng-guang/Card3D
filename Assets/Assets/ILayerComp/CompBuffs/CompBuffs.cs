using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System;
public class CompBuffs : LayerComp, IUpdata_
{
    public override void Awake_OnSetMaster()
    {
        base.Awake_OnSetMaster();
        this.AddToUpDate_List();
        pre.gameObject.SetActive(false);
        
        //act func
        Act_EachBuff = EachBuff;
        Func_CreatNewBuffUI = CreatNewBuffUI;
    }    
    
    [Header("buff")]
    public Buff3DUI pre;
    public List<Buff3DUI> Created;

    public void Update_()
    {       
        FreshBuff();//todo
    }  
        
    int NextIndex = 0;
    public void FreshBuff()
    {
        NextIndex = 0;
        eve.ForEachBuff(up,Act_EachBuff);
        for (int i = NextIndex; i < Created.Count; i++)
        {
            Created[i].gameObject.SetActive(false);
        }
    }
     Action<Buff> Act_EachBuff;
    public void EachBuff(Buff b)
    {
        var ne= Created.EnsureElement(NextIndex, Func_CreatNewBuffUI);
        ne.SetData(b);
        ne.gameObject.SetActive(true);
        NextIndex++;
    }
    Func<Buff3DUI> Func_CreatNewBuffUI;
    public Buff3DUI CreatNewBuffUI()
    {
        var re = Instantiate(pre, pre.transform.parent);
        return re;
    }


}
