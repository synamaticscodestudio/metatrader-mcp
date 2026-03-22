# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Online Connections ](reference_online.md "Online Connections") / [ IMTOnline ](imtonline.md "IMTOnline")/ Clear | [](imtonline_assign.md "Assign") [](imtonline_sessionid.md "SessionID") |
| --- | --- | --- |
| --- | --- |

IMTOnline::Clear
Clear an object.
C++
MTAPIRES IMTOnline::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOnline.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.