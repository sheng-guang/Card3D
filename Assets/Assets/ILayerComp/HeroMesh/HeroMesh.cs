using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class HeroMesh : LayerComp
{
    AsyncAnim anim;
    public override void Awake()
    {
        base.Awake();
        anim = GetComponent<AsyncAnim>();
    }

    public override void Awake_OnSetMaster()
    {
        base.Awake_OnSetMaster();
        HardTurn = unit.Ex<float>(nn.HardTurn);
        MirrorTurn = unit.Ex<bool>(nn.MirrorTurn); 

    }
    IGet<float> HardTurn;
    IGet<bool> MirrorTurn;

    public float max = 5;
    private void Update()
    {
        var x0z = unit.rig.velocity;
        x0z.y = 0;
        float v = x0z.magnitude;
        if (v >= max) v = max;

        //unit.
        anim.CurrentAnim.SetFloat("ws", v);
        anim.CurrentAnim.SetFloat("y speed", unit.rig.velocity.y);
        if (HardTurn.Value <0.8)
        {
            if(MirrorTurn.Value)            anim.CurrentAnim.Play("turn", 0, HardTurn.Value);
            else anim.CurrentAnim.Play("-turn", 0, HardTurn.Value);
        }
        anim.CurrentAnim.SetFloat("HardTurn", HardTurn.Value);
      

    }
}
