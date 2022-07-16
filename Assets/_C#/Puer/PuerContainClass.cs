using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;


//public delegate void Callback1(TestClass obj);


public static class T<t>
{
    public static IGet<t> As(t v)
    {
        return new IGet_Value<t>(v);
    }
    public static IGet<t> FuncAs(Func<t> v)
    {
        return new IGetFunc<t>() { f=v};
    }
}
//public static class Box
//{
//    public static int Int(int v) => v;
//    public static Func<Vector3> V3(Func<Vector3> v) => v;
//    public static Func<int> Int(Func<int> v) => v;
//    public static Func<Unit> Unit(Func<Unit> v) => v;
    
//}
//public class Box<T>
//{
//    public Box(T v)
//    {
//        val = v;
//    }
//    T val;
//    public T value()
//    {
//        return val;
//    }

//}