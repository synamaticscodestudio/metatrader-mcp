# OnlineNext (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Online Connections ](imtmanagerapi_online.md "Online Connection Functions")/ OnlineNext | [](imtmanagerapi_onlinetotal.md "OnlineTotal") [](imtmanagerapi_onlineget.md "OnlineGet") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::OnlineNext
Get connection record by index.
C++
MTAPIRES IMTManagerAPI::OnlineNext( const UINT pos, // Connection record position IMTOnline* online // Connection record object )  
---  
.NET
MTRetCode CIMTManagerAPI.OnlineNext( uint pos, // Connection record position CIMTOnline online // Connection record object )  
---  
Python
ManagerAPI.OnlineNext( pos # Connection record position )  
---  
Parameters
pos
[in] Position of the record, starting with 0.
online
[out] Connection record object. The online object should be first created using [IMTManagerAPI::OnlineCreate](imtmanagerapi_onlinecreate.md "OnlineCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the data of a connection records with the specified index to the online object.
The method only works if the [pumping modes](imtmanagerapi_enpumpmodes.md "Pumping Mode") PUMP_MODE_USERS and PUMP_MODE_ACTIVITY are enabled.