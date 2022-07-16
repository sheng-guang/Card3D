using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class LongSkillComp : SkillComp, ICameraFollowe_update
{
    public void FollowCamUpdate_()
    {
        FreshPoss();
    }
    public TextMeshPro NameText;
    public TexLoader tex;
    public override void OnSetSkill_Load()
    {
        base.OnSetSkill_Load();
        LongSkillSpace.Add(transform);
        this.AddToCamFollowerList();
        FollowCamUpdate_();
        tex.LoadTexture(skill.FullName);
        NameText.text = skill.FullName;
    }
    public float Height = 0.4f;
    VarChangeEvent<bool> activeEvent = new VarChangeEvent<bool>();
    public void FreshPoss()
    {
        bool active = true;
        if (skill.InList == false) active = false;
        bool change = false;
        activeEvent.NewData(active, ref change);
        if (change) { gameObject.SetActive(active); }
        if (active == false) return;
        {

            transform.localPosition = Vector3.up * skill.LongIndex* Height;
        }
    }

}
