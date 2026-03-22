# UserBackupRequestArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Users ](imtadminapi_user.md "Functions")/ UserArchiveRequestArray | [](imtadminapi_userarchiverequest.md "UserArchiveRequest") [](imtadminapi_userarchiverequestbylogins.md "UserArchiveRequestByLogins") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::UserArchiveRequestArray
Request accounts from an archive databased, filtered by groups.
C++
MTAPIRES IMTAdminAPI.UserArchiveRequestArray( LPCWSTR groups, // Groups IMTUserArray* users // Array of accounts )  
---  
.NET
MTRetCode CIMTAdminAPI.UserArchiveRequestArray( string groups, // Groups CIMTUserArray users // Array of accounts )  
---  
Python
AdminAPI.UserArchiveRequestArray( groups # Groups )  
---  
Parameters
groups
[in] One or more groups, separated by commas, from which accounts are requested. The full group name must be specified, including the path. For example, demo\demoforex. The group name can be obtained using the [IMTConGroup::Group](imtcongroup_group.md "Group") method.
user
[out] An object of the accounts array. The 'users' object must be previously created using the [IMTAdminAPI::UserCreateArray](imtadminapi_usercreatearray.md "UserCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method cannot be called from event handlers (any IMT*Sink class methods).