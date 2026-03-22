# UserRestoreBatch (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Users ](imtadminapi_user.md "Functions")/ UserRestoreBatch | [](imtadminapi_userrestore.md "UserRestore") [](imtadminapi_userrestorebatcharray.md "UserRestoreBatchArray") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::UserRestoreBatch
Restore multiple accounts from an archive or backup database.
C++
MTAPIRES IMTAdminAPI::UserRestoreBatch( IMTUserArray* users, // Array of accounts MTAPIRES* results // Array of results )  
---  
.NET
MTRetCode CIMTAdminAPI.UserRestoreBatch( CIMTUserArray users, // Array of accounts MTRetCode[] res // Array of results )  
---  
Python
AdminAPI.UserRestoreBatch( users # List of accounts )  
---  
Parameters
users
[in] A pointer to the accounts array object [IMTUserArray](imtuserarray.md "IMTUserArray").
results
[out] An array with account recovery results. The size of the 'results' array must be at least the size of the 'logins' array.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates that all specified accounts have been restored. The [MT_RET_ERR_PARTIAL](retcodes_common.md "Common errors") response code means that only part of the accounts gave been restored. Analyze the 'results' array for further details concerning the execution results. This array will contain the result of restoring of each individual account from the 'logins' array. The index of a result corresponds to the index of an account in the source array.
Note
Restored users are not deleted from the archive.
When a restored user is moved backed to an archive or backup database, new data replace the previously stored data.