using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public static class Log 
{ 
    public static void LogAllBuff(this LayerID l)
    {
        Debug.Log("log Self  buff========================");
        l.buffs.LogSelf();
        Debug.Log("========================log Self  buff");

    }
}
