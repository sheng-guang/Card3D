using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TestCreater : MonoBehaviour
{
    // Start is called before the first frame update
    public string DirName;
    public string FullName;
    [ContextMenu("test")]
   public void t()
    {
        
       var ne= CreaterObject.GetNew(DirName, FullName);
        print(ne);

    }


}
