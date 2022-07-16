
using UnityEngine;
public class Hero1 : Hero
{
    public Transform VisualPostion;
    public override Vector3 VisualPoss => VisualPostion?VisualPostion .position:RealPoss;
    public override void OnSetID_Awake()
    {
        base.OnSetID_Awake();
        //EnsureComponet("-'" + nameof(ComSpaceUI));
        AddSkill( CreatSkill<Skill_WSDAMove_plus>().Origin(), SkillKind.becall) ;
        //AddBeCallSkill(new Skill_WSDAMove_plus());
        //AddBeCallSkill(new Skill_wsdaMove());
        //AddBeCallSkill(new Skill_wsdaMoveNotOnLand());
        {
            AddMesh("M'Hero1");
        }
    }


}
