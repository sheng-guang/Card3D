using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class UseFireBallEffect_ : VFX
{
    public override void SetStartGameTime(float t)
    {
        //Debug.Log("set time " + t);
        StartTime = t;
        Fresh();
    }
    float StartTime;
    private void Update()
    {
        Fresh();
    }
    public  float AnimLen=10;
    public float Scale=3;
    public void Fresh()
    {
        var f = GameTime.Time.GetPercentage(StartTime, AnimLen);
        //print(f);
      var scale=  f.IfOver1(0);
        
        gameObject.transform.localScale = Vector3.one * scale*Scale;
    }
}
