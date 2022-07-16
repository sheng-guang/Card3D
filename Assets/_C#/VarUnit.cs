using System.Collections;
using System.Collections.Generic;
using UnityEngine;

using System;

public interface ISetFullName
{
    public string FullName_ { set; }
}
public class VarUnit : Unit,ISetFullName
{
    public string FullName_ { 
        set {
            var vv = value.Split('\'');
            if (vv.Length != 2) return;
            PackName_ = vv[0];
            KindName_ = vv[1];
        } 
    }
    public string PackName_="-";
    public override string PackName => PackName_;
    public  string KindName_;
    public override string KindName => KindName_;
    public override void OnSetID_Awake()
    {
        base.OnSetID_Awake();
        ActOnSetID_Awake.SetSelf(this);
        ActOnSetID_Awake.Invoke();
    }
    public Act0<Unit> ActOnSetID_Awake = new Act0<Unit>();
}


