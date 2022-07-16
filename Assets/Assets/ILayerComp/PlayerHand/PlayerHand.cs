using System.Collections;
using System.Collections.Generic;
using UnityEngine;

using System;
using TMPro;
public class PlayerHand : LayerComp, ICameraFollowe_update
{
    public override void Awake_OnSetMaster()
    {
        base.Awake_OnSetMaster();
        Cam.AddToFollowerList(this);
        player.Event.IsLocalCall.Listen(OnisLocalChang);
        player.Event.NowManaCall.Listen(OnManaChange);
        player.Event.MaxManaCall.Listen(OnManaChange);
        player.hand.Listen(OnHandChange);
    }
    //public GameObject HandCam;
    public Camera cam;
    public GameObject canvas;
    [Range(30,120)]
    public float Angle = 60;
    public float FarNearDis = 0.4f;
    public float SpaceWide = 1f;
    public float HBoarder = 0.01f;
    public float ScreenW = 1920;
    public float ScreenH = 1080;
    private void OnValidate()
    {
        cam = GetComponentInChildren<Camera>();
        if (cam == null) return;
        float TarHight = (SpaceWide / ScreenW) * ScreenH;
      
        //Debug.Log("tar height:"+  TarHight+"     "+ScreenW+"   "+ScreenH);
        float dis = (TarHight/2) / Mathf.Tan((Angle/2) / 180 * Mathf.PI);
        float DisReal = ((TarHight / 2) + HBoarder) / Mathf.Tan((Angle / 2) / 180 * Mathf.PI);

        cam.transform.localPosition = new Vector3(0, TarHight/2, -DisReal);

        {
            float halfFarNearDis = FarNearDis / 2;
            cam.farClipPlane = dis + halfFarNearDis;
            cam.nearClipPlane = dis - halfFarNearDis;
            float mindeis = 0.02f;
            if (cam.nearClipPlane <= mindeis) cam.nearClipPlane = mindeis;
        }
        {
            cam.fieldOfView = Angle;
        }

    }
    public void OnHandChange(int option,Unit value)
    {
        if (option == ListOption.Add) value.MoveTransfTo(transform);
    }
    public void OnisLocalChang()
    {
        cam.gameObject.SetActive(player.IsLocal);
        canvas.gameObject.SetActive(player.IsLocal);
    }

    public void FollowCamUpdate_()
    {
        transform.eulerAngles = Cam.eularangle_0y0();
        if (player.hero) transform.position = player.hero.VisualPoss + Cam.foward_x0z().normalized;
        Physics.SyncTransforms();
    }

    [Header("mana")]
    public TextMeshPro Mana;
    public string ManaStart = "Mana: ";
    public void OnManaChange()
    {
        Mana.text =ManaStart+ player.Mana.Value+"/"+player.ManaMax.Value_Buffed;
    }

}
