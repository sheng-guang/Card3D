using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Runtime.InteropServices;
using System;
namespace Test
{
    
    public struct MsgT<T>where T: unmanaged
    {
        static MsgT()
        {
            Length = Marshal.SizeOf<T>();
            Debug.Log("get size for [" + typeof(T).ToString() + "]    " + Length);
        }
        public static int Length { get; private set; }

        public byte this[int index]
        {
            get => GetByte(index);
            set { }
        } 
      unsafe  public byte GetByte(int index)
        {
            if (index < Length == false) return 0;
            if (index < 0) return 0;
            fixed (T* p = &value)
            {

            }

            return 0;
        }
        T value;
    }
    public interface IGetSize { int GetSize(); }
    
    public struct Test1
    {
        //public List<byte> b;
       // public byte[] b2;
    }

    public class Bytes : MonoBehaviour
    {
        [ContextMenu("test")]
        unsafe void test()
        {
            Debug.Log(MsgT<Test1>.Length);
            Debug.Log(MsgT<Test1>.Length);
            Debug.Log(MsgT<Test1>.Length);
            Debug.Log(MsgT<Test1>.Length);
        }

        public int value;
        unsafe byte* ToByte(int* index)
        {
            return (byte*)index;
        }

        public byte[] intToBytes(int value)
        {
            byte[] src = new byte[4];
            src[3] = (byte)((value >> 24) & 0xFF);
            src[2] = (byte)((value >> 16) & 0xFF);
            src[1] = (byte)((value >> 8) & 0xFF);//¸ß8Î»
            src[0] = (byte)(value & 0xFF);//µÍÎ»
            return src;
        }



    }

}
