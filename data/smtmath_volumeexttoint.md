# VolumeExtToInt (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ SMTMath ](smtmath.md "SMTMath") / [ Volume Functions ](smtmath_volume.md "Volume Functions")/ VolumeExtToInt | [](smtmath_volumetoint.md "VolumeToInt") [](smtmath_volumetodouble.md "VolumeToDouble") |
| --- | --- | --- |
| --- | --- |

SMTMath::VolumeExtToInt
Converting the increased accuracy volume from double to int.
C++
static UINT64 SMTMath::VolumeExtToInt( const double volume // Input volume )  
---  
.NET (Gateway/Manager API)
static ulong SMTMath.VolumeExtToInt( double volume // Input volume )  
---  
Program Parameters
volume
[in] The input volume in lots.
Return Value
Resulting volume in the UINT64 format (one unit corresponds to 1/100000000 lots).
Note
The method operates with [the extended volume accuracy](features.htm#volume) (8 decimal places). For standard volume accuracy, use the [SMTMath::VolumeToInt](smtmath_volumetoint.md "VolumeToInt") method.