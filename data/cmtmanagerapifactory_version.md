# Version (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ CMTManagerAPIFactory ](cmtmanagerapifactory.md "CMTManagerAPIFactory")/ Version | [](cmtmanagerapifactory_createadmin.md "CreateAdmin") [](cmtmanagerapifactory_licensecheckadmin.md "LicenseCheckAdmin") |
| --- | --- | --- |
| --- | --- |

CMTManagerAPIFactory::Version
Get the version of the Manager Manager API.
C++
MTAPIRES CMTManagerAPIFactory::Version( UINT& version // Version )  
---  
.NET
MTRetCode SMTManagerAPIFactory.GetVersion( out uint version // Version )  
---  
Parameters
&version
[out] The version of the Manager API library.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.