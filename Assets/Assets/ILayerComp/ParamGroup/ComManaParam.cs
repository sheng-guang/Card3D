using System.Collections;
using System.Collections.Generic;
using UnityEngine;

using TMPro;
public class ComManaParam : LayerComp
{
    public GameObject group;
    public TextMeshPro Text;
    public override void Awake_OnSetMaster()
    {
        base.Awake_OnSetMaster();
        unit.Event.ManaCostCall.Listen(OnManachange);
    }
    public void OnManachange()
    {
        group.SetActive(unit.ManaCost.Value_Buffed.HasValue);
        if (unit.ManaCost.Value_Buffed.HasValue == false) return;
        Text.text = "" + unit.ManaCost.Value_Buffed.Value;

    }



}
