//using System.Collections;
//using System.Collections.Generic;
//using UnityEngine;

//using Unity.VisualScripting;

//public class SkillRes : MonoBehaviour,IResGetter<Skill>,IRes,IResGetter
//{
//    public string DirectoryName => "Assets/"+nameof(Skill);

//    public string PackName => "S";
//    public string KindName_;
//    public string KindName => KindName_; 

//    public ScriptGraphAsset machine;
//    public object GetNewObject(ResArgs a) => GetNew(a);
//    public Skill GetNew(ResArgs a)
//    {
//        var re = new MixSkill_Res();
//        re.PartDIrPath = DirectoryName;
//        re.FullName = this.FullName();
//        re.F_Load = Load;
//        return re;
//    }

//    public void Load(MixSkill_Res s)
//    {
//        InvokeFunct(s, "load");
//    }
//    public void InvokeFunct(MixSkill_Res s,string func)
//    {
//        GraphReference reference = GraphReference.New(machine, true);
//        Variables.Graph(reference).Set("s", s);
//        Variables.Graph(reference).Set("func", func);

//    }


//}
