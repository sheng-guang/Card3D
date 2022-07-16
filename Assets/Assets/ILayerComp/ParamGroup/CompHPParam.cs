using System.Collections;
using System.Collections.Generic;
using UnityEngine;

using TMPro;
public class CompHPParam : LayerComp
{
    public GameObject group;
    public TMP_Text Text;
    public override void Awake_OnSetMaster()
    {
        base.Awake_OnSetMaster();
        unit.Event.HPCall.Listen(OnHPchange);
    }
    public void OnHPchange()
    {
        group.SetActive(unit.HP.Value.HasValue);
        if (unit.HP.Value.HasValue == false) return;
        Text.text = ""+unit.HP.Value.Value;

    }

}
