using System.Collections;
using System.Collections.Generic;
using UnityEngine;


public class Skill_WSDAMove_plus : Skill, IFixSkill
{
    public override string FullName => "WSDA MOVE";
    public override void OnSetID_LoadStructure()
    {
        base.OnSetID_LoadStructure();
        unit.Ex<float>(nn.HardTurn)
            .SetIGet(new IGet_Value<float>().MarkAs(out HardTurn));
        HardTurn.Value = 1.1f;

        unit.Ex<bool>(nn.MirrorTurn)
            .SetIGet(new IGet_Value<bool>().MarkAs(out MirrorTurn));
    }
    IGet_Value<float> HardTurn;
    IGet_Value<bool> MirrorTurn;

    float step = 360/0.2f * Time.deltaTime;
    public float speed = 5;
    public float acc = 10;
    MovementData data = new MovementData();

    Vector3 lastTarV;
    public void Fix()
    {
        //if (player == null) return;

        if (unit.OnLand == false) return;
        if (unit.speed.Value_Buffed.HasValue == false) return;
        var FullV = unit.rig.velocity;
        var LastV = FullV;
        LastV.y = 0;

        Vector3 TarV = eve.GetMoveVector(player, player.WS.Value, player.DA.Value)*(speed+unit.speed.Value_Buffed.Value);
        var NowV= LastV.GetNextV(TarV, acc, Time.deltaTime, data);
        eve.SetV(unit, NowV);


        float? angle = PhyExtra.GetAnimFoward(TarV, NowV, data);
        if (angle == null) angle = unit.transf.eulerAngles.y;
        unit.transf.eulerAngles = new Vector3(0, angle.Value, 0);
        //todo  maybe gc
        HardTurn.Value = data.HardTurnPercentage;
        //todo  maybe gc
        MirrorTurn.Value = data.MirrorTurn;

    }

}
