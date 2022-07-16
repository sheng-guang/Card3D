using System.Collections;
using System.Collections.Generic;
using UnityEngine;

using System;

public class Skill_TriggerCard : Skill,IFixSkill
{

    public void Fix()
    {
        if (unit.IsSpaceInSpace() == false) return;
        //
        if (unit.Follower == null) return;
        //Debug.Log(1);
        result = null;
        eve.OverlapUnit(unit.RealPoss, 5f, GetResrult);
        if (result == null) return;

        
        {

            InputMsg to = CreatInput(0);
            to.Form.CreatChild(1);
            to.Form.Child.LayerID = result.ID;


            unit.Follower.ServerUseInput(to);
        }

    }
    Unit result;

    public void GetResrult(Unit u)
    {
        //Debug.Log(2);
        if (result != null) return;
        if (u.ID == unit.ID) return;
        if (u.ID == unit.Follower.ID) return;
        result = u;
        //result = u as FireBall;

    }


}
