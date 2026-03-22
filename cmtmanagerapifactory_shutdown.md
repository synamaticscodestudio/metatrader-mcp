# Shutdown (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ CMTManagerAPIFactory ](cmtmanagerapifactory.md "CMTManagerAPIFactory")/ Shutdown | [](cmtmanagerapifactory_initialize.md "Initialize") [](cmtmanagerapifactory_createmanager.md "CreateManager") |
| --- | --- | --- |
| --- | --- |

CMTManagerAPIFactory::Shutdown
Unload DLL from the Manager API.
C++
MTAPIRES CMTManagerAPIFactory::Shutdown()  
---  
.NET
MTRetCode SMTManagerAPIFactory.Shutdown()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.