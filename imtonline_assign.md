# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Online Connections ](reference_online.md "Online Connections") / [ IMTOnline ](imtonline.md "IMTOnline")/ Assign | [](imtonline_release.md "Release") [](imtonline_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTOnline::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTOnline::Assign( const IMTOnline* online // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOnline.Assign( CIMTOnline online // Source object )  
---  
Parameters
online
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.