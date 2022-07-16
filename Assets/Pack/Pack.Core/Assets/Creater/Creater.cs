using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.IO;
using UnityEngine.Events;


public static class CreaterKind
{
    public const int none = 0;
    public const int Prefbe = 1;
    public const int AssetBundle = 2;
    public const int Class = 4;
    public const int Txt = 8;
    public const int HasPiplineTag = 64;

}
public class Creater<T>
{
    
    public static void ChangeDirName(string dirName)
    {
        StaticDir = dirName;
    }
    public static string StaticDir { get; private set; } = "Assets/" + typeof(T).Name;


    public static T GetNew(string FullName, ResArgs args = null) { return GetNew(StaticDir, FullName, args); }

    public static T GetNew(string PartDirPath, string FullName, ResArgs args = null)
    {
        //Debug.Log("create skill: "+PartDirPath + "|" + kind);
        int k = Ensure(PartDirPath, FullName);

        if (k.MaskContain(CreaterKind.HasPiplineTag)) FullName += "'" + GraphSetting.PipLineName;
        if (k.MaskContain(CreaterKind.Prefbe))
        {
            //Debug.Log("1   create from prefabe" + kind);
            return Creater_Prefabe<T>.GetNew(FullName, args);
        }
        else if (k.MaskContain(CreaterKind.AssetBundle))
        {
            //Debug.Log("2   create from ab " + kind);
            return Creater_AssetBundle<T>.GetNew(PartDirPath, FullName, args);
        }
        else if (k.MaskContain(CreaterKind.Class))
        {
            //Debug.Log("3   create from class " + kind);
            return Creater_Class<T>.GetNew(FullName, args);
        }
        else if (k.MaskContain(CreaterKind.Txt))
        {
            //Debug.Log("4   create from txt " + kind);

            try
            {
                return (T)Creater_TXT.GetNew(PartDirPath, FullName, args);

            }
            catch { }
        }
        Debug.Log(PartDirPath + "|" + FullName + " can not be creat");
        return default;
    }
    static Dictionary<string, int> loaded = new Dictionary<string, int>();

    static int Ensure(string dir, string kind)
    {
        {
            var  FN =kind+ "'" + GraphSetting.PipLineName;
            //Debug.Log(FN);
            var k = _Ensure(dir, FN, CreaterKind.HasPiplineTag);
            if (k != CreaterKind.none) return k;
        }
        {
            var k = _Ensure(dir, kind, 0);
            if (k != CreaterKind.none) return k;
        }
        return CreaterKind.none;

    }
    static int _Ensure(string dir, string kind,int ExInfo)
    {
        if (loaded.TryGetValue(kind, out var re)) return re;

        if (Creater_Prefabe<T>.CanCreate(kind))
        { loaded[kind] = CreaterKind.Prefbe+ExInfo; return loaded[kind]; }

        if (Creater_AssetBundle<T>.CanCreate(dir, kind))
        { loaded[kind] = CreaterKind.AssetBundle+ExInfo; return loaded[kind]; }

        if (Creater_Class<T>.CanCreate(kind))
        { loaded[kind] = CreaterKind.Class+ExInfo; return loaded[kind]; }

        if (Creater_TXT.CanCreate(dir, kind))
        { loaded[kind] = CreaterKind.Txt+ExInfo; return CreaterKind.Txt; }
        return CreaterKind.none;
    }
}

