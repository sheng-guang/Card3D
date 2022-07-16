using System.Collections;
using System.Collections.Generic;
using UnityEngine;

using System.Linq;
using System;

public class CompChooseUnit : LayerCompResUI
{
    public void OnEnable()
    {
        BaseDatas = UnitData.GetAllData().ToList();
        Fresh();
    }
    public void AddSearchingRule(WhereFunc<UnitData> r)
    {
        if (rules.Contains(r) == false) rules.Add(r);
        Fresh();
    }

    IEnumerable<UnitData> BaseDatas = null;
    HashSet<WhereFunc<UnitData>> rules = new HashSet<WhereFunc<UnitData>>();
    List<UnitData> datas = new List<UnitData>();

    public UnitUI pre;
    public List<UnitUI> CreatedUI = new List<UnitUI>();
    public void AddOnClickListener(Action<UnitData> act)
    {
        OnClick += act;
    }
    Action<UnitData> OnClick;
    public void OnClickComp(UnitUI d)
    {
        OnClick?.Invoke(d.data);
    }

    public void Fresh()
    {
        var d = BaseDatas;
        foreach (var item in rules)
        {
            if (item.func == null) continue;
            d = d.Where(item.func);
        }
        datas = d.ToList();


        pre.gameObject.SetActive(false);
        while (CreatedUI.Count < datas.Count)
        {
            UnitUI ne = Instantiate(pre, pre.transform.parent);
            CreatedUI.Add(ne);
            ne.gameObject.SetActive(true);
        }
        for (int i = 0; i < CreatedUI.Count; i++)
        {
            var to = CreatedUI[i];
            if (datas.Count > i) { to.SetData(datas[i]); to.gameObject.SetActive(true); }
            else CreatedUI[i].gameObject.SetActive(false);

        }
    }

    public class WhereFunc<T>
    {
        public Func<T, bool> func = null;
    }

}
