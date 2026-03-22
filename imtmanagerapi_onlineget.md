# OnlineGet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Online Connections ](imtmanagerapi_online.md "Online Connection Functions")/ OnlineGet | [](imtmanagerapi_onlinenext.md "OnlineNext") [](imtmanagerapi_onlinedisconnect.md "OnlineDisconnect") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::OnlineGet
Get connection record by login.
C++
MTAPIRES IMTManagerAPI::OnlineGet( const UINT64 login, // Client login IMTOnlineArray* online // Connection record array object )  
---  
.NET
MTRetCode CIMTManagerAPI.OnlineGet( ulong login, // Client login CIMTOnlineArray online // Connection record array object )  
---  
Python
ManagerAPI.OnlineGet( login # Client login )  
---  
ManagerAPI.OnlineGetArray()  
---  
Parameters
login
[in] The login of a client.
online
[out] Connection record array object. The online object should be first created using [IMTManagerAPI::OnlineCreateArray](imtmanagerapi_onlinecreatearray.md "OnlineCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the data of a connection with the specified login to the online object.
The method only works if the [pumping modes](imtmanagerapi_enpumpmodes.md "Pumping Mode") PUMP_MODE_USERS and PUMP_MODE_ACTIVITY are enabled.