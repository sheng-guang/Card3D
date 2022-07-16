using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TestLine : MonoBehaviour
{
    public List<Transform> points;
    private void Start()
    {
        l = new BezierLine(points.Count);
    }
    BezierLine l;
    public GameObject pre;
   public List<GameObject> lines;
    private void Update()
    {
        freshOnce();
    }
    [ContextMenu("111")]
    public void Test()
    {
        if(lines.Count == 0)
        {
            for (int i = 0; i < 10; i++)
            {
                lines.Add(Instantiate(pre));
            }
        }
        l = new BezierLine(points.Count);
        freshOnce();
    }
    public void freshOnce()
    {
        for (int i = 0; i < points.Count; i++)
        {
            l.SetPoint(points[i].position, i);
        }
        for (int i = 0; i < 10; i++)
        {
            lines[i].transform.position = l.GetPoint(i * 1f / 10);
        }
    }
}
