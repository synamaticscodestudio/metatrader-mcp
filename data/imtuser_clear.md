# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUser ](imtuser.md "IMTUser")/ Clear | [](imtuser_assign.md "Assign") [](imtuser_login.md "Login") |
| --- | --- | --- |
| --- | --- |

IMTUser::Clear
Clear an object.
C++
MTAPIRES IMTUser::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTUser.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.