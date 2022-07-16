using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class HostSetCamOnce : MonoBehaviour
{


    // Update is called once per frame
    public Player p;
    void Update()
    {
        if(p==null) p = IDs<Player>.Get(Driver.LocalPlayerID);
        if (p == null) return;
        if (p.hero == null) return;
        //print(p.hero);
        var poss= p.hero as IRealPoss;
        //print(poss);
        if (poss.IsNull_or_EqualNull()) return;
        Cam.Target = poss;
        Destroy(this);
    }
}
