using System.Collections;
using System.Collections.Generic;
using UnityEngine;

using TMPro;
public class ComAtkParam : LayerComp
{
    public GameObject group;
    public TMP_Text Text;
    public override void Awake_OnSetMaster()
    {
        base.Awake_OnSetMaster();
        unit.Event.AtkCall.Listen(OnAtkChange);
    }
    public void OnAtkChange()
    {
        //Debug.Log("---");
        //Debug.Log(unit.atk.Value_Base.HasValue);
        //Debug.Log(unit.atk.Value_Buffed.HasValue);

        group.SetActive(unit.atk.Value_Buffed.HasValue);
        if (unit.atk.Value_Buffed.HasValue == false) return;
        Text.text = "" + unit.atk.Value_Buffed.Value;

    }
}
