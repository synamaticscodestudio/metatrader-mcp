# VolumeToInt (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ SMTMath ](smtmath.md "SMTMath") / [ Volume Functions ](smtmath_volume.md "Volume Functions")/ VolumeToInt | [](smtmath_volume.md "Volume Functions") [](smtmath_volumeexttoint.md "VolumeExtToInt") |
| --- | --- | --- |
| --- | --- |

SMTMath::VolumeToInt
Converting a volume from double to int.
C++
static UINT64 SMTMath::VolumeToInt( const double volume // Input volume )  
---  
.NET (Gateway/Manager API)
static ulong SMTMath.VolumeToInt( double volume // Input volume )  
---  
Parameters
volume
[in] The input volume in lots.
Return Value
Resulting volume in the UINT64 format (one unit corresponds to 1/10000 lot, for example, 10500 means 1.05 lots).
Note
The method operates with [the standard volume accuracy](features.htm#volume) (4 decimal places). For extended volume accuracy, use the [SMTMath::VolumeExtToInt](smtmath_volumeexttoint.md "VolumeExtToInt") method.