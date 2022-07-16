using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public partial class LongSkillSpace : MonoBehaviour, IResGetter<LongSkillSpace>, IRes
{
    public string DirectoryName => "Assets/Space";

    public string PackName => "Space";
    public string KindName => GetType().Name;


    public LongSkillSpace GetNew(ResArgs a) { return Instantiate(this); }
    public object GetNewObject(ResArgs a) { return GetNew(a); }
}
partial class LongSkillSpace//ins
{
    static LongSkillSpace _ins;

    static LongSkillSpace ins()
    {

        if (_ins != null) return _ins;
        _ins = Creater<LongSkillSpace>.GetNew("Space'LongSkillSpace");
        _ins.AddToCamSpace();
        return _ins;
    }
}
partial class LongSkillSpace
{
    public Transform root;
    public static void Add(Transform t)
    {
        t.MoveTransfTo(ins().root);
    }
}
partial class LongSkillSpace : ICamSpaceObject
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