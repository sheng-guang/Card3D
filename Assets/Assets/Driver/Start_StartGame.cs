using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Mirror;
public class Start_StartGame : MonoBehaviour
{

    void Start()
    {

        Invoke(nameof(StartGame), 0.1f);
    }
    void StartGame()
    {
        var manager = GetComponent<NetworkManager>();
        if (manager != null) manager.StartHost();
    }


}
