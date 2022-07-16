using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CamraRawFix : MonoBehaviour
{
    public bool doChange = false;
    public Camera cam;
    public RenderTexture rt;

    public Material m;
    public string TextureName;
    private void Awake()
    {
        if (doChange == false) return;
        mRt = new RenderTexture(rt.width, rt.height, rt.depth, RenderTextureFormat.ARGB32, RenderTextureReadWrite.sRGB);
        mRt.antiAliasing = rt.antiAliasing;
        cam.targetTexture = mRt;
        m.SetTexture(TextureName, mRt);
        
    }
    RenderTexture mRt;
    //private void Update()
    //{
    //    cam.Render();
    //}
    private void OnDestroy()
    {
        m.SetTexture(TextureName, rt);
    }
}
