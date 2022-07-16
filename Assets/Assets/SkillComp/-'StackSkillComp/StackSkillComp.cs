using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;

public partial class StackSkillComp : IPointerEnterHandler//target
{
    public void OnPointerEnter(PointerEventData eventData)
    {
        OnMousePoint.SetTarget(skill);
    }
}

partial class StackSkillComp //设置skill 加载图片 set up
{

    public float ImageW_H()
    {
        var scale = ImgMesh.transform.lossyScale;
        return scale.x / scale.y;
    }
    public MeshRenderer ImgMesh;
    public override void OnSetSkill_Load()
    {
        StackSkillSpace.AddtoStackSpace(transform);
        this.AddToCamFollowerList();
        FollowCamUpdate_();
        ImgMesh.LoadTexture("_MainTex", ImageW_H(), skill.FullName, 0);

    }
}

partial class StackSkillComp // 曲线 LineRender
{
    public BezierLineMeshPoints LineStart;
    public BezierLineMeshPoints LineTar;

}


partial class StackSkillComp : ICameraFollowe_update//刷新  update
{
    public void FollowCamUpdate_()
    {
        FreshPoss();
        if (gameObject.activeInHierarchy == false) return;
        LineStart.Fresh(skill.IsStackTop, skill.unit.VisualPoss);
        bool show = skill.HasMoreThanZeroTar && skill.IsStackTop;
        LineTar.Fresh(show, skill.TarV3Visual());
        FreshIcon();
    }
}
partial class StackSkillComp//刷新位置 freshPoss
{
    [Header("poss")]
    public Transform LittleOffset;
    public float AngleNormal = 30f;
    public float AngleTotal = 60f;
    VarChangeEvent<bool> activeEvent = new VarChangeEvent<bool>();
    public void FreshPoss()
    {

        bool active = true;
        //if(skill.IsPausing==false)active=false;
        if (skill.InStack == false) active = false;
        bool change = false;
        activeEvent.NewData(active, ref change);
        if (change) { gameObject.SetActive(active); }
        if (active == false) return;

        {
            int to = skill.StackTotal - skill.StackInde - 1;
            float TotalPre = AngleNormal * skill.StackTotal;
            float Sigle = AngleNormal;
            if (TotalPre > AngleTotal)
            {
                float OverTimes = TotalPre / AngleTotal;
                Sigle = AngleNormal / OverTimes;
            }

            float toAngle = Sigle * to;
            transform.localEulerAngles = new Vector3(0, 0, toAngle);
            LittleOffset.transform.localEulerAngles = new Vector3(0, -15, 0);
        }


    }
}
partial class StackSkillComp//暂停标志  pausing icon
{
    [Header("Pausing Color")]
    public string ColorName;
    public Color Pass = Color.cyan;
    public Color Pausing = Color.white;
    public float PassPower = 1.5f;
    public MaterialController SelfIcon;
    public List<MaterialController> PausingIcon;
    public void FreshIcon()
    {
        int ToPausingIndex = 0;
        for (int i = 0; i < GameList.playerList.Count; i++)
        {
            int id = GameList.playerList[i].ID;
            bool IsPausing = skill.TestIsPausing(id);
            if (id == skill.player.ID)
            {
                if (IsPausing) SelfIcon.SetColor(ColorName, Pausing);
                else SelfIcon.SetColor_Power(ColorName, Pass, PassPower);

            }
            else
            {
                if (IsPausing)
                    PausingIcon[ToPausingIndex].SetColor(ColorName, Pausing);
                else PausingIcon[ToPausingIndex].SetColor_Power(ColorName, Pass, PassPower);
                ToPausingIndex++;
            }

        }

    }
}
partial class StackSkillComp : IPointerMoveHandler, IPointerDownHandler//暂停 pause
{
    public void Fresh()
    {
        if (FormWriter.IsWriting) return;
        if (Input.GetMouseButton(0)) skill.ClientCancelPause();
        if (Input.GetMouseButton(1)) skill.ClientPause();
    }
    public void OnPointerDown(PointerEventData eventData)
    {
        Fresh();
    }

    public void OnPointerMove(PointerEventData eventData)
    {
        //Fresh();
    }
}

partial class StackSkillComp : SkillComp//资源加载 res 
{
}
