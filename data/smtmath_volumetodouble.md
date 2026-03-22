# VolumeToDouble (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ SMTMath ](smtmath.md "SMTMath") / [ Volume Functions ](smtmath_volume.md "Volume Functions")/ VolumeToDouble | [](smtmath_volumeexttoint.md "VolumeExtToInt") [](smtmath_volumeexttodouble.md "VolumeExtToDouble") |
| --- | --- | --- |
| --- | --- |

SMTMath::VolumeToDouble
Converting a volume from int to double.
C++
static double SMTMath::VolumeToDouble( const UINT64 volume // Input volume )  
---  
.NET (Gateway/Manager API)
static double SMTMath.VolumeToDouble( ulong volume // Input volume )  
---  
Parameters
volume
[in] Input volume in the UINT64 format (one unit corresponds to 1/10000 lot, for example, 10500 means 1.05 lots).
Return Value
Resulting volume in lots.
Note
The method operates with [the standard volume accuracy](features.htm#volume) (4 decimal places). For extended volume accuracy, use the [SMTMath::VolumeExtToDouble](smtmath_volumetodouble.md "VolumeToDouble") method.