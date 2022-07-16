using System.Collections;
using System.Collections.Generic;
using UnityEngine;

using System;
public class CompSkills : LayerComp,IUpdata_
{
    public override void Awake_OnSetMaster()
    {
        base.Awake_OnSetMaster();
        this.AddToUpDate_List();
        pre.gameObject.SetActive(false);

        Act_FreshSkill = FreshSkill;
        Func_CreatNewBuffUI = CreatNewBuffUI;
    }
    [Header("skill")]
    public Skill3DUI pre;
    public List<Skill3DUI> Created;
    public void Update_()
    {
        FreshSkills();
    }

    int NextIndex = 0;
    public void FreshSkills()
    {
        NextIndex = 0;
        unit.skills.ForEach(Act_FreshSkill);
        for (int i = NextIndex; i < Created.Count; i++)
        {
            Created[i].SetData(null);
        }
    }
    Action<Skill> Act_FreshSkill = null;
    public void FreshSkill(Skill s)
    {
        var ne = Created.EnsureElement(NextIndex, Func_CreatNewBuffUI);
        ne.SetData(s);
        NextIndex++;
    }
    Func<Skill3DUI> Func_CreatNewBuffUI;
    public Skill3DUI CreatNewBuffUI()
    {
        var re = Instantiate(pre, pre.transform.parent);
        re.gameObject.SetActive(true);
        return re;
    }


}
