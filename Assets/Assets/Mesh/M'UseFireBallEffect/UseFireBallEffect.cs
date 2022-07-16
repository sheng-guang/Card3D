using System.Collections;
using System.Collections.Generic;
using UnityEngine;

//using UnityEngine.VFX;
//using UnityEngine.Timeline;
//using UnityEngine.Playables;
public class UseFireBallEffect : MeshRes
{ 
    AsyncResTool tool;    
    private void Awake()
    {
        tool = GetComponent<AsyncResTool>();
        tool.ListenOnCreat(OnCreat);
        StartTime = GameTime.Time;
    }
    float StartTime;
    VFX C;
    public void OnCreat()
    {
        //print("on creat");
        C = transform.GetChild(0).GetComponent<VFX>();// GetComponentInChildren<VFX>();
        C.SetStartGameTime(StartTime);
        //print(C);
    }



}

