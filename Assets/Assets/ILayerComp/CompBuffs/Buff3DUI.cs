using System.Collections;
using System.Collections.Generic;
using UnityEngine;

using UnityEngine.UI;
public class Buff3DUI : MonoBehaviour
{
    private void Awake()
    {
        eve.Listen(OnBuffChange);
    }
    public void SetData(Buff b)
    {
        NowBuff = b;
        eve.NewData(b.FullName);
    }

    Buff NowBuff;
    VarChangeEvent_Class<string> eve = new VarChangeEvent_Class<string>();

    public MeshRenderer render;
    public float Render_W_H = 1;
    public string TextureName = "_Texture";
    public void OnBuffChange()
    {
        if (NowBuff == null) return;
        render.LoadTexture(TextureName, Render_W_H, NowBuff.FullName,0);
    }
}
