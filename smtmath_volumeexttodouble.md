# VolumeExtToDouble (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ SMTMath ](smtmath.md "SMTMath") / [ Volume Functions ](smtmath_volume.md "Volume Functions")/ VolumeExtToDouble | [](smtmath_volumetodouble.md "VolumeToDouble") [](smtmath_volumetosize.md "VolumeToSize") |
| --- | --- | --- |
| --- | --- |

SMTMath::VolumeExtToDouble
Converting the increased accuracy volume from int to double.
C++
static double SMTMath::VolumeExtToDouble( const UINT64 volume // Input volume )  
---  
.NET (Gateway/Manager API)
static double SMTMath.VolumeExtToDouble( ulong volume // Input volume )  
---  
Program Parameters
volume
[in] Input volume in the UINT64 format (one unit corresponds to 1/100000000 lot, for example, 105000000 means 1.05 lots).
Return Value
The resulting volume in lots.
Note
The method operates with [the extended volume accuracy](features.htm#volume) (8 decimal places). For standard volume accuracy, use the [SMTMath::VolumeToDouble](smtmath_volumetodouble.md "VolumeToDouble") method.