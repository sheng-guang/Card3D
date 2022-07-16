using System.Collections;
using System.Collections.Generic;
using UnityEngine;

using System;

public class Host1 : Host
{
    List<Player> players = new List<Player>();
    public string PlayerName = "-'Player1";
    public override void OnSetID_Awake()
    {
        base.OnSetID_Awake();
        var mainLoop = new MainLoop();
        GameLogicFunctions.AddLongSkill(mainLoop);

        var to = CreatSkill<TurnSkill>().SetUp(this).Origin();
        GameLogicFunctions.AddLongSkill(to as ILongSkill);

        EnsureComponet("-'" + nameof(ComHost1UI));
        var s = eve.CreatSkill<Skill_AddAnyCard>().Origin();
        eve.AddSkill(this, s, SkillKind.zero);

    }


    private Player AiPlayer ;
    public override int CreatGamePlayerForNetPlayer(int NetPlayerID)
    {
        if (AiPlayer == null)
        {
            AiPlayer =eve.CreatPlayer(PlayerName);
            var u= CreatHero(AiPlayer);
            eve.SetPoss(u,new Vector3(0,0,5));            
        }

        {
            Player ne = eve.CreatPlayer(PlayerName);
            var u= CreatHero(ne);
            eve.SetPoss(u,new Vector3(0,0,-5));            

            return ne.ID;
        }

    }
    public Unit CreatHero(Player p)
    {
        var hero= eve.CreatUnit("-'" + nameof(Hero1));
        eve.SetState(hero, UnitState.Space);
        eve.SetSpace(hero, UnitSpace.Space);
        eve.SetUP(hero, p);
        eve.SetHero(p, hero);
        return hero;
    }
    public void CreatCard(Player p,string UnitName)
    {
        var C = CreatUnit(UnitName);
        eve.SetState(C, UnitState.Card);
        eve.SetSpace(C,UnitSpace.Hand);
        eve.SetUP(C, p);
    }


}


public class TurnSkill : Skill, ILongSkill
{
    IList<Player> players;
    //IList<Unit> UnitCallList;
    public void Fix_Start()
    {
        players = GameList.playerList;
        //UnitCallList = GameList.UnitCallList;
        HostTurnTimeLeft = up.host.ExParam<float>(nn.TurnTimeLeft);
    }
    IParam<float> HostTurnTimeLeft;
    public float OneTurnTime = 12;

    int NextTurnKind = 2;
    public void Fix()
    {
        HostTurnTimeLeft.Value -= TimeSetting.FixedDeltaTime;
        if (HostTurnTimeLeft.Value > 0) return;
        HostTurnTimeLeft.Value = OneTurnTime;
        
        if (NextTurnKind == 1)
        {
            foreach (var item in players)
            {
                item.Mana.Value = item.ManaMax.Value_Base;
            }
            NextTurnKind = 2;
        }
        else if (NextTurnKind == 2)
        {
            foreach (var item in players)
            {
                item.ManaMax.Value_Base++;
                item.Mana.Value = item.ManaMax.Value_Base;
            }
            NextTurnKind = 1;
        }


    }

    public void Fix50()
    {
    }


    public void SetExitListAction(Action<object> a)
    {
    }


}


public class MainLoop : Skill,ILongSkill
{
    public MainLoop()
    {
        //NowHost = Driver.ins.NowHost;
        players = GameList.playerList;
        //UnitCallList = GameList.UnitCallList;
    }
    Host NowHost=>GameList.NowHost;
    List<Player> players;
    //List<Unit> UnitCallList;
    public void Fix()
    {
        NowHost.Fix();
        for (int i = 0; i < players.Count; i++) { players[i].Fix(); }
        GameList.ForEachCallList(x => x.Fix());
    }

    public void Fix50()
    {
        NowHost.Fix50ms();
        for (int i = 0; i < players.Count; i++) { players[i].Fix50ms(); }
        GameList.ForEachCallList(x => x.Fix50ms());
    }

    public void Fix_Start()
    {
    }

    public void SetExitListAction(Action<object> a)
    {
    }


}