using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class CompSpeedParam :LayerComp
{
    public GameObject group;
    public TMP_Text Text;
    public override void Awake_OnSetMaster()
    {
        base.Awake_OnSetMaster();
        unit.Event.SpeedCall.Listen(OnHPchange);
    }
    public ParamBuffable<N< int>> Param => unit.speed;
    public void OnHPchange()
    {
        group.SetActive(Param.Value_Buffed.HasValue);
        if (Param.Value_Buffed.HasValue == false) return;
        Text.text = "" + Param.Value_Buffed.Value;
    }

}
