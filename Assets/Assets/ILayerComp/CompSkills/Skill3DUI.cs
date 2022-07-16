using System.Collections;
using System.Collections.Generic;
using UnityEngine;

using UnityEngine.UI;
public class Skill3DUI : MonoBehaviour
{
    
    private void Awake()
    {
        FullNameCall.Listen(OnFullNameChange);
        VisibleCall.Listen(OnVisibleChange);
    }
    public void SetData(Skill s)
    {
        //print(""+s +"  "+ s.Visible);
        NowSkill = s;
        FullNameCall.NewData ((s==null)?"":s.FullName);
        VisibleCall.NewData ((s==null)?false:s.Visible); 
    }

    Skill NowSkill=null;
    VarChangeEvent_Class<string> FullNameCall = new VarChangeEvent_Class<string>();
    VarChangeEvent<bool> VisibleCall = new VarChangeEvent<bool> ();
    public MeshRenderer render;
    public float Render_W_H = 1;
    public string TextureName = "_Texture";
    public void OnVisibleChange()
    {
        //print("OnVisibleChange");
        gameObject.SetActive ((NowSkill==null)?false:NowSkill.Visible);
    }
    public void OnFullNameChange()
    {
        if (NowSkill == null) return;
        render.LoadTexture(TextureName, Render_W_H, NowSkill.FullName, 0);
    }
}
