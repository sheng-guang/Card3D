using System.Collections;
using System.Collections.Generic;
using UnityEngine;


public class SkillRes_JS : MonoBehaviour, IResCreater<Skill>, IRes, IResGetter
{
    public string DirectoryName => "Assets/" + nameof(Skill);
    public string PackName =>PackName_;
    
    public string PackName_ = "S";
    public string KindName_;
    public string KindName => KindName_;


    public object GetNewObject(ResArgs a) => GetNew(a);
    public Skill GetNew(ResArgs a)
    {
        var re = new MixSkill_Res();
        re.PartDIrPath = DirectoryName;
        re.FullName = this.FullName();
        return re;
    }
    
}
