# Group (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Online Connections ](reference_online.md "Online Connections") / [ IMTOnline ](imtonline.md "IMTOnline")/ Group | [](imtonline_login.md "Login") [](imtonline_address.md "Address") |
| --- | --- | --- |
| --- | --- |

IMTOnline::Group
Get the group to which the user is included.
C++
LPCWSTR IMTOnline::Group() const  
---  
.NET (Gateway/Manager API)
string CIMTOnline.Group()  
---  
Return Value
If successful, it returns a pointer to a string with the group of a user. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTUser](imtuser.md "IMTUser") object.
To use the line after the object removal (call of [IMTOnline::Release](imtonline_release.md "Release") method of this object), a copy of it should be created.