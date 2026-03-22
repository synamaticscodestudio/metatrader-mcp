# ServerActivate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Server Management ](imtadminapi_server_manage.md "Server Management")/ ServerActivate | [](imtadminapi_server_manage.md "Server Management") [](imtadminapi_serverliveupdate.md "ServerLiveUpdate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ServerActivate
Request activation of a trading platform license.
C++
MTAPIRES IMTAdminAPI::ServerActivate()  
---  
.NET
MTRetCode CIMTAdminAPI.ServerActivate()  
---  
Python
AdminAPI.ServerActivate()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A non-activated license for the platform has a number of limitations (number of users, groups, trade operations, etc.).
The following actions are performed during activation:
  * A request is sent to the update server of the developer company;
  * In case of successful license check, a new activated license is generated, which is bound to the configuration of the server on which the platform is installed;
  * An activated license is sent back to a trade server.
