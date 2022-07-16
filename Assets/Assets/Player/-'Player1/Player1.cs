using System.Collections;
using System.Collections.Generic;
using UnityEngine;

using System;
[SerializeField]
public struct WSDA
{
    public Int16 WS;
    public Int16 DA;
}
public class Player1 : Player
{
    public override void OnSetID_Awake()
    {
        base.OnSetID_Awake();
        EnsureComponet("-'" + nameof(CompPlayerUnitController));
    }
    private void Update()
    {
        SendWsDa();
        SendFoward();
    }

    [SerializeField]
    public WSDA MoveInput;
    //public int Cws, Cda;
    //public int Sws, Sda;
    public void SendWsDa()
    {
        if (IsLocal == false) return;
        MoveInput.WS = (short)((Input.GetKey(KeyCode.W) ? 1 : 0) + (Input.GetKey(KeyCode.S) ? -1 : 0));

        MoveInput.DA = (short)((Input.GetKey(KeyCode.D) ? 1 : 0) + (Input.GetKey(KeyCode.A) ? -1 : 0));
        if (MoveInput.WS == WS.Value && MoveInput.DA == DA.Value) return;

        this.ClientSendInput( MoveInput,10000);
    }
    public void SendFoward()
    {
        if (IsLocal == false) return;
        if (Cam.foward() == CamFoward.Value) return;
        this.ClientSendInput(Cam.foward(), 10001);
    }
    public override void ServerUseInput(InputMsg m)
    {
        switch (m.Kind)
        {
            case 10000: GetWsDa(m.FixedLenByte); return;
            case 10001: GetFoward(m.FixedLenByte); return;
        }

    }

    public void GetFoward(FixedLenByteMsg m)
    {
        var v = m.ToMsg<Vector3>();
        CamFoward.Value = v;
    }
    public void GetWsDa(FixedLenByteMsg m)
    {
        var msg= m.ToMsg<WSDA>();
        WS.Value = msg.WS;
        DA.Value = msg.DA;
        //Debug.Log(WS.Value + "  " + DA.Value);
        //{
        //    Sws = msg.WS;
        //    Sda = msg.DA;
        //}

    } 
}
