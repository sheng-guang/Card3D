// Made with Amplify Shader Editor
// Available at the Unity Asset Store - http://u3d.as/y3X 
Shader "2DStocking"
{
	Properties
	{
		_stockingmask("stocking mask", 2D) = "white" {}
		_stockingmaskline("stocking mask line", 2D) = "white" {}
		_skin("skin", Color) = (0,0,0,0)
		_alpha("alpha", Range( 0 , 1)) = 0.35
		_stocking("stocking", Color) = (0,0,0,0)
		[HideInInspector] _texcoord( "", 2D ) = "white" {}
		[HideInInspector] __dirty( "", Int ) = 1
	}

	SubShader
	{
		Tags{ "RenderType" = "Transparent"  "Queue" = "Geometry+0" "IsEmissive" = "true"  }
		Cull Back
		CGPROGRAM
		#pragma target 3.0
		#pragma surface surf Unlit keepalpha addshadow fullforwardshadows 
		struct Input
		{
			float2 uv_texcoord;
		};

		uniform float4 _skin;
		uniform float4 _stocking;
		uniform float _alpha;
		uniform sampler2D _stockingmaskline;
		uniform float4 _stockingmaskline_ST;
		uniform sampler2D _stockingmask;
		uniform float4 _stockingmask_ST;

		inline half4 LightingUnlit( SurfaceOutput s, half3 lightDir, half atten )
		{
			return half4 ( 0, 0, 0, s.Alpha );
		}

		void surf( Input i , inout SurfaceOutput o )
		{
			float2 uv_stockingmaskline = i.uv_texcoord * _stockingmaskline_ST.xy + _stockingmaskline_ST.zw;
			float4 lerpResult90 = lerp( _skin , _stocking , max( _alpha , tex2D( _stockingmaskline, uv_stockingmaskline ).a ));
			float2 uv_stockingmask = i.uv_texcoord * _stockingmask_ST.xy + _stockingmask_ST.zw;
			float4 lerpResult99 = lerp( _skin , lerpResult90 , tex2D( _stockingmask, uv_stockingmask ).a);
			o.Emission = lerpResult99.rgb;
			o.Alpha = 1;
		}

		ENDCG
	}
	Fallback "Diffuse"
	CustomEditor "ASEMaterialInspector"
}
/*ASEBEGIN
Version=18935
176;299;1592;776;1368.953;16.1705;1.870906;True;True
Node;AmplifyShaderEditor.RangedFloatNode;89;-614.162,444.0994;Inherit;False;Property;_alpha;alpha;5;0;Create;True;0;0;0;False;0;False;0.35;0.68;0;1;0;1;FLOAT;0
Node;AmplifyShaderEditor.SamplerNode;94;-612.5934,530.7765;Inherit;True;Property;_stockingmaskline;stocking mask line;3;0;Create;True;0;0;0;False;0;False;-1;None;79ead6ce0df9847449c641bec951b873;True;0;False;white;Auto;False;Object;-1;Auto;Texture2D;8;0;SAMPLER2D;;False;1;FLOAT2;0,0;False;2;FLOAT;0;False;3;FLOAT2;0,0;False;4;FLOAT2;0,0;False;5;FLOAT;1;False;6;FLOAT;0;False;7;SAMPLERSTATE;;False;5;COLOR;0;FLOAT;1;FLOAT;2;FLOAT;3;FLOAT;4
Node;AmplifyShaderEditor.ColorNode;88;-212.498,170.9069;Inherit;False;Property;_skin;skin;4;0;Create;True;0;0;0;False;0;False;0,0,0,0;1,0.8,0.7607843,0;True;0;5;COLOR;0;FLOAT;1;FLOAT;2;FLOAT;3;FLOAT;4
Node;AmplifyShaderEditor.SimpleMaxOpNode;95;-235.687,488.5019;Inherit;True;2;0;FLOAT;0;False;1;FLOAT;0;False;1;FLOAT;0
Node;AmplifyShaderEditor.ColorNode;92;-579.6616,240.1993;Inherit;False;Property;_stocking;stocking;6;0;Create;True;0;0;0;False;0;False;0,0,0,0;0,0,0,0;True;0;5;COLOR;0;FLOAT;1;FLOAT;2;FLOAT;3;FLOAT;4
Node;AmplifyShaderEditor.LerpOp;90;50.76151,441.8369;Inherit;True;3;0;COLOR;0,0,0,0;False;1;COLOR;0.6509434,0.6509434,0.6509434,0;False;2;FLOAT;0;False;1;COLOR;0
Node;AmplifyShaderEditor.SamplerNode;69;10.70304,665.9575;Inherit;True;Property;_stockingmask;stocking mask;2;0;Create;True;0;0;0;False;0;False;-1;None;57c54295ff1fc4ca5936274d9578cf94;True;0;False;white;Auto;False;Object;-1;Auto;Texture2D;8;0;SAMPLER2D;;False;1;FLOAT2;0,0;False;2;FLOAT;0;False;3;FLOAT2;0,0;False;4;FLOAT2;0,0;False;5;FLOAT;1;False;6;FLOAT;0;False;7;SAMPLERSTATE;;False;5;COLOR;0;FLOAT;1;FLOAT;2;FLOAT;3;FLOAT;4
Node;AmplifyShaderEditor.NormalVertexDataNode;63;-79.54414,927.9437;Inherit;False;0;5;FLOAT3;0;FLOAT;1;FLOAT;2;FLOAT;3;FLOAT;4
Node;AmplifyShaderEditor.SimpleMultiplyOpNode;30;175.6244,936.3766;Inherit;False;2;2;0;FLOAT3;0,0,0;False;1;FLOAT;0;False;1;FLOAT3;0
Node;AmplifyShaderEditor.RangedFloatNode;28;-179.2565,1057.833;Inherit;False;Property;_wide;wide;1;0;Create;True;0;0;0;False;0;False;0.1;0.001;0;1;0;1;FLOAT;0
Node;AmplifyShaderEditor.LerpOp;99;378.6183,420.536;Inherit;True;3;0;COLOR;0,0,0,0;False;1;COLOR;0,0,0,0;False;2;FLOAT;0;False;1;COLOR;0
Node;AmplifyShaderEditor.StandardSurfaceOutputNode;98;645.1395,449.668;Float;False;True;-1;2;ASEMaterialInspector;0;0;Unlit;2DStocking;False;False;False;False;False;False;False;False;False;False;False;False;False;False;False;False;False;False;False;False;False;Back;0;False;-1;0;False;-1;False;0;False;-1;0;False;-1;False;0;Custom;0.5;True;True;0;True;Transparent;;Geometry;All;18;all;True;True;True;True;0;False;-1;False;0;False;-1;255;False;-1;255;False;-1;0;False;-1;0;False;-1;0;False;-1;0;False;-1;0;False;-1;0;False;-1;0;False;-1;0;False;-1;False;2;15;10;25;False;0.5;True;0;0;False;-1;0;False;-1;0;0;False;-1;0;False;-1;0;False;-1;0;False;-1;0;False;0;0,0,0,0;VertexOffset;True;False;Cylindrical;False;True;Relative;0;;0;-1;-1;-1;0;False;0;0;False;-1;-1;0;False;-1;0;0;0;False;0.1;False;-1;0;False;-1;False;15;0;FLOAT3;0,0,0;False;1;FLOAT3;0,0,0;False;2;FLOAT3;0,0,0;False;3;FLOAT;0;False;4;FLOAT;0;False;6;FLOAT3;0,0,0;False;7;FLOAT3;0,0,0;False;8;FLOAT;0;False;9;FLOAT;0;False;10;FLOAT;0;False;13;FLOAT3;0,0,0;False;11;FLOAT3;0,0,0;False;12;FLOAT3;0,0,0;False;14;FLOAT4;0,0,0,0;False;15;FLOAT3;0,0,0;False;0
WireConnection;95;0;89;0
WireConnection;95;1;94;4
WireConnection;90;0;88;0
WireConnection;90;1;92;0
WireConnection;90;2;95;0
WireConnection;30;0;63;0
WireConnection;30;1;28;0
WireConnection;99;0;88;0
WireConnection;99;1;90;0
WireConnection;99;2;69;4
WireConnection;98;2;99;0
ASEEND*/
//CHKSM=4F09AE58F18D84CA528A84BCB2990B980518D245