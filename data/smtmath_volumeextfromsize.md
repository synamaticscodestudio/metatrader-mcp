# VolumeExtFromSize (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ SMTMath ](smtmath.md "SMTMath") / [ Volume Functions ](smtmath_volume.md "Volume Functions")/ VolumeExtFromSize | [](smtmath_volumefromsize.md "VolumeFromSize") [](smtmath_money.md "Functions of Monetary Units") |
| --- | --- | --- |
| --- | --- |

SMTMath::VolumeFromSize
Obtaining extended accuracy volume in lots from the volume specified as amount.
C++
static UINT64 SMTMath::VolumeFromSize( const double size, // Input volume double contract_size // Contract size )  
---  
.NET (Gateway/Manager API)
static ulong SMTMath.VolumeFromSize( double size, // Input volume double contract_size // Contract size )  
---  
Program Parameters
size
[in] Input volume as amount.
contract_size
[in] Contract size.
Return Value
Volume in the UINT64 format (one unit corresponds to 1/100000000 lots).
Note
The method operates with [the extended volume accuracy](features.htm#volume) (8 decimal places). For standard volume accuracy, use the [SMTMath::VolumeFromSize](smtmath_volumefromsize.md "VolumeFromSize") method.