# ComputerID (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Online Connections ](reference_online.md "Online Connections") / [ IMTOnline ](imtonline.md "IMTOnline")/ ComputerID | [](imtonline_time.md "Time") [](imtonlinearray.md "IMTOnlineArray") |
| --- | --- | --- |
| --- | --- |

IMTOnline::ComputerID
Get CID, i.e. the unique ID of the computer from which the user connected to the server.
C++
LPCWSTR IMTOnline::ComputerID( MTAPISTR& cid // computer ID format string ) const  
---  
.NET (Gateway/Manager API)
string CIMTOnline.ComputerID()  
---  
Parameters
cid
[in] Computer ID format string
Return Value
If successful, it returns a pointer to a passed string filled with computer ID value. In case the CID is not available, an empty string is returned.