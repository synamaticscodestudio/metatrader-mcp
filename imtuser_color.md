# Color (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUser ](imtuser.md "IMTUser")/ Color | [](imtuser_comment.md "Comment") [](imtuser_phonepassword.md "PhonePassword") |
| --- | --- | --- |
| --- | --- |

IMTUser::Color
Get the color of the client. This is the color of the client's requests shown when handling the requests via the manager terminal.
C++
COLORREF IMTUser::Color() const  
---  
.NET (Gateway/Manager API)
uint CIMTUser.Color()  
---  
Return Value
The color of the client's requests shown when handling the requests via the manager terminal.
IMTUser::Color
Set the color of the client. This is the color of the client's requests shown when handling the requests via the manager terminal.
C++
MTAPIRES IMTUser::Color( const COLORREF color // Color )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTUser.Color( uint color // Color )  
---  
Parameters
color
[in] The color of the client's requests shown when handling the requests via the manager terminal.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.