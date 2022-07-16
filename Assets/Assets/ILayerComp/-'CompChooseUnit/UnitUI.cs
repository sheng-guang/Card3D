using System.Collections;
using System.Collections.Generic;
using UnityEngine;

using UnityEngine.UI;
public class UnitUI : MonoBehaviour
{
    public Button b;
    private void Awake()
    {
        b.onClick.AddListener(OnClick);
    }
    public void OnClick()
    {
        master.OnClickComp(this);
    }
    public CompChooseUnit master;
    public UnitData data { get; private set; }
    public void SetData(UnitData d)
    {
        data = d;
        UnitName.text = d.KindName;
        MainImage.LoadImage(d.FullName, 0);
    }


    public Text UnitName;
    public Image MainImage;
}
