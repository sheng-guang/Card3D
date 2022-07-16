using System.Collections;
using System.Collections.Generic;
using UnityEngine;

using UnityEngine.EventSystems;
public abstract class StateMesh : LayerComp, IPointerEnterHandler,IIsUnit
{
    public abstract int EnableState { get; }

    public Unit u => unit;

    public override void Awake_OnSetMaster()
    {

        base.Awake_OnSetMaster();

        if (c == null) c = GetComponent<Collider>();
        unit.Event.StateCall.Listen(OnStateSpaceChange);
        unit.Event.SpaceCall.Listen(OnStateSpaceChange);
        unit.Event.UPIDCall_IsFollowingCall.Listen(OnStateSpaceChange);
    }
    public Collider c;
    public bool AlwaysTrigger = false;
    public void OnStateSpaceChange()
    {
        bool toShow = true;
        if (unit.State.Value != EnableState) toShow = false;
        if (unit.Space.Value >= UnitSpace.Space == false) toShow = false;
        gameObject.SetActive(toShow);

        if (c) c.isTrigger = unit.IsFollowing() || AlwaysTrigger;
    }

    public void OnPointerEnter(PointerEventData eventData)
    {
        OnMousePoint.SetTarget(unit);
    }
}
