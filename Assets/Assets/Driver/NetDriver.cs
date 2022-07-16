using System.Collections;
using System.Collections.Generic;
using UnityEngine;

using Mirror;
using System;
using UnityEngine.SceneManagement;

public partial class NetDriver : Driver
{
    [Header("host name--------------------------------------")]
    public string HostFullName;
    [Header("Pass")]
    public string Pass;
    public override void Awake()
    {
        base.Awake();
        Pass = "" + GetHashCode();
    }
    public Timer timer;
    public override void OnStartServer()
    {
        timer.AsHost();
        base.OnStartServer();
        //PassMsg.Listen(ServerGetPass);
        NetworkServer.RegisterHandler<PassMsg>(ServerGetPass);

       // Debug.LogError("pause");
        NewGame(HostFullName);

    }
    public override void OnServerConnect(NetworkConnectionToClient conn)
    {
        base.OnServerConnect(conn);
        conn.Event_OnSConnected();
    }

    public void ServerGetPass(NetworkConnection c, PassMsg m)
    {
        
        var p = Connections.OnServerGetPass(c, m.pass);
        int GamePlayerID =GameList.NowHost.CreatGamePlayerForNetPlayer(p.NetPlayerID);
        p.OnSererSetGamePlayerID(GamePlayerID);
        c.Send(new GamePlayerIDMsg() { ID = GamePlayerID });


    }
    public override void OnClientConnect()
    {
        if (NetworkServer.active == false) timer.AsClient();
        base.OnClientConnect();
        NetworkClient.Send(new PassMsg() { pass = Pass });
        NetworkClient.RegisterHandler<GamePlayerIDMsg>(ClientGetPlayerID);
    }

    //public override void OnClientConnect(NetworkConnection conn)
    //{
    //    if (NetworkServer.active == false) timer.AsClient();
    //    base.OnClientConnect(conn);
    //    print(conn);
    //    conn.Send(new PassMsg() { pass = Pass });
    //    NetworkClient.RegisterHandler<GamePlayerIDMsg>(ClientGetPlayerID);
    //}
    public void ClientGetPlayerID(GamePlayerIDMsg m)
    {
        LocalPlayerID = m.ID;
    }
}


//public partial class NetDriver : Driver
//{
//    List<Player> _players = new List<Player>();
//    public override List<Player> Players => _players;
//    List<Unit> _UnitCallList = new List<Unit>();
//    public override List<Unit> UnitCallList => _UnitCallList;

//    List<Unit> _UnitSpaceList = new List<Unit>();
//    public override List<Unit> UnitSpaceList => _UnitSpaceList;
//}
public partial class NetDriver : Driver
{
    public override Host CreatHost(string FullName)
    {
        var re = base.CreatHost(FullName);
        re.OnServerSpawn();
        return re;
    }
    public override Unit CreatUnit(string FullName, ResArgs args = null)
    {
        var re = base.CreatUnit(FullName, args);
        re.OnServerSpawn();
        return re;
    }
    public override Player CreatPlayer(string FullName)
    {
        var re = base.CreatPlayer(FullName);
        re.OnServerSpawn();
        GameList.playerList.Add(re);
        return re;
    }
    public override SkillBuilder CreatSkill(string FullName)
    {
        var re=base.CreatSkill(FullName);
        re.AddFinalAction(x => x.OnServerSpawn());
        return re;
    }

}