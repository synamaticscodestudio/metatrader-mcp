# LastIP (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUser ](imtuser.md "IMTUser")/ LastIP | [](imtuser_lastaccess.md "LastAccess") [](imtuser_name.md "Name") |
| --- | --- | --- |
| --- | --- |

IMTUser::LastIP
Get the IP address from which the user last connected to the server.
C++
LPCWSTR IMTUser::LastIP( MTAPISTR& ip // IP address format string ) const  
---  
.NET (Gateway/Manager API)
string CIMTUser.LastIP()  
---  
Parameters
ip
[in][out] The string in which the IP address is formatted.
Return Value
If successful, it returns a pointer to a passed string filled with the formatted IP address. In case the IP address is not available, an empty string is returned.