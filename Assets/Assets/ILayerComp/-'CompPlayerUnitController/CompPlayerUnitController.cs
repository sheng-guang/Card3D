using System.Collections;
using System.Collections.Generic;
using UnityEngine;
//使用12345来使用卡牌
public class CompPlayerUnitController : LayerCompResMesh,IUpdata_
{
    public override void Awake_OnSetMaster()
    {
        base.Awake_OnSetMaster();
        player.hand.Listen(OnHandChange);
        this.AddToUpDate_List();
    }
    HashSet<Unit> Recorded;
    List<Unit> RecordedList;
    public void OnHandChange(int op,Unit v)
    {

    }




    FormGetterStruct s = new FormGetterStruct();
    public void Update_()
    {
        if (Input.GetKeyDown(KeyCode.Alpha1) && player.hand.Count >= 1)
        {
            Debug.Log("Alpha1");
            s.SetFormGetter(player.hand[0], 0);
            FormWriter.TrySetFormGetter(s);
        }


        //if (Input.GetKeyDown(KeyCode.Q)&&player.hand.Count>=1)
        //{
        //    Debug.Log("key Q");

        //}
        
    }
}
