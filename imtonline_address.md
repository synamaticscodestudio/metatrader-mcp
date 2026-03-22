# Address (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Online Connections ](reference_online.md "Online Connections") / [ IMTOnline ](imtonline.md "IMTOnline")/ Address | [](imtonline_group.md "Group") [](imtonline_type.md "Type") |
| --- | --- | --- |
| --- | --- |

IMTOnline::Address
Get the IP address from which the user connected to the server.
C++
LPCWSTR IMTOnline::Address( MTAPISTR& ip // IP address format string ) const  
---  
.NET (Gateway/Manager API)
string CIMTOnline.Address()  
---  
Parameters
ip
[in] The string in which the IP address is formatted.
Return Value
If successful, it returns a pointer to a passed string filled with the formatted IP address. In case the IP address is not available, an empty string is returned.