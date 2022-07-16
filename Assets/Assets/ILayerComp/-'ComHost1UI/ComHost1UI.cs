using System.Collections;
using System.Collections.Generic;
using UnityEngine;

using TMPro;
public class ComHost1UI : LayerCompResUI
{

    public override void Awake_OnSetMaster()
    {
        base.Awake_OnSetMaster();
        //Debug.Log("here");
        HostTurnTimeLeft = host.ExParam<float>(nn.TurnTimeLeft);
        host.Event.TimeLeftCall.Listen(OnTurnLeftChange);

    }
    IParam<float> HostTurnTimeLeft;

    public TextMeshProUGUI TimeLeft;
    public void OnTurnLeftChange()
    {
      if(TimeLeft) TimeLeft.text = ""+(int)HostTurnTimeLeft.Value;
    }

}
