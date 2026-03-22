# UserArchiveRequest (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Users ](imtadminapi_user.md "Functions")/ UserArchiveRequest | [](imtadminapi_userarchivebatch.md "UserArchiveBatch") [](imtadminapi_userarchiverequestarray.md "UserBackupRequestArray") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::UserArchiveRequest
Request a client record from an archive database.
C++
MTAPIRES IMTAdminAPI::UserArchiveRequest( const UINT64 login, // Login IMTUser* user // An object of the client record )  
---  
.NET
MTRetCode CIMTAdminAPI.UserArchiveRequest( ulong login, // Login CIMTUser user // An object of the client record )  
---  
Python
AdminAPI.UserArchiveRequest( login # Login )  
---  
Parameters
login
[in] The login of a user.
user
[out] An object of the client login. The user object must first be created using the [IMTAdminAPI::UserCreate](imtadminapi_usercreate.md "UserCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method cannot be called from event handlers (any methods of IMT*Sink classes).