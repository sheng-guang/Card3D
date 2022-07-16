
declare module 'csharp' {
    //keep type incompatibility / 此属性保持类型不兼容
    const __keep_incompatibility: unique symbol;
    namespace CSharp {
        interface $Ref<T> {
            value: T
        }
        namespace System {
            interface Array$1<T> extends System.Array {
                get_Item(index: number):T;
                set_Item(index: number, value: T):void;
            }
        }
        interface $Task<T> {}
        namespace UnityEngine {
            /** Representation of 3D vectors and points. */
            class Vector3 extends System.ValueType implements System.IEquatable$1<UnityEngine.Vector3>, System.IFormattable
            {
                protected [__keep_incompatibility]: never;
                public static kEpsilon : number
                public static kEpsilonNormalSqrt : number/** X component of the vector. */
                public x : number/** Y component of the vector. */
                public y : number/** Z component of the vector. */
                public z : number/** Returns this vector with a magnitude of 1 (Read Only). */
                public get normalized(): UnityEngine.Vector3;
                /** Returns the length of this vector (Read Only). */
                public get magnitude(): number;
                /** Returns the squared length of this vector (Read Only). */
                public get sqrMagnitude(): number;
                /** Shorthand for writing Vector3(0, 0, 0). */
                public static get zero(): UnityEngine.Vector3;
                /** Shorthand for writing Vector3(1, 1, 1). */
                public static get one(): UnityEngine.Vector3;
                /** Shorthand for writing Vector3(0, 0, 1). */
                public static get forward(): UnityEngine.Vector3;
                /** Shorthand for writing Vector3(0, 0, -1). */
                public static get back(): UnityEngine.Vector3;
                /** Shorthand for writing Vector3(0, 1, 0). */
                public static get up(): UnityEngine.Vector3;
                /** Shorthand for writing Vector3(0, -1, 0). */
                public static get down(): UnityEngine.Vector3;
                /** Shorthand for writing Vector3(-1, 0, 0). */
                public static get left(): UnityEngine.Vector3;
                /** Shorthand for writing Vector3(1, 0, 0). */
                public static get right(): UnityEngine.Vector3;
                /** Shorthand for writing Vector3(float.PositiveInfinity, float.PositiveInfinity, float.PositiveInfinity). */
                public static get positiveInfinity(): UnityEngine.Vector3;
                /** Shorthand for writing Vector3(float.NegativeInfinity, float.NegativeInfinity, float.NegativeInfinity). */
                public static get negativeInfinity(): UnityEngine.Vector3;
                /** Linearly interpolates between two points.
                * @param a Start value, returned when t = 0.
                * @param b End value, returned when t = 1.
                * @param t Value used to interpolate between a and b.
                * @returns Interpolated value, equals to a + (b - a) * t. 
                */
                public static Lerp ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number) : UnityEngine.Vector3
                /** Linearly interpolates between two vectors. */
                public static LerpUnclamped ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number) : UnityEngine.Vector3
                /** Calculate a position between the points specified by current and target, moving no farther than the distance specified by maxDistanceDelta.
                * @param current The position to move from.
                * @param target The position to move towards.
                * @param maxDistanceDelta Distance to move current per call.
                * @returns The new position. 
                */
                public static MoveTowards ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $maxDistanceDelta: number) : UnityEngine.Vector3
                /** Gradually changes a vector towards a desired goal over time. * @param current The current position.
                * @param target The position we are trying to reach.
                * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
                * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
                * @param maxSpeed Optionally allows you to clamp the maximum speed.
                * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
                */
                public static SmoothDamp ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number, $maxSpeed: number) : UnityEngine.Vector3
                /** Gradually changes a vector towards a desired goal over time. * @param current The current position.
                * @param target The position we are trying to reach.
                * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
                * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
                * @param maxSpeed Optionally allows you to clamp the maximum speed.
                * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
                */
                public static SmoothDamp ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number) : UnityEngine.Vector3
                /** Gradually changes a vector towards a desired goal over time. * @param current The current position.
                * @param target The position we are trying to reach.
                * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
                * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
                * @param maxSpeed Optionally allows you to clamp the maximum speed.
                * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
                */
                public static SmoothDamp ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number, $maxSpeed: number, $deltaTime: number) : UnityEngine.Vector3
                public get_Item ($index: number) : number
                public set_Item ($index: number, $value: number) : void
                /** Set x, y and z components of an existing Vector3. */
                public Set ($newX: number, $newY: number, $newZ: number) : void
                /** Multiplies two vectors component-wise. */
                public static Scale ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3) : UnityEngine.Vector3
                /** Multiplies every component of this vector by the same component of scale. */
                public Scale ($scale: UnityEngine.Vector3) : void
                /** Cross Product of two vectors. */
                public static Cross ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : UnityEngine.Vector3
                /** Returns true if the given vector is exactly equal to this vector. */
                public Equals ($other: any) : boolean
                public Equals ($other: UnityEngine.Vector3) : boolean
                /** Reflects a vector off the plane defined by a normal. */
                public static Reflect ($inDirection: UnityEngine.Vector3, $inNormal: UnityEngine.Vector3) : UnityEngine.Vector3
                /** Makes this vector have a magnitude of 1. */
                public static Normalize ($value: UnityEngine.Vector3) : UnityEngine.Vector3
                public Normalize () : void
                /** Dot Product of two vectors. */
                public static Dot ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : number
                /** Projects a vector onto another vector. */
                public static Project ($vector: UnityEngine.Vector3, $onNormal: UnityEngine.Vector3) : UnityEngine.Vector3
                /** Projects a vector onto a plane defined by a normal orthogonal to the plane.
                * @param planeNormal The direction from the vector towards the plane.
                * @param vector The location of the vector above the plane.
                * @returns The location of the vector on the plane. 
                */
                public static ProjectOnPlane ($vector: UnityEngine.Vector3, $planeNormal: UnityEngine.Vector3) : UnityEngine.Vector3
                /** Calculates the angle between vectors from and.
                * @param from The vector from which the angular difference is measured.
                * @param to The vector to which the angular difference is measured.
                * @returns The angle in degrees between the two vectors. 
                */
                public static Angle ($from: UnityEngine.Vector3, $to: UnityEngine.Vector3) : number
                /** Calculates the signed angle between vectors from and to in relation to axis.
                * @param from The vector from which the angular difference is measured.
                * @param to The vector to which the angular difference is measured.
                * @param axis A vector around which the other vectors are rotated.
                * @returns Returns the signed angle between from and to in degrees. 
                */
                public static SignedAngle ($from: UnityEngine.Vector3, $to: UnityEngine.Vector3, $axis: UnityEngine.Vector3) : number
                /** Returns the distance between a and b. */
                public static Distance ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3) : number
                /** Returns a copy of vector with its magnitude clamped to maxLength. */
                public static ClampMagnitude ($vector: UnityEngine.Vector3, $maxLength: number) : UnityEngine.Vector3
                public static Magnitude ($vector: UnityEngine.Vector3) : number
                public static SqrMagnitude ($vector: UnityEngine.Vector3) : number
                /** Returns a vector that is made from the smallest components of two vectors. */
                public static Min ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : UnityEngine.Vector3
                /** Returns a vector that is made from the largest components of two vectors. */
                public static Max ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : UnityEngine.Vector3
                public static op_Addition ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3) : UnityEngine.Vector3
                public static op_Subtraction ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3) : UnityEngine.Vector3
                public static op_UnaryNegation ($a: UnityEngine.Vector3) : UnityEngine.Vector3
                public static op_Multiply ($a: UnityEngine.Vector3, $d: number) : UnityEngine.Vector3
                public static op_Multiply ($d: number, $a: UnityEngine.Vector3) : UnityEngine.Vector3
                public static op_Division ($a: UnityEngine.Vector3, $d: number) : UnityEngine.Vector3
                public static op_Equality ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : boolean
                public static op_Inequality ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : boolean
                public ToString () : string
                /** Returns a formatted string for this vector. * @param format A numeric format string.
                * @param formatProvider An object that specifies culture-specific formatting.
                */
                public ToString ($format: string) : string
                /** Returns a formatted string for this vector. * @param format A numeric format string.
                * @param formatProvider An object that specifies culture-specific formatting.
                */
                public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
                /** Spherically interpolates between two vectors. */
                public static Slerp ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number) : UnityEngine.Vector3
                /** Spherically interpolates between two vectors. */
                public static SlerpUnclamped ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number) : UnityEngine.Vector3
                /** Makes vectors normalized and orthogonal to each other. */
                public static OrthoNormalize ($normal: $Ref<UnityEngine.Vector3>, $tangent: $Ref<UnityEngine.Vector3>) : void
                /** Makes vectors normalized and orthogonal to each other. */
                public static OrthoNormalize ($normal: $Ref<UnityEngine.Vector3>, $tangent: $Ref<UnityEngine.Vector3>, $binormal: $Ref<UnityEngine.Vector3>) : void
                /** Rotates a vector current towards target.
                * @param current The vector being managed.
                * @param target The vector.
                * @param maxRadiansDelta The maximum angle in radians allowed for this rotation.
                * @param maxMagnitudeDelta The maximum allowed change in vector magnitude for this rotation.
                * @returns The location that RotateTowards generates. 
                */
                public static RotateTowards ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $maxRadiansDelta: number, $maxMagnitudeDelta: number) : UnityEngine.Vector3
                public constructor ($x: number, $y: number, $z: number)
                public constructor ($x: number, $y: number)
                public Equals ($obj: any) : boolean
                public static Equals ($objA: any, $objB: any) : boolean
                public constructor ()
            }
            /** Representation of 3D vectors and points. */
            interface Vector3 {
                ToAngle () : number;
                GetNextV ($TarV: UnityEngine.Vector3, $acc: number, $deltaT: number, $data: MovementData) : UnityEngine.Vector3;
                NearZero () : boolean;
                ShowInNewCam ($OldCam: UnityEngine.Camera, $newCam: UnityEngine.Camera) : UnityEngine.Vector3;
                SetY ($y: number) : UnityEngine.Vector3;
                GetRight_normal () : UnityEngine.Vector3;
            }
            /** Class containing methods to ease debugging while developing a game. */
            class Debug extends System.Object
            {
                protected [__keep_incompatibility]: never;
                /** Get default debug logger. */
                public static get unityLogger(): UnityEngine.ILogger;
                /** Reports whether the development console is visible. The development console cannot be made to appear using: */
                public static get developerConsoleVisible(): boolean;
                public static set developerConsoleVisible(value: boolean);
                /** In the Build Settings dialog there is a check box called "Development Build". */
                public static get isDebugBuild(): boolean;
                /** Draws a line between specified start and end points. * @param start Point in world space where the line should start.
                * @param end Point in world space where the line should end.
                * @param color Color of the line.
                * @param duration How long the line should be visible for.
                * @param depthTest Should the line be obscured by objects closer to the camera?
                */
                public static DrawLine ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number) : void
                /** Draws a line between specified start and end points. * @param start Point in world space where the line should start.
                * @param end Point in world space where the line should end.
                * @param color Color of the line.
                * @param duration How long the line should be visible for.
                * @param depthTest Should the line be obscured by objects closer to the camera?
                */
                public static DrawLine ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $color: UnityEngine.Color) : void
                /** Draws a line between specified start and end points. * @param start Point in world space where the line should start.
                * @param end Point in world space where the line should end.
                * @param color Color of the line.
                * @param duration How long the line should be visible for.
                * @param depthTest Should the line be obscured by objects closer to the camera?
                */
                public static DrawLine ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3) : void
                /** Draws a line between specified start and end points. * @param start Point in world space where the line should start.
                * @param end Point in world space where the line should end.
                * @param color Color of the line.
                * @param duration How long the line should be visible for.
                * @param depthTest Should the line be obscured by objects closer to the camera?
                */
                public static DrawLine ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number, $depthTest: boolean) : void
                /** Draws a line from start to start + dir in world coordinates. * @param start Point in world space where the ray should start.
                * @param dir Direction and length of the ray.
                * @param color Color of the drawn line.
                * @param duration How long the line will be visible for (in seconds).
                * @param depthTest Should the line be obscured by other objects closer to the camera?
                */
                public static DrawRay ($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number) : void
                /** Draws a line from start to start + dir in world coordinates. * @param start Point in world space where the ray should start.
                * @param dir Direction and length of the ray.
                * @param color Color of the drawn line.
                * @param duration How long the line will be visible for (in seconds).
                * @param depthTest Should the line be obscured by other objects closer to the camera?
                */
                public static DrawRay ($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3, $color: UnityEngine.Color) : void
                /** Draws a line from start to start + dir in world coordinates. * @param start Point in world space where the ray should start.
                * @param dir Direction and length of the ray.
                * @param color Color of the drawn line.
                * @param duration How long the line will be visible for (in seconds).
                * @param depthTest Should the line be obscured by other objects closer to the camera?
                */
                public static DrawRay ($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3) : void
                /** Draws a line from start to start + dir in world coordinates. * @param start Point in world space where the ray should start.
                * @param dir Direction and length of the ray.
                * @param color Color of the drawn line.
                * @param duration How long the line will be visible for (in seconds).
                * @param depthTest Should the line be obscured by other objects closer to the camera?
                */
                public static DrawRay ($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number, $depthTest: boolean) : void
                public static Break () : void
                public static DebugBreak () : void
                /** Logs a message to the Unity Console. * @param message String or object to be converted to string representation for display.
                * @param context Object to which the message applies.
                */
                public static Log ($message: any) : void
                /** Logs a message to the Unity Console. * @param message String or object to be converted to string representation for display.
                * @param context Object to which the message applies.
                */
                public static Log ($message: any, $context: UnityEngine.Object) : void
                /** Logs a formatted message to the Unity Console. * @param format A composite format string.
                * @param args Format arguments.
                * @param context Object to which the message applies.
                * @param logType Type of message e.g. warn or error etc.
                * @param logOptions Option flags to treat the log message special.
                */
                public static LogFormat ($format: string, ...args: any[]) : void
                /** Logs a formatted message to the Unity Console. * @param format A composite format string.
                * @param args Format arguments.
                * @param context Object to which the message applies.
                * @param logType Type of message e.g. warn or error etc.
                * @param logOptions Option flags to treat the log message special.
                */
                public static LogFormat ($context: UnityEngine.Object, $format: string, ...args: any[]) : void
                /** Logs a formatted message to the Unity Console. * @param format A composite format string.
                * @param args Format arguments.
                * @param context Object to which the message applies.
                * @param logType Type of message e.g. warn or error etc.
                * @param logOptions Option flags to treat the log message special.
                */
                public static LogFormat ($logType: UnityEngine.LogType, $logOptions: UnityEngine.LogOption, $context: UnityEngine.Object, $format: string, ...args: any[]) : void
                /** A variant of Debug.Log that logs an error message to the console. * @param message String or object to be converted to string representation for display.
                * @param context Object to which the message applies.
                */
                public static LogError ($message: any) : void
                /** A variant of Debug.Log that logs an error message to the console. * @param message String or object to be converted to string representation for display.
                * @param context Object to which the message applies.
                */
                public static LogError ($message: any, $context: UnityEngine.Object) : void
                /** Logs a formatted error message to the Unity console. * @param format A composite format string.
                * @param args Format arguments.
                * @param context Object to which the message applies.
                */
                public static LogErrorFormat ($format: string, ...args: any[]) : void
                /** Logs a formatted error message to the Unity console. * @param format A composite format string.
                * @param args Format arguments.
                * @param context Object to which the message applies.
                */
                public static LogErrorFormat ($context: UnityEngine.Object, $format: string, ...args: any[]) : void
                public static ClearDeveloperConsole () : void
                /** A variant of Debug.Log that logs an error message to the console. * @param context Object to which the message applies.
                * @param exception Runtime Exception.
                */
                public static LogException ($exception: System.Exception) : void
                /** A variant of Debug.Log that logs an error message to the console. * @param context Object to which the message applies.
                * @param exception Runtime Exception.
                */
                public static LogException ($exception: System.Exception, $context: UnityEngine.Object) : void
                /** A variant of Debug.Log that logs a warning message to the console. * @param message String or object to be converted to string representation for display.
                * @param context Object to which the message applies.
                */
                public static LogWarning ($message: any) : void
                /** A variant of Debug.Log that logs a warning message to the console. * @param message String or object to be converted to string representation for display.
                * @param context Object to which the message applies.
                */
                public static LogWarning ($message: any, $context: UnityEngine.Object) : void
                /** Logs a formatted warning message to the Unity Console. * @param format A composite format string.
                * @param args Format arguments.
                * @param context Object to which the message applies.
                */
                public static LogWarningFormat ($format: string, ...args: any[]) : void
                /** Logs a formatted warning message to the Unity Console. * @param format A composite format string.
                * @param args Format arguments.
                * @param context Object to which the message applies.
                */
                public static LogWarningFormat ($context: UnityEngine.Object, $format: string, ...args: any[]) : void
                /** Assert a condition and logs an error message to the Unity console on failure. * @param condition Condition you expect to be true.
                * @param context Object to which the message applies.
                * @param message String or object to be converted to string representation for display.
                */
                public static Assert ($condition: boolean) : void
                /** Assert a condition and logs an error message to the Unity console on failure. * @param condition Condition you expect to be true.
                * @param context Object to which the message applies.
                * @param message String or object to be converted to string representation for display.
                */
                public static Assert ($condition: boolean, $context: UnityEngine.Object) : void
                /** Assert a condition and logs an error message to the Unity console on failure. * @param condition Condition you expect to be true.
                * @param context Object to which the message applies.
                * @param message String or object to be converted to string representation for display.
                */
                public static Assert ($condition: boolean, $message: any) : void
                public static Assert ($condition: boolean, $message: string) : void
                /** Assert a condition and logs an error message to the Unity console on failure. * @param condition Condition you expect to be true.
                * @param context Object to which the message applies.
                * @param message String or object to be converted to string representation for display.
                */
                public static Assert ($condition: boolean, $message: any, $context: UnityEngine.Object) : void
                public static Assert ($condition: boolean, $message: string, $context: UnityEngine.Object) : void
                /** Assert a condition and logs a formatted error message to the Unity console on failure. * @param condition Condition you expect to be true.
                * @param format A composite format string.
                * @param args Format arguments.
                * @param context Object to which the message applies.
                */
                public static AssertFormat ($condition: boolean, $format: string, ...args: any[]) : void
                /** Assert a condition and logs a formatted error message to the Unity console on failure. * @param condition Condition you expect to be true.
                * @param format A composite format string.
                * @param args Format arguments.
                * @param context Object to which the message applies.
                */
                public static AssertFormat ($condition: boolean, $context: UnityEngine.Object, $format: string, ...args: any[]) : void
                /** A variant of Debug.Log that logs an assertion message to the console. * @param message String or object to be converted to string representation for display.
                * @param context Object to which the message applies.
                */
                public static LogAssertion ($message: any) : void
                /** A variant of Debug.Log that logs an assertion message to the console. * @param message String or object to be converted to string representation for display.
                * @param context Object to which the message applies.
                */
                public static LogAssertion ($message: any, $context: UnityEngine.Object) : void
                /** Logs a formatted assertion message to the Unity console. * @param format A composite format string.
                * @param args Format arguments.
                * @param context Object to which the message applies.
                */
                public static LogAssertionFormat ($format: string, ...args: any[]) : void
                /** Logs a formatted assertion message to the Unity console. * @param format A composite format string.
                * @param args Format arguments.
                * @param context Object to which the message applies.
                */
                public static LogAssertionFormat ($context: UnityEngine.Object, $format: string, ...args: any[]) : void
                public constructor ()
            }
            interface ILogger extends UnityEngine.ILogHandler
            {
            }
            interface ILogHandler
            {
            }
            /** Representation of RGBA colors. */
            class Color extends System.ValueType implements System.IEquatable$1<UnityEngine.Color>, System.IFormattable
            {
                protected [__keep_incompatibility]: never;
            }
            /** Base class for all objects Unity can reference. */
            class Object extends System.Object
            {
                protected [__keep_incompatibility]: never;
                /** The name of the object. */
                public get name(): string;
                public set name(value: string);
                /** Should the object be hidden, saved with the Scene or modifiable by the user? */
                public get hideFlags(): UnityEngine.HideFlags;
                public set hideFlags(value: UnityEngine.HideFlags);
                public GetInstanceID () : number
                public static op_Implicit ($exists: UnityEngine.Object) : boolean
                /** Clones the object original and returns the clone.
                * @param original An existing object that you want to make a copy of.
                * @param position Position for the new object.
                * @param rotation Orientation of the new object.
                * @param parent Parent that will be assigned to the new object.
                * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent.
                * @returns The instantiated clone. 
                */
                public static Instantiate ($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion) : UnityEngine.Object
                /** Clones the object original and returns the clone.
                * @param original An existing object that you want to make a copy of.
                * @param position Position for the new object.
                * @param rotation Orientation of the new object.
                * @param parent Parent that will be assigned to the new object.
                * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent.
                * @returns The instantiated clone. 
                */
                public static Instantiate ($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion, $parent: UnityEngine.Transform) : UnityEngine.Object
                /** Clones the object original and returns the clone.
                * @param original An existing object that you want to make a copy of.
                * @param position Position for the new object.
                * @param rotation Orientation of the new object.
                * @param parent Parent that will be assigned to the new object.
                * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent.
                * @returns The instantiated clone. 
                */
                public static Instantiate ($original: UnityEngine.Object) : UnityEngine.Object
                /** Clones the object original and returns the clone.
                * @param original An existing object that you want to make a copy of.
                * @param position Position for the new object.
                * @param rotation Orientation of the new object.
                * @param parent Parent that will be assigned to the new object.
                * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent.
                * @returns The instantiated clone. 
                */
                public static Instantiate ($original: UnityEngine.Object, $parent: UnityEngine.Transform) : UnityEngine.Object
                /** Clones the object original and returns the clone.
                * @param original An existing object that you want to make a copy of.
                * @param position Position for the new object.
                * @param rotation Orientation of the new object.
                * @param parent Parent that will be assigned to the new object.
                * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent.
                * @returns The instantiated clone. 
                */
                public static Instantiate ($original: UnityEngine.Object, $parent: UnityEngine.Transform, $instantiateInWorldSpace: boolean) : UnityEngine.Object
                public static Instantiate ($original: UnityEngine.Object, $parent: UnityEngine.Transform, $worldPositionStays: boolean) : UnityEngine.Object
                /** Removes a GameObject, component or asset. * @param obj The object to destroy.
                * @param t The optional amount of time to delay before destroying the object.
                */
                public static Destroy ($obj: UnityEngine.Object, $t: number) : void
                /** Removes a GameObject, component or asset. * @param obj The object to destroy.
                * @param t The optional amount of time to delay before destroying the object.
                */
                public static Destroy ($obj: UnityEngine.Object) : void
                /** Destroys the object obj immediately. You are strongly recommended to use Destroy instead. * @param obj Object to be destroyed.
                * @param allowDestroyingAssets Set to true to allow assets to be destroyed.
                */
                public static DestroyImmediate ($obj: UnityEngine.Object, $allowDestroyingAssets: boolean) : void
                /** Destroys the object obj immediately. You are strongly recommended to use Destroy instead. * @param obj Object to be destroyed.
                * @param allowDestroyingAssets Set to true to allow assets to be destroyed.
                */
                public static DestroyImmediate ($obj: UnityEngine.Object) : void
                /** Gets a list of all loaded objects of Type type.
                * @param type The type of object to find.
                * @param includeInactive If true, components attached to inactive GameObjects are also included.
                * @returns The array of objects found matching the type specified. 
                */
                public static FindObjectsOfType ($type: System.Type) : System.Array$1<UnityEngine.Object>
                /** Gets a list of all loaded objects of Type type.
                * @param type The type of object to find.
                * @param includeInactive If true, components attached to inactive GameObjects are also included.
                * @returns The array of objects found matching the type specified. 
                */
                public static FindObjectsOfType ($type: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Object>
                /** Do not destroy the target Object when loading a new Scene. * @param target An Object not destroyed on Scene change.
                */
                public static DontDestroyOnLoad ($target: UnityEngine.Object) : void
                /** Returns the first active loaded object of Type type.
                * @param type The type of object to find.
                * @returns Object The first active loaded object that matches the specified type. It returns null if no Object matches the type. 
                */
                public static FindObjectOfType ($type: System.Type) : UnityEngine.Object
                /** Returns the first active loaded object of Type type.
                * @param type The type of object to find.
                * @returns Object The first active loaded object that matches the specified type. It returns null if no Object matches the type. 
                */
                public static FindObjectOfType ($type: System.Type, $includeInactive: boolean) : UnityEngine.Object
                public static op_Equality ($x: UnityEngine.Object, $y: UnityEngine.Object) : boolean
                public static op_Inequality ($x: UnityEngine.Object, $y: UnityEngine.Object) : boolean
                public constructor ()
            }
            /** Base class for all objects Unity can reference. */
            interface Object {
                ExInstantiate ($args: ResArgs) : UnityEngine.Object;
            }
            /** The type of the log message in Debug.unityLogger.Log or delegate registered with Application.RegisterLogCallback. */
            enum LogType
            { Error = 0, Assert = 1, Warning = 2, Log = 3, Exception = 4 }
            /** Option flags for specifying special treatment of a log message. */
            enum LogOption
            { None = 0, NoStacktrace = 1 }
            /** Provides an interface to get time information from Unity. */
            class Time extends System.Object
            {
                protected [__keep_incompatibility]: never;
                /** The time at the beginning of this frame (Read Only). */
                public static get time(): number;
                /** The double precision time at the beginning of this frame (Read Only). This is the time in seconds since the start of the game. */
                public static get timeAsDouble(): number;
                /** The time since this frame started (Read Only). This is the time in seconds since the last non-additive scene has finished loading. */
                public static get timeSinceLevelLoad(): number;
                /** The double precision time since this frame started (Read Only). This is the time in seconds since the last non-additive scene has finished loading. */
                public static get timeSinceLevelLoadAsDouble(): number;
                /** The interval in seconds from the last frame to the current one (Read Only). */
                public static get deltaTime(): number;
                /** The time since the last MonoBehaviour.FixedUpdate started (Read Only). This is the time in seconds since the start of the game. */
                public static get fixedTime(): number;
                /** The double precision time since the last MonoBehaviour.FixedUpdate started (Read Only). This is the time in seconds since the start of the game. */
                public static get fixedTimeAsDouble(): number;
                /** The timeScale-independent time for this frame (Read Only). This is the time in seconds since the start of the game. */
                public static get unscaledTime(): number;
                /** The double precision timeScale-independent time for this frame (Read Only). This is the time in seconds since the start of the game. */
                public static get unscaledTimeAsDouble(): number;
                /** The timeScale-independent time at the beginning of the last MonoBehaviour.FixedUpdate phase (Read Only). This is the time in seconds since the start of the game. */
                public static get fixedUnscaledTime(): number;
                /** The double precision timeScale-independent time at the beginning of the last MonoBehaviour.FixedUpdate (Read Only). This is the time in seconds since the start of the game. */
                public static get fixedUnscaledTimeAsDouble(): number;
                /** The timeScale-independent interval in seconds from the last frame to the current one (Read Only). */
                public static get unscaledDeltaTime(): number;
                /** The timeScale-independent interval in seconds from the last MonoBehaviour.FixedUpdate phase to the current one (Read Only). */
                public static get fixedUnscaledDeltaTime(): number;
                /** The interval in seconds at which physics and other fixed frame rate updates (like MonoBehaviour's MonoBehaviour.FixedUpdate) are performed. */
                public static get fixedDeltaTime(): number;
                public static set fixedDeltaTime(value: number);
                /** The maximum value of Time.deltaTime in any given frame. This is a time in seconds that limits the increase of Time.time between two frames. */
                public static get maximumDeltaTime(): number;
                public static set maximumDeltaTime(value: number);
                /** A smoothed out Time.deltaTime (Read Only). */
                public static get smoothDeltaTime(): number;
                /** The maximum time a frame can spend on particle updates. If the frame takes longer than this, then updates are split into multiple smaller updates. */
                public static get maximumParticleDeltaTime(): number;
                public static set maximumParticleDeltaTime(value: number);
                /** The scale at which time passes. */
                public static get timeScale(): number;
                public static set timeScale(value: number);
                /** The total number of frames since the start of the game (Read Only). */
                public static get frameCount(): number;
                public static get renderedFrameCount(): number;
                /** The real time in seconds since the game started (Read Only). */
                public static get realtimeSinceStartup(): number;
                /** The real time in seconds since the game started (Read Only). Double precision version of Time.realtimeSinceStartup.  */
                public static get realtimeSinceStartupAsDouble(): number;
                /** Slows your application’s playback time to allow Unity to save screenshots in between frames. */
                public static get captureDeltaTime(): number;
                public static set captureDeltaTime(value: number);
                /** The reciprocal of Time.captureDeltaTime. */
                public static get captureFramerate(): number;
                public static set captureFramerate(value: number);
                /** Returns true if called inside a fixed time step callback (like MonoBehaviour's MonoBehaviour.FixedUpdate), otherwise returns false. */
                public static get inFixedTimeStep(): boolean;
                public constructor ()
            }
            /** Position, rotation and scale of an object. */
            class Transform extends UnityEngine.Component implements System.Collections.IEnumerable
            {
                protected [__keep_incompatibility]: never;
                /** The world space position of the Transform. */
                public get position(): UnityEngine.Vector3;
                public set position(value: UnityEngine.Vector3);
                /** Position of the transform relative to the parent transform. */
                public get localPosition(): UnityEngine.Vector3;
                public set localPosition(value: UnityEngine.Vector3);
                /** The rotation as Euler angles in degrees. */
                public get eulerAngles(): UnityEngine.Vector3;
                public set eulerAngles(value: UnityEngine.Vector3);
                /** The rotation as Euler angles in degrees relative to the parent transform's rotation. */
                public get localEulerAngles(): UnityEngine.Vector3;
                public set localEulerAngles(value: UnityEngine.Vector3);
                /** The red axis of the transform in world space. */
                public get right(): UnityEngine.Vector3;
                public set right(value: UnityEngine.Vector3);
                /** The green axis of the transform in world space. */
                public get up(): UnityEngine.Vector3;
                public set up(value: UnityEngine.Vector3);
                /** Returns a normalized vector representing the blue axis of the transform in world space. */
                public get forward(): UnityEngine.Vector3;
                public set forward(value: UnityEngine.Vector3);
                /** A Quaternion that stores the rotation of the Transform in world space. */
                public get rotation(): UnityEngine.Quaternion;
                public set rotation(value: UnityEngine.Quaternion);
                /** The rotation of the transform relative to the transform rotation of the parent. */
                public get localRotation(): UnityEngine.Quaternion;
                public set localRotation(value: UnityEngine.Quaternion);
                /** The scale of the transform relative to the GameObjects parent. */
                public get localScale(): UnityEngine.Vector3;
                public set localScale(value: UnityEngine.Vector3);
                /** The parent of the transform. */
                public get parent(): UnityEngine.Transform;
                public set parent(value: UnityEngine.Transform);
                /** Matrix that transforms a point from world space into local space (Read Only). */
                public get worldToLocalMatrix(): UnityEngine.Matrix4x4;
                /** Matrix that transforms a point from local space into world space (Read Only). */
                public get localToWorldMatrix(): UnityEngine.Matrix4x4;
                /** Returns the topmost transform in the hierarchy. */
                public get root(): UnityEngine.Transform;
                /** The number of children the parent Transform has. */
                public get childCount(): number;
                /** The global scale of the object (Read Only). */
                public get lossyScale(): UnityEngine.Vector3;
                /** Has the transform changed since the last time the flag was set to 'false'? */
                public get hasChanged(): boolean;
                public set hasChanged(value: boolean);
                /** The transform capacity of the transform's hierarchy data structure. */
                public get hierarchyCapacity(): number;
                public set hierarchyCapacity(value: number);
                /** The number of transforms in the transform's hierarchy data structure. */
                public get hierarchyCount(): number;
                /** Set the parent of the transform. * @param parent The parent Transform to use.
                * @param worldPositionStays If true, the parent-relative position, scale and rotation are modified such that the object keeps the same world space position, rotation and scale as before.
                */
                public SetParent ($p: UnityEngine.Transform) : void
                /** Set the parent of the transform. * @param parent The parent Transform to use.
                * @param worldPositionStays If true, the parent-relative position, scale and rotation are modified such that the object keeps the same world space position, rotation and scale as before.
                */
                public SetParent ($parent: UnityEngine.Transform, $worldPositionStays: boolean) : void
                /** Sets the world space position and rotation of the Transform component. */
                public SetPositionAndRotation ($position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion) : void
                /** Moves the transform in the direction and distance of translation. */
                public Translate ($translation: UnityEngine.Vector3, $relativeTo: UnityEngine.Space) : void
                /** Moves the transform in the direction and distance of translation. */
                public Translate ($translation: UnityEngine.Vector3) : void
                /** Moves the transform by x along the x axis, y along the y axis, and z along the z axis. */
                public Translate ($x: number, $y: number, $z: number, $relativeTo: UnityEngine.Space) : void
                /** Moves the transform by x along the x axis, y along the y axis, and z along the z axis. */
                public Translate ($x: number, $y: number, $z: number) : void
                /** Moves the transform in the direction and distance of translation. */
                public Translate ($translation: UnityEngine.Vector3, $relativeTo: UnityEngine.Transform) : void
                /** Moves the transform by x along the x axis, y along the y axis, and z along the z axis. */
                public Translate ($x: number, $y: number, $z: number, $relativeTo: UnityEngine.Transform) : void
                /** Applies a rotation of eulerAngles.z degrees around the z-axis, eulerAngles.x degrees around the x-axis, and eulerAngles.y degrees around the y-axis (in that order). * @param eulers The rotation to apply in euler angles.
                * @param relativeTo Determines whether to rotate the GameObject either locally to  the GameObject or relative to the Scene in world space.
                */
                public Rotate ($eulers: UnityEngine.Vector3, $relativeTo: UnityEngine.Space) : void
                /** Applies a rotation of eulerAngles.z degrees around the z-axis, eulerAngles.x degrees around the x-axis, and eulerAngles.y degrees around the y-axis (in that order). * @param eulers The rotation to apply in euler angles.
                */
                public Rotate ($eulers: UnityEngine.Vector3) : void
                /** The implementation of this method applies a rotation of zAngle degrees around the z axis, xAngle degrees around the x axis, and yAngle degrees around the y axis (in that order). * @param relativeTo Determines whether to rotate the GameObject either locally to the GameObject or relative to the Scene in world space.
                * @param xAngle Degrees to rotate the GameObject around the X axis.
                * @param yAngle Degrees to rotate the GameObject around the Y axis.
                * @param zAngle Degrees to rotate the GameObject around the Z axis.
                */
                public Rotate ($xAngle: number, $yAngle: number, $zAngle: number, $relativeTo: UnityEngine.Space) : void
                /** The implementation of this method applies a rotation of zAngle degrees around the z axis, xAngle degrees around the x axis, and yAngle degrees around the y axis (in that order). * @param xAngle Degrees to rotate the GameObject around the X axis.
                * @param yAngle Degrees to rotate the GameObject around the Y axis.
                * @param zAngle Degrees to rotate the GameObject around the Z axis.
                */
                public Rotate ($xAngle: number, $yAngle: number, $zAngle: number) : void
                /** Rotates the object around the given axis by the number of degrees defined by the given angle. * @param angle The degrees of rotation to apply.
                * @param axis The axis to apply rotation to.
                * @param relativeTo Determines whether to rotate the GameObject either locally to the GameObject or relative to the Scene in world space.
                */
                public Rotate ($axis: UnityEngine.Vector3, $angle: number, $relativeTo: UnityEngine.Space) : void
                /** Rotates the object around the given axis by the number of degrees defined by the given angle. * @param axis The axis to apply rotation to.
                * @param angle The degrees of rotation to apply.
                */
                public Rotate ($axis: UnityEngine.Vector3, $angle: number) : void
                /** Rotates the transform about axis passing through point in world coordinates by angle degrees. */
                public RotateAround ($point: UnityEngine.Vector3, $axis: UnityEngine.Vector3, $angle: number) : void
                /** Rotates the transform so the forward vector points at target's current position. * @param target Object to point towards.
                * @param worldUp Vector specifying the upward direction.
                */
                public LookAt ($target: UnityEngine.Transform, $worldUp: UnityEngine.Vector3) : void
                /** Rotates the transform so the forward vector points at target's current position. * @param target Object to point towards.
                * @param worldUp Vector specifying the upward direction.
                */
                public LookAt ($target: UnityEngine.Transform) : void
                /** Rotates the transform so the forward vector points at worldPosition. * @param worldPosition Point to look at.
                * @param worldUp Vector specifying the upward direction.
                */
                public LookAt ($worldPosition: UnityEngine.Vector3, $worldUp: UnityEngine.Vector3) : void
                /** Rotates the transform so the forward vector points at worldPosition. * @param worldPosition Point to look at.
                * @param worldUp Vector specifying the upward direction.
                */
                public LookAt ($worldPosition: UnityEngine.Vector3) : void
                /** Transforms direction from local space to world space. */
                public TransformDirection ($direction: UnityEngine.Vector3) : UnityEngine.Vector3
                /** Transforms direction x, y, z from local space to world space. */
                public TransformDirection ($x: number, $y: number, $z: number) : UnityEngine.Vector3
                /** Transforms a direction from world space to local space. The opposite of Transform.TransformDirection. */
                public InverseTransformDirection ($direction: UnityEngine.Vector3) : UnityEngine.Vector3
                /** Transforms the direction x, y, z from world space to local space. The opposite of Transform.TransformDirection. */
                public InverseTransformDirection ($x: number, $y: number, $z: number) : UnityEngine.Vector3
                /** Transforms vector from local space to world space. */
                public TransformVector ($vector: UnityEngine.Vector3) : UnityEngine.Vector3
                /** Transforms vector x, y, z from local space to world space. */
                public TransformVector ($x: number, $y: number, $z: number) : UnityEngine.Vector3
                /** Transforms a vector from world space to local space. The opposite of Transform.TransformVector. */
                public InverseTransformVector ($vector: UnityEngine.Vector3) : UnityEngine.Vector3
                /** Transforms the vector x, y, z from world space to local space. The opposite of Transform.TransformVector. */
                public InverseTransformVector ($x: number, $y: number, $z: number) : UnityEngine.Vector3
                /** Transforms position from local space to world space. */
                public TransformPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
                /** Transforms the position x, y, z from local space to world space. */
                public TransformPoint ($x: number, $y: number, $z: number) : UnityEngine.Vector3
                /** Transforms position from world space to local space. */
                public InverseTransformPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
                /** Transforms the position x, y, z from world space to local space. The opposite of Transform.TransformPoint. */
                public InverseTransformPoint ($x: number, $y: number, $z: number) : UnityEngine.Vector3
                public DetachChildren () : void
                public SetAsFirstSibling () : void
                public SetAsLastSibling () : void
                /** Sets the sibling index. * @param index Index to set.
                */
                public SetSiblingIndex ($index: number) : void
                public GetSiblingIndex () : number
                /** Finds a child by name n and returns it.
                * @param n Name of child to be found.
                * @returns The found child transform. Null if child with matching name isn't found. 
                */
                public Find ($n: string) : UnityEngine.Transform
                /** Is this transform a child of parent? */
                public IsChildOf ($parent: UnityEngine.Transform) : boolean
                public GetEnumerator () : System.Collections.IEnumerator
                /** Returns a transform child by index.
                * @param index Index of the child transform to return. Must be smaller than Transform.childCount.
                * @returns Transform child by index. 
                */
                public GetChild ($index: number) : UnityEngine.Transform
            }
            /** Position, rotation and scale of an object. */
            interface Transform {
                GetChildrenPath ($child: UnityEngine.Component) : string;
            }
            /** Base class for everything attached to GameObjects. */
            class Component extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
                /** The Transform attached to this GameObject. */
                public get transform(): UnityEngine.Transform;
                /** The game object this component is attached to. A component is always attached to a game object. */
                public get gameObject(): UnityEngine.GameObject;
                /** The tag of this game object. */
                public get tag(): string;
                public set tag(value: string);
                /** Returns the component of type if the GameObject has one attached.
                * @param type The type of Component to retrieve.
                * @returns A Component of the matching type, otherwise null if no Component is found. 
                */
                public GetComponent ($type: System.Type) : UnityEngine.Component
                /** Gets the component of the specified type, if it exists.
                * @param type The type of the component to retrieve.
                * @param component The output argument that will contain the component or null.
                * @returns Returns true if the component is found, false otherwise. 
                */
                public TryGetComponent ($type: System.Type, $component: $Ref<UnityEngine.Component>) : boolean
                /** To improve the performance of your code, consider using GetComponent with a type instead of a string.
                * @param type The name of the type of Component to get.
                * @returns A Component of the matching type, otherwise null if no Component is found. 
                */
                public GetComponent ($type: string) : UnityEngine.Component
                /** Returns the Component of type in the GameObject or any of its children using depth first search.
                * @param t The type of Component to retrieve.
                * @param includeInactive Should Components on inactive GameObjects be included in the found set?
                * @returns A Component of the matching type, otherwise null if no Component is found. 
                */
                public GetComponentInChildren ($t: System.Type, $includeInactive: boolean) : UnityEngine.Component
                /** Returns the Component of type in the GameObject or any of its children using depth first search.
                * @param t The type of Component to retrieve.
                * @param includeInactive Should Components on inactive GameObjects be included in the found set?
                * @returns A Component of the matching type, otherwise null if no Component is found. 
                */
                public GetComponentInChildren ($t: System.Type) : UnityEngine.Component
                /** Returns all components of Type type in the GameObject or any of its children using depth first search. Works recursively. * @param t The type of Component to retrieve.
                * @param includeInactive Should Components on inactive GameObjects be included in the found set. includeInactive decides which children of the GameObject will be searched.  The GameObject that you call GetComponentsInChildren on is always searched regardless. Default is false.
                */
                public GetComponentsInChildren ($t: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Component>
                public GetComponentsInChildren ($t: System.Type) : System.Array$1<UnityEngine.Component>
                /** Returns the Component of type in the GameObject or any of its parents.
                * @param t The type of Component to retrieve.
                * @param includeInactive Should Components on inactive GameObjects be included in the found set?
                * @returns A Component of the matching type, otherwise null if no Component is found. 
                */
                public GetComponentInParent ($t: System.Type, $includeInactive: boolean) : UnityEngine.Component
                /** Returns the Component of type in the GameObject or any of its parents.
                * @param t The type of Component to retrieve.
                * @param includeInactive Should Components on inactive GameObjects be included in the found set?
                * @returns A Component of the matching type, otherwise null if no Component is found. 
                */
                public GetComponentInParent ($t: System.Type) : UnityEngine.Component
                /** Returns all components of Type type in the GameObject or any of its parents. * @param t The type of Component to retrieve.
                * @param includeInactive Should inactive Components be included in the found set?
                */
                public GetComponentsInParent ($t: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Component>
                public GetComponentsInParent ($t: System.Type) : System.Array$1<UnityEngine.Component>
                /** Returns all components of Type type in the GameObject. * @param type The type of Component to retrieve.
                */
                public GetComponents ($type: System.Type) : System.Array$1<UnityEngine.Component>
                public GetComponents ($type: System.Type, $results: System.Collections.Generic.List$1<UnityEngine.Component>) : void
                /** Checks the GameObject's tag against the defined tag.
                * @param tag The tag to compare.
                * @returns Returns true if GameObject has same tag. Returns false otherwise. 
                */
                public CompareTag ($tag: string) : boolean
                /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName Name of method to call.
                * @param value Optional parameter value for the method.
                * @param options Should an error be raised if the method does not exist on the target object?
                */
                public SendMessageUpwards ($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName Name of method to call.
                * @param value Optional parameter value for the method.
                * @param options Should an error be raised if the method does not exist on the target object?
                */
                public SendMessageUpwards ($methodName: string, $value: any) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName Name of method to call.
                * @param value Optional parameter value for the method.
                * @param options Should an error be raised if the method does not exist on the target object?
                */
                public SendMessageUpwards ($methodName: string) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName Name of method to call.
                * @param value Optional parameter value for the method.
                * @param options Should an error be raised if the method does not exist on the target object?
                */
                public SendMessageUpwards ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName Name of the method to call.
                * @param value Optional parameter for the method.
                * @param options Should an error be raised if the target object doesn't implement the method for the message?
                */
                public SendMessage ($methodName: string, $value: any) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName Name of the method to call.
                * @param value Optional parameter for the method.
                * @param options Should an error be raised if the target object doesn't implement the method for the message?
                */
                public SendMessage ($methodName: string) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName Name of the method to call.
                * @param value Optional parameter for the method.
                * @param options Should an error be raised if the target object doesn't implement the method for the message?
                */
                public SendMessage ($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName Name of the method to call.
                * @param value Optional parameter for the method.
                * @param options Should an error be raised if the target object doesn't implement the method for the message?
                */
                public SendMessage ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. * @param methodName Name of the method to call.
                * @param parameter Optional parameter to pass to the method (can be any value).
                * @param options Should an error be raised if the method does not exist for a given target object?
                */
                public BroadcastMessage ($methodName: string, $parameter: any, $options: UnityEngine.SendMessageOptions) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. * @param methodName Name of the method to call.
                * @param parameter Optional parameter to pass to the method (can be any value).
                * @param options Should an error be raised if the method does not exist for a given target object?
                */
                public BroadcastMessage ($methodName: string, $parameter: any) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. * @param methodName Name of the method to call.
                * @param parameter Optional parameter to pass to the method (can be any value).
                * @param options Should an error be raised if the method does not exist for a given target object?
                */
                public BroadcastMessage ($methodName: string) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. * @param methodName Name of the method to call.
                * @param parameter Optional parameter to pass to the method (can be any value).
                * @param options Should an error be raised if the method does not exist for a given target object?
                */
                public BroadcastMessage ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
                public constructor ()
            }
            /** Base class for everything attached to GameObjects. */
            interface Component {
                MoveTransfTo ($par: UnityEngine.Component, $PossToZero?: boolean, $RoToZero?: boolean, $ScaleToOne?: boolean) : void;
            }
            /** Quaternions are used to represent rotations. */
            class Quaternion extends System.ValueType implements System.IEquatable$1<UnityEngine.Quaternion>, System.IFormattable
            {
                protected [__keep_incompatibility]: never;
            }
            /** A standard 4x4 transformation matrix. */
            class Matrix4x4 extends System.ValueType implements System.IEquatable$1<UnityEngine.Matrix4x4>, System.IFormattable
            {
                protected [__keep_incompatibility]: never;
            }
            /** The coordinate space in which to operate. */
            enum Space
            { World = 0, Self = 1 }
            /** Base class for all entities in Unity Scenes. */
            class GameObject extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
                /** The Transform attached to this GameObject. */
                public get transform(): UnityEngine.Transform;
                /** The layer the GameObject is in. */
                public get layer(): number;
                public set layer(value: number);
                /** The local active state of this GameObject. (Read Only) */
                public get activeSelf(): boolean;
                /** Defines whether the GameObject is active in the Scene. */
                public get activeInHierarchy(): boolean;
                /** Gets and sets the GameObject's StaticEditorFlags. */
                public get isStatic(): boolean;
                public set isStatic(value: boolean);
                /** The tag of this game object. */
                public get tag(): string;
                public set tag(value: string);
                /** Scene that the GameObject is part of. */
                public get scene(): UnityEngine.SceneManagement.Scene;
                /** Scene culling mask Unity uses to determine which scene to render the GameObject in. */
                public get sceneCullingMask(): bigint;
                public get gameObject(): UnityEngine.GameObject;
                /** Creates a game object with a primitive mesh renderer and appropriate collider. * @param type The type of primitive object to create.
                */
                public static CreatePrimitive ($type: UnityEngine.PrimitiveType) : UnityEngine.GameObject
                /** Returns the component of Type type if the game object has one attached, null if it doesn't. * @param type The type of Component to retrieve.
                */
                public GetComponent ($type: System.Type) : UnityEngine.Component
                /** Returns the component with name type if the GameObject has one attached, null if it doesn't. * @param type The type of Component to retrieve.
                */
                public GetComponent ($type: string) : UnityEngine.Component
                /** Returns the component of Type type in the GameObject or any of its children using depth first search.
                * @param type The type of Component to retrieve.
                * @returns A component of the matching type, if found. 
                */
                public GetComponentInChildren ($type: System.Type, $includeInactive: boolean) : UnityEngine.Component
                /** Returns the component of Type type in the GameObject or any of its children using depth first search.
                * @param type The type of Component to retrieve.
                * @returns A component of the matching type, if found. 
                */
                public GetComponentInChildren ($type: System.Type) : UnityEngine.Component
                /** Retrieves the component of Type type in the GameObject or any of its parents.
                * @param type Type of component to find.
                * @returns Returns a component if a component matching the type is found. Returns null otherwise. 
                */
                public GetComponentInParent ($type: System.Type, $includeInactive: boolean) : UnityEngine.Component
                /** Retrieves the component of Type type in the GameObject or any of its parents.
                * @param type Type of component to find.
                * @returns Returns a component if a component matching the type is found. Returns null otherwise. 
                */
                public GetComponentInParent ($type: System.Type) : UnityEngine.Component
                /** Returns all components of Type type in the GameObject. * @param type The type of component to retrieve.
                */
                public GetComponents ($type: System.Type) : System.Array$1<UnityEngine.Component>
                public GetComponents ($type: System.Type, $results: System.Collections.Generic.List$1<UnityEngine.Component>) : void
                /** Returns all components of Type type in the GameObject or any of its children children using depth first search. Works recursively. * @param type The type of Component to retrieve.
                * @param includeInactive Should Components on inactive GameObjects be included in the found set?
                */
                public GetComponentsInChildren ($type: System.Type) : System.Array$1<UnityEngine.Component>
                /** Returns all components of Type type in the GameObject or any of its children children using depth first search. Works recursively. * @param type The type of Component to retrieve.
                * @param includeInactive Should Components on inactive GameObjects be included in the found set?
                */
                public GetComponentsInChildren ($type: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Component>
                public GetComponentsInParent ($type: System.Type) : System.Array$1<UnityEngine.Component>
                /** Returns all components of Type type in the GameObject or any of its parents. * @param type The type of Component to retrieve.
                * @param includeInactive Should inactive Components be included in the found set?
                */
                public GetComponentsInParent ($type: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Component>
                /** Gets the component of the specified type, if it exists.
                * @param type The type of component to retrieve.
                * @param component The output argument that will contain the component or null.
                * @returns Returns true if the component is found, false otherwise. 
                */
                public TryGetComponent ($type: System.Type, $component: $Ref<UnityEngine.Component>) : boolean
                /** Returns one active GameObject tagged tag. Returns null if no GameObject was found. * @param tag The tag to search for.
                */
                public static FindWithTag ($tag: string) : UnityEngine.GameObject
                public SendMessageUpwards ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
                public SendMessage ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
                public BroadcastMessage ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
                /** Adds a component class of type componentType to the game object. C# Users can use a generic version. */
                public AddComponent ($componentType: System.Type) : UnityEngine.Component
                /** ActivatesDeactivates the GameObject, depending on the given true or false/ value. * @param value Activate or deactivate the object, where true activates the GameObject and false deactivates the GameObject.
                */
                public SetActive ($value: boolean) : void
                /** Is this game object tagged with tag ? * @param tag The tag to compare.
                */
                public CompareTag ($tag: string) : boolean
                public static FindGameObjectWithTag ($tag: string) : UnityEngine.GameObject
                /** Returns an array of active GameObjects tagged tag. Returns empty array if no GameObject was found. * @param tag The name of the tag to search GameObjects for.
                */
                public static FindGameObjectsWithTag ($tag: string) : System.Array$1<UnityEngine.GameObject>
                /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName The name of the method to call.
                * @param value An optional parameter value to pass to the called method.
                * @param options Should an error be raised if the method doesn't exist on the target object?
                */
                public SendMessageUpwards ($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName The name of the method to call.
                * @param value An optional parameter value to pass to the called method.
                * @param options Should an error be raised if the method doesn't exist on the target object?
                */
                public SendMessageUpwards ($methodName: string, $value: any) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName The name of the method to call.
                * @param value An optional parameter value to pass to the called method.
                * @param options Should an error be raised if the method doesn't exist on the target object?
                */
                public SendMessageUpwards ($methodName: string) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName The name of the method to call.
                * @param value An optional parameter value to pass to the called method.
                * @param options Should an error be raised if the method doesn't exist on the target object?
                */
                public SendMessage ($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName The name of the method to call.
                * @param value An optional parameter value to pass to the called method.
                * @param options Should an error be raised if the method doesn't exist on the target object?
                */
                public SendMessage ($methodName: string, $value: any) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName The name of the method to call.
                * @param value An optional parameter value to pass to the called method.
                * @param options Should an error be raised if the method doesn't exist on the target object?
                */
                public SendMessage ($methodName: string) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. */
                public BroadcastMessage ($methodName: string, $parameter: any, $options: UnityEngine.SendMessageOptions) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. */
                public BroadcastMessage ($methodName: string, $parameter: any) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. */
                public BroadcastMessage ($methodName: string) : void
                /** Finds a GameObject by name and returns it. */
                public static Find ($name: string) : UnityEngine.GameObject
                public constructor ($name: string)
                public constructor ()
                public constructor ($name: string, ...components: System.Type[])
            }
            /** Options for how to send a message. */
            enum SendMessageOptions
            { RequireReceiver = 0, DontRequireReceiver = 1 }
            /** The various primitives that can be created using the GameObject.CreatePrimitive function. */
            enum PrimitiveType
            { Sphere = 0, Capsule = 1, Cylinder = 2, Cube = 3, Plane = 4, Quad = 5 }
            /** Bit mask that controls object destruction, saving and visibility in inspectors. */
            enum HideFlags
            { None = 0, HideInHierarchy = 1, HideInInspector = 2, DontSaveInEditor = 4, NotEditable = 8, DontSaveInBuild = 16, DontUnloadUnusedAsset = 32, DontSave = 52, HideAndDontSave = 61 }
            /** Script interface for ParticleSystem. Unity's powerful and versatile particle system implementation. */
            class ParticleSystem extends UnityEngine.Component
            {
                protected [__keep_incompatibility]: never;
                /** Determines whether the Particle System is playing. */
                public get isPlaying(): boolean;
                /** Determines whether the Particle System is emitting particles. A Particle System may stop emitting when its emission module has finished, it has been paused or if the system has been stopped using ParticleSystem.Stop|Stop with the ParticleSystemStopBehavior.StopEmitting|StopEmitting flag. Resume emitting by calling ParticleSystem.Play|Play. */
                public get isEmitting(): boolean;
                /** Determines whether the Particle System is in the stopped state. */
                public get isStopped(): boolean;
                /** Determines whether the Particle System is paused. */
                public get isPaused(): boolean;
                /** The current number of particles (Read Only). The number doesn't include particles of child Particle Systems */
                public get particleCount(): number;
                /** Playback position in seconds. */
                public get time(): number;
                public set time(value: number);
                /** Override the random seed used for the Particle System emission. */
                public get randomSeed(): number;
                public set randomSeed(value: number);
                /** Controls whether the Particle System uses an automatically-generated random number to seed the random number generator. */
                public get useAutoRandomSeed(): boolean;
                public set useAutoRandomSeed(value: boolean);
                /** Does this system support Procedural Simulation? */
                public get proceduralSimulationSupported(): boolean;
                /** Access the main Particle System settings. */
                public get main(): UnityEngine.ParticleSystem.MainModule;
                /** Script interface for the EmissionModule of a Particle System. */
                public get emission(): UnityEngine.ParticleSystem.EmissionModule;
                /** Script interface for the ShapeModule of a Particle System.  */
                public get shape(): UnityEngine.ParticleSystem.ShapeModule;
                /** Script interface for the VelocityOverLifetimeModule of a Particle System. */
                public get velocityOverLifetime(): UnityEngine.ParticleSystem.VelocityOverLifetimeModule;
                /** Script interface for the LimitVelocityOverLifetimeModule of a Particle System. . */
                public get limitVelocityOverLifetime(): UnityEngine.ParticleSystem.LimitVelocityOverLifetimeModule;
                /** Script interface for the InheritVelocityModule of a Particle System. */
                public get inheritVelocity(): UnityEngine.ParticleSystem.InheritVelocityModule;
                /** Script interface for the Particle System Lifetime By Emitter Speed module. */
                public get lifetimeByEmitterSpeed(): UnityEngine.ParticleSystem.LifetimeByEmitterSpeedModule;
                /** Script interface for the ForceOverLifetimeModule of a Particle System. */
                public get forceOverLifetime(): UnityEngine.ParticleSystem.ForceOverLifetimeModule;
                /** Script interface for the ColorOverLifetimeModule of a Particle System. */
                public get colorOverLifetime(): UnityEngine.ParticleSystem.ColorOverLifetimeModule;
                /** Script interface for the ColorByLifetimeModule of a Particle System. */
                public get colorBySpeed(): UnityEngine.ParticleSystem.ColorBySpeedModule;
                /** Script interface for the SizeOverLifetimeModule of a Particle System.  */
                public get sizeOverLifetime(): UnityEngine.ParticleSystem.SizeOverLifetimeModule;
                /** Script interface for the SizeBySpeedModule of a Particle System. */
                public get sizeBySpeed(): UnityEngine.ParticleSystem.SizeBySpeedModule;
                /** Script interface for the RotationOverLifetimeModule of a Particle System. */
                public get rotationOverLifetime(): UnityEngine.ParticleSystem.RotationOverLifetimeModule;
                /** Script interface for the RotationBySpeedModule of a Particle System. */
                public get rotationBySpeed(): UnityEngine.ParticleSystem.RotationBySpeedModule;
                /** Script interface for the ExternalForcesModule of a Particle System. */
                public get externalForces(): UnityEngine.ParticleSystem.ExternalForcesModule;
                /** Script interface for the NoiseModule of a Particle System. */
                public get noise(): UnityEngine.ParticleSystem.NoiseModule;
                /** Script interface for the CollisionModule of a Particle System. */
                public get collision(): UnityEngine.ParticleSystem.CollisionModule;
                /** Script interface for the TriggerModule of a Particle System. */
                public get trigger(): UnityEngine.ParticleSystem.TriggerModule;
                /** Script interface for the SubEmittersModule of a Particle System. */
                public get subEmitters(): UnityEngine.ParticleSystem.SubEmittersModule;
                /** Script interface for the TextureSheetAnimationModule of a Particle System. */
                public get textureSheetAnimation(): UnityEngine.ParticleSystem.TextureSheetAnimationModule;
                /** Script interface for the LightsModule of a Particle System. */
                public get lights(): UnityEngine.ParticleSystem.LightsModule;
                /** Script interface for the TrailsModule of a Particle System. */
                public get trails(): UnityEngine.ParticleSystem.TrailModule;
                /** Script interface for the CustomDataModule of a Particle System. */
                public get customData(): UnityEngine.ParticleSystem.CustomDataModule;
                public SetParticles ($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, $size: number, $offset: number) : void
                public SetParticles ($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, $size: number) : void
                public SetParticles ($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>) : void
                public SetParticles ($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>, $size: number, $offset: number) : void
                public SetParticles ($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>, $size: number) : void
                public SetParticles ($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>) : void
                public GetParticles ($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, $size: number, $offset: number) : number
                public GetParticles ($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, $size: number) : number
                public GetParticles ($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>) : number
                public GetParticles ($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>, $size: number, $offset: number) : number
                public GetParticles ($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>, $size: number) : number
                public GetParticles ($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>) : number
                public SetCustomParticleData ($customData: System.Collections.Generic.List$1<UnityEngine.Vector4>, $streamIndex: UnityEngine.ParticleSystemCustomData) : void
                public GetCustomParticleData ($customData: System.Collections.Generic.List$1<UnityEngine.Vector4>, $streamIndex: UnityEngine.ParticleSystemCustomData) : number
                public GetPlaybackState () : UnityEngine.ParticleSystem.PlaybackState
                public SetPlaybackState ($playbackState: UnityEngine.ParticleSystem.PlaybackState) : void
                public GetTrails () : UnityEngine.ParticleSystem.Trails
                public GetTrails ($trailData: $Ref<UnityEngine.ParticleSystem.Trails>) : number
                public SetTrails ($trailData: UnityEngine.ParticleSystem.Trails) : void
                /** Fast-forwards the Particle System by simulating particles over the given period of time, then pauses it. * @param t Time period in seconds to advance the ParticleSystem simulation by. If restart is true, the ParticleSystem will be reset to 0 time, and then advanced by this value. If restart is false, the ParticleSystem simulation will be advanced in time from its current state by this value.
                * @param withChildren Fast-forward all child Particle Systems as well.
                * @param restart Restart and start from the beginning.
                * @param fixedTimeStep Only update the system at fixed intervals, based on the value in "Fixed Time" in the Time options.
                */
                public Simulate ($t: number, $withChildren: boolean, $restart: boolean, $fixedTimeStep: boolean) : void
                /** Fast-forwards the Particle System by simulating particles over the given period of time, then pauses it. * @param t Time period in seconds to advance the ParticleSystem simulation by. If restart is true, the ParticleSystem will be reset to 0 time, and then advanced by this value. If restart is false, the ParticleSystem simulation will be advanced in time from its current state by this value.
                * @param withChildren Fast-forward all child Particle Systems as well.
                * @param restart Restart and start from the beginning.
                * @param fixedTimeStep Only update the system at fixed intervals, based on the value in "Fixed Time" in the Time options.
                */
                public Simulate ($t: number, $withChildren: boolean, $restart: boolean) : void
                /** Fast-forwards the Particle System by simulating particles over the given period of time, then pauses it. * @param t Time period in seconds to advance the ParticleSystem simulation by. If restart is true, the ParticleSystem will be reset to 0 time, and then advanced by this value. If restart is false, the ParticleSystem simulation will be advanced in time from its current state by this value.
                * @param withChildren Fast-forward all child Particle Systems as well.
                * @param restart Restart and start from the beginning.
                * @param fixedTimeStep Only update the system at fixed intervals, based on the value in "Fixed Time" in the Time options.
                */
                public Simulate ($t: number, $withChildren: boolean) : void
                /** Fast-forwards the Particle System by simulating particles over the given period of time, then pauses it. * @param t Time period in seconds to advance the ParticleSystem simulation by. If restart is true, the ParticleSystem will be reset to 0 time, and then advanced by this value. If restart is false, the ParticleSystem simulation will be advanced in time from its current state by this value.
                * @param withChildren Fast-forward all child Particle Systems as well.
                * @param restart Restart and start from the beginning.
                * @param fixedTimeStep Only update the system at fixed intervals, based on the value in "Fixed Time" in the Time options.
                */
                public Simulate ($t: number) : void
                /** Starts the Particle System. * @param withChildren Play all child Particle Systems as well.
                */
                public Play ($withChildren: boolean) : void
                public Play () : void
                /** Pauses the system so no new particles are emitted and the existing particles are not updated. * @param withChildren Pause all child Particle Systems as well.
                */
                public Pause ($withChildren: boolean) : void
                public Pause () : void
                /** Stops playing the Particle System using the supplied stop behaviour. * @param withChildren Stop all child Particle Systems as well.
                * @param stopBehavior Stop emitting or stop emitting and clear the system.
                */
                public Stop ($withChildren: boolean, $stopBehavior: UnityEngine.ParticleSystemStopBehavior) : void
                /** Stops playing the Particle System using the supplied stop behaviour. * @param withChildren Stop all child Particle Systems as well.
                * @param stopBehavior Stop emitting or stop emitting and clear the system.
                */
                public Stop ($withChildren: boolean) : void
                public Stop () : void
                /** Remove all particles in the Particle System. * @param withChildren Clear all child Particle Systems as well.
                */
                public Clear ($withChildren: boolean) : void
                public Clear () : void
                /** Does the Particle System contain any live particles, or will it produce more?
                * @param withChildren Check all child Particle Systems as well.
                * @returns True if the Particle System contains live particles or is still creating new particles. False if the Particle System has stopped emitting particles and all particles are dead. 
                */
                public IsAlive ($withChildren: boolean) : boolean
                public IsAlive () : boolean
                /** Emit count particles immediately. * @param count Number of particles to emit.
                */
                public Emit ($count: number) : void
                public Emit ($emitParams: UnityEngine.ParticleSystem.EmitParams, $count: number) : void
                /** Triggers the specified sub emitter on all particles of the Particle System. * @param subEmitterIndex Index of the sub emitter to trigger.
                */
                public TriggerSubEmitter ($subEmitterIndex: number) : void
                public TriggerSubEmitter ($subEmitterIndex: number, $particle: $Ref<UnityEngine.ParticleSystem.Particle>) : void
                public TriggerSubEmitter ($subEmitterIndex: number, $particles: System.Collections.Generic.List$1<UnityEngine.ParticleSystem.Particle>) : void
                public static ResetPreMappedBufferMemory () : void
                /** Limits the amount of graphics memory Unity reserves for efficient rendering of Particle Systems. * @param vertexBuffersCount The maximum number of cached vertex buffers.
                * @param indexBuffersCount The maximum number of cached index buffers.
                */
                public static SetMaximumPreMappedBufferCounts ($vertexBuffersCount: number, $indexBuffersCount: number) : void
                public AllocateAxisOfRotationAttribute () : void
                public AllocateMeshIndexAttribute () : void
                /** Ensures that the ParticleSystemJobs.ParticleSystemJobData.customData1|customData1 and ParticleSystemJobs.ParticleSystemJobData.customData1|customData2 particle attribute arrays are allocated. * @param stream The custom data stream to allocate.
                */
                public AllocateCustomDataAttribute ($stream: UnityEngine.ParticleSystemCustomData) : void
                public constructor ()
            }
            /** Representation of RGBA colors in 32 bit format. */
            class Color32 extends System.ValueType implements System.IFormattable
            {
                protected [__keep_incompatibility]: never;
            }
            /** The space to simulate particles in. */
            enum ParticleSystemSimulationSpace
            { Local = 0, World = 1, Custom = 2 }
            /** Control how particle systems apply transform scale. */
            enum ParticleSystemScalingMode
            { Hierarchy = 0, Local = 1, Shape = 2 }
            /** Representation of four-dimensional vectors. */
            class Vector4 extends System.ValueType implements System.IEquatable$1<UnityEngine.Vector4>, System.IFormattable
            {
                protected [__keep_incompatibility]: never;
            }
            /** Which stream of custom particle data to set. */
            enum ParticleSystemCustomData
            { Custom1 = 0, Custom2 = 1 }
            /** The behavior to apply when calling ParticleSystem.Stop|Stop. */
            enum ParticleSystemStopBehavior
            { StopEmittingAndClear = 0, StopEmitting = 1 }
            /** Element that can be used for screen rendering. */
            class Canvas extends UnityEngine.Behaviour
            {
                protected [__keep_incompatibility]: never;
                /** Is the Canvas in World or Overlay mode? */
                public get renderMode(): UnityEngine.RenderMode;
                public set renderMode(value: UnityEngine.RenderMode);
                /** Is this the root Canvas? */
                public get isRootCanvas(): boolean;
                /** Get the render rect for the Canvas. */
                public get pixelRect(): UnityEngine.Rect;
                /** Used to scale the entire canvas, while still making it fit the screen. Only applies with renderMode is Screen Space. */
                public get scaleFactor(): number;
                public set scaleFactor(value: number);
                /** The number of pixels per unit that is considered the default. */
                public get referencePixelsPerUnit(): number;
                public set referencePixelsPerUnit(value: number);
                /** Allows for nested canvases to override pixelPerfect settings inherited from parent canvases. */
                public get overridePixelPerfect(): boolean;
                public set overridePixelPerfect(value: boolean);
                /** Force elements in the canvas to be aligned with pixels. Only applies with renderMode is Screen Space. */
                public get pixelPerfect(): boolean;
                public set pixelPerfect(value: boolean);
                /** How far away from the camera is the Canvas generated. */
                public get planeDistance(): number;
                public set planeDistance(value: number);
                /** The render order in which the canvas is being emitted to the Scene. (Read Only) */
                public get renderOrder(): number;
                /** Override the sorting of canvas. */
                public get overrideSorting(): boolean;
                public set overrideSorting(value: boolean);
                /** Canvas' order within a sorting layer. */
                public get sortingOrder(): number;
                public set sortingOrder(value: number);
                /** For Overlay mode, display index on which the UI canvas will appear. */
                public get targetDisplay(): number;
                public set targetDisplay(value: number);
                /** Unique ID of the Canvas' sorting layer. */
                public get sortingLayerID(): number;
                public set sortingLayerID(value: number);
                /** Cached calculated value based upon SortingLayerID. */
                public get cachedSortingLayerValue(): number;
                /** Get or set the mask of additional shader channels to be used when creating the Canvas mesh. */
                public get additionalShaderChannels(): UnityEngine.AdditionalCanvasShaderChannels;
                public set additionalShaderChannels(value: UnityEngine.AdditionalCanvasShaderChannels);
                /** Name of the Canvas' sorting layer. */
                public get sortingLayerName(): string;
                public set sortingLayerName(value: string);
                /** Returns the Canvas closest to root, by checking through each parent and returning the last canvas found. If no other canvas is found then the canvas will return itself. */
                public get rootCanvas(): UnityEngine.Canvas;
                /** Returns the canvas display size based on the selected render mode and target display. */
                public get renderingDisplaySize(): UnityEngine.Vector2;
                /** Camera used for sizing the Canvas when in Screen Space - Camera. Also used as the Camera that events will be sent through for a World Space [[Canvas]. */
                public get worldCamera(): UnityEngine.Camera;
                public set worldCamera(value: UnityEngine.Camera);
                /** The normalized grid size that the canvas will split the renderable area into. */
                public get normalizedSortingGridSize(): number;
                public set normalizedSortingGridSize(value: number);
                public static add_preWillRenderCanvases ($value: UnityEngine.Canvas.WillRenderCanvases) : void
                public static remove_preWillRenderCanvases ($value: UnityEngine.Canvas.WillRenderCanvases) : void
                public static add_willRenderCanvases ($value: UnityEngine.Canvas.WillRenderCanvases) : void
                public static remove_willRenderCanvases ($value: UnityEngine.Canvas.WillRenderCanvases) : void
                public static GetDefaultCanvasMaterial () : UnityEngine.Material
                public static GetETC1SupportedCanvasMaterial () : UnityEngine.Material
                public static ForceUpdateCanvases () : void
                public constructor ()
            }
            /** Behaviours are Components that can be enabled or disabled. */
            class Behaviour extends UnityEngine.Component
            {
                protected [__keep_incompatibility]: never;
                /** Enabled Behaviours are Updated, disabled Behaviours are not. */
                public get enabled(): boolean;
                public set enabled(value: boolean);
                /** Reports whether a GameObject and its associated Behaviour is active and enabled. */
                public get isActiveAndEnabled(): boolean;
                public constructor ()
            }
            /** RenderMode for the Canvas. */
            enum RenderMode
            { ScreenSpaceOverlay = 0, ScreenSpaceCamera = 1, WorldSpace = 2 }
            /** A 2D Rectangle defined by X and Y position, width and height. */
            class Rect extends System.ValueType implements System.IEquatable$1<UnityEngine.Rect>, System.IFormattable
            {
                protected [__keep_incompatibility]: never;
            }
            /** Enum mask of possible shader channel properties that can also be included when the Canvas mesh is created. */
            enum AdditionalCanvasShaderChannels
            { None = 0, TexCoord1 = 1, TexCoord2 = 2, TexCoord3 = 4, Normal = 8, Tangent = 16 }
            /** Representation of 2D vectors and points. */
            class Vector2 extends System.ValueType implements System.IEquatable$1<UnityEngine.Vector2>, System.IFormattable
            {
                protected [__keep_incompatibility]: never;
            }
            /** A Camera is a device through which the player views the world. */
            class Camera extends UnityEngine.Behaviour
            {
                protected [__keep_incompatibility]: never;
            }
            /** The material class. */
            class Material extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
            }
            /** MonoBehaviour is the base class from which every Unity script derives. */
            class MonoBehaviour extends UnityEngine.Behaviour
            {
                protected [__keep_incompatibility]: never;
                /** Disabling this lets you skip the GUI layout phase. */
                public get useGUILayout(): boolean;
                public set useGUILayout(value: boolean);
                /** Allow a specific instance of a MonoBehaviour to run in edit mode (only available in the editor). */
                public get runInEditMode(): boolean;
                public set runInEditMode(value: boolean);
                public IsInvoking () : boolean
                public CancelInvoke () : void
                /** Invokes the method methodName in time seconds. */
                public Invoke ($methodName: string, $time: number) : void
                /** Invokes the method methodName in time seconds, then repeatedly every repeatRate seconds. */
                public InvokeRepeating ($methodName: string, $time: number, $repeatRate: number) : void
                /** Cancels all Invoke calls with name methodName on this behaviour. */
                public CancelInvoke ($methodName: string) : void
                /** Is any invoke on methodName pending? */
                public IsInvoking ($methodName: string) : boolean
                /** Starts a coroutine named methodName. */
                public StartCoroutine ($methodName: string) : UnityEngine.Coroutine
                /** Starts a coroutine named methodName. */
                public StartCoroutine ($methodName: string, $value: any) : UnityEngine.Coroutine
                /** Starts a Coroutine. */
                public StartCoroutine ($routine: System.Collections.IEnumerator) : UnityEngine.Coroutine
                /** Stops the first coroutine named methodName, or the coroutine stored in routine running on this behaviour. * @param methodName Name of coroutine.
                * @param routine Name of the function in code, including coroutines.
                */
                public StopCoroutine ($routine: System.Collections.IEnumerator) : void
                /** Stops the first coroutine named methodName, or the coroutine stored in routine running on this behaviour. * @param methodName Name of coroutine.
                * @param routine Name of the function in code, including coroutines.
                */
                public StopCoroutine ($routine: UnityEngine.Coroutine) : void
                /** Stops the first coroutine named methodName, or the coroutine stored in routine running on this behaviour. * @param methodName Name of coroutine.
                * @param routine Name of the function in code, including coroutines.
                */
                public StopCoroutine ($methodName: string) : void
                public StopAllCoroutines () : void
                /** Logs message to the Unity Console (identical to Debug.Log). */
                public static print ($message: any) : void
                public constructor ()
            }
            /** MonoBehaviour.StartCoroutine returns a Coroutine. Instances of this class are only used to reference these coroutines, and do not hold any exposed properties or functions. */
            class Coroutine extends UnityEngine.YieldInstruction
            {
                protected [__keep_incompatibility]: never;
            }
            /** Base class for all yield instructions. */
            class YieldInstruction extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            interface ICanvasRaycastFilter
            {
            }
            interface ISerializationCallbackReceiver
            {
            }
            /** Interface to control the Mecanim animation system. */
            class Animator extends UnityEngine.Behaviour
            {
                protected [__keep_incompatibility]: never;
            }
            /** Interface for on-screen keyboards. Only native iPhone, Android, and Windows Store Apps are supported. */
            class TouchScreenKeyboard extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            /** Enumeration of the different types of supported touchscreen keyboards. */
            enum TouchScreenKeyboardType
            { Default = 0, ASCIICapable = 1, NumbersAndPunctuation = 2, URL = 3, NumberPad = 4, PhonePad = 5, NamePhonePad = 6, EmailAddress = 7, NintendoNetworkAccount = 8, Social = 9, Search = 10, DecimalPad = 11, OneTimeCode = 12 }
            /** A UnityGUI event. */
            class Event extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            /** Control of an object's position through physics simulation. */
            class Rigidbody extends UnityEngine.Component
            {
                protected [__keep_incompatibility]: never;
            }
            /** AssetBundles let you stream additional assets via the UnityWebRequest class and instantiate them at runtime. AssetBundles are created via BuildPipeline.BuildAssetBundle. */
            class AssetBundle extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
            }
            /** Represents a Sprite object for use in 2D gameplay. */
            class Sprite extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
            }
            /** Class that represents textures in C# code. */
            class Texture2D extends UnityEngine.Texture
            {
                protected [__keep_incompatibility]: never;
            }
            /** Base class for Texture handling. */
            class Texture extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
            }
            /** A class you can derive from if you want to create objects that don't need to be attached to game objects. */
            class ScriptableObject extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
            }
            /** The runtime representation of the AnimatorController. Use this representation to change the Animator Controller during runtime. */
            class RuntimeAnimatorController extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
            }
            /** Base class for AnimationClips and BlendTrees. */
            class Motion extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
            }
            /** Stores keyframe based animations. */
            class AnimationClip extends UnityEngine.Motion
            {
                protected [__keep_incompatibility]: never;
            }
            /** Representation of 2D vectors and points using integers. */
            class Vector2Int extends System.ValueType implements System.IEquatable$1<UnityEngine.Vector2Int>, System.IFormattable
            {
                protected [__keep_incompatibility]: never;
            }
            /** Position, size, anchor and pivot information for a rectangle. */
            class RectTransform extends UnityEngine.Transform implements System.Collections.IEnumerable
            {
                protected [__keep_incompatibility]: never;
            }
            /** A base class of all colliders. */
            class Collider extends UnityEngine.Component
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace System {
            class ValueType extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class Object
            {
                protected [__keep_incompatibility]: never;
                public Equals ($obj: any) : boolean
                public static Equals ($objA: any, $objB: any) : boolean
                public GetHashCode () : number
                public GetType () : System.Type
                public ToString () : string
                public static ReferenceEquals ($objA: any, $objB: any) : boolean
                public constructor ()
            }
            interface Object {
                ExTrySetExtension ($DataName: string, $value: any) : void;
                Ex ($DataName: string) : IGetSeatObj;
                Int ($DN: string) : IGetSeat$1<number>;
                Bool ($DN: string) : IGetSeat$1<boolean>;
                Float ($DN: string) : IGetSeat$1<number>;
                V3 ($DN: string) : IGetSeat$1<UnityEngine.Vector3>;
                Str ($DN: string) : IGetSeat$1<string>;
                Int ($DN: string, $o: any) : IGetSeat$1<number>;
                Bool ($DN: string, $o: any) : IGetSeat$1<boolean>;
                Float ($DN: string, $o: any) : IGetSeat$1<number>;
                V3 ($DN: string, $o: any) : IGetSeat$1<UnityEngine.Vector3>;
                Str ($DN: string, $o: any) : IGetSeat$1<string>;
                NInt ($DN: string) : IGetSeat$1<N$1<number>>;
                NBool ($DN: string) : IGetSeat$1<N$1<boolean>>;
                NFloat ($DN: string) : IGetSeat$1<N$1<number>>;
                NV3 ($DN: string) : IGetSeat$1<N$1<UnityEngine.Vector3>>;
                NInt ($DN: string, $o: any) : IGetSeat$1<N$1<number>>;
                NBool ($DN: string, $o: any) : IGetSeat$1<N$1<boolean>>;
                NFloat ($DN: string, $o: any) : IGetSeat$1<N$1<number>>;
                NV3 ($DN: string, $o: any) : IGetSeat$1<N$1<UnityEngine.Vector3>>;
                VarFloat ($key: string, $value: number) : any;
                VarDouble ($key: string, $value: number) : any;
                VarInt32 ($key: string, $value: number) : any;
                VarByte ($key: string, $value: number) : any;
                Var ($key: string, $value: any) : any;
                Print () : void;
            }
            interface IEquatable$1<T>
            {
            }
            interface IFormattable
            {
            }
            interface Action$1<T>
            { 
            (obj: T) : void; 
            Invoke?: (obj: T) => void;
            }
            class Void extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            interface MulticastDelegate
            { 
            (...args:any[]) : any; 
            Invoke?: (...args:any[]) => any;
            }
            var MulticastDelegate: { new (func: (...args:any[]) => any): MulticastDelegate; }
            class Delegate extends System.Object implements System.ICloneable, System.Runtime.Serialization.ISerializable
            {
                protected [__keep_incompatibility]: never;
                public get Method(): System.Reflection.MethodInfo;
                public get Target(): any;
                public static CreateDelegate ($type: System.Type, $firstArgument: any, $method: System.Reflection.MethodInfo, $throwOnBindFailure: boolean) : Function
                public static CreateDelegate ($type: System.Type, $firstArgument: any, $method: System.Reflection.MethodInfo) : Function
                public static CreateDelegate ($type: System.Type, $method: System.Reflection.MethodInfo, $throwOnBindFailure: boolean) : Function
                public static CreateDelegate ($type: System.Type, $method: System.Reflection.MethodInfo) : Function
                public static CreateDelegate ($type: System.Type, $target: any, $method: string) : Function
                public static CreateDelegate ($type: System.Type, $target: System.Type, $method: string, $ignoreCase: boolean, $throwOnBindFailure: boolean) : Function
                public static CreateDelegate ($type: System.Type, $target: System.Type, $method: string) : Function
                public static CreateDelegate ($type: System.Type, $target: System.Type, $method: string, $ignoreCase: boolean) : Function
                public static CreateDelegate ($type: System.Type, $target: any, $method: string, $ignoreCase: boolean, $throwOnBindFailure: boolean) : Function
                public static CreateDelegate ($type: System.Type, $target: any, $method: string, $ignoreCase: boolean) : Function
                public DynamicInvoke (...args: any[]) : any
                public Clone () : any
                public GetObjectData ($info: System.Runtime.Serialization.SerializationInfo, $context: System.Runtime.Serialization.StreamingContext) : void
                public GetInvocationList () : System.Array$1<Function>
                public static Combine ($a: Function, $b: Function) : Function
                public static Combine (...delegates: Function[]) : Function
                public static Remove ($source: Function, $value: Function) : Function
                public static RemoveAll ($source: Function, $value: Function) : Function
                public static op_Equality ($d1: Function, $d2: Function) : boolean
                public static op_Inequality ($d1: Function, $d2: Function) : boolean
            }
            interface ICloneable
            {
            }
            interface IAsyncResult
            {
            }
            interface AsyncCallback
            { 
            (ar: System.IAsyncResult) : void; 
            Invoke?: (ar: System.IAsyncResult) => void;
            }
            var AsyncCallback: { new (func: (ar: System.IAsyncResult) => void): AsyncCallback; }
            class IntPtr extends System.ValueType implements System.IEquatable$1<System.IntPtr>, System.Runtime.Serialization.ISerializable
            {
                protected [__keep_incompatibility]: never;
            }
            interface Func$1<TResult>
            { 
            () : TResult; 
            Invoke?: () => TResult;
            }
            class Boolean extends System.ValueType implements System.IEquatable$1<boolean>, System.IComparable, System.IComparable$1<boolean>, System.IConvertible
            {
                protected [__keep_incompatibility]: never;
            }
            interface IComparable
            {
            }
            interface IComparable$1<T>
            {
            }
            interface IConvertible
            {
            }
            class String extends System.Object implements System.IEquatable$1<string>, System.ICloneable, System.Collections.Generic.IEnumerable$1<number>, System.IComparable, System.IComparable$1<string>, System.Collections.IEnumerable, System.IConvertible
            {
                protected [__keep_incompatibility]: never;
            }
            interface String {
                ToAssets () : System.Array$1<UnityEngine.Object>;
                DeleTXT () : boolean;
                EnsureTXT () : System.IO.FileInfo;
                Split_ ($option: System.StringSplitOptions, ...Separator: number[]) : System.Array$1<string>;
                Split_ (...Separator: number[]) : System.Array$1<string>;
                Split_ () : System.Array$1<string>;
                ToStreamingAssetFullPath () : string;
                ToFullFilePath ($fileType?: string) : string;
                GetDire () : System.IO.DirectoryInfo;
                ToFileInfo () : System.IO.FileInfo;
                ToDirectoryInfos ($option?: System.IO.SearchOption, $Forsearch?: string) : System.Array$1<System.IO.DirectoryInfo>;
                ToFileinfos ($fosearch?: string, $option?: System.IO.SearchOption) : System.Array$1<System.IO.FileInfo>;
            }
            class Char extends System.ValueType implements System.IEquatable$1<number>, System.IComparable, System.IComparable$1<number>, System.IConvertible
            {
                protected [__keep_incompatibility]: never;
            }
            class Single extends System.ValueType implements System.IEquatable$1<number>, System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible
            {
                protected [__keep_incompatibility]: never;
            }
            interface Single {
                GetCloestAngle ($tar: number) : number;
                NearZero () : boolean;
                GetPercentage ($Start: number, $Len: number) : number;
                IfOver1 ($Over: number) : number;
            }
            interface ISpanFormattable
            {
            }
            class Int32 extends System.ValueType implements System.IEquatable$1<number>, System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible
            {
                protected [__keep_incompatibility]: never;
            }
            interface Int32 {
                Int ($DN: string) : IGetSeat$1<number>;
                Bool ($DN: string) : IGetSeat$1<boolean>;
                Float ($DN: string) : IGetSeat$1<number>;
                V3 ($DN: string) : IGetSeat$1<UnityEngine.Vector3>;
                Str ($DN: string) : IGetSeat$1<string>;
                Int ($DN: string, $o: any) : IGetSeat$1<number>;
                Bool ($DN: string, $o: any) : IGetSeat$1<boolean>;
                Float ($DN: string, $o: any) : IGetSeat$1<number>;
                V3 ($DN: string, $o: any) : IGetSeat$1<UnityEngine.Vector3>;
                Str ($DN: string, $o: any) : IGetSeat$1<string>;
                NInt ($DN: string) : IGetSeat$1<N$1<number>>;
                NBool ($DN: string) : IGetSeat$1<N$1<boolean>>;
                NFloat ($DN: string) : IGetSeat$1<N$1<number>>;
                NV3 ($DN: string) : IGetSeat$1<N$1<UnityEngine.Vector3>>;
                NInt ($DN: string, $o: any) : IGetSeat$1<N$1<number>>;
                NBool ($DN: string, $o: any) : IGetSeat$1<N$1<boolean>>;
                NFloat ($DN: string, $o: any) : IGetSeat$1<N$1<number>>;
                NV3 ($DN: string, $o: any) : IGetSeat$1<N$1<UnityEngine.Vector3>>;
                MaskContain ($toTest: number) : boolean;
            }
            class Enum extends System.ValueType implements System.IFormattable, System.IComparable, System.IConvertible
            {
                protected [__keep_incompatibility]: never;
            }
            class Exception extends System.Object implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
            {
                protected [__keep_incompatibility]: never;
            }
            interface IFormatProvider
            {
            }
            interface Converter$2<TInput, TOutput>
            { 
            (input: TInput) : TOutput; 
            Invoke?: (input: TInput) => TOutput;
            }
            interface Predicate$1<T>
            { 
            (obj: T) : boolean; 
            Invoke?: (obj: T) => boolean;
            }
            interface IDisposable
            {
            }
            interface Comparison$1<T>
            { 
            (x: T, y: T) : number; 
            Invoke?: (x: T, y: T) => number;
            }
            class Double extends System.ValueType implements System.IEquatable$1<number>, System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible
            {
                protected [__keep_incompatibility]: never;
            }
            class Type extends System.Reflection.MemberInfo implements System.Reflection.ICustomAttributeProvider, System.Reflection.IReflect, System.Runtime.InteropServices._MemberInfo, System.Runtime.InteropServices._Type
            {
                protected [__keep_incompatibility]: never;
            }
            class Array extends System.Object implements System.Collections.IStructuralComparable, System.Collections.IStructuralEquatable, System.Collections.ICollection, System.ICloneable, System.Collections.IEnumerable, System.Collections.IList
            {
                protected [__keep_incompatibility]: never;
            }
            class UInt64 extends System.ValueType implements System.IEquatable$1<bigint>, System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<bigint>, System.IConvertible
            {
                protected [__keep_incompatibility]: never;
            }
            class UInt32 extends System.ValueType implements System.IEquatable$1<number>, System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible
            {
                protected [__keep_incompatibility]: never;
            }
            class Byte extends System.ValueType implements System.IEquatable$1<number>, System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible
            {
                protected [__keep_incompatibility]: never;
            }
            interface Func$2<T, TResult>
            { 
            (arg: T) : TResult; 
            Invoke?: (arg: T) => TResult;
            }
            interface Action$3<T1, T2, T3>
            { 
            (arg1: T1, arg2: T2, arg3: T3) : void; 
            Invoke?: (arg1: T1, arg2: T2, arg3: T3) => void;
            }
            class Nullable$1<T> extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            interface Func$3<T1, T2, TResult>
            { 
            (arg1: T1, arg2: T2) : TResult; 
            Invoke?: (arg1: T1, arg2: T2) => TResult;
            }
            interface Action
            { 
            () : void; 
            Invoke?: () => void;
            }
            var Action: { new (func: () => void): Action; }
            class MarshalByRefObject extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            enum StringSplitOptions
            { None = 0, RemoveEmptyEntries = 1 }
            class Attribute extends System.Object implements System.Runtime.InteropServices._Attribute
            {
                protected [__keep_incompatibility]: never;
            }
            interface Action$2<T1, T2>
            { 
            (arg1: T1, arg2: T2) : void; 
            Invoke?: (arg1: T1, arg2: T2) => void;
            }
            interface Action$4<T1, T2, T3, T4>
            { 
            (arg1: T1, arg2: T2, arg3: T3, arg4: T4) : void; 
            Invoke?: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => void;
            }
        }
        namespace System.Runtime.Serialization {
            interface ISerializable
            {
            }
            interface IDeserializationCallback
            {
            }
            class SerializationInfo extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class StreamingContext extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace System.Collections.Generic {
            interface IEnumerable$1<T> extends System.Collections.IEnumerable
            {
            }
            class List$1<T> extends System.Object implements System.Collections.Generic.IReadOnlyList$1<T>, System.Collections.ICollection, System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.Generic.IList$1<T>, System.Collections.Generic.IReadOnlyCollection$1<T>, System.Collections.IList, System.Collections.Generic.ICollection$1<T>
            {
                protected [__keep_incompatibility]: never;
                public get Capacity(): number;
                public set Capacity(value: number);
                public get Count(): number;
                public get_Item ($index: number) : T
                public set_Item ($index: number, $value: T) : void
                public Add ($item: T) : void
                public AddRange ($collection: System.Collections.Generic.IEnumerable$1<T>) : void
                public AsReadOnly () : System.Collections.ObjectModel.ReadOnlyCollection$1<T>
                public BinarySearch ($index: number, $count: number, $item: T, $comparer: System.Collections.Generic.IComparer$1<T>) : number
                public BinarySearch ($item: T) : number
                public BinarySearch ($item: T, $comparer: System.Collections.Generic.IComparer$1<T>) : number
                public Clear () : void
                public Contains ($item: T) : boolean
                public CopyTo ($array: System.Array$1<T>) : void
                public CopyTo ($index: number, $array: System.Array$1<T>, $arrayIndex: number, $count: number) : void
                public CopyTo ($array: System.Array$1<T>, $arrayIndex: number) : void
                public Exists ($match: System.Predicate$1<T>) : boolean
                public Find ($match: System.Predicate$1<T>) : T
                public FindAll ($match: System.Predicate$1<T>) : System.Collections.Generic.List$1<T>
                public FindIndex ($match: System.Predicate$1<T>) : number
                public FindIndex ($startIndex: number, $match: System.Predicate$1<T>) : number
                public FindIndex ($startIndex: number, $count: number, $match: System.Predicate$1<T>) : number
                public FindLast ($match: System.Predicate$1<T>) : T
                public FindLastIndex ($match: System.Predicate$1<T>) : number
                public FindLastIndex ($startIndex: number, $match: System.Predicate$1<T>) : number
                public FindLastIndex ($startIndex: number, $count: number, $match: System.Predicate$1<T>) : number
                public ForEach ($action: System.Action$1<T>) : void
                public GetEnumerator () : System.Collections.Generic.List$1.Enumerator<T>
                public GetRange ($index: number, $count: number) : System.Collections.Generic.List$1<T>
                public IndexOf ($item: T) : number
                public IndexOf ($item: T, $index: number) : number
                public IndexOf ($item: T, $index: number, $count: number) : number
                public Insert ($index: number, $item: T) : void
                public InsertRange ($index: number, $collection: System.Collections.Generic.IEnumerable$1<T>) : void
                public LastIndexOf ($item: T) : number
                public LastIndexOf ($item: T, $index: number) : number
                public LastIndexOf ($item: T, $index: number, $count: number) : number
                public Remove ($item: T) : boolean
                public RemoveAll ($match: System.Predicate$1<T>) : number
                public RemoveAt ($index: number) : void
                public RemoveRange ($index: number, $count: number) : void
                public Reverse () : void
                public Reverse ($index: number, $count: number) : void
                public Sort () : void
                public Sort ($comparer: System.Collections.Generic.IComparer$1<T>) : void
                public Sort ($index: number, $count: number, $comparer: System.Collections.Generic.IComparer$1<T>) : void
                public Sort ($comparison: System.Comparison$1<T>) : void
                public ToArray () : System.Array$1<T>
                public TrimExcess () : void
                public TrueForAll ($match: System.Predicate$1<T>) : boolean
                public constructor ()
                public constructor ($capacity: number)
                public constructor ($collection: System.Collections.Generic.IEnumerable$1<T>)
            }
            interface IReadOnlyList$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.Generic.IReadOnlyCollection$1<T>
            {
            }
            interface IReadOnlyCollection$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable
            {
            }
            interface IList$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.Generic.ICollection$1<T>
            {
            }
            interface ICollection$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable
            {
            }
            interface IComparer$1<T>
            {
            }
            interface IEnumerator$1<T> extends System.Collections.IEnumerator, System.IDisposable
            {
            }
            class Dictionary$2<TKey, TValue> extends System.Object implements System.Collections.Generic.IReadOnlyDictionary$2<TKey, TValue>, System.Collections.Generic.IDictionary$2<TKey, TValue>, System.Collections.ICollection, System.Collections.IDictionary, System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Runtime.Serialization.IDeserializationCallback, System.Collections.IEnumerable, System.Runtime.Serialization.ISerializable, System.Collections.Generic.IReadOnlyCollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.Generic.ICollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>
            {
                protected [__keep_incompatibility]: never;
                public get Comparer(): System.Collections.Generic.IEqualityComparer$1<TKey>;
                public get Count(): number;
                public get Keys(): System.Collections.Generic.Dictionary$2.KeyCollection<TKey, TValue>;
                public get Values(): System.Collections.Generic.Dictionary$2.ValueCollection<TKey, TValue>;
                public get_Item ($key: TKey) : TValue
                public set_Item ($key: TKey, $value: TValue) : void
                public Add ($key: TKey, $value: TValue) : void
                public Clear () : void
                public ContainsKey ($key: TKey) : boolean
                public ContainsValue ($value: TValue) : boolean
                public GetEnumerator () : System.Collections.Generic.Dictionary$2.Enumerator<TKey, TValue>
                public GetObjectData ($info: System.Runtime.Serialization.SerializationInfo, $context: System.Runtime.Serialization.StreamingContext) : void
                public OnDeserialization ($sender: any) : void
                public Remove ($key: TKey) : boolean
                public TryGetValue ($key: TKey, $value: $Ref<TValue>) : boolean
                public EnsureCapacity ($capacity: number) : number
                public TrimExcess () : void
                public TrimExcess ($capacity: number) : void
                public constructor ()
                public constructor ($capacity: number)
                public constructor ($comparer: System.Collections.Generic.IEqualityComparer$1<TKey>)
                public constructor ($capacity: number, $comparer: System.Collections.Generic.IEqualityComparer$1<TKey>)
                public constructor ($dictionary: System.Collections.Generic.IDictionary$2<TKey, TValue>)
                public constructor ($dictionary: System.Collections.Generic.IDictionary$2<TKey, TValue>, $comparer: System.Collections.Generic.IEqualityComparer$1<TKey>)
                public constructor ($collection: System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>)
                public constructor ($collection: System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, $comparer: System.Collections.Generic.IEqualityComparer$1<TKey>)
            }
            interface IReadOnlyDictionary$2<TKey, TValue> extends System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.IEnumerable, System.Collections.Generic.IReadOnlyCollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>
            {
            }
            class KeyValuePair$2<TKey, TValue> extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            interface IDictionary$2<TKey, TValue> extends System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.IEnumerable, System.Collections.Generic.ICollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>
            {
            }
            interface IEqualityComparer$1<T>
            {
            }
        }
        namespace System.Collections {
            interface IEnumerable
            {
            }
            interface ICollection extends System.Collections.IEnumerable
            {
            }
            interface IList extends System.Collections.ICollection, System.Collections.IEnumerable
            {
            }
            interface IEnumerator
            {
            }
            interface IDictionary extends System.Collections.ICollection, System.Collections.IEnumerable
            {
            }
            interface IDictionaryEnumerator extends System.Collections.IEnumerator
            {
            }
            interface IStructuralComparable
            {
            }
            interface IStructuralEquatable
            {
            }
        }
        namespace System.Runtime.InteropServices {
            interface _Exception
            {
            }
            interface _MemberInfo
            {
            }
            interface _Type
            {
            }
            interface _MethodBase
            {
            }
            interface _MethodInfo
            {
            }
            interface _Attribute
            {
            }
        }
        namespace System.Collections.ObjectModel {
            class ReadOnlyCollection$1<T> extends System.Object implements System.Collections.Generic.IReadOnlyList$1<T>, System.Collections.ICollection, System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.Generic.IList$1<T>, System.Collections.Generic.IReadOnlyCollection$1<T>, System.Collections.IList, System.Collections.Generic.ICollection$1<T>
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace System.Collections.Generic.List$1 {
            class Enumerator<T> extends System.ValueType implements System.Collections.Generic.IEnumerator$1<T>, System.Collections.IEnumerator, System.IDisposable
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace System.Collections.Generic.Dictionary$2 {
            class KeyCollection<TKey, TValue> extends System.Object implements System.Collections.ICollection, System.Collections.Generic.IEnumerable$1<TKey>, System.Collections.IEnumerable, System.Collections.Generic.IReadOnlyCollection$1<TKey>, System.Collections.Generic.ICollection$1<TKey>
            {
                protected [__keep_incompatibility]: never;
            }
            class ValueCollection<TKey, TValue> extends System.Object implements System.Collections.ICollection, System.Collections.Generic.IEnumerable$1<TValue>, System.Collections.IEnumerable, System.Collections.Generic.IReadOnlyCollection$1<TValue>, System.Collections.Generic.ICollection$1<TValue>
            {
                protected [__keep_incompatibility]: never;
            }
            class Enumerator<TKey, TValue> extends System.ValueType implements System.Collections.IDictionaryEnumerator, System.Collections.Generic.IEnumerator$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.IEnumerator, System.IDisposable
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace System.Reflection {
            class MemberInfo extends System.Object implements System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._MemberInfo
            {
                protected [__keep_incompatibility]: never;
            }
            interface ICustomAttributeProvider
            {
            }
            interface IReflect
            {
            }
            class MethodInfo extends System.Reflection.MethodBase implements System.Runtime.InteropServices._MethodInfo, System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._MemberInfo, System.Runtime.InteropServices._MethodBase
            {
                protected [__keep_incompatibility]: never;
            }
            class MethodBase extends System.Reflection.MemberInfo implements System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._MemberInfo, System.Runtime.InteropServices._MethodBase
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace UnityEngine.SceneManagement {
            /** Run-time data structure for *.unity file. */
            class Scene extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace UnityEngine.ParticleSystem {
            class Particle extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class PlaybackState extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class Trails extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class EmitParams extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class MainModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class EmissionModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class ShapeModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class VelocityOverLifetimeModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class LimitVelocityOverLifetimeModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class InheritVelocityModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class LifetimeByEmitterSpeedModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class ForceOverLifetimeModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class ColorOverLifetimeModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class ColorBySpeedModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class SizeOverLifetimeModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class SizeBySpeedModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class RotationOverLifetimeModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class RotationBySpeedModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class ExternalForcesModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class NoiseModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class CollisionModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class TriggerModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class SubEmittersModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class TextureSheetAnimationModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class LightsModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class TrailModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class CustomDataModule extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace Unity.Collections {
            class NativeArray$1<T> extends System.ValueType implements System.IEquatable$1<Unity.Collections.NativeArray$1<T>>, System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.IDisposable
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace UnityEngine.Canvas {
            interface WillRenderCanvases
            { 
            () : void; 
            Invoke?: () => void;
            }
            var WillRenderCanvases: { new (func: () => void): WillRenderCanvases; }
        }
        namespace UnityEngine.EventSystems {
            class UIBehaviour extends UnityEngine.MonoBehaviour
            {
                protected [__keep_incompatibility]: never;
                public IsActive () : boolean
                public IsDestroyed () : boolean
            }
            interface IEventSystemHandler
            {
            }
            interface IPointerEnterHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface ISelectHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface IPointerExitHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface IDeselectHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface IPointerDownHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface IPointerUpHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface IMoveHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            class AxisEventData extends UnityEngine.EventSystems.BaseEventData
            {
                protected [__keep_incompatibility]: never;
            }
            class BaseEventData extends UnityEngine.EventSystems.AbstractEventData
            {
                protected [__keep_incompatibility]: never;
            }
            class AbstractEventData extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class PointerEventData extends UnityEngine.EventSystems.BaseEventData
            {
                protected [__keep_incompatibility]: never;
            }
            interface ISubmitHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface IPointerClickHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface IBeginDragHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface IDragHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface IEndDragHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface IUpdateSelectedHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            class StandaloneInputModule extends UnityEngine.EventSystems.PointerInputModule
            {
                protected [__keep_incompatibility]: never;
            }
            class PointerInputModule extends UnityEngine.EventSystems.BaseInputModule
            {
                protected [__keep_incompatibility]: never;
            }
            class BaseInputModule extends UnityEngine.EventSystems.UIBehaviour
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace UnityEngine.UI {
            class Selectable extends UnityEngine.EventSystems.UIBehaviour implements UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IPointerEnterHandler, UnityEngine.EventSystems.ISelectHandler, UnityEngine.EventSystems.IPointerExitHandler, UnityEngine.EventSystems.IDeselectHandler, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler, UnityEngine.EventSystems.IMoveHandler
            {
                protected [__keep_incompatibility]: never;
                public static get allSelectablesArray(): System.Array$1<UnityEngine.UI.Selectable>;
                public static get allSelectableCount(): number;
                public get navigation(): UnityEngine.UI.Navigation;
                public set navigation(value: UnityEngine.UI.Navigation);
                public get transition(): UnityEngine.UI.Selectable.Transition;
                public set transition(value: UnityEngine.UI.Selectable.Transition);
                public get colors(): UnityEngine.UI.ColorBlock;
                public set colors(value: UnityEngine.UI.ColorBlock);
                public get spriteState(): UnityEngine.UI.SpriteState;
                public set spriteState(value: UnityEngine.UI.SpriteState);
                public get animationTriggers(): UnityEngine.UI.AnimationTriggers;
                public set animationTriggers(value: UnityEngine.UI.AnimationTriggers);
                public get targetGraphic(): UnityEngine.UI.Graphic;
                public set targetGraphic(value: UnityEngine.UI.Graphic);
                public get interactable(): boolean;
                public set interactable(value: boolean);
                public get image(): UnityEngine.UI.Image;
                public set image(value: UnityEngine.UI.Image);
                public get animator(): UnityEngine.Animator;
                public static AllSelectablesNoAlloc ($selectables: System.Array$1<UnityEngine.UI.Selectable>) : number
                public IsInteractable () : boolean
                public FindSelectable ($dir: UnityEngine.Vector3) : UnityEngine.UI.Selectable
                public FindSelectableOnLeft () : UnityEngine.UI.Selectable
                public FindSelectableOnRight () : UnityEngine.UI.Selectable
                public FindSelectableOnUp () : UnityEngine.UI.Selectable
                public FindSelectableOnDown () : UnityEngine.UI.Selectable
                public OnMove ($eventData: UnityEngine.EventSystems.AxisEventData) : void
                public OnPointerDown ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public OnPointerUp ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public OnPointerEnter ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public OnPointerExit ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public OnSelect ($eventData: UnityEngine.EventSystems.BaseEventData) : void
                public OnDeselect ($eventData: UnityEngine.EventSystems.BaseEventData) : void
                public Select () : void
            }
            class Navigation extends System.ValueType implements System.IEquatable$1<UnityEngine.UI.Navigation>
            {
                protected [__keep_incompatibility]: never;
            }
            class ColorBlock extends System.ValueType implements System.IEquatable$1<UnityEngine.UI.ColorBlock>
            {
                protected [__keep_incompatibility]: never;
            }
            class SpriteState extends System.ValueType implements System.IEquatable$1<UnityEngine.UI.SpriteState>
            {
                protected [__keep_incompatibility]: never;
            }
            class AnimationTriggers extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class Graphic extends UnityEngine.EventSystems.UIBehaviour implements UnityEngine.UI.ICanvasElement
            {
                protected [__keep_incompatibility]: never;
            }
            interface ICanvasElement
            {
            }
            class Image extends UnityEngine.UI.MaskableGraphic implements UnityEngine.UI.IMaterialModifier, UnityEngine.UI.IMaskable, UnityEngine.UI.ICanvasElement, UnityEngine.UI.ILayoutElement, UnityEngine.UI.IClippable, UnityEngine.ICanvasRaycastFilter, UnityEngine.ISerializationCallbackReceiver
            {
                protected [__keep_incompatibility]: never;
            }
            class MaskableGraphic extends UnityEngine.UI.Graphic implements UnityEngine.UI.IMaterialModifier, UnityEngine.UI.IMaskable, UnityEngine.UI.ICanvasElement, UnityEngine.UI.IClippable
            {
                protected [__keep_incompatibility]: never;
            }
            interface IMaterialModifier
            {
            }
            interface IMaskable
            {
            }
            interface IClippable
            {
            }
            interface ILayoutElement
            {
            }
            class Button extends UnityEngine.UI.Selectable implements UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IPointerEnterHandler, UnityEngine.EventSystems.ISelectHandler, UnityEngine.EventSystems.IPointerExitHandler, UnityEngine.EventSystems.IDeselectHandler, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler, UnityEngine.EventSystems.IMoveHandler, UnityEngine.EventSystems.ISubmitHandler, UnityEngine.EventSystems.IPointerClickHandler
            {
                protected [__keep_incompatibility]: never;
                public get onClick(): UnityEngine.UI.Button.ButtonClickedEvent;
                public set onClick(value: UnityEngine.UI.Button.ButtonClickedEvent);
                public OnPointerClick ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public OnSubmit ($eventData: UnityEngine.EventSystems.BaseEventData) : void
            }
            class InputField extends UnityEngine.UI.Selectable implements UnityEngine.EventSystems.IBeginDragHandler, UnityEngine.EventSystems.IDragHandler, UnityEngine.EventSystems.IEndDragHandler, UnityEngine.UI.ICanvasElement, UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IPointerEnterHandler, UnityEngine.EventSystems.IUpdateSelectedHandler, UnityEngine.EventSystems.ISelectHandler, UnityEngine.EventSystems.IPointerExitHandler, UnityEngine.EventSystems.IDeselectHandler, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler, UnityEngine.EventSystems.IMoveHandler, UnityEngine.UI.ILayoutElement, UnityEngine.EventSystems.ISubmitHandler, UnityEngine.EventSystems.IPointerClickHandler
            {
                protected [__keep_incompatibility]: never;
                public get shouldHideMobileInput(): boolean;
                public set shouldHideMobileInput(value: boolean);
                public get shouldActivateOnSelect(): boolean;
                public set shouldActivateOnSelect(value: boolean);
                public get text(): string;
                public set text(value: string);
                public get isFocused(): boolean;
                public get caretBlinkRate(): number;
                public set caretBlinkRate(value: number);
                public get caretWidth(): number;
                public set caretWidth(value: number);
                public get textComponent(): UnityEngine.UI.Text;
                public set textComponent(value: UnityEngine.UI.Text);
                public get placeholder(): UnityEngine.UI.Graphic;
                public set placeholder(value: UnityEngine.UI.Graphic);
                public get caretColor(): UnityEngine.Color;
                public set caretColor(value: UnityEngine.Color);
                public get customCaretColor(): boolean;
                public set customCaretColor(value: boolean);
                public get selectionColor(): UnityEngine.Color;
                public set selectionColor(value: UnityEngine.Color);
                public get onEndEdit(): UnityEngine.UI.InputField.EndEditEvent;
                public set onEndEdit(value: UnityEngine.UI.InputField.EndEditEvent);
                public get onSubmit(): UnityEngine.UI.InputField.SubmitEvent;
                public set onSubmit(value: UnityEngine.UI.InputField.SubmitEvent);
                public get onValueChanged(): UnityEngine.UI.InputField.OnChangeEvent;
                public set onValueChanged(value: UnityEngine.UI.InputField.OnChangeEvent);
                public get onValidateInput(): UnityEngine.UI.InputField.OnValidateInput;
                public set onValidateInput(value: UnityEngine.UI.InputField.OnValidateInput);
                public get characterLimit(): number;
                public set characterLimit(value: number);
                public get contentType(): UnityEngine.UI.InputField.ContentType;
                public set contentType(value: UnityEngine.UI.InputField.ContentType);
                public get lineType(): UnityEngine.UI.InputField.LineType;
                public set lineType(value: UnityEngine.UI.InputField.LineType);
                public get inputType(): UnityEngine.UI.InputField.InputType;
                public set inputType(value: UnityEngine.UI.InputField.InputType);
                public get touchScreenKeyboard(): UnityEngine.TouchScreenKeyboard;
                public get keyboardType(): UnityEngine.TouchScreenKeyboardType;
                public set keyboardType(value: UnityEngine.TouchScreenKeyboardType);
                public get characterValidation(): UnityEngine.UI.InputField.CharacterValidation;
                public set characterValidation(value: UnityEngine.UI.InputField.CharacterValidation);
                public get readOnly(): boolean;
                public set readOnly(value: boolean);
                public get multiLine(): boolean;
                public get asteriskChar(): number;
                public set asteriskChar(value: number);
                public get wasCanceled(): boolean;
                public get caretPosition(): number;
                public set caretPosition(value: number);
                public get selectionAnchorPosition(): number;
                public set selectionAnchorPosition(value: number);
                public get selectionFocusPosition(): number;
                public set selectionFocusPosition(value: number);
                public get minWidth(): number;
                public get preferredWidth(): number;
                public get flexibleWidth(): number;
                public get minHeight(): number;
                public get preferredHeight(): number;
                public get flexibleHeight(): number;
                public get layoutPriority(): number;
                public SetTextWithoutNotify ($input: string) : void
                public MoveTextEnd ($shift: boolean) : void
                public MoveTextStart ($shift: boolean) : void
                public OnBeginDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public OnDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public OnEndDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public ProcessEvent ($e: UnityEngine.Event) : void
                public OnUpdateSelected ($eventData: UnityEngine.EventSystems.BaseEventData) : void
                public ForceLabelUpdate () : void
                public Rebuild ($update: UnityEngine.UI.CanvasUpdate) : void
                public LayoutComplete () : void
                public GraphicUpdateComplete () : void
                public ActivateInputField () : void
                public OnPointerClick ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public DeactivateInputField () : void
                public OnSubmit ($eventData: UnityEngine.EventSystems.BaseEventData) : void
                public CalculateLayoutInputHorizontal () : void
                public CalculateLayoutInputVertical () : void
            }
            class Text extends UnityEngine.UI.MaskableGraphic implements UnityEngine.UI.IMaterialModifier, UnityEngine.UI.IMaskable, UnityEngine.UI.ICanvasElement, UnityEngine.UI.ILayoutElement, UnityEngine.UI.IClippable
            {
                protected [__keep_incompatibility]: never;
            }
            enum CanvasUpdate
            { Prelayout = 0, Layout = 1, PostLayout = 2, PreRender = 3, LatePreRender = 4, MaxUpdateValue = 5 }
            class Toggle extends UnityEngine.UI.Selectable implements UnityEngine.UI.ICanvasElement, UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IPointerEnterHandler, UnityEngine.EventSystems.ISelectHandler, UnityEngine.EventSystems.IPointerExitHandler, UnityEngine.EventSystems.IDeselectHandler, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler, UnityEngine.EventSystems.IMoveHandler, UnityEngine.EventSystems.ISubmitHandler, UnityEngine.EventSystems.IPointerClickHandler
            {
                protected [__keep_incompatibility]: never;
                public toggleTransition : UnityEngine.UI.Toggle.ToggleTransition
                public graphic : UnityEngine.UI.Graphic
                public onValueChanged : UnityEngine.UI.Toggle.ToggleEvent
                public get group(): UnityEngine.UI.ToggleGroup;
                public set group(value: UnityEngine.UI.ToggleGroup);
                public get isOn(): boolean;
                public set isOn(value: boolean);
                public Rebuild ($executing: UnityEngine.UI.CanvasUpdate) : void
                public LayoutComplete () : void
                public GraphicUpdateComplete () : void
                public SetIsOnWithoutNotify ($value: boolean) : void
                public OnPointerClick ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public OnSubmit ($eventData: UnityEngine.EventSystems.BaseEventData) : void
            }
            class ToggleGroup extends UnityEngine.EventSystems.UIBehaviour
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace UnityEngine.UI.Selectable {
            enum Transition
            { None = 0, ColorTint = 1, SpriteSwap = 2, Animation = 3 }
        }
        namespace UnityEngine.UI.Button {
            class ButtonClickedEvent extends UnityEngine.Events.UnityEvent implements UnityEngine.ISerializationCallbackReceiver
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
        }
        namespace UnityEngine.Events {
            /** A zero argument persistent callback that can be saved with the Scene. */
            class UnityEvent extends UnityEngine.Events.UnityEventBase implements UnityEngine.ISerializationCallbackReceiver
            {
                protected [__keep_incompatibility]: never;
                /** Add a non persistent listener to the UnityEvent. * @param call Callback function.
                */
                public AddListener ($call: UnityEngine.Events.UnityAction) : void
                /** Remove a non persistent listener from the UnityEvent. If you have added the same listener multiple times, this method will remove all occurrences of it. * @param call Callback function.
                */
                public RemoveListener ($call: UnityEngine.Events.UnityAction) : void
                public Invoke () : void
                public constructor ()
            }
            /** Abstract base class for UnityEvents. */
            class UnityEventBase extends System.Object implements UnityEngine.ISerializationCallbackReceiver
            {
                protected [__keep_incompatibility]: never;
            }
            /** Zero argument delegate used by UnityEvents. */
            interface UnityAction
            { 
            () : void; 
            Invoke?: () => void;
            }
            var UnityAction: { new (func: () => void): UnityAction; }
            class UnityEvent$1<T0> extends UnityEngine.Events.UnityEventBase implements UnityEngine.ISerializationCallbackReceiver
            {
                protected [__keep_incompatibility]: never;
                public AddListener ($call: UnityEngine.Events.UnityAction$1<T0>) : void
                public RemoveListener ($call: UnityEngine.Events.UnityAction$1<T0>) : void
                public Invoke ($arg0: T0) : void
                public constructor ()
            }
            interface UnityAction$1<T0>
            { 
            (arg0: T0) : void; 
            Invoke?: (arg0: T0) => void;
            }
        }
        namespace UnityEngine.UI.InputField {
            class EndEditEvent extends UnityEngine.Events.UnityEvent$1<string> implements UnityEngine.ISerializationCallbackReceiver
            {
                protected [__keep_incompatibility]: never;
            }
            class SubmitEvent extends UnityEngine.Events.UnityEvent$1<string> implements UnityEngine.ISerializationCallbackReceiver
            {
                protected [__keep_incompatibility]: never;
            }
            class OnChangeEvent extends UnityEngine.Events.UnityEvent$1<string> implements UnityEngine.ISerializationCallbackReceiver
            {
                protected [__keep_incompatibility]: never;
            }
            interface OnValidateInput
            { 
            (text: string, charIndex: number, addedChar: number) : number; 
            Invoke?: (text: string, charIndex: number, addedChar: number) => number;
            }
            var OnValidateInput: { new (func: (text: string, charIndex: number, addedChar: number) => number): OnValidateInput; }
            enum ContentType
            { Standard = 0, Autocorrected = 1, IntegerNumber = 2, DecimalNumber = 3, Alphanumeric = 4, Name = 5, EmailAddress = 6, Password = 7, Pin = 8, Custom = 9 }
            enum LineType
            { SingleLine = 0, MultiLineSubmit = 1, MultiLineNewline = 2 }
            enum InputType
            { Standard = 0, AutoCorrect = 1, Password = 2 }
            enum CharacterValidation
            { None = 0, Integer = 1, Decimal = 2, Alphanumeric = 3, Name = 4, EmailAddress = 5 }
        }
        namespace UnityEngine.UI.Toggle {
            enum ToggleTransition
            { None = 0, Fade = 1 }
            class ToggleEvent extends UnityEngine.Events.UnityEvent$1<boolean> implements UnityEngine.ISerializationCallbackReceiver
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
        }
            class Host1 extends Host implements IResGetter$1<ISpawnable>, IResGetter$1<Host>, IInputUser, IRealPoss, IHaveID, ISpawnable, IRes, IIDTarget, IResGetter
            {
                protected [__keep_incompatibility]: never;
                public PlayerName : string
                public CreatHero ($p: Player) : Unit
                public CreatCard ($p: Player, $UnitName: string) : void
                public constructor ()
            }
            class Host extends LayerID implements IResGetter$1<ISpawnable>, IResGetter$1<Host>, IInputUser, IRealPoss, IHaveID, ISpawnable, IRes, IIDTarget, IResGetter
            {
                protected [__keep_incompatibility]: never;
                public Event : HostEvent
                public NowTurnPlayer : Param$1<number>
                public get host(): Host;
                public get unit(): Unit;
                public get player(): Player;
                public get ID(): number;
                public get IsLocal(): boolean;
                public get DirectoryName(): string;
                public CreatGamePlayerForNetPlayer ($NetPlayerID: number) : number
                public GetNew ($args: ResArgs) : Host
                public GetNewObject ($a: ResArgs) : any
            }
            class LayerID extends _LayerID implements IResGetter$1<ISpawnable>, IInputUser, IRealPoss, IHaveID, ISpawnable, IRes, IResGetter, IIDTarget
            {
                protected [__keep_incompatibility]: never;
                public InputSkills : System.Collections.Generic.List$1<InputSkill>
                public loopSkills : System.Collections.Generic.List$1<IFixSkill>
                public loopSkills50ms : System.Collections.Generic.List$1<IFixSkill50ms>
                public TriggerSkills : System.Collections.Generic.List$1<ITriggerSkill>
                public UPID : Param$1<number>
                public get IsHighLightInput(): HighLightStruct;
                public get IsHighLightTarget(): HighLightStruct;
                public get transf(): UnityEngine.Transform;
                public get DirectoryName(): string;
                public get PackName(): string;
                public get KindName(): string;
                public get kindID(): string;
                public get dirPass(): string;
                public get RealPoss(): UnityEngine.Vector3;
                public get VisualPoss(): UnityEngine.Vector3;
                public get buffs(): BuffCollection;
                public set buffs(value: BuffCollection);
                public get skills(): HashSet_NodeList$1<Skill>;
                public get InputSkillVersion(): number;
                public get AsIAfterSimulate(): IAfterSimulate;
                public get upID(): number;
                public set upID(value: number);
                public get NetID(): number;
                public SetID ($id: number) : void
                public FreshAllUsefulForm () : void
                public Awake () : void
                public EnsureComponet ($FullName: string) : ILayerComp
                public AddMesh ($FullName: string) : MeshRes
                public LinkToSkill ($to: any) : void
                public AddSkill ($to: any, $ToAddMask: number, $inputSkillKind?: number) : void
                public GetInputSkill ($sendFunc: System.Func$2<InputSkill, boolean>) : void
                public GetInputSkill ($which: number) : InputSkill
                public Fix () : void
                public Fix50ms () : void
                public ServerUseInput ($m: InputMsg) : void
                public CanAddFollower ($u: Unit) : boolean
                public AddUnitFollower ($u: Unit) : void
                public RemoveUnitFollower ($u: Unit) : void
                public ClientSetNetID ($NetID: number) : void
                public static CreatSpawnable ($m: SpawnMsg) : void
                public FullName () : string
                public Name () : string
                public EnsureAssetFolder () : void
                public PrefabPath () : string
                public ABDir () : string
                public ABPath () : string
                public ABAsyncPath () : string
                public GetNewObject ($a: ResArgs) : any
            }
            interface LayerID {
                Distance ($b: LayerID) : number;
                IsFriend ($l2: LayerID) : boolean;
            }
            class _LayerID extends Layer implements IHaveID
            {
                protected [__keep_incompatibility]: never;
                public OnSetID_Awake () : void
            }
            class Layer extends UnityEngine.MonoBehaviour implements IHaveID
            {
                protected [__keep_incompatibility]: never;
                public get ID(): number;
                public set ID(value: number);
                public get upID(): number;
                public set upID(value: number);
                public get transf(): UnityEngine.Transform;
                public get up(): LayerID;
                public set up(value: LayerID);
                public static get driver(): Driver;
                public get host(): Host;
                public get player(): Player;
                public get unit(): Unit;
                public get IsLocal(): boolean;
                public get isServer(): boolean;
                public get TopUnit(): Unit;
                public get hero(): Hero;
                public static CreatHost ($n: string) : Host
                public static CreatPlayer ($n: string) : Player
                public static CreatUnit ($n: string) : Unit
                public static CreatComp ($FullName: string, $master: LayerID) : ILayerComp
                public static CreatSkill ($FullName: string) : SkillBuilder
            }
            interface IHaveID
            {
            }
            interface ISpawnable
            {
            }
            interface IResGetter$1<T> extends IResGetter
            {
                GetNewObject ($a: ResArgs) : any
            }
            interface IResGetter
            {
                GetNewObject ($a: ResArgs) : any
            }
            interface IInputUser
            {
            }
            interface IRealPoss
            {
                RealPoss : UnityEngine.Vector3
                VisualPoss : UnityEngine.Vector3
            }
            interface IRes
            {
                DirectoryName : string
                PackName : string
                KindName : string
            }
            interface IRes {
                FullName () : string;
                Name () : string;
                EnsureAssetFolder () : void;
                PrefabPath () : string;
                ABDir () : string;
                ABPath () : string;
                ABAsyncPath () : string;
            }
            interface IIDTarget
            {
            }
            class Unit extends LayerID implements IResGetter$1<ISpawnable>, IResGetter$1<Unit>, IInputUser, ICallListener, IRealPoss, IAfterSimulate, IHaveID, ISpawnable, IRes, IIDTarget, ITarget, IResGetter
            {
                protected [__keep_incompatibility]: never;
                public Event : UnitEvent
                public PossMonitor : SyncMonitor$1<UnityEngine.Vector3>
                public EulaAngleMonitor : SyncMonitor$1<UnityEngine.Vector3>
                public RigVMonitor : SyncMonitor$1<UnityEngine.Vector3>
                public Space : Param$1<number>
                public State : Param$1<number>
                public HandIndex : Param$1<number>
                public ManaCost : ParamBuffable$1<N$1<number>>
                public atk : ParamBuffable$1<N$1<number>>
                public speed : ParamBuffable$1<N$1<number>>
                public MaxHP : ParamBuffable$1<N$1<number>>
                public HP : Param$1<N$1<number>>
                public ToDestory : ParamBuffable$1<boolean>
                public OnLand : boolean
                public ID_ : number
                public rig : UnityEngine.Rigidbody
                public Follower : Unit
                public _FollowerTransform : UnityEngine.Transform
                public get unit(): Unit;
                public get CreatUnitData(): boolean;
                public get BaseData(): UnitData;
                public get UIHeight(): number;
                public get UIWide(): number;
                public get SpaceIsInHand(): boolean;
                public get TopUnit(): Unit;
                public get CanBeHero(): Hero;
                public get IsHero(): boolean;
                public get ID(): number;
                public set ID(value: number);
                public get DirectoryName(): string;
                public get AsIAfterSimulate(): IAfterSimulate;
                public get RealPoss(): UnityEngine.Vector3;
                public get FollowerTransform(): UnityEngine.Transform;
                public DoCall ($call: Call) : void
                public OnGetDestoryCall ($c: Call) : void
                public LoadUnitData () : void
                public OnSetID_Awake_Param () : void
                public GetNew ($args: ResArgs) : Unit
                public GetNewObject ($a: ResArgs) : any
                public AfterSimulate_ () : void
                public GetData () : IInputData
                public _SetPoss ($v: UnityEngine.Vector3) : void
            }
            interface Unit {
                IsFollowing () : boolean;
                IsCardInHand () : boolean;
                IsSpaceInSpace () : boolean;
                IsSpace ($space: number) : boolean;
                IsState ($state: number) : boolean;
            }
            interface ICallListener
            {
                DoCall ($call: Call) : void
            }
            interface IAfterSimulate
            {
                AfterSimulate_ () : void
            }
            interface ITarget
            {
                GetData () : IInputData
            }
            class Player extends LayerID implements IResGetter$1<ISpawnable>, IResGetter$1<Player>, IInputUser, IRealPoss, IHaveID, ISpawnable, IRes, IIDTarget, IResGetter
            {
                protected [__keep_incompatibility]: never;
                public Event : PlayerEvent
                public ID_ : number
                public HeroID : Param$1<number>
                public WS : Param$1<number>
                public DA : Param$1<number>
                public CamFoward : Param$1<UnityEngine.Vector3>
                public DeckCount : Param$1<number>
                public HandCount : Param$1<number>
                public Mana : Param$1<number>
                public ManaMax : ParamBuffable$1<number>
                public deck : ParamList$1<Unit>
                public hand : ParamList$1<Unit>
                public space : ParamList$1<Unit>
                public get player(): Player;
                public get unit(): Unit;
                public get ID(): number;
                public set ID(value: number);
                public get DirectoryName(): string;
                public get RealPoss(): UnityEngine.Vector3;
                public get hero(): Hero;
                public get MainHero(): Hero;
                public set MainHero(value: Hero);
                public GetNew ($args: ResArgs) : Player
                public GetNewObject ($a: ResArgs) : any
            }
            class TurnSkill extends Skill implements ISetKV, IInputUser, ILongSkill, ISpawnable, IIDTarget, ITarget
            {
                protected [__keep_incompatibility]: never;
                public OneTurnTime : number
                public Fix_Start () : void
                public Fix () : void
                public Fix50 () : void
                public SetExitListAction ($a: System.Action$1<any>) : void
                public constructor ()
                public AddToLongSkillList () : void
            }
            class Skill extends System.Object implements ISetKV, IInputUser, ISpawnable, IIDTarget, ITarget
            {
                protected [__keep_incompatibility]: never;
                public static Pause_Off : number
                public static Pause_On : number
                public PartDIrPath : string
                public GroupIndex : string
                public ID_ : number
                public UPID : Param$1<number>
                public _groupData : Param$1<number>
                public _classSetting : Param$1<number>
                public HasStackComp : boolean
                public HasLongSkillComp : boolean
                public StackInde : number
                public StackTotal : number
                public LongIndex : number
                public LongTotal : number
                public get PauseTimeLeft(): number;
                public set PauseTimeLeft(value: number);
                public get IsPausing(): boolean;
                public get FullName(): string;
                public set FullName(value: string);
                public get Visible(): boolean;
                public get ID(): number;
                public set ID(value: number);
                public get upID(): number;
                public set upID(value: number);
                public get groupData(): number;
                public set groupData(value: number);
                public get ClassSetting(): number;
                public set ClassSetting(value: number);
                public get up(): LayerID;
                public get unit(): Unit;
                public get player(): Player;
                public get NetID(): number;
                public get dirPass(): string;
                public get kindID(): string;
                public get RealPoss(): UnityEngine.Vector3;
                public get VisualPoss(): UnityEngine.Vector3;
                public get InStack(): boolean;
                public get IsStackTop(): boolean;
                public get InList(): boolean;
                public get ListTop(): boolean;
                public get HasMoreThanZeroTar(): boolean;
                public set HasMoreThanZeroTar(value: boolean);
                public GetData () : IInputData
                public ServerUseInput ($msg: InputMsg) : void
                public ClientCancelPause () : void
                public ClientPause () : void
                public ServerSetPausing ($ID: number) : void
                public ServerSetPausingExcept ($ID: number) : void
                public ServerSetPausingAll () : void
                public ServerCancelPausing ($ID: number) : void
                public TestIsPausing ($id: number) : boolean
                public ServerSetPauseTime ($f: number) : void
                public static ApplyOneTargetInput ($skill: Skill, $p1: InputForm) : void
                public StartV3 () : UnityEngine.Vector3
                public DirV3 () : UnityEngine.Vector3
                public TarV3 () : UnityEngine.Vector3
                public TarV3Visual () : UnityEngine.Vector3
                public TarID () : N$1<number>
                public TarUnit () : Unit
                public TarSkill () : Skill
                public SelfHero () : Unit
                public GetCopy () : Skill
                public GetBranch ($Name: string) : Skill
                public GetOrigin ($Name: string) : Skill
                public ClientSetNetID ($NetID: number) : void
                public SetUP ($l: LayerID) : void
                public SetID ($i: number) : void
                public OnSetID_LoadStructure () : void
                public EnsureComp ($FullName: string) : void
                public EnsureStackComp () : void
                public EnsureLongSkillComp () : void
                public static CreatInput ($kind: number) : InputMsg
                public SetKV ($key: string, $o: any) : void
                public SetStackIndex ($index: number, $total: number) : void
                public SetLongListIndex ($index: number, $total: number) : void
            }
            interface Skill {
                NodeIsFrientInHand ($n: InputNode) : boolean;
                NodeReachable ($n: InputNode, $disLimit: number) : boolean;
                CanAddFollower ($n: InputNode) : boolean;
                SetSkillImageName ($name: string) : void;
                PauseSkillForSeconds ($t: number) : void;
                PauseSkillForPlayer ($PausePlayerID: number) : void;
                EnsureStackComp () : void;
                EnsureLongSkillComp () : void;
                SN_TestPause () : number;
            }
            interface ISetKV
            {
                SetKV ($key: string, $o: any) : void
            }
            interface ILongSkill
            {
                SetExitListAction ($a: System.Action$1<any>) : void
                Fix_Start () : void
                Fix () : void
                Fix50 () : void
                EnsureLongSkillComp () : void
                SetLongListIndex ($index: number, $total: number) : void
            }
            interface ILongSkill {
                AddToLongSkillList () : void;
            }
            class MainLoop extends Skill implements ISetKV, IInputUser, ILongSkill, ISpawnable, IIDTarget, ITarget
            {
                protected [__keep_incompatibility]: never;
                public Fix () : void
                public Fix50 () : void
                public Fix_Start () : void
                public SetExitListAction ($a: System.Action$1<any>) : void
                public constructor ()
                public AddToLongSkillList () : void
            }
            class Player1 extends Player implements IResGetter$1<ISpawnable>, IResGetter$1<Player>, IInputUser, IRealPoss, IHaveID, ISpawnable, IRes, IIDTarget, IResGetter
            {
                protected [__keep_incompatibility]: never;
                public MoveInput : WSDA
                public SendWsDa () : void
                public SendFoward () : void
                public GetFoward ($m: FixedLenByteMsg) : void
                public GetWsDa ($m: FixedLenByteMsg) : void
                public constructor ()
            }
            class WSDA extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class InputMsg extends System.ValueType implements Mirror.NetworkMessage
            {
                protected [__keep_incompatibility]: never;
            }
            class FixedLenByteMsg extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class Skill_wsdaMoveNotOnLand extends Skill implements ISetKV, IInputUser, IFixSkill, ISpawnable, IIDTarget, ITarget
            {
                protected [__keep_incompatibility]: never;
                public speed : number
                public Fix () : void
                public constructor ()
            }
            interface IFixSkill
            {
                Fix () : void
            }
            class Skill_wsdaMove extends Skill implements ISetKV, IInputUser, IFixSkill, ISpawnable, IIDTarget, ITarget
            {
                protected [__keep_incompatibility]: never;
                public speed : number
                public Fix () : void
                public constructor ()
            }
            class Skill_WSDAMove_plus extends Skill implements ISetKV, IInputUser, IFixSkill, ISpawnable, IIDTarget, ITarget
            {
                protected [__keep_incompatibility]: never;
                public speed : number
                public acc : number
                public get FullName(): string;
                public Fix () : void
                public constructor ()
            }
            class Skill_CancelSkill extends StackSkill_Delegate implements ISetKV, IInputUser, IStackSkill_Delegate, IStackSkill, ISpawnable, IIDTarget, ITarget, ISkill_Delegate
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class StackSkill_Delegate extends Skill_Delegate implements ISetKV, IInputUser, IStackSkill_Delegate, IStackSkill, ISpawnable, IIDTarget, ITarget, ISkill_Delegate
            {
                protected [__keep_incompatibility]: never;
                public get stackStart(): SkillNodeGroupOnce;
                public set stackStart(value: SkillNodeGroupOnce);
                public get runToBreak(): SkillNodeGroupStack;
                public set runToBreak(value: SkillNodeGroupStack);
                public Stack_Start () : void
                public Run_ToBreak () : boolean
                public SetExistStackAction ($a: System.Action$1<any>) : void
                public ExistStack () : void
                public constructor ()
                public AddToStackSkillList () : void
            }
            class Skill_Delegate extends Skill implements ISetKV, IInputUser, ISpawnable, IIDTarget, ITarget
            {
                protected [__keep_incompatibility]: never;
                public get visible(): Func0$2<Skill, boolean>;
                public set visible(value: Func0$2<Skill, boolean>);
                public get Visible(): boolean;
                public get setKV(): Act2$3<Skill, string, any>;
                public constructor ()
            }
            interface IStackSkill_Delegate extends ISkill_Delegate
            {
                stackStart : SkillNodeGroupOnce
                runToBreak : SkillNodeGroupStack
                visible : Func0$2<Skill, boolean>
            }
            interface ISkill_Delegate
            {
                visible : Func0$2<Skill, boolean>
            }
            interface IStackSkill
            {
                SetExistStackAction ($a: System.Action$1<any>) : void
                Stack_Start () : void
                Run_ToBreak () : boolean
                SetStackIndex ($index: number, $total: number) : void
                EnsureStackComp () : void
            }
            interface IStackSkill {
                AddToStackSkillList () : void;
            }
            class InputSkill_Delegate extends InputSkill implements ISetKV, IInputUser, ISpawnable, IInputSkill_Delegate, IIDTarget, ITarget, ISkill_Delegate
            {
                protected [__keep_incompatibility]: never;
                public get onSetID_LoadStructure(): Act0$1<InputSkill>;
                public get setKV(): Act2$3<InputSkill, string, any>;
                public get visible(): Func0$2<Skill, boolean>;
                public set visible(value: Func0$2<Skill, boolean>);
                public get Visible(): boolean;
                public get forEachNodeForm(): Act2$3<InputSkill, System.Action$1<string>, number>;
                public set forEachNodeForm(value: Act2$3<InputSkill, System.Action$1<string>, number>);
                public get preFloat(): Func2$4<InputSkill, string, number, N$1<number>>;
                public set preFloat(value: Func2$4<InputSkill, string, number, N$1<number>>);
                public get preBool(): Func2$4<InputSkill, string, number, N$1<boolean>>;
                public set preBool(value: Func2$4<InputSkill, string, number, N$1<boolean>>);
                public get preInt(): Func2$4<InputSkill, string, number, N$1<number>>;
                public set preInt(value: Func2$4<InputSkill, string, number, N$1<number>>);
                public get preV3(): Func2$4<InputSkill, string, number, N$1<UnityEngine.Vector3>>;
                public set preV3(value: Func2$4<InputSkill, string, number, N$1<UnityEngine.Vector3>>);
                public get highLightTest(): Func0$2<InputSkill, boolean>;
                public set highLightTest(value: Func0$2<InputSkill, boolean>);
                public get testNodeUseful(): Func1$3<InputSkill, InputNode, boolean>;
                public set testNodeUseful(value: Func1$3<InputSkill, InputNode, boolean>);
                public get afterWrite_GetNext(): Func2$4<InputSkill, InputNode, number, InputNode>;
                public set afterWrite_GetNext(value: Func2$4<InputSkill, InputNode, number, InputNode>);
                public get tested_Then_RunSkill(): Act1$2<InputSkill, InputForm>;
                public set tested_Then_RunSkill(value: Act1$2<InputSkill, InputForm>);
                public constructor ()
            }
            class InputSkill extends Skill implements ISetKV, IInputUser, ISpawnable, IIDTarget, ITarget
            {
                protected [__keep_incompatibility]: never;
                public get IsHighLightInput(): HighLightStruct;
                public get SkillKind(): number;
                public set SkillKind(value: number);
                public HighLightTest () : boolean
                public TestNodeUseful ($n: InputNode) : boolean
                public FullTest ($r: InputForm) : boolean
                public PreFloat ($DataName: string, $kind: number) : N$1<number>
                public PreInt ($DataName: string, $kind: number) : N$1<number>
                public PreBool ($DataName: string, $kind: number) : N$1<boolean>
                public PreV3 ($DataName: string, $kind: number) : N$1<UnityEngine.Vector3>
                public ForEachNodeForm ($act: System.Action$1<string>, $kind: number) : void
                public Write_GetNext ($data: IInputData, $n: InputNode, $Extrainfo: number) : InputNode
                public AfterWrite_GetNext ($n: InputNode, $Extrainfo: number) : InputNode
                public ServerTestToRun ($f: InputForm) : boolean
                public Tested_Then_RunSkill ($f: InputForm) : void
                public GetEmptyForm () : InputForm
            }
            interface IInputSkill_Delegate extends ISkill_Delegate
            {
                forEachNodeForm : Act2$3<InputSkill, System.Action$1<string>, number>
                preFloat : Func2$4<InputSkill, string, number, N$1<number>>
                preBool : Func2$4<InputSkill, string, number, N$1<boolean>>
                preInt : Func2$4<InputSkill, string, number, N$1<number>>
                preV3 : Func2$4<InputSkill, string, number, N$1<UnityEngine.Vector3>>
                highLightTest : Func0$2<InputSkill, boolean>
                testNodeUseful : Func1$3<InputSkill, InputNode, boolean>
                afterWrite_GetNext : Func2$4<InputSkill, InputNode, number, InputNode>
                tested_Then_RunSkill : Act1$2<InputSkill, InputForm>
                visible : Func0$2<Skill, boolean>
            }
            class Act0$1<s> extends Pack.ActMix$3.Act<s, Act0$1<s>, Act0Node$1<s>>
            {
                protected [__keep_incompatibility]: never;
                public AddAct ($c: System.Action$1<s>) : void
                public constructor ()
            }
            class Act0Node$1<s> extends Pack.ActMix$3.Node<s, Act0$1<s>, Act0Node$1<s>>
            {
                protected [__keep_incompatibility]: never;
            }
            class Act2$3<s, T1, T2> extends Pack.ActMix$3.Act<s, Act2$3<s, T1, T2>, Act2Node$3<s, T1, T2>>
            {
                protected [__keep_incompatibility]: never;
                public param1 : T1
                public param2 : T2
                public Invoke ($p1: T1, $p2: T2) : void
                public AddAct ($c: System.Action$3<s, T1, T2>) : void
                public constructor ()
            }
            class Act2Node$3<s, T1, T2> extends Pack.ActMix$3.Node<s, Act2$3<s, T1, T2>, Act2Node$3<s, T1, T2>>
            {
                protected [__keep_incompatibility]: never;
            }
            class Func0$2<s, Tr> extends Pack.FuncMix$4.Func<s, Tr, Func0$2<s, Tr>, Func0Node$2<s, Tr>>
            {
                protected [__keep_incompatibility]: never;
                public AddFunc ($f: System.Action$1<s>) : void
                public constructor ()
            }
            class Func0Node$2<s, Tr> extends Pack.FuncMix$4.Node<s, Tr, Func0$2<s, Tr>, Func0Node$2<s, Tr>>
            {
                protected [__keep_incompatibility]: never;
            }
            class N$1<T> extends System.ValueType implements System.IEquatable$1<N$1<T>>
            {
                protected [__keep_incompatibility]: never;
                public static get Null(): N$1<T>;
                public static get NullIGet(): IGet$1<N$1<T>>;
                public get NoValue(): boolean;
                public get HasValue(): boolean;
                public get Value(): T;
                public set Value(value: T);
                public TrySet ($o: any) : boolean
                public Equals ($other: System.Nullable$1<T>) : boolean
                public Equals ($other: N$1<T>) : boolean
                public static op_Implicit ($value: any) : N$1<T>
                public static op_Implicit ($value: System.Nullable$1<T>) : N$1<T>
                public static op_Implicit ($value: N$1<T>) : any
                public Equals ($obj: any) : boolean
                public static Equals ($objA: any, $objB: any) : boolean
            }
            class Func2$4<s, T1, T2, Tr> extends Pack.FuncMix$4.Func<s, Tr, Func2$4<s, T1, T2, Tr>, Func2Node$4<s, T1, T2, Tr>>
            {
                protected [__keep_incompatibility]: never;
                public param1 : T1
                public param2 : T2
                public Invoke ($p1: T1, $p2: T2) : Tr
                public AddFunc ($f: System.Action$3<s, T1, T2>) : void
                public constructor ()
            }
            class Func2Node$4<s, T1, T2, Tr> extends Pack.FuncMix$4.Node<s, Tr, Func2$4<s, T1, T2, Tr>, Func2Node$4<s, T1, T2, Tr>>
            {
                protected [__keep_incompatibility]: never;
            }
            class InputNode extends System.Object implements IPreViewMasterNode
            {
                protected [__keep_incompatibility]: never;
                public MasterSkill : InputSkill
                public NodeKind : number
                public static FinishNode : InputNode
                public static Canceled : InputNode
                public get UPViewNode(): IPreViewMasterNode;
                public set UPViewNode(value: IPreViewMasterNode);
                public get UpBro(): InputNode;
                public set UpBro(value: InputNode);
                public get NextBroNode(): InputNode;
                public set NextBroNode(value: InputNode);
                public get Parent(): InputNode;
                public set Parent(value: InputNode);
                public get Child(): InputNode;
                public set Child(value: InputNode);
                public get Point(): N$1<UnityEngine.Vector3>;
                public set Point(value: N$1<UnityEngine.Vector3>);
                public get LayerID(): N$1<number>;
                public set LayerID(value: N$1<number>);
                public ForEachNode ($act: System.Action$1<string>) : void
                public PreV3 ($DataName: string) : N$1<UnityEngine.Vector3>
                public PreInt ($DataName: string) : N$1<number>
                public PreFloat ($DataName: string) : N$1<number>
                public PreBool ($DataName: string) : N$1<boolean>
                public constructor ()
            }
            interface InputNode {
                GetUnit () : Unit;
                HaveUnit ($to: $Ref<Unit>) : boolean;
            }
            interface IPreViewMasterNode
            {
            }
            class Func1$3<s, T1, Tr> extends Pack.FuncMix$4.Func<s, Tr, Func1$3<s, T1, Tr>, Func1Node$3<s, T1, Tr>>
            {
                protected [__keep_incompatibility]: never;
                public param1 : T1
                public Invoke ($p1: T1) : Tr
                public AddFunc ($f: System.Action$2<s, T1>) : void
                public constructor ()
            }
            class Func1Node$3<s, T1, Tr> extends Pack.FuncMix$4.Node<s, Tr, Func1$3<s, T1, Tr>, Func1Node$3<s, T1, Tr>>
            {
                protected [__keep_incompatibility]: never;
            }
            class InputForm extends InputNode implements IPreViewMaster, IPreViewMasterNode
            {
                protected [__keep_incompatibility]: never;
                public ToWrite : InputNode
                public get up(): LayerID;
                public get SkillKind(): number;
                public set SkillKind(value: number);
                public get finished(): boolean;
                public get Point(): N$1<UnityEngine.Vector3>;
                public get LayerID(): N$1<number>;
                public get Count(): number;
                public SetMasterSkill ($m: InputSkill) : InputForm
                public Write ($data: IInputData, $Extrainfo?: number) : void
                public GetNode ($index: number) : IPreViewMasterNode
                public OnFinish () : void
                public constructor ()
            }
            interface IPreViewMaster
            {
            }
            class Act1$2<s, T1> extends Pack.ActMix$3.Act<s, Act1$2<s, T1>, Act1Node$2<s, T1>>
            {
                protected [__keep_incompatibility]: never;
                public param1 : T1
                public Invoke ($p1: T1) : void
                public AddAct ($c: System.Action$2<s, T1>) : void
                public constructor ()
            }
            class Act1Node$2<s, T1> extends Pack.ActMix$3.Node<s, Act1$2<s, T1>, Act1Node$2<s, T1>>
            {
                protected [__keep_incompatibility]: never;
            }
            class Skill_SendBack extends FixSkill_Delegate implements ISetKV, IInputUser, IFixSkill_Delegate, IFixSkill, ISpawnable, IIDTarget, ITarget, ISkill_Delegate
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class FixSkill_Delegate extends Skill implements ISetKV, IInputUser, IFixSkill_Delegate, IFixSkill, ISpawnable, IIDTarget, ITarget, ISkill_Delegate
            {
                protected [__keep_incompatibility]: never;
                public get fix(): SkillNodeGroupLoop;
                public set fix(value: SkillNodeGroupLoop);
                public get visible(): Func0$2<Skill, boolean>;
                public set visible(value: Func0$2<Skill, boolean>);
                public Fix () : void
                public constructor ()
            }
            interface IFixSkill_Delegate extends ISkill_Delegate
            {
                fix : SkillNodeGroupLoop
                visible : Func0$2<Skill, boolean>
            }
            class F_OnlySpaceState extends Func1Node$3<Skill, Unit, boolean>
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class F_NoHero extends Func1Node$3<Skill, Unit, boolean>
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class F_NoSelf extends Func1Node$3<Skill, Unit, boolean>
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class F_NoFriend extends Func1Node$3<Skill, Unit, boolean>
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class Skill_AddAnyCard extends Skill implements ISetKV, IInputUser, ISpawnable, IIDTarget, ITarget
            {
                protected [__keep_incompatibility]: never;
                public OnSeledt ($fullname: UnitData) : void
                public constructor ()
            }
            class UnitData extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class Flash extends LongSkil_Delegate implements ISetKV, IInputUser, ILongSkil_Delegate, ILongSkill, ISpawnable, IIDTarget, ITarget, ISkill_Delegate
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class LongSkil_Delegate extends Skill_Delegate implements ISetKV, IInputUser, ILongSkil_Delegate, ILongSkill, ISpawnable, IIDTarget, ITarget, ISkill_Delegate
            {
                protected [__keep_incompatibility]: never;
                public get fixStart(): SkillNodeGroupOnce;
                public set fixStart(value: SkillNodeGroupOnce);
                public get fix(): SkillNodeGroupStep;
                public set fix(value: SkillNodeGroupStep);
                public get fix50(): SkillNodeGroupStep;
                public set fix50(value: SkillNodeGroupStep);
                public Fix_Start () : void
                public Fix () : void
                public Fix50 () : void
                public SetExitListAction ($a: System.Action$1<any>) : void
                public ExitList () : void
                public constructor ()
                public AddToLongSkillList () : void
            }
            interface ILongSkil_Delegate extends ISkill_Delegate
            {
                fixStart : SkillNodeGroupOnce
                fix : SkillNodeGroupStep
                fix50 : SkillNodeGroupStep
                visible : Func0$2<Skill, boolean>
            }
            class Skill_StoreCard extends MixSkill_Delegate implements ISetKV, IInputUser, IStackSkill_Delegate, ILongSkil_Delegate, ILongSkill, IStackSkill, IMixSkill_Delegate, IMixSkill, ISpawnable, IInputSkill_Delegate, IIDTarget, ITarget, ISkill_Delegate
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class MixSkill_Delegate extends InputSkill_Delegate implements ISetKV, IInputUser, IStackSkill_Delegate, ILongSkil_Delegate, ILongSkill, IStackSkill, IMixSkill_Delegate, IMixSkill, ISpawnable, IInputSkill_Delegate, IIDTarget, ITarget, ISkill_Delegate
            {
                protected [__keep_incompatibility]: never;
                public get fixStart(): SkillNodeGroupOnce;
                public set fixStart(value: SkillNodeGroupOnce);
                public get fix(): SkillNodeGroupStep;
                public set fix(value: SkillNodeGroupStep);
                public get fix50(): SkillNodeGroupStep;
                public set fix50(value: SkillNodeGroupStep);
                public get stackStart(): SkillNodeGroupOnce;
                public set stackStart(value: SkillNodeGroupOnce);
                public get runToBreak(): SkillNodeGroupStack;
                public set runToBreak(value: SkillNodeGroupStack);
                public Fix_Start () : void
                public Fix () : void
                public Fix50 () : void
                public SetExitListAction ($a: System.Action$1<any>) : void
                public ExistList () : void
                public Stack_Start () : void
                public Run_ToBreak () : boolean
                public SetExistStackAction ($a: System.Action$1<any>) : void
                public ExistStack () : void
                public constructor ()
                public AddToLongSkillList () : void
                public AddToStackSkillList () : void
            }
            interface MixSkill_Delegate {
                Add ($k: SkillNodeGroupExtra.SkillNodeGroupKind, $FullName: string) : SKillNode;
            }
            interface IMixSkill_Delegate extends IStackSkill_Delegate, ILongSkil_Delegate, ISkill_Delegate
            {
                stackStart : SkillNodeGroupOnce
                runToBreak : SkillNodeGroupStack
                visible : Func0$2<Skill, boolean>
                fixStart : SkillNodeGroupOnce
                fix : SkillNodeGroupStep
                fix50 : SkillNodeGroupStep
            }
            interface IMixSkill extends ILongSkill, IStackSkill
            {
                SetExitListAction ($a: System.Action$1<any>) : void
                Fix_Start () : void
                Fix () : void
                Fix50 () : void
                EnsureLongSkillComp () : void
                SetLongListIndex ($index: number, $total: number) : void
                AddToLongSkillList () : void
                SetExistStackAction ($a: System.Action$1<any>) : void
                Stack_Start () : void
                Run_ToBreak () : boolean
                SetStackIndex ($index: number, $total: number) : void
                EnsureStackComp () : void
                AddToStackSkillList () : void
            }
            class TestNodeUseful_CanAddFollower extends TestNodeUseful_Node
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class TestNodeUseful_Node extends Func1Node$3<InputSkill, InputNode, boolean>
            {
                protected [__keep_incompatibility]: never;
            }
            class TestNodeUseful_isSelfTeam extends TestNodeUseful_Node
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class TestNodeUseful_IsSpace extends TestNodeUseful_Node
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class Skill_TriggerCard extends Skill implements ISetKV, IInputUser, IFixSkill, ISpawnable, IIDTarget, ITarget
            {
                protected [__keep_incompatibility]: never;
                public Fix () : void
                public GetResrult ($u: Unit) : void
                public constructor ()
            }
            class Equip extends LongSkil_Delegate implements ISetKV, IInputUser, ILongSkil_Delegate, ILongSkill, ISpawnable, IIDTarget, ITarget, ISkill_Delegate
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class Skill_Buff_SpeedUpArea extends BuffSkill implements IBuff, ISetKV, IInputUser, ISpawnable, IIDTarget, ITarget
            {
                protected [__keep_incompatibility]: never;
                public get FullName(): string;
                public SpaceChange () : void
                public ForEach ($u: Unit) : void
                public constructor ()
            }
            class BuffSkill extends Skill implements IBuff, ISetKV, IInputUser, ISpawnable, IIDTarget, ITarget
            {
                protected [__keep_incompatibility]: never;
                public get NowVersion(): number;
                public get Removed(): boolean;
                public set Removed(value: boolean);
                public Apply () : void
                public FreshActive () : void
                public FreshRemove () : void
                public WillApplyToData ($data: IBuffSysBuffableData) : void
                public RemoveWillApply ($data: IBuffSysBuffableData) : void
            }
            interface IBuff
            {
                FreshActive () : void
                FreshRemove () : void
                Apply () : void
            }
            interface IBuff {
                WillApplyToData ($data: IBuffSysBuffableData) : void;
                RemoveWillApply ($data: IBuffSysBuffableData) : void;
            }
            class B_SpeedUp extends Buff implements IBuff, ISetKV
            {
                protected [__keep_incompatibility]: never;
                public StillActiveVersion : number
                public get FullName(): string;
                public constructor ()
            }
            class Buff extends System.Object implements IBuff, ISetKV
            {
                protected [__keep_incompatibility]: never;
                public key : string
                public get Up(): LayerID;
                public get FullName(): string;
                public set FullName(value: string);
                public get NowVersion(): number;
                public get Removed(): boolean;
                public set Removed(value: boolean);
                public SetUp ($u: LayerID) : void
                public OnSetUp () : void
                public SetKV ($key: string, $o: any) : void
                public Apply () : void
                public FreshActive () : void
                public FreshRemove () : void
                public WillApplyToData ($data: IBuffSysBuffableData) : void
                public RemoveWillApply ($data: IBuffSysBuffableData) : void
            }
            interface Buff {
                SetBuffImageName ($name: string) : void;
            }
            class Skill_FireBallDamage extends FixSkill_Delegate implements ISetKV, IInputUser, IFixSkill_Delegate, IFixSkill, ISpawnable, IIDTarget, ITarget, ISkill_Delegate
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class SN_SendBack_Unit extends SKillNode
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class SKillNode extends Pack.NodeMixSelf$3.node_Self<Skill, SkillNodeGroup, SKillNode>
            {
                protected [__keep_incompatibility]: never;
                public static Exit : number
                public static ToNext : number
                public static Break_TryThisAgain : number
                public get host(): Host;
                public get player(): Player;
                public get unit(): Unit;
                public get driver(): Driver;
                public GetHost () : Host
                public GetPlayer () : Player
                public GetUnit () : Unit
                public GetDriver () : Driver
                public Fix_1Exit_2ToNext_4Break () : number
            }
            class SkillNodeGroup extends Pack.NodeMixSelf$3.group_Self<Skill, SkillNodeGroup, SKillNode>
            {
                protected [__keep_incompatibility]: never;
                public AddFunc ($f: System.Func$1<number>) : void
                public SetExistAction ($a: System.Action$1<any>) : void
            }
            interface SkillNodeGroup {
                Add ($FullName: string) : SKillNode;
            }
            class StackPauseTime_ extends StackSkill_Delegate implements ISetKV, IInputUser, IStackSkill_Delegate, IStackSkill, ISpawnable, IIDTarget, ITarget, ISkill_Delegate
            {
                protected [__keep_incompatibility]: never;
                public PauseTime : IGet$1<number>
                public constructor ()
            }
            interface IGet$1<T>
            {
            }
            class ThrowMagic extends InputSkill_Delegate implements ISetKV, IInputUser, ISpawnable, IInputSkill_Delegate, IIDTarget, ITarget, ISkill_Delegate
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class _ThrowMagic extends StackLongSkill_Delegate implements ISetKV, IInputUser, IStackSkill_Delegate, ILongSkil_Delegate, ILongSkill, IStackSkill, IMixSkill_Delegate, IMixSkill, ISpawnable, IIDTarget, ITarget, ISkill_Delegate
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class StackLongSkill_Delegate extends Skill_Delegate implements ISetKV, IInputUser, IStackSkill_Delegate, ILongSkil_Delegate, ILongSkill, IStackSkill, IMixSkill_Delegate, IMixSkill, ISpawnable, IIDTarget, ITarget, ISkill_Delegate
            {
                protected [__keep_incompatibility]: never;
                public get fixStart(): SkillNodeGroupOnce;
                public set fixStart(value: SkillNodeGroupOnce);
                public get fix(): SkillNodeGroupStep;
                public set fix(value: SkillNodeGroupStep);
                public get fix50(): SkillNodeGroupStep;
                public set fix50(value: SkillNodeGroupStep);
                public get stackStart(): SkillNodeGroupOnce;
                public set stackStart(value: SkillNodeGroupOnce);
                public get runToBreak(): SkillNodeGroupStack;
                public set runToBreak(value: SkillNodeGroupStack);
                public Fix_Start () : void
                public Fix () : void
                public Fix50 () : void
                public SetExitListAction ($a: System.Action$1<any>) : void
                public ExistList () : void
                public Stack_Start () : void
                public Run_ToBreak () : boolean
                public SetExistStackAction ($a: System.Action$1<any>) : void
                public ExistStack () : void
                public constructor ()
                public AddToLongSkillList () : void
                public AddToStackSkillList () : void
            }
            class Skill_Summon_units extends InputSkill_Delegate implements ISetKV, IInputUser, ISpawnable, IInputSkill_Delegate, IIDTarget, ITarget, ISkill_Delegate
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class Skill_CreatUnit extends LongSkil_Delegate implements ISetKV, IInputUser, ILongSkil_Delegate, ILongSkill, ISpawnable, IIDTarget, ITarget, ISkill_Delegate
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class UseChangeVToUp extends MixSkill_Delegate implements ISetKV, IInputUser, IStackSkill_Delegate, ILongSkil_Delegate, ILongSkill, IStackSkill, IMixSkill_Delegate, IMixSkill, ISpawnable, IInputSkill_Delegate, IIDTarget, ITarget, ISkill_Delegate
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class UseMagicCard extends InputSkill_Delegate implements ISetKV, IInputUser, ISpawnable, IInputSkill_Delegate, IIDTarget, ITarget, ISkill_Delegate
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class AirDropWall extends Unit implements IResGetter$1<ISpawnable>, IResGetter$1<Unit>, IInputUser, ICallListener, IRealPoss, IAfterSimulate, IHaveID, ISpawnable, IRes, IIDTarget, ITarget, IResGetter
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class OnTouchLand extends FixSkill_Delegate implements ISetKV, IInputUser, IFixSkill_Delegate, IFixSkill, ISpawnable, IIDTarget, ITarget, ISkill_Delegate
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class CancelSkill extends Unit implements IResGetter$1<ISpawnable>, IResGetter$1<Unit>, IInputUser, ICallListener, IRealPoss, IAfterSimulate, IHaveID, ISpawnable, IRes, IIDTarget, ITarget, IResGetter
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class ChangeVToUp extends Unit implements IResGetter$1<ISpawnable>, IResGetter$1<Unit>, IInputUser, ICallListener, IRealPoss, IAfterSimulate, IHaveID, ISpawnable, IRes, IIDTarget, ITarget, IResGetter
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class EnemyTarget extends Unit implements IResGetter$1<ISpawnable>, IResGetter$1<Unit>, IInputUser, ICallListener, IRealPoss, IAfterSimulate, IHaveID, ISpawnable, IRes, IIDTarget, ITarget, IResGetter
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class FireBall extends Unit implements IResGetter$1<ISpawnable>, IResGetter$1<Unit>, IInputUser, ICallListener, IRealPoss, IAfterSimulate, IHaveID, ISpawnable, IRes, IIDTarget, ITarget, IResGetter
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class Hero1 extends Hero implements IResGetter$1<ISpawnable>, IResGetter$1<Unit>, IInputUser, ICallListener, IRealPoss, IAfterSimulate, IHaveID, ISpawnable, IRes, IIDTarget, ITarget, IResGetter
            {
                protected [__keep_incompatibility]: never;
                public VisualPostion : UnityEngine.Transform
                public get VisualPoss(): UnityEngine.Vector3;
                public constructor ()
            }
            class Hero extends Unit implements IResGetter$1<ISpawnable>, IResGetter$1<Unit>, IInputUser, ICallListener, IRealPoss, IAfterSimulate, IHaveID, ISpawnable, IRes, IIDTarget, ITarget, IResGetter
            {
                protected [__keep_incompatibility]: never;
                public get CanBeHero(): Hero;
                public get IsHero(): boolean;
            }
            class SendBack extends Unit implements IResGetter$1<ISpawnable>, IResGetter$1<Unit>, IInputUser, ICallListener, IRealPoss, IAfterSimulate, IHaveID, ISpawnable, IRes, IIDTarget, ITarget, IResGetter
            {
                protected [__keep_incompatibility]: never;
                public c : UnityEngine.Color
                public r : number
                public constructor ()
            }
            class SpaceTrigger extends Unit implements IResGetter$1<ISpawnable>, IResGetter$1<Unit>, IInputUser, ICallListener, IRealPoss, IAfterSimulate, IHaveID, ISpawnable, IRes, IIDTarget, ITarget, IResGetter
            {
                protected [__keep_incompatibility]: never;
                public c : UnityEngine.Color
                public r : number
                public constructor ()
            }
            class Wall extends Unit implements IResGetter$1<ISpawnable>, IResGetter$1<Unit>, IInputUser, ICallListener, IRealPoss, IAfterSimulate, IHaveID, ISpawnable, IRes, IIDTarget, ITarget, IResGetter
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class Buff_Delegate extends Buff implements IBuff, ISetKV
            {
                protected [__keep_incompatibility]: never;
                public get A_setKV(): Act2$3<Buff, string, any>;
                public set A_setKV(value: Act2$3<Buff, string, any>);
                public get A_FreshActive(): Act0$1<Buff>;
                public set A_FreshActive(value: Act0$1<Buff>);
                public get A_FreshRemove(): Act0$1<Buff>;
                public set A_FreshRemove(value: Act0$1<Buff>);
                public get A_Apply(): Act0$1<Buff>;
                public set A_Apply(value: Act0$1<Buff>);
                public constructor ()
            }
            class HostEvent extends LayerCompClass implements ILayerComp, IUpdata_
            {
                protected [__keep_incompatibility]: never;
                public TimeLeftCall : VarChangeEvent$1<number>
                public Update_ () : void
                public constructor ()
                public AddToUpDate_List () : void
            }
            class LayerCompClass extends System.Object implements ILayerComp
            {
                protected [__keep_incompatibility]: never;
            }
            interface ILayerComp
            {
            }
            interface IUpdata_
            {
                Update_ () : void
            }
            interface IUpdata_ {
                AddToUpDate_List () : void;
            }
            class Param$1<T> extends System.Object implements IBuffSysData, INetData$1<T>, ISetObj, IGet$1<T>, IParam$1<T>
            {
                protected [__keep_incompatibility]: never;
                public setValue ($value: any) : void
            }
            interface IBuffSysData
            {
            }
            interface INetData$1<T>
            {
            }
            interface ISetObj
            {
                setValue ($value: any) : void
            }
            interface IParam$1<T> extends IGet$1<T>
            {
            }
            class ResArgs extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public dictionary : System.Collections.Generic.Dictionary$2<string, any>
                public constructor ()
            }
            interface ResArgs {
                SetPoss ($v: UnityEngine.Vector3) : ResArgs;
                GetPoss () : System.Nullable$1<UnityEngine.Vector3>;
                SetParent ($t: UnityEngine.Component) : ResArgs;
                GetParent () : UnityEngine.Transform;
                SetObj ($key: string, $obj: any) : ResArgs;
                GetObj ($key: string) : any;
                SetFloat ($key: string, $v: number) : ResArgs;
                GetFloat ($key: string, $def?: number) : number;
                SetInt ($key: string, $v: number) : ResArgs;
                GetInt ($key: string, $def?: number) : number;
                SetBool ($key: string, $v: boolean) : ResArgs;
                GetBool ($key: string, $def?: boolean) : boolean;
            }
            class Driver extends Mirror.NetworkManager
            {
                protected [__keep_incompatibility]: never;
            }
            class SkillBuilder extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
                public Dir : string
                public FullName : string
                public SetName ($name: string) : SkillBuilder
                public Copy ($origin: Skill) : Skill
                public Origin () : Skill
                public Branch ($group: Skill) : Skill
                public SetUp ($l: LayerID) : SkillBuilder
                public AddFinalAction ($act: System.Action$1<Skill>) : SkillBuilder
            }
            interface IFixSkill50ms
            {
                Fix50ms () : void
            }
            interface ITriggerSkill
            {
                OnCall ($call: Call) : void
            }
            class HighLightStruct extends System.Object implements IHighLightAble, IHighLightInput
            {
                protected [__keep_incompatibility]: never;
                public SetHighLight ($b: boolean) : void
            }
            interface IHighLightAble
            {
                SetHighLight ($b: boolean) : void
            }
            interface IHighLightInput extends IHighLightAble
            {
                SetHighLight ($b: boolean) : void
            }
            class MeshRes extends UnityEngine.MonoBehaviour implements IResGetter$1<MeshRes>, IResData, IRes, IResGetter
            {
                protected [__keep_incompatibility]: never;
                public get DataKind(): string;
                public get FullName(): string;
                public get DirectoryName(): string;
                public get PackName(): string;
                public get KindName(): string;
                public FullName () : string
                public Name () : string
                public EnsureAssetFolder () : void
                public PrefabPath () : string
                public ABDir () : string
                public ABPath () : string
                public ABAsyncPath () : string
                public GetNewObject ($a: ResArgs) : any
            }
            interface IResData
            {
                DataKind : string
                FullName : string
            }
            class BuffCollection extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class HashSet_NodeList$1<T> extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class SpawnMsg extends System.ValueType implements Mirror.NetworkMessage
            {
                protected [__keep_incompatibility]: never;
            }
            class VarChangeEvent$1<T> extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public get lastValue(): System.Nullable$1<T>;
                public NewData ($v: T, $changed: $Ref<boolean>) : void
                public NewData ($v: T) : boolean
                public NewData ($v: N$1<T>) : void
                public Listen ($act: System.Action) : void
                public constructor ()
            }
            class PlayerEvent extends LayerCompClass implements ILayerComp, IUpdata_
            {
                protected [__keep_incompatibility]: never;
                public FollowerVersionCall : VarChangeEvent$1<number>
                public IsLocalCall : VarChangeEvent$1<boolean>
                public NowManaCall : VarChangeEvent$1<number>
                public MaxManaCall : VarChangeEvent$1<number>
                public HandChangeCall : System.Action$1<number>
                public Update_ () : void
                public constructor ()
                public AddToUpDate_List () : void
            }
            class UnitEvent extends LayerCompClass implements ILayerComp, IUpdata_
            {
                protected [__keep_incompatibility]: never;
                public SpaceCall : VarChangeEvent$1<number>
                public SpaceCall_InHandCall : VarChangeEvent$1<boolean>
                public StateCall : VarChangeEvent$1<number>
                public UPIDCall : VarChangeEvent$1<number>
                public UPIDCall_IsFollowingCall : VarChangeEvent$1<boolean>
                public HandIndexCall : VarChangeEvent$1<number>
                public SkillVersionCall : VarChangeEvent$1<number>
                public InputHighLigh : VarChangeEvent$1<boolean>
                public TargetHighLight : VarChangeEvent$1<boolean>
                public ManaCostCall : VarChangeEvent$1<number>
                public HPCall : VarChangeEvent$1<N$1<number>>
                public SpeedCall : VarChangeEvent$1<N$1<number>>
                public AtkCall : VarChangeEvent$1<N$1<number>>
                public Update_ () : void
                public constructor ()
                public AddToUpDate_List () : void
            }
            class ParamBuffable$1<T> extends System.Object implements ISetParamBuffable, IBuffSysData, IBuffSysBuffableData
            {
                protected [__keep_incompatibility]: never;
                public get Value_Base(): T;
                public set Value_Base(value: T);
                public get Value_Buffed(): T;
                public set Value_Buffed(value: T);
                public get Value_Buffed_IGet(): IGet$1<T>;
                public BackToBase () : void
                public SetID ($NetID: number, $LinkToNet?: boolean) : ParamBuffable$1<T>
                public BackToBaseData () : void
                public SetValueBuffed ($o: any) : void
                public SetValueBase ($o: any) : void
                public constructor ($name?: string)
                public constructor ()
            }
            interface ISetParamBuffable
            {
                SetValueBuffed ($o: any) : void
                SetValueBase ($o: any) : void
            }
            interface IBuffSysBuffableData extends IBuffSysData
            {
                BackToBase () : void
            }
            class ParamList$1<T> extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class SyncMonitor$1<T> extends System.Object implements IBuffSysData, IBuffSysMonitor, INetData$1<T>, INetDataMonitor$1<T>
            {
                protected [__keep_incompatibility]: never;
                public get FullName(): string;
                public IsChanged ($SnapshotKey: string) : boolean
            }
            interface IBuffSysMonitor extends IBuffSysData
            {
                FullName : string
                IsChanged ($SnapshotKey: string) : boolean
            }
            interface INetDataMonitor$1<T> extends INetData$1<T>
            {
            }
            class Call extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public Kind : string
                public ApplyToListener ($l: ICallListener) : void
                public AddReaction ($reaction: ICallReaction) : void
                public AddReactionAct ($reaction: System.Action) : void
                public DoReaction () : void
                public constructor ($kind: string)
                public constructor ()
            }
            interface IInputData
            {
                Point : N$1<UnityEngine.Vector3>
                LayerId : N$1<number>
            }
            class UnitSpace extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static Nul : number
                public static Deck : number
                public static Hand : number
                public static Space : number
                public constructor ()
            }
            class SkillNodeGroupExtra extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static Add ($skill: MixSkill_Delegate, $k: SkillNodeGroupExtra.SkillNodeGroupKind, $FullName: string) : SKillNode
                public static Add ($g: SkillNodeGroup, $FullName: string) : SKillNode
            }
            class SkillNodeFunc extends SKillNode
            {
                protected [__keep_incompatibility]: never;
                public func : System.Func$1<number>
                public constructor ()
            }
            class SkillNodeGroupStack extends SkillNodeGroup
            {
                protected [__keep_incompatibility]: never;
                public Invoke () : boolean
                public ToNext () : void
                public constructor ()
            }
            class SN_CreatNewUnitForPlayer extends SKillNode
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class SN_Exist extends SKillNode
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class SN_ShowBeforeMagicEffect extends SKillNode
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class TestNodeUseful_IsStackSkill extends TestNodeUseful_Node
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class TestNodeUseful_In_Range extends TestNodeUseful_Node
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class HighLightTest_ManaEnough extends Func0Node$2<InputSkill, boolean>
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class NodeForm_Reach_OneTarget extends Func1Node$3<InputSkill, number, System.Collections.Generic.IEnumerable$1<string>>
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class GetFloat_Node extends Func2Node$4<InputSkill, string, number, N$1<number>>
            {
                protected [__keep_incompatibility]: never;
            }
            class GetFloat_Reach extends GetFloat_Node
            {
                protected [__keep_incompatibility]: never;
                public kind : IGet$1<number>
                public reach : IGet$1<N$1<number>>
                public constructor ()
            }
            class GetFloat_Offset extends Func2Node$4<InputSkill, string, number, N$1<number>>
            {
                protected [__keep_incompatibility]: never;
                public kind : IGet$1<number>
                public OffSetY : IGet$1<N$1<number>>
                public OffSetXZ : IGet$1<N$1<number>>
                public constructor ()
            }
            class GetInt_Node extends Func2Node$4<InputSkill, string, number, N$1<number>>
            {
                protected [__keep_incompatibility]: never;
            }
            class GetInt_Speed extends GetInt_Node
            {
                protected [__keep_incompatibility]: never;
                public kind : IGet$1<number>
                public Speed : IGet$1<N$1<number>>
                public constructor ()
            }
            class GetBool_Node extends Func2Node$4<InputSkill, string, number, N$1<boolean>>
            {
                protected [__keep_incompatibility]: never;
            }
            class GetBool_IsHighThrow extends GetBool_Node
            {
                protected [__keep_incompatibility]: never;
                public kind : IGet$1<number>
                public HighThrow : IGet$1<N$1<boolean>>
                public constructor ()
            }
            class AfterWrite_GetNext_LineNode extends Func2Node$4<InputSkill, InputNode, number, InputNode>
            {
                protected [__keep_incompatibility]: never;
                public MaxNodeIndex : IGet$1<number>
                public constructor ()
            }
            class SN_SetPoss extends SKillNode
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class SN_SetV extends SKillNode
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class SN_ThrowUnit extends SKillNode
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class SN_WaitTouchLand_OrBreak extends SKillNode
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class SN_UseMana extends SKillNode
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class SN_SetUp_Player extends SKillNode
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class SN_SetState extends SKillNode
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class SN_SetState_Card extends SKillNode
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class SN_SetState_Space extends SKillNode
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class SN_SetSpace extends SKillNode
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class SN_SetSpace_Spce extends SKillNode
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class SN_SetSpace_Hand extends SKillNode
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class SN_OnlySpaceInSpace extends SKillNode
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class SN_NewVFX extends SKillNode
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class eveInputSkill extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static EmptyApply : System.Action$3<Skill, InputForm, Skill>
                public static Pre_Reach : string
                public static Pre_Line : string
                public static Pre_Point : string
                public static Pre_ThrowLine : string
                public static Empty : System.Collections.Generic.List$1<string>
                public static Reach : System.Collections.Generic.List$1<string>
                public static Line_Point : System.Collections.Generic.List$1<string>
                public static Line_Point_Throw : System.Collections.Generic.List$1<string>
                public static EnableOneTargetMode ($s: InputSkill_Delegate) : void
                public static EnableNewSkill ($s: InputSkill_Delegate, $skillName: any, $ListKind: any) : void
                public static OnNewSkill ($s: InputSkill_Delegate, $act: System.Action$1<Skill>) : void
                public static EnableReach ($s: InputSkill_Delegate, $reac: any) : void
                public static SetThrowLine ($s: InputSkill_Delegate, $hh: any) : void
                public static EnableThrowLine ($s: InputSkill_Delegate, $HighThrow: System.Func$1<boolean>) : void
                public static EnableThrowLine ($s: InputSkill_Delegate, $HighThrow: any) : void
                public static EnableThrowOffset ($s: InputSkill_Delegate, $OffsetY: any, $OffsetXZ: any) : void
                public constructor ()
            }
            class SkillExtra extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetUnit ($n: InputNode) : Unit
                public static HaveUnit ($n: InputNode, $to: $Ref<Unit>) : boolean
                public static NodeIsFrientInHand ($s: Skill, $n: InputNode) : boolean
                public static NodeReachable ($s: Skill, $n: InputNode, $disLimit: number) : boolean
                public static CanAddFollower ($s: Skill, $n: InputNode) : boolean
            }
            class Visable_OnCard extends Func0Node$2<Skill, boolean>
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class Visable_OnSpace extends Func0Node$2<Skill, boolean>
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class SkillNodeGroupLoop extends SkillNodeGroup
            {
                protected [__keep_incompatibility]: never;
            }
            class BuffSkill_Delegate extends BuffSkill implements IBuff, ISetKV, IInputUser, ISpawnable, IIDTarget, ITarget
            {
                protected [__keep_incompatibility]: never;
                public get A_FreshActive(): Act0$1<BuffSkill>;
                public get A_FreshRemove(): Act0$1<BuffSkill>;
                public get A_Apply(): Act0$1<BuffSkill>;
                public get A_OnSetID_LoadStructure(): Act0$1<BuffSkill>;
                public constructor ()
            }
            class SkillNodeGroupOnce extends SkillNodeGroup
            {
                protected [__keep_incompatibility]: never;
            }
            class SkillNodeGroupStep extends SkillNodeGroup
            {
                protected [__keep_incompatibility]: never;
            }
            class TriggerSkill_Delegate extends Skill implements ISetKV, IInputUser, ITriggerSkill_Delegate, ITriggerSkill, ISpawnable, IIDTarget, ITarget, ISkill_Delegate
            {
                protected [__keep_incompatibility]: never;
                public get visible(): Func0$2<Skill, boolean>;
                public set visible(value: Func0$2<Skill, boolean>);
                public get onCall(): Act1$2<Skill, Call>;
                public set onCall(value: Act1$2<Skill, Call>);
                public OnCall ($call: Call) : void
                public constructor ()
            }
            interface ITriggerSkill_Delegate extends ISkill_Delegate
            {
                onCall : Act1$2<Skill, Call>
                visible : Func0$2<Skill, boolean>
            }
            class eveTS extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static NewUnitTemplate_ReName ($name: string, $NewFullName: string) : Unit
            }
            class SN_CancelStackSkill extends SKillNode
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class SN_Damage extends SKillNode
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class SN_Wait_OverLap_OneUnit_OrBreak extends SKillNode implements IGet$1<Unit>
            {
                protected [__keep_incompatibility]: never;
                public F_TestUnit : Func1$3<Skill, Unit, boolean>
                public Act_GetResult : System.Action$1<Unit>
                public get Value(): Unit;
                public set Value(value: Unit);
                public GetResult ($u: Unit) : void
                public constructor ()
            }
            class SN_AddSkillToStack extends SKillNode
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class SN_PauseSkill_SelfPlayer extends SKillNode
            {
                protected [__keep_incompatibility]: never;
                public firstTime : boolean
                public constructor ()
            }
            class VarUnit extends Unit implements IResGetter$1<ISpawnable>, IResGetter$1<Unit>, IInputUser, ICallListener, IRealPoss, IAfterSimulate, IHaveID, ISetFullName, ISpawnable, IRes, IIDTarget, ITarget, IResGetter
            {
                protected [__keep_incompatibility]: never;
                public PackName_ : string
                public KindName_ : string
                public ActOnSetID_Awake : Act0$1<Unit>
                public set FullName_(value: string);
                public get PackName(): string;
                public get KindName(): string;
                public constructor ()
            }
            interface ISetFullName
            {
            }
            class VarUnitNoData extends VarUnit implements IResGetter$1<ISpawnable>, IResGetter$1<Unit>, IInputUser, ICallListener, IRealPoss, IAfterSimulate, IHaveID, ISetFullName, ISpawnable, IRes, IIDTarget, ITarget, IResGetter
            {
                protected [__keep_incompatibility]: never;
                public get CreatUnitData(): boolean;
                public constructor ()
            }
            class MixSkill_Res extends MixSkill_Delegate implements ISetKV, IInputUser, IStackSkill_Delegate, ILongSkil_Delegate, ILongSkill, IStackSkill, IMixSkill_Delegate, IMixSkill, ISpawnable, IInputSkill_Delegate, IIDTarget, ITarget, ISkill_Delegate
            {
                protected [__keep_incompatibility]: never;
                public F_Load : System.Action$1<MixSkill_Res>
                public constructor ()
            }
            class AssetBundleReq extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static Load ($fullPath: string) : UnityEngine.AssetBundle
                public static LoadAsync ($fullPath: string, $act: System.Action$1<UnityEngine.AssetBundle>) : void
                public constructor ()
            }
            enum AssetState
            { Empty = 0, Loading = 1, Loaded = 2 }
            class CreaterKind extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static none : number
                public static Prefbe : number
                public static AssetBundle : number
                public static Class : number
                public static Txt : number
                public static HasPiplineTag : number
            }
            class ResArgExtra extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static SetPoss ($arg: ResArgs, $v: UnityEngine.Vector3) : ResArgs
                public static GetPoss ($arg: ResArgs) : System.Nullable$1<UnityEngine.Vector3>
                public static SetParent ($arg: ResArgs, $t: UnityEngine.Component) : ResArgs
                public static GetParent ($arg: ResArgs) : UnityEngine.Transform
                public static SetObj ($arg: ResArgs, $key: string, $obj: any) : ResArgs
                public static GetObj ($arg: ResArgs, $key: string) : any
                public static SetFloat ($arg: ResArgs, $key: string, $v: number) : ResArgs
                public static GetFloat ($arg: ResArgs, $key: string, $def?: number) : number
                public static SetInt ($arg: ResArgs, $key: string, $v: number) : ResArgs
                public static GetInt ($arg: ResArgs, $key: string, $def?: number) : number
                public static SetBool ($arg: ResArgs, $key: string, $v: boolean) : ResArgs
                public static GetBool ($arg: ResArgs, $key: string, $def?: boolean) : boolean
                public static ExInstantiate ($obj: UnityEngine.Object, $args: ResArgs) : UnityEngine.Object
            }
            class CreaterObject extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static get StaticDir(): string;
                public static GetNew ($FullName: string, $args?: ResArgs) : any
                public static GetNew ($FullName: string) : any
                public static GetNew ($PartDirPath: string, $kind: string, $args?: ResArgs) : any
            }
            class Creater_Class extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static CanCreate ($kind: string) : boolean
                public static GetNew ($kind: string, $args: ResArgs) : any
                public constructor ()
            }
            interface ISetResArgs
            {
                SetResArgs ($r: ResArgs) : void
            }
            class Creater_Prefabe extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static CanCreate ($kind: string) : boolean
                public static GetNew ($kind: string, $args: ResArgs) : any
            }
            class ResGetter_JS extends System.Object implements IResGetter
            {
                protected [__keep_incompatibility]: never;
                public path : string
                public GetNewObject ($a: ResArgs) : any
                public constructor ()
            }
            class Creater_TXT extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static LoadFromString : System.Func$3<string, ResArgs, any>
                public static CanCreate ($dir: string, $kind: string) : boolean
                public static GetNew ($dir: string, $kind: string, $args?: ResArgs) : any
                public constructor ()
            }
            class ImgLoader extends UnityEngine.MonoBehaviour
            {
                protected [__keep_incompatibility]: never;
                public static LoadSprite ($act: System.Action$1<UnityEngine.Sprite>, $pathBegin: string, $which: number) : void
                public static LoadTexture ($act: System.Action$1<UnityEngine.Texture2D>, $pathBegin: string, $which: number) : void
                public constructor ()
            }
            class PoolExtra extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            interface IPoolObj_Str
            {
                Kind : string
                ToHide () : void
                ToShow () : void
            }
            interface IPoolObj_Int
            {
                Kind : number
                ToHide () : void
                ToShow () : void
            }
            interface IPoolObj
            {
                ToHide () : void
                ToShow () : void
            }
            class PrefabList extends UnityEngine.ScriptableObject
            {
                protected [__keep_incompatibility]: never;
                public UseAB : boolean
                public static get instance(): PrefabList;
                public static EnsurePrefabList () : void
                public static SetUseAB ($b: boolean) : void
                public static GetListCopy () : System.Collections.Generic.List$1<OnePrefab>
                public static TryGetValue ($name: string, $re: $Ref<UnityEngine.GameObject>) : void
                public static Remove ($name: string) : void
                public static Add ($obj: UnityEngine.GameObject, $n: string) : void
                public static freshEditorUI () : void
                public constructor ()
            }
            class OnePrefab extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
                public preName : string
                public pre : UnityEngine.GameObject
            }
            class PreFabSetting extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static get UseAB(): boolean;
                public static ChangeUseAB () : void
            }
            class ABdebug extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static ChangeUseAB () : void
            }
            class ForResTool extends Editor$1<ResTool> implements UnityEditor.IPreviewable, UnityEditor.IToolModeOwner
            {
                protected [__keep_incompatibility]: never;
                public SortComponet () : void
                public static SetName ($tar: ResTool, $tag?: string) : void
                public static Clear ($tar: ResTool) : void
                public static AsPrefabe ($tar: ResTool) : void
                public static EnsureData ($tar: ResTool) : void
                public static IsParent ($par: ResTool, $c: UnityEngine.Component) : boolean
                public static AsPackage ($tar: ResTool) : void
                public static AsPackage ($tar: UnityEngine.GameObject) : void
                public static EnsureDir ($tar: UnityEngine.GameObject) : void
                public static BuildMainPack ($tar: UnityEngine.GameObject) : void
                public static BuildAsyncPack ($tar: UnityEngine.GameObject) : void
                public constructor ()
            }
            class ResTool extends UnityEngine.MonoBehaviour implements IBeforeAsPrefabe, IAfterAsPrefabe
            {
                protected [__keep_incompatibility]: never;
                public BeforeAsPrefabe1 ($res: IRes) : void
                public BeforeAsPrefabe2 ($res: IRes) : void
                public AfterAsPrefabe1 ($res: IRes) : void
                public AfterAsPrefabe2 ($res: IRes) : void
                public constructor ()
            }
            interface IBeforeAsPrefabe
            {
                BeforeAsPrefabe1 ($res: IRes) : void
                BeforeAsPrefabe2 ($res: IRes) : void
            }
            interface IAfterAsPrefabe
            {
                AfterAsPrefabe1 ($res: IRes) : void
                AfterAsPrefabe2 ($res: IRes) : void
            }
            class Editor$1<T> extends UnityEditor.Editor implements UnityEditor.IPreviewable, UnityEditor.IToolModeOwner
            {
                protected [__keep_incompatibility]: never;
            }
            class ResExtra extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static ToAssets ($path: string) : System.Array$1<UnityEngine.Object>
                public static ToAssets ($path: System.Collections.Generic.List$1<string>) : System.Array$1<UnityEngine.Object>
                public static FullName ($r: IRes) : string
                public static Name ($r: IRes) : string
                public static EnsureAssetFolder ($res: IRes) : void
                public static PrefabeDir ($res: IRes) : string
                public static PrefabPath ($res: IRes) : string
                public static PrefabeAsyncPath ($n: AsyncResTool, $res: IRes) : string
                public static ABDir ($res: IRes) : string
                public static ABPath ($res: IRes) : string
                public static ABAsyncPath ($res: IRes) : string
            }
            class AsyncResTool extends UnityEngine.MonoBehaviour implements IBeforeAsPrefabe, IAfterAsPrefabe
            {
                protected [__keep_incompatibility]: never;
                public AsyncAsetName : string
                public ABAsyncDir : string
                public get GetKey(): string;
                public OnLoaded ($g: UnityEngine.GameObject) : void
                public ListenOnCreat ($a: System.Action) : void
                public BeforeAsPrefabe1 ($res: IRes) : void
                public BeforeAsPrefabe2 ($res: IRes) : void
                public AfterAsPrefabe1 ($res: IRes) : void
                public AfterAsPrefabe2 ($res: IRes) : void
                public constructor ()
            }
            interface AsyncResTool {
                PrefabeAsyncPath ($res: IRes) : string;
            }
            class AsyncAnim extends UnityEngine.MonoBehaviour implements IBeforeAsPrefabe, IOnAsyncLoaded
            {
                protected [__keep_incompatibility]: never;
                public OriginAnim : UnityEngine.Animator
                public AnimCopy : UnityEngine.Animator
                public ChildPath : string
                public get CurrentAnim(): UnityEngine.Animator;
                public BeforeAsPrefabe1 ($res: IRes) : void
                public BeforeAsPrefabe2 ($res: IRes) : void
                public Copy () : void
                public static CopyAnimatorState ($old: UnityEngine.Animator, $ne: UnityEngine.Animator) : void
                public static Copyparameters ($old: UnityEngine.Animator, $ne: UnityEngine.Animator) : void
                public OnLoaded () : void
                public constructor ()
            }
            interface IOnAsyncLoaded
            {
                OnLoaded () : void
            }
            class ForAnimator extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static CopyAnimator ($old: UnityEngine.Animator, $ne: UnityEngine.Animator) : void
                public static CopyController ($old: UnityEditor.Animations.AnimatorController) : UnityEditor.Animations.AnimatorController
                public static CopyStateMachine ($old: UnityEditor.Animations.AnimatorStateMachine, $ne: UnityEditor.Animations.AnimatorStateMachine) : void
                public static CopyMotion ($old: UnityEngine.Motion, $ne: UnityEngine.Motion) : UnityEngine.Motion
                public static CopyBlendTree ($old: UnityEditor.Animations.BlendTree, $ne: UnityEditor.Animations.BlendTree) : void
                public static CopyClip ($old: UnityEngine.AnimationClip) : UnityEngine.AnimationClip
                public constructor ()
            }
            class VFX extends UnityEngine.MonoBehaviour
            {
                protected [__keep_incompatibility]: never;
                public SetStartGameTime ($t: number) : void
                public constructor ()
            }
            class VFXRes extends VFX implements IResGetter$1<VFX>, IRes, IResGetter
            {
                protected [__keep_incompatibility]: never;
                public get DirectoryName(): string;
                public get PackName(): string;
                public get KindName(): string;
                public GetNew ($args: ResArgs) : VFX
                public GetNewObject ($a: ResArgs) : any
                public constructor ()
                public FullName () : string
                public Name () : string
                public EnsureAssetFolder () : void
                public PrefabPath () : string
                public ABDir () : string
                public ABPath () : string
                public ABAsyncPath () : string
            }
            class AwakeHide extends UnityEngine.MonoBehaviour
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class BezierLine extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public get Count(): number;
                public ReSetPointCount ($count: number) : void
                public SetPoint ($v: UnityEngine.Vector3, $index: number) : void
                public GetPoint ($d: number) : UnityEngine.Vector3
                public constructor ($count?: number)
                public constructor ()
            }
            class ExEvent extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class CallKind extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static Destory : string
                public static OnSummon : string
                public static OnDamage : string
                public constructor ()
            }
            class Extension_ISetObj extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static ExTrySetExtension ($obj: any, $DataName: string, $value: any) : void
                public ExTrySetExtension ($DataName: string, $value: any) : void
            }
            class IGetSeatObj extends IGetSeat$1<any> implements ISet$1<any>, ISetObj, IGet$1<any>
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
                public setValue ($value: any) : void
            }
            class IGetSeat$1<T> extends System.Object implements ISet$1<T>, ISetObj, IGet$1<T>
            {
                protected [__keep_incompatibility]: never;
                public get IGet(): IGet$1<T>;
                public set IGet(value: IGet$1<T>);
                public get Value(): T;
                public TrySetDefault ($o: any) : IGetSeat$1<T>
                public setValue ($value: any) : void
                public SetIGet ($o: any) : IGetSeat$1<T>
                public static op_Implicit ($d: IGetSeat$1<T>) : any
                public constructor ()
            }
            interface ISet$1<T>
            {
            }
            class ExTest extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static TestNull ($hash: number, $DN: string) : boolean
                public static TestNull ($obj: any, $DN: string) : boolean
            }
            class Extension extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static Ex ($obj: any, $DataName: string) : IGetSeatObj
                public static Int ($h: number, $DN: string) : IGetSeat$1<number>
                public static Bool ($h: number, $DN: string) : IGetSeat$1<boolean>
                public static Float ($h: number, $DN: string) : IGetSeat$1<number>
                public static V3 ($h: number, $DN: string) : IGetSeat$1<UnityEngine.Vector3>
                public static Str ($h: number, $DN: string) : IGetSeat$1<string>
                public static Int ($h: number, $DN: string, $o: any) : IGetSeat$1<number>
                public static Bool ($h: number, $DN: string, $o: any) : IGetSeat$1<boolean>
                public static Float ($h: number, $DN: string, $o: any) : IGetSeat$1<number>
                public static V3 ($h: number, $DN: string, $o: any) : IGetSeat$1<UnityEngine.Vector3>
                public static Str ($h: number, $DN: string, $o: any) : IGetSeat$1<string>
                public static NInt ($h: number, $DN: string) : IGetSeat$1<N$1<number>>
                public static NBool ($h: number, $DN: string) : IGetSeat$1<N$1<boolean>>
                public static NFloat ($h: number, $DN: string) : IGetSeat$1<N$1<number>>
                public static NV3 ($h: number, $DN: string) : IGetSeat$1<N$1<UnityEngine.Vector3>>
                public static NInt ($h: number, $DN: string, $o: any) : IGetSeat$1<N$1<number>>
                public static NBool ($h: number, $DN: string, $o: any) : IGetSeat$1<N$1<boolean>>
                public static NFloat ($h: number, $DN: string, $o: any) : IGetSeat$1<N$1<number>>
                public static NV3 ($h: number, $DN: string, $o: any) : IGetSeat$1<N$1<UnityEngine.Vector3>>
                public static Int ($h: any, $DN: string) : IGetSeat$1<number>
                public static Bool ($h: any, $DN: string) : IGetSeat$1<boolean>
                public static Float ($h: any, $DN: string) : IGetSeat$1<number>
                public static V3 ($h: any, $DN: string) : IGetSeat$1<UnityEngine.Vector3>
                public static Str ($h: any, $DN: string) : IGetSeat$1<string>
                public static Int ($h: any, $DN: string, $o: any) : IGetSeat$1<number>
                public static Bool ($h: any, $DN: string, $o: any) : IGetSeat$1<boolean>
                public static Float ($h: any, $DN: string, $o: any) : IGetSeat$1<number>
                public static V3 ($h: any, $DN: string, $o: any) : IGetSeat$1<UnityEngine.Vector3>
                public static Str ($h: any, $DN: string, $o: any) : IGetSeat$1<string>
                public static NInt ($h: any, $DN: string) : IGetSeat$1<N$1<number>>
                public static NBool ($h: any, $DN: string) : IGetSeat$1<N$1<boolean>>
                public static NFloat ($h: any, $DN: string) : IGetSeat$1<N$1<number>>
                public static NV3 ($h: any, $DN: string) : IGetSeat$1<N$1<UnityEngine.Vector3>>
                public static NInt ($h: any, $DN: string, $o: any) : IGetSeat$1<N$1<number>>
                public static NBool ($h: any, $DN: string, $o: any) : IGetSeat$1<N$1<boolean>>
                public static NFloat ($h: any, $DN: string, $o: any) : IGetSeat$1<N$1<number>>
                public static NV3 ($h: any, $DN: string, $o: any) : IGetSeat$1<N$1<UnityEngine.Vector3>>
                public Ex ($DataName: string) : IGetSeatObj
                public Int ($DN: string) : IGetSeat$1<number>
                public Int ($DN: string, $o: any) : IGetSeat$1<number>
                public Bool ($DN: string) : IGetSeat$1<boolean>
                public Bool ($DN: string, $o: any) : IGetSeat$1<boolean>
                public Float ($DN: string) : IGetSeat$1<number>
                public Float ($DN: string, $o: any) : IGetSeat$1<number>
                public V3 ($DN: string) : IGetSeat$1<UnityEngine.Vector3>
                public V3 ($DN: string, $o: any) : IGetSeat$1<UnityEngine.Vector3>
                public Str ($DN: string) : IGetSeat$1<string>
                public Str ($DN: string, $o: any) : IGetSeat$1<string>
                public NInt ($DN: string) : IGetSeat$1<N$1<number>>
                public NInt ($DN: string, $o: any) : IGetSeat$1<N$1<number>>
                public NBool ($DN: string) : IGetSeat$1<N$1<boolean>>
                public NBool ($DN: string, $o: any) : IGetSeat$1<N$1<boolean>>
                public NFloat ($DN: string) : IGetSeat$1<N$1<number>>
                public NFloat ($DN: string, $o: any) : IGetSeat$1<N$1<number>>
                public NV3 ($DN: string) : IGetSeat$1<N$1<UnityEngine.Vector3>>
                public NV3 ($DN: string, $o: any) : IGetSeat$1<N$1<UnityEngine.Vector3>>
            }
            class nn extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static ValueNeeded : string
                public static setKV : string
                public static Version : string
                public static FreshVersion : string
                public static BuffUpgrade : string
                public static IsServer : string
                public static IsVisable : string
                public static result : string
                public static Reach : string
                public static MaxInde : string
                public static Skill : string
                public static OnCreateNewSkill : string
                public static SkillName : string
                public static reversal : string
                public static HighThrow : string
                public static Useful : string
                public static space : string
                public static state : string
                public static speed : string
                public static V : string
                public static R : string
                public static HardTurn : string
                public static MirrorTurn : string
                public static OverLapResult : string
                public static TimeLeft : string
                public static TurnTimeLeft : string
                public static ResName : string
                public static FullName : string
                public static OffSetY : string
                public static OffSetXZ : string
                public static OffSet : string
                public static poss : string
                public static Direction : string
                public static Point : string
                public static TarGetPoint : string
                public static StartPoint : string
                public static TargetUnit : string
                public static Input_StartV3 : string
                public static Input_DirectionV3 : string
                public static Input_TargetV3 : string
                public static LayerID : string
                public static NewID : string
                public static NodeKind : string
                public static ID_offset : string
                public static SkillKind_1Stack_2Long : string
                public static SkillListKind : string
                public static TrySetMethodName : string
                public static transf : string
                public static color : string
                public static Unit : string
                public static GroupData : string
                public static Setting : string
                public static Action : string
            }
            class SetDataExtra extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static VarFloat ($obj: any, $key: string, $value: number) : any
                public static VarDouble ($obj: any, $key: string, $value: number) : any
                public static VarInt32 ($obj: any, $key: string, $value: number) : any
                public static VarByte ($obj: any, $key: string, $value: number) : any
                public static Var ($obj: any, $key: string, $value: any) : any
                public VarFloat ($key: string, $value: number) : any
                public VarDouble ($key: string, $value: number) : any
                public VarInt32 ($key: string, $value: number) : any
                public VarByte ($key: string, $value: number) : any
                public Var ($key: string, $value: any) : any
            }
            class ItemList extends UnityEngine.MonoBehaviour
            {
                protected [__keep_incompatibility]: never;
                public pre : ItemList_
                public cellSize : UnityEngine.Vector2Int
                public spacing : UnityEngine.Vector2Int
                public Content : UnityEngine.RectTransform
                public OneLineCount : number
                public ShowLine : number
                public ShowLineUp : number
                public NowStartIndex : number
                public NowEndIndex : number
                public Created : IndexRoundList$1<ItemList_>
                public get LineH(): number;
                public get ColemW(): number;
                public Update () : void
                public CreatNew () : ItemList_
                public SetIndex ($l: ItemList_, $index: number) : void
                public Remove ($l: ItemList_) : void
                public constructor ()
            }
            class ItemList_ extends UnityEngine.MonoBehaviour
            {
                protected [__keep_incompatibility]: never;
                public ResName : UnityEngine.UI.Text
                public SetData ($d: ItemData, $master: ItemList) : void
                public constructor ()
            }
            class IndexRoundList$1<T> extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class ItemData extends System.Object implements IDBdata$1<ItemData>
            {
                protected [__keep_incompatibility]: never;
                public get DataKind(): string;
                public get FullName(): string;
                public set FullName(value: string);
                public get Line(): string;
                public set Line(value: string);
                public static Creat ($s: string) : ItemData
                public CreatNew ($s: string) : ItemData
                public constructor ()
            }
            interface IDBdata$1<T>
            {
            }
            interface ISnapshotAbleData
            {
                IsChanged ($DataSnapshotKey: string) : boolean
            }
            class DefData extends System.Object implements IDBdata$1<DefData>
            {
                protected [__keep_incompatibility]: never;
                public get DataKind(): string;
                public get FullName(): string;
                public set FullName(value: string);
                public get Line(): string;
                public set Line(value: string);
                public CreatNew ($s: string) : DefData
                public static Creat ($s: string) : DefData
                public constructor ()
            }
            class DB extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static Datas ($kind: string) : IDataCollection$1<DefData>
            }
            interface IDataCollection$1<T>
            {
            }
            class DeBug_CollisionEnter extends UnityEngine.MonoBehaviour
            {
                protected [__keep_incompatibility]: never;
                public log : boolean
                public constructor ()
            }
            class LogError extends UnityEngine.MonoBehaviour
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class QuickAccess extends UnityEditor.EditorWindow
            {
                protected [__keep_incompatibility]: never;
                public static Init () : void
                public SaveObj ($to: UnityEngine.Object, $i: number) : void
                public GetSavedObject ($i: number) : UnityEngine.Object
                public constructor ()
            }
            class OnMousePoint extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static get Target(): ITarget;
                public static get Mouse3DPosition(): N$1<UnityEngine.Vector3>;
                public static set Mouse3DPosition(value: N$1<UnityEngine.Vector3>);
                public static get Mouse3DPositionReal(): N$1<UnityEngine.Vector3>;
                public static set Mouse3DPositionReal(value: N$1<UnityEngine.Vector3>);
                public static SetTarget ($t: ITarget) : void
                public static Fresh3DPoint () : void
            }
            class EventSys extends UnityEngine.EventSystems.StandaloneInputModule
            {
                protected [__keep_incompatibility]: never;
                public static ins : EventSys
                public static OnPoint : UnityEngine.GameObject
                public static OnPointV3 : N$1<UnityEngine.Vector3>
                public static DownKind : number
                public static Load () : void
                public static Fresh ($Kind: number) : void
                public constructor ()
            }
            class ListExtra extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class DictionaryExtra extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class Extra extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static ChangeTrype ($o: any, $t: System.Type) : void
                public static Print ($o: any) : void
                public static MaskContain ($LayerMask: number, $toTest: number) : boolean
                public Print () : void
            }
            class StreamingAssetsTXTHub extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static DeleTXT ($UserDefinePath: string) : boolean
                public static EnsureTXT ($UserDefinePath: string) : System.IO.FileInfo
                public static ForeachFileInfos ($infos: System.Array$1<System.IO.FileInfo>, $ForEach: System.Action$1<System.IO.FileInfo>) : void
                public static ForEachLines ($info: System.IO.FileInfo, $Act: System.Action$1<string>) : void
                public static ForEachLines ($infos: System.Array$1<System.IO.FileInfo>, $Act: System.Action$1<string>) : void
            }
            class StringHelpre extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static Split_ ($str: string, $option: System.StringSplitOptions, ...Separator: number[]) : System.Array$1<string>
                public static Split_ ($str: string, ...Separator: number[]) : System.Array$1<string>
                public static Split_ ($str: string) : System.Array$1<string>
            }
            class FileInfoExtra extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static ToStreamingAssetFullPath ($BaseStr: string) : string
                public static ToFullFilePath ($BaseStr: string, $fileType?: string) : string
                public static GetDire ($BaseStr: string) : System.IO.DirectoryInfo
                public static ToFileInfo ($BaseStr: string) : System.IO.FileInfo
                public static ToDirectoryInfos ($name: string, $option?: System.IO.SearchOption, $Forsearch?: string) : System.Array$1<System.IO.DirectoryInfo>
                public static ToFileinfos ($name: string, $fosearch?: string, $option?: System.IO.SearchOption) : System.Array$1<System.IO.FileInfo>
            }
            class PhyExtra extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetThrowVelocity ($target: UnityEngine.Vector3, $start: UnityEngine.Vector3, $highThrow: boolean, $speed: number) : UnityEngine.Vector3
                public static GetThrowAngle ($target: UnityEngine.Vector3, $highThrow: boolean, $start: UnityEngine.Vector3, $speed: number) : number
                public static ToAngle ($foward: UnityEngine.Vector3) : number
                public static GetCloestAngle ($start: number, $tar: number) : number
                public static GetNextV ($NowV: UnityEngine.Vector3, $TarV: UnityEngine.Vector3, $acc: number, $deltaT: number, $data: MovementData) : UnityEngine.Vector3
                public static SameDir ($TarV: UnityEngine.Vector3, $NowV: UnityEngine.Vector3, $ToRo: $Ref<number>) : boolean
                public static GetAnimFoward ($TarV: UnityEngine.Vector3, $NowV: UnityEngine.Vector3, $data: MovementData) : System.Nullable$1<number>
                public static NearZero ($v: UnityEngine.Vector3) : boolean
                public static NearZero ($f: number) : boolean
                public static EnsureNotZero ($f: $Ref<number>) : void
            }
            class MovementData extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public lastTurning : boolean
                public TurnStartSpeed : number
                public LastAngle : number
                public LastV : UnityEngine.Vector3
                public HardTurnPercentage : number
                public MaxL : number
                public MirrorTurn : boolean
                public constructor ()
            }
            class UnityExtra extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static ShowInNewCam ($point: UnityEngine.Vector3, $OldCam: UnityEngine.Camera, $newCam: UnityEngine.Camera) : UnityEngine.Vector3
                public static GetChildrenPath ($parent: UnityEngine.Transform, $child: UnityEngine.Component) : string
                public static MoveTransfTo ($c: UnityEngine.Component, $par: UnityEngine.Component, $PossToZero?: boolean, $RoToZero?: boolean, $ScaleToOne?: boolean) : void
                public static SetY ($v: UnityEngine.Vector3, $y: number) : UnityEngine.Vector3
                public static GetRight_normal ($foward: UnityEngine.Vector3) : UnityEngine.Vector3
            }
            class GraphSetting extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static Def : number
                public static StrDef : string
                public static HDRP : number
                public static StrHDRP : string
                public static get PipLineKind(): number;
                public static get PipLineName(): string;
                public static get PipLineTag(): string;
            }
            class graphSetting extends UnityEngine.MonoBehaviour
            {
                protected [__keep_incompatibility]: never;
                public targetFrameRate : number
                public Fresh () : void
                public constructor ()
            }
            class IDs extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static NullID : number
                public static get NextID(): number;
                public static clear () : void
            }
            class Dictionary_ListExtra extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class Dictionary_List$2<K, V> extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class NewGameClear extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static AddToNewGameClearList ($a: System.Action) : void
                public static Clear () : void
            }
            class PathForAsset extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static AssetsResPath ($kind: string) : string
            }
            class ApiAttribute extends System.Attribute implements System.Runtime.InteropServices._Attribute
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
            class DataListenGroup extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public LintenerBuffs : HashSet_NodeList$1<IBuff>
                public constructor ()
            }
            class BuffsToOneData extends System.Object implements ISet$1<IBuffSysBuffableData>
            {
                protected [__keep_incompatibility]: never;
                public buffs : HashSet_NodeList$1<IBuff>
                public get Value(): IBuffSysBuffableData;
                public set Value(value: IBuffSysBuffableData);
                public constructor ()
            }
            class OneMonitor extends System.Object implements ISet$1<IBuffSysMonitor>
            {
                protected [__keep_incompatibility]: never;
                public SnapshotKey : string
                public get Value(): IBuffSysMonitor;
                public set Value(value: IBuffSysMonitor);
                public constructor ()
            }
            class BuffSys extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static get FreshVersion(): number;
                public static get FreshVersionMonitor(): BuffSysMonitor$1<number>;
                public static get NeedFreshCount(): number;
                public static AddChangedData ($changedData: IBuffSysData) : void
                public static AddNeedFreshBuff ($b: IBuff) : void
                public static AddNeedFreshData ($data: IBuffSysBuffableData) : void
                public static ListenDataChange ($buff: IBuff, $data: IBuffSysData) : void
                public static CancelListene ($buff: IBuff, $data: IBuffSysData) : void
                public static WillApplyToData ($buff: IBuff, $data: IBuffSysBuffableData) : void
                public static RemoveBuff ($b: IBuff) : void
                public static AddMonitor ($monitor: IBuffSysMonitor) : void
                public static Fresh () : void
            }
            class BuffSysMonitor$1<T> extends System.Object implements IBuffSysData, IBuffSysMonitor
            {
                protected [__keep_incompatibility]: never;
                public get FullName(): string;
                public IsChanged ($SnapshotKey: string) : boolean
            }
            class BuffSysFresh extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static ChangedDatas : HashSet_List_Loop$1<IBuffSysData>
                public static NeedFreshBuff : HashSet_List_Loop$1<IBuff>
                public static NeedFreshDatas : HashSet_List_Loop$1<BuffsToOneData>
                public static get NeedFreshCount(): number;
                public constructor ()
            }
            class HashSet_List_Loop$1<T> extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class CallSys extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static listeners : HashSet_NodeList$1<ICallListener>
                public static AddListener ($listener: ICallListener) : void
                public static RemoveListener ($listener: ICallListener) : void
                public static DoCall_Destory () : void
                public static DoCall ($c: Call) : void
                public constructor ()
            }
            interface ICallReaction
            {
                Do () : void
            }
            class CallReactionAct extends System.Object implements ICallReaction
            {
                protected [__keep_incompatibility]: never;
                public act : System.Action
                public Do () : void
                public constructor ()
            }
            class AfterSimulate extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static collection : UpdCollection$1<IAfterSimulate>
                public static Update () : void
                public constructor ()
            }
            class UpdCollection$1<T> extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class UpDate_ extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static collection : UpdCollection$1<IUpdata_>
                public static Update () : void
                public static AddToUpDate_List ($u: IUpdata_) : void
            }
            class GameTimeExtra extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static FreshGameTime ($e: UnityEngine.VFX.VisualEffect) : void
            }
            class GameTime extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static TimeMonitor : BuffSysMonitor$1<number>
                public static get Time(): number;
                public static AddTime ($f: number) : void
            }
            class TimeExtra extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetPercentage ($NowTime: number, $Start: number, $Len: number) : number
                public static IfOver1 ($t: number, $Over: number) : number
            }
            class TimeSetting extends UnityEngine.MonoBehaviour
            {
                protected [__keep_incompatibility]: never;
                public static s : TimeSetting
                public fixTime : number
                public fixedDeltaTime : number
                public _5msCount_in_1_fix : number
                public fixCount_in_50ms : number
                public FixCount_in_1000ms : number
                public static AnimNormalStopTime : number
                public static get n_5ms_in_1_fix(): number;
                public static get n_fix_in_50ms(): number;
                public static get FixedDeltaTime(): number;
                public static Test_and_UpdateTime ($FixedCount: $Ref<number>) : boolean
                public constructor ()
            }
            class UpDateVersion extends UnityEngine.MonoBehaviour
            {
                protected [__keep_incompatibility]: never;
                public static NowUpDateVersion : number
                public static LateUpDateVersion : number
                public static FixedUpDateVersion : number
                public LateUpdate () : void
                public constructor ()
            }
            class ListOption extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static Add : number
                public static Remove : number
                public constructor ()
            }
            class Extention extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            interface IBackToBaseData
            {
                BackToBase () : void
            }
            class GameLogicFunctions extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static AddToStackSkillList ($s: IStackSkill) : void
                public static AddStackSkill ($s: IStackSkill) : void
                public static DoStack_IsEnd ($count: $Ref<number>) : boolean
                public static FreshStackIndex () : void
                public static RemoveStackSkill ($s: any) : void
                public static AddToLongSkillList ($s: ILongSkill) : void
                public static AddLongSkill ($s: ILongSkill) : void
                public static RemoveLongSkill ($s: any) : void
                public static DoSkillList ($is50: boolean) : void
                public static FreshLongSkillIndex () : void
            }
            class SkillKind extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static zero : number
                public static BuffSkill : number
                public static Input : number
                public static becall : number
                public static becall50 : number
                public static TriggerSkill : number
                public constructor ()
            }
            class SkillListKind extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static zero : number
                public static Stack : number
                public static Long : number
                public constructor ()
            }
            class HashSet_List$1<T> extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class eve extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static getPlayer_offSet ($baseID: number, $offset: number) : Player
                public static GetMoveVector ($p: Player, $ws: number, $da: number) : UnityEngine.Vector3
                public static Distance ($a: LayerID, $b: LayerID) : number
                public static OverlapUnit ($point: UnityEngine.Vector3, $r: number, $WriteResult: System.Action$1<Unit>) : void
                public static OverLapCollider ($point: UnityEngine.Vector3, $r: number, $WriteResult: System.Action$1<UnityEngine.Collider>) : void
                public static SetHero ($p: Player, $u: Unit) : void
                public static UseMana ($u: Unit, $p: Player) : void
                public static SetState ($u: Unit, $s: number) : void
                public static SetSpace ($u: Unit, $toSpace: number) : void
                public static SetUP ($u: Unit, $l: LayerID) : void
                public static AddPoss ($u: Unit, $poss: UnityEngine.Vector3) : void
                public static SetPoss ($u: Unit, $poss: UnityEngine.Vector3) : void
                public static SetFoward ($u: Unit, $f: UnityEngine.Vector3) : void
                public static SetV ($u: Unit, $v: UnityEngine.Vector3) : void
                public static AwakeLoad ($l: LayerID) : void
                public static ForEachCallListUnit ($act: System.Action$1<Unit>) : void
                public static IsFollowing ($u: Unit) : boolean
                public static IsCardInHand ($u: Unit) : boolean
                public static IsSpaceInSpace ($u: Unit) : boolean
                public static IsSpace ($u: Unit, $space: number) : boolean
                public static IsState ($u: Unit, $state: number) : boolean
                public static IsFriend ($l1: LayerID, $l2: LayerID) : boolean
                public static DoCall ($c: Call) : void
                public static SetSkillImageName ($s: Skill, $name: string) : void
                public static SetBuffImageName ($b: Buff, $name: string) : void
                public static ApplyOneTarInputToSkill ($s: Skill, $f: InputForm) : void
                public static PauseSkillForSeconds ($s: Skill, $t: number) : void
                public static PauseSkillForPlayer ($s: Skill, $PausePlayerID: number) : void
                public static EnsureStackComp ($s: Skill) : void
                public static EnsureLongSkillComp ($s: Skill) : void
                public static ReducePauseLeft ($s: Skill) : void
                public static SN_TestPause ($s: Skill) : number
                public static AddSkillToLayerID ($s: any, $l: LayerID, $SkillKindMask: number, $kind?: number) : void
                public static SetSkillUp ($s: any, $up: LayerID) : void
                public static RemoveBuff ($b: Buff) : void
                public static Silence ($u: LayerID) : void
                public static HasBuff ($l: LayerID, $From: number, $key: string) : boolean
                public static HasBuff ($l: LayerID, $key: string) : boolean
                public static TryGetBuff ($l: LayerID, $key: string, $re: $Ref<Buff>) : boolean
                public static GetBuff ($l: LayerID, $key: string) : Buff
                public static AddBuff ($l: LayerID, $b: Buff, $From: number, $key: string) : void
                public static AddBuff ($l: LayerID, $b: Buff, $key: string) : void
                public static WillApplyToData ($buff: IBuff, $data: IBuffSysBuffableData) : void
                public static ForEachBuff ($l: LayerID, $a: System.Action$1<Buff>) : void
                public static AddNeedFreshData ($data: IBuffSysBuffableData) : void
                public static DestoryUnit ($u: Unit) : void
                public static DoDamage ($u: Unit, $damage: number) : void
                public static CreatPlayer ($FullName: string) : Player
                public static CreatUnit ($FullName: string) : Unit
                public static CreatSkill ($FullName: string) : SkillBuilder
                public static AddSkill ($l: LayerID, $skill: any, $ToAddMask: number, $inputSkillKind?: number) : void
                public static AddSkillOnlyLink ($l: LayerID, $o: any) : void
                public static AddToStackSkillList ($s: IStackSkill) : void
                public static AddToLongSkillList ($s: ILongSkill) : void
                public static AddToSkillList ($o: any, $ListKind: number) : void
            }
            class TsInit extends UnityEngine.MonoBehaviour
            {
                protected [__keep_incompatibility]: never;
                public AddStartInitAction ($a: System.Action) : void
                public constructor ()
            }
            class T$1<t> extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static As ($v: any) : IGet$1<t>
                public static FuncAs ($v: System.Func$1<t>) : IGet$1<t>
            }
            class CallReaction_Delegate extends System.Object implements ICallReaction
            {
                protected [__keep_incompatibility]: never;
                public get A_Do(): Act0$1<CallReaction_Delegate>;
                public set A_Do(value: Act0$1<CallReaction_Delegate>);
                public Do () : void
            }
            class SNResult extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static Exit : number
                public static ToNext : number
                public static Break_TryThisAgain : number
                public constructor ()
            }
            class Func3$5<s, T1, T2, T3, Tr> extends Pack.FuncMix$4.Func<s, Tr, Func3$5<s, T1, T2, T3, Tr>, Func3Node$5<s, T1, T2, T3, Tr>>
            {
                protected [__keep_incompatibility]: never;
                public param1 : T1
                public param2 : T2
                public param3 : T3
                public Invoke ($p1: T1, $p2: T2, $p3: T3) : Tr
                public AddFunc ($f: System.Action$4<s, T1, T2, T3>) : void
                public constructor ()
            }
            class Func3Node$5<s, T1, T2, T3, Tr> extends Pack.FuncMix$4.Node<s, Tr, Func3$5<s, T1, T2, T3, Tr>, Func3Node$5<s, T1, T2, T3, Tr>>
            {
                protected [__keep_incompatibility]: never;
            }
            class Act3$4<s, T1, T2, T3> extends Pack.ActMix$3.Act<s, Act3$4<s, T1, T2, T3>, Act3Node$4<s, T1, T2, T3>>
            {
                protected [__keep_incompatibility]: never;
                public param1 : T1
                public param2 : T2
                public param3 : T3
                public Invoke ($p1: T1, $p2: T2, $p3: T3) : void
                public AddAct ($c: System.Action$4<s, T1, T2, T3>) : void
                public constructor ()
            }
            class Act3Node$4<s, T1, T2, T3> extends Pack.ActMix$3.Node<s, Act3$4<s, T1, T2, T3>, Act3Node$4<s, T1, T2, T3>>
            {
                protected [__keep_incompatibility]: never;
            }
            namespace Mirror {
            interface NetworkMessage
            {
            }
            class NetworkManager extends UnityEngine.MonoBehaviour
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace Pack.ActMix$3 {
            class Node<s, TGroup, TNode> extends Pack.NodeMixSelf$3.node_Self<s, TGroup, TNode>
            {
                protected [__keep_incompatibility]: never;
            }
            class Act<s, TGroup, TNode> extends Pack.NodeMixSelf$3.group_Self<s, TGroup, TNode>
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace Pack.NodeMixSelf$3 {
            class node_Self<c, TGroup, TNode> extends Pack.NodeMix$2.nodeBase<TGroup, TNode>
            {
                protected [__keep_incompatibility]: never;
                public get self(): c;
                public GetSelf () : c
            }
            class group_Self<c, TGroup, TNode> extends Pack.NodeMix$2.groupBase<TGroup, TNode>
            {
                protected [__keep_incompatibility]: never;
                public self : c
                public SetSelf ($o: c) : TGroup
            }
        }
        namespace Pack.NodeMix$2 {
            class nodeBase<TGroup, TNode> extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public group : TGroup
                public Next : TNode
                public OnSetSelf () : void
                public Set ($key: string, $v: any) : TNode
                public Set_ ($key: string, $o: any) : void
            }
            class groupBase<TGroup, TNode> extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public First : TNode
                public Last : TNode
                public OnPoint : TNode
                public AddNode ($ne: TNode) : TNode
                public Clear () : void
            }
        }
        namespace Pack.FuncMix$4 {
            class Node<s, Tr, TGroup, TNode> extends Pack.NodeMixSelf$3.node_Self<s, TGroup, TNode>
            {
                protected [__keep_incompatibility]: never;
            }
            class Func<s, Tr, TGroup, TNode> extends Pack.NodeMixSelf$3.group_Self<s, TGroup, TNode>
            {
                protected [__keep_incompatibility]: never;
                public result : Tr
                public def : Tr
                public SetDef ($def: Tr) : TGroup
                public Invoke () : Tr
                public InvokeOnPoint () : void
                public re ($re: Tr) : void
            }
        }
        namespace SkillNodeGroupExtra {
            enum SkillNodeGroupKind
            { FixStart = 0, Fix = 1, Fix50 = 2, StackStart = 3, Stack_ToBreak = 4 }
        }
        namespace UnityEditor {
            /** Derive from this base class to create a custom inspector or editor for your custom object. */
            class Editor extends UnityEngine.ScriptableObject implements UnityEditor.IPreviewable, UnityEditor.IToolModeOwner
            {
                protected [__keep_incompatibility]: never;
            }
            interface IPreviewable
            {
            }
            interface IToolModeOwner
            {
            }
            /** Derive from this class to create an editor window. */
            class EditorWindow extends UnityEngine.ScriptableObject
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace UnityEditor.Animations {
            /** The Animator Controller controls animation through layers with state machines, controlled by parameters. */
            class AnimatorController extends UnityEngine.RuntimeAnimatorController
            {
                protected [__keep_incompatibility]: never;
            }
            /** A graph controlling the interaction of states. Each state references a motion. */
            class AnimatorStateMachine extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
            }
            /** Blend trees are used to blend continuously animation between their childs. They can either be 1D or 2D. */
            class BlendTree extends UnityEngine.Motion
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace System.IO {
            class FileInfo extends System.IO.FileSystemInfo implements System.Runtime.Serialization.ISerializable
            {
                protected [__keep_incompatibility]: never;
            }
            interface FileInfo {
                ForEachLines ($Act: System.Action$1<string>) : void;
            }
            class FileSystemInfo extends System.MarshalByRefObject implements System.Runtime.Serialization.ISerializable
            {
                protected [__keep_incompatibility]: never;
            }
            class DirectoryInfo extends System.IO.FileSystemInfo implements System.Runtime.Serialization.ISerializable
            {
                protected [__keep_incompatibility]: never;
            }
            enum SearchOption
            { TopDirectoryOnly = 0, AllDirectories = 1 }
        }
        namespace Creater_Class {
            class TypeInfos extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public t : System.Type
                public IsISetResArgs : boolean
                public constructor ()
            }
        }
        namespace UnityEngine.VFX {
            /** The visual effect class that references an VFX.VisualEffectAsset instance within the Scene. */
            class VisualEffect extends UnityEngine.Behaviour
            {
                protected [__keep_incompatibility]: never;
            }
            /** The visual effect class that references an VFX.VisualEffectAsset instance within the Scene. */
            interface VisualEffect {
                FreshGameTime () : void;
            }
        }
        namespace BuffSysD {
            class BuffSysData extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static ListenDataChange ($buff: IBuff, $data: IBuffSysData) : void
                public static CancelListene ($buff: IBuff, $data: IBuffSysData) : void
                public static OnListening ($d: IBuffSysData, $to: $Ref<DataListenGroup>) : boolean
                public static EnsureBuffsToOneData ($data: IBuffSysBuffableData) : BuffsToOneData
                public static WillApplyToData ($buff: IBuff, $data: IBuffSysBuffableData) : void
                public static RemoveWillApply ($buff: IBuff, $data: IBuffSysBuffableData) : void
                public static AddMonitor ($monitor: IBuffSysMonitor) : void
                public static ForEachOneMonitor ($act: System.Action$1<OneMonitor>) : void
                public static RemoveBuff ($b: IBuff) : void
            }
            class BuffGroup extends System.Object implements ISet$1<IBuff>
            {
                protected [__keep_incompatibility]: never;
                public ListenTo : HashSet_List$1<IBuffSysData>
                public ApplyTo : IBuffSysBuffableData
                public get Value(): IBuff;
                public set Value(value: IBuff);
                public constructor ()
            }
        }
    }
    export = CSharp;
}
