using System.Collections;
using System.Collections.Generic;
using UnityEngine;

using System;
public class Skill_wsdaMoveNotOnLand : Skill, IFixSkill
{
    public float speed = 5;
    public void Fix()
    {
        if (unit.OnLand) return;
        float y = unit.rig.velocity.y;
        var m = eve.GetMoveVector(player, player.WS.Value, player.DA.Value);
        m *= speed;
        m.y = y;
        eve.SetV(unit, m);

        var f = m;
        m.y = 0;
        //LayerExtra.AddPoss(this, m * TimeSetting.FixedDeltaTime * speed);
        if (m.magnitude != 0) eve.SetFoward(unit, m);
        //if (Input.GetKey(KeyCode.Space)) unit.rig.velocity += Vector3.up * speed;
    }
}

public class Skill_wsdaMove : Skill, IFixSkill
{
    public float speed = 5;



    public void Fix()
    {
        if (unit.OnLand == false) return;

        var m = eve.GetMoveVector(player, player.WS.Value, player.DA.Value);
        eve.SetV(unit, m * speed);

        //LayerExtra.AddPoss(this, m * TimeSetting.FixedDeltaTime * speed);
        if (m.magnitude != 0) eve.SetFoward(unit, m);
        if (Input.GetKey(KeyCode.Space)) unit.rig.velocity += Vector3.up * speed;
    }
}
