//using System.Collections;
//using System.Collections.Generic;
//using UnityEngine;



//public class SkillOneTar_ : InputSkill_Delegate
//{
//    public void EnableReach(object o)
//    {
//        SetKV(nn.Reach, o);
//        testNodeUseful.AddFunc((s, node) =>
//        {
//            if (reach.Value.HasValue == false) return;
//            if (node.NodeKind != 1) return;
//            bool inRange = s.NodeReachable(node, reach.Value.Value);
//            if (InRange_need.Value != inRange) { testNodeUseful.re(false); return; }
//        });
//        forEachNodeForm.AddAct((s, act, kind) =>
//        {
//            if(kind==0) act(Pre_Reach);
//        });
//        getFloat.AddFunc((sk, key, kind) =>
//        {
//            if (key != nn.Reach) return;
//            getFloat.re(reach.Value);

//        });
//    }
//    public void EnableThroeLine(object o)
//    {
//        SetKV(nn.HighThrow, o);
//        forEachNodeForm.AddAct((s, act, kind) =>
//        {
//            if (kind == 1) act(Pre_ThrowLine);
//        });
//        getBool.AddFunc((s, key, kind) =>
//        {
//            if (key != nn.HighThrow) return;
//            if (kind != 1) return;
//            if (highThrow.Value.HasValue == false) return;
//            getBool.re(highThrow.Value);
//        });
//        getInt.AddFunc((s, key, kind) =>
//        {
//            if (key != nn.speed) return;
//            if (kind != 1) return;
//            if (unit.speed.Value_Buffed.HasValue == false) return;
//            getInt.re(unit.speed.Value_Buffed);
//        });
//    }

//    public void EnableThrowOffset(object y,object xz)
//    {
//        SetKV(nn.OffSetY, y);
//        SetKV(nn.OffSetXZ, xz);
//        getFloat.AddFunc((x, key, NodeKind) =>
//        {
//            if (NodeKind != 1) return;
//            if (key == nn.OffSetY)
//            {
//                getFloat.re(OffSetY.Value);
//            }
//            else if (key == nn.OffSetXZ)
//            {
//                getFloat.re(OffSetXZ.Value);
//            }
//        });
//    }
//    public IGet<N<float>> reach = N<float>.NullIGet;
//    public IGet<N<bool>> highThrow = N<bool>.NullIGet;
//    public IGet<bool> InRange_need = true.ToIGet<bool>();

//    public IGet<float> OffSetY = 0f.ToIGet<float>();
//    public IGet<float> OffSetXZ = 0f.ToIGet<float>();
//    public SkillOneTar_()
//    {
//        setKV.AddAct((s, k, v) =>
//        {
//            if (k == nn.Reach) { v.TryToIGet_ref(ref reach); }
//            else if (k == nn.HighThrow) { v.TryToIGet_ref(ref highThrow); }
//            else if (k == nn.ValueNeeded) { v.TryToIGet_ref(ref InRange_need); }

//            else if (k == nn.OffSetY) { v.TryToIGet_ref(ref OffSetY); }
//            else if (k == nn.OffSetXZ) { v.TryToIGet_ref(ref OffSetXZ); }
//        });

//        HasMoreThanZeroTar = true;
//        visible.AddFunc((s) =>
//        {
//            visible.re(eve.IsCardInHand(unit));
//        });
//        afterWrite_GetNext.AddFunc((inpusk, node, Extrainfo) =>
//        {
//            if (node.NodeKind == 0) { afterWrite_GetNext.re(node.CreatChild(1)); return; }
//            else if (node.NodeKind == 1)
//            {
//                if (Extrainfo.MeansToNext() && TestNodeUseful(node))
//                { afterWrite_GetNext.re(InputNode.FinishNode); return; }
//            }
//        });

//        // test
//        highLightTest.AddFunc((s) =>
//        {
//            if (unit.ManaCost.Value_Buffed.HasValue == false) return;
//            if (player.Mana.Value < unit.ManaCost.Value_Buffed) { highLightTest.re(false); return; }
//        });


//        //preview
//        forEachNodeForm.AddAct((s, act, kin) =>
//        {
//            if (kin == 1) { act(Pre_Line); act(Pre_Point); return; }
//        });
//        //testThenRun
//        tested_Then_RunSkill.AddAct((s, inputForm) =>
//        {
//            eve.ApplyOneTarInputToSkill(s, inputForm);
//        });

//    }

//}
