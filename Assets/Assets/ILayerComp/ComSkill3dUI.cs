using System.Collections;
using System.Collections.Generic;
using UnityEngine;


public class ComSkill3DUI : MonoBehaviour, IResGetter<ComSkill3DUI>,IRes
{
    public string DirectoryName => "Assets/UI";
    public string PackName => "-";
    public string KindName => GetType().Name;


    public ComSkill3DUI GetNew(ResArgs a)
    {
        return Instantiate(this);
    }

    public object GetNewObject(ResArgs a)
    {
        return GetNew(a);
    }
}

