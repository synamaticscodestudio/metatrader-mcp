# VolumeToSize (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ SMTMath ](smtmath.md "SMTMath") / [ Volume Functions ](smtmath_volume.md "Volume Functions")/ VolumeToSize | [](smtmath_volumeexttodouble.md "VolumeExtToDouble") [](smtmath_volumeexttosize.md "VolumeExtToSize") |
| --- | --- | --- |
| --- | --- |

SMTMath::VolumeToSize
Converting the volume from lots to amount.
C++
static double SMTMath::VolumeToSize( const UINT64 volume, // Input volume double contract_size // Contract size )  
---  
.NET (Gateway/Manager API)
static double SMTMath.VolumeToSize( ulong volume, // Input volume double contract_size // Contract size )  
---  
Parameters
volume
[in] Input volume in the UINT64 format (one unit corresponds to 1/10000 lot, for example, 10500 means 1.05 lots).
contract_size
[in] Contract size.
Return Value
Volume as amount (lots * contract size).
Note
The method operates with [the standard volume accuracy](features.htm#volume) (4 decimal places). For extended volume accuracy, use the [SMTMath::VolumeExtToSize](smtmath_volumeexttosize.md "VolumeExtToSize") method.