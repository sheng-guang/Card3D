using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class TimerTest : MonoBehaviour
{
    public Scene MainScene;
    public PhysicsScene MainPhyScene;
    public Scene UIScene;
    public PhysicsScene UiPhyScene;
    private void Awake()
    {
        Physics.autoSimulation = false;
        //---------------------------------------------------------------------------------------------------------
        MainScene = gameObject.scene;
        MainPhyScene = MainScene.GetPhysicsScene();
        //---------------------------------------------------------------------------------------------------------
        UIScene = SceneManager.CreateScene("UI3D");
        UiPhyScene = UIScene.GetPhysicsScene();


      
        Debug.Log(MainScene.name);
        Debug.Log(MainScene.Equals(UIScene));
        Debug.Log("phy equal   "+MainPhyScene.Equals(UiPhyScene));
        Debug.Log(MainPhyScene.GetHashCode() + "          " + UiPhyScene.GetHashCode());
        SceneManager.MoveGameObjectToScene(follow, UIScene);
    }
    public bool mainActive;
    public bool FollowActive;
    public bool Sync;
    public GameObject main;
    public GameObject follow;

    private void FixedUpdate()
    {
        if (mainActive) MainPhyScene.Simulate(Time.fixedDeltaTime);
        if (FollowActive) UiPhyScene.Simulate(Time.fixedDeltaTime);
        if (Sync) Physics.SyncTransforms();
    }
}
