# VolumeFromSize (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ SMTMath ](smtmath.md "SMTMath") / [ Volume Functions ](smtmath_volume.md "Volume Functions")/ VolumeFromSize | [](smtmath_volumeexttosize.md "VolumeExtToSize") [](smtmath_volumeextfromsize.md "VolumeExtFromSize") |
| --- | --- | --- |
| --- | --- |

SMTMath::VolumeFromSize
Obtaining volume in lots from the volume specified as amount.
C++
static UINT64 SMTMath::VolumeFromSize( const double size, // Input volume double contract_size // Contract size )  
---  
.NET (Gateway/Manager API)
static ulong SMTMath.VolumeFromSize( double size, // Input volume double contract_size // Contract size )  
---  
Parameters
size
[in] The input volume in units.
contract_size
[in] Contract size.
Return Value
Volume in the UINT64 format (one unit corresponds to 1/10000 lot, for example, 10500 means 1.05 lots).
Note
The method operates with [the standard volume accuracy](features.htm#volume) (4 decimal places). For extended volume accuracy, use the [SMTMath::VolumeExtFromSize](smtmath_volumeextfromsize.md "VolumeExtFromSize") method.