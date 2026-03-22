# UserArchive (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Users ](imtadminapi_user.md "Functions")/ UserArchive | [](imtadminapi_usercertconfirm.md "UserCertConfirm") [](imtadminapi_userarchivebatch.md "UserArchiveBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::UserArchive
Move a user to an archive database.
C++
MTAPIRES IMTAdminAPI::UserArchive( const UINT64 login // Login )  
---  
.NET
MTRetCode CIMTAdminAPI.UserArchive( ulong login // Login )  
---  
Python
AdminAPI.UserArchive( login # Login )  
---  
Parameters
login
[in] The login of a user that will be moved to an archive.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.