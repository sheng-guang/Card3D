using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ComTeamIcon : LayerComp
{
    public MaterialController M;
    public override void Awake_OnSetMaster()
    {
        base.Awake_OnSetMaster();
        if(M==null)M=GetComponent<MaterialController>();
    }
    private void Start()
    {
        //print(player);
        if (player == null) return;
        player.Event.IsLocalCall.Listen(OnLocalChange);

    }
    public bool Test_show_Local = true;
    private void OnValidate()
    {
        if (Test_show_Local)SetLocalColor();
        else SetNoLocalColor();

    }
    public string ColorName= "_Color";
    public Color colorLocal=Color.green;
    public float colorLocal_Power=1;

    public Color colorNotLocal=Color.red;
    public float colorNotLocal_Power=1;
    public void OnLocalChange()
    {
        if (M == null) return;

        if (player.IsLocal) SetLocalColor();
        else SetNoLocalColor();
    }

    public void SetLocalColor()
    {
        M.SetColor_Power(ColorName, colorLocal, colorLocal_Power);
    }
    public void SetNoLocalColor()
    {
        M.SetColor_Power(ColorName, colorNotLocal, colorNotLocal_Power);
    }
}
