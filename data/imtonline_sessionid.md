# SessionID (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Online Connections ](reference_online.md "Online Connections") / [ IMTOnline ](imtonline.md "IMTOnline")/ SessionID | [](imtonline_clear.md "Clear") [](imtonline_login.md "Login") |
| --- | --- | --- |
| --- | --- |

IMTOnline::SessionID
Get a unique ID of a user connection session.
C++
UINT64 IMTOnline::SessionID() const  
---  
.NET (Gateway/Manager API)
ulong CIMTOnline.SessionID()  
---  
Return Value
Unique ID of a user connection session.
Notes
The ID is unique within the current session of the trading server (before restart).