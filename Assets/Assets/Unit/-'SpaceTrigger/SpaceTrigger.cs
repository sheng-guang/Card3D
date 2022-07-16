using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SpaceTrigger : Unit
{
    private void Start()
    {
    }
    [ColorUsage(true, true)]
    public Color c;
    public float r;
    public override void OnSetID_Awake()
    {
        base.OnSetID_Awake();
        AddSkill(CreatSkill<ThrowMagic>().Origin() , SkillKind.Input, 0);
        AddSkill(CreatSkill<Skill_StoreCard>().Origin(), SkillKind.Input, 1);
        AddSkill(CreatSkill<Skill_TriggerCard>().Origin(), SkillKind.becall);

        {
            var n = AddMesh("M'VFX_Area");
            n.ExParam<float>("r").Value = r;
            n.ExParam<Color>("color").Value = c;
        }
    }

}
