# UserArchiveBatch (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Users ](imtadminapi_user.md "Functions")/ UserArchiveBatch | [](imtadminapi_userarchive.md "UserArchive") [](imtadminapi_userarchiverequest.md "UserArchiveRequest") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::UserArchiveBatch
Move multiple accounts to an archive database.
C++
MTAPIRES IMTAdminAPI::UserArchiveBatch( const UINT64*  logins, // Logins const UINT logins_total, // Number of logins MTAPIRES* results // Array of results )  
---  
.NET
MTRetCode CIMTAdminAPI.UserArchiveBatch( ulong[] logins, // Logins MTRetCode[] res // Array of results )  
---  
Python
AdminAPI.UserArchiveBatch( logins # Logins )  
---  
Parameters
logins
[in] An array of account logins which should be archived.
logins_total
[in] Number of logins in the 'logins' array.
results
[out] An array with account archiving results. The size of the 'results' array must be at least the size of the 'logins' array.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates that all specified accounts have been archived. The [MT_RET_ERR_PARTIAL](retcodes_common.md "Common errors") response code means that only some of the accounts have been archived. Analyze the 'results' array for further details concerning the execution results. This array will contain the result of archiving of each individual account from the 'logins' array. The index of a result corresponds to the index of an account in the source array.