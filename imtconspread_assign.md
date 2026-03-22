# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Spreads ](config_spread.md "Spreads") / [ IMTConSpread ](imtconspread.md "IMTConSpread")/ Assign | [](imtconspread_release.md "Release") [](imtconspread_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConSpread::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConSpread::Assign( const IMTConSpread* spread // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSpread.Assign( CIMTConSpread spread // Source object )  
---  
Parameters
spread
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.