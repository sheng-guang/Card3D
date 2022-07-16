using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SkillComp : MonoBehaviour, IResGetter<SkillComp>, IRes
{
    public string DirectoryName => "Assets/" + nameof(SkillComp);

    public string PackName => "-";

    public virtual string KindName => GetType().Name;

    public SkillComp GetNew(ResArgs a)
    {
        return Instantiate(this);
    }

    public object GetNewObject(ResArgs a)
    {
        return GetNew(a);
    }

    public Skill skill { get; private set; }

    public bool HasPipLineTag => true;

    public void SetSkill(Skill s)
    {
        skill = s;
        OnSetSkill_Load();
    }
    public virtual void OnSetSkill_Load()
    { 
    }
    
}
