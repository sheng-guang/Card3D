using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Puerts;
using System;

public class JsUnit : MonoBehaviour
{
    public TextAsset t;
    JsEnv env;
    // Start is called before the first frame update
    void Start()
    {
        Init();
    }
    [ContextMenu("init test")]
    public void Init()
    {
        env = new JsEnv();
        env.EnsureExports();
        env.Eval(t.text);
        var to = env.Eval<Action<VarUnit>>("init");
        if (to == null) { Debug.Log("no test function"); return; }
        to?.Invoke(GetComponent<VarUnit>());
    }
    // Update is called once per frame
    void Update()
    {
        
    }
}
