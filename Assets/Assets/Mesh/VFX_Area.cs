using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class VFX_Area : MeshRes
{
    private void OnValidate()
    {
        Awake();
    }
    private void Awake()
    {

        if (vfx == null) vfx = transform.GetChild(0);
        m = vfx.GetComponent<MeshRenderer>();
        var r = this.ExParam<float>(nn.R);
        r.Value = Def_r;
        r.Listen(OnRChange);

        var c = this.ExParam<Color>(nn.color);
        c.Value = color;
        c.Listen(OnColorChange);
    }

    [ColorUsage(false, true)]
    public Color color;
    public float Def_r = 5;
    public Transform vfx;
    MeshRenderer m;
    void OnRChange()
    {
        //Debug.Log(GetType().Name + " new R " + this.Ex_Param<float>(NN.R).Value);
        //var p = this.Param_Float(NN.R);
        var r = this.ExParam<float>(nn.R).Value;
        vfx.localScale = Vector3.one * 2 * r;
    }
    void OnColorChange()
    {
        var c = this.ExParam<Color>(nn.color).Value;
        m.GetPropertyBlock(new MaterialPropertyBlock().MarkAs(out var block));
        block.SetColor("Color_", c);
        m.SetPropertyBlock(block);

    }

}
