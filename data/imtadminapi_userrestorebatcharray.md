# UserRestoreBatchArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Users ](imtadminapi_user.md "Functions")/ UserRestoreBatchArray | [](imtadminapi_userrestorebatch.md "UserRestoreBatch") [](imtadminapi_userbalancecheck.md "UserBalanceCheck") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::UserRestoreBatchArray
Restore multiple accounts from an archive or backup database.
C++
MTAPIRES IMTAdminAPI::UserRestoreBatchArray( IMTUser**  users, // Array of accounts const UINT users_total, // Number of accounts in the array MTAPIRES* results // Array of results )  
---  
.NET
MTRetCode CIMTAdminAPI.UserRestoreBatchArray( CIMTUser[] users, // Array of accounts MTRetCode[] res // Array of results )  
---  
Parameters
users
[in] A pointer to the array of accounts [IMTUser](imtuser.md "IMTUser").
users_total
[in] Number of accounts in the 'users' array.
results
[out] An array with account recovery results. The size of the 'results' array must be at least the size of the 'logins' array.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates that all specified accounts have been restored. The [MT_RET_ERR_PARTIAL](retcodes_common.md "Common errors") response code means that only part of the accounts gave been restored. Analyze the 'results' array for further details concerning the execution results. This array will contain the result of restoring of each individual account from the 'logins' array. The index of a result corresponds to the index of an account in the source array.
Note
Restored users are not deleted from the archive.
When a restored user is moved backed to an archive or backup database, new data replace the previously stored data.