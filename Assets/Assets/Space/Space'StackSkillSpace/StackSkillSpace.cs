using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public partial class StackSkillSpace : IResGetter<StackSkillSpace>, IRes
{
    public string DirectoryName => "Assets/Space";

    public string PackName => "Space";
    public string KindName => GetType().Name;


    public StackSkillSpace GetNew(ResArgs a) { return Instantiate(this); }
    public object GetNewObject(ResArgs a) { return GetNew(a); }
}
partial class StackSkillSpace//ins
{
    static StackSkillSpace _ins;

    static StackSkillSpace ins()
    {

        if (_ins != null) return _ins;
        _ins = Creater<StackSkillSpace>.GetNew("Space'StackSkillSpace");
        _ins.AddToCamSpace();
        return _ins;
    }
}
partial class StackSkillSpace//move in 
{
    public Transform root;
    public static void AddtoStackSpace(Transform t)
    {
        t.MoveTransfTo(ins().root);
    }
}

partial class StackSkillSpace : MonoBehaviour, ICamSpaceObject
{
    public Transform transf => transform;

    public static float Scale => ins().transform.localScale.x;

    public float deepth = 1;
    public float Depth() => deepth;
    public float x = 0.8f;
    public float PossX() => x;
    public float y = 0.5f;
    public float PossY() => y;


}
