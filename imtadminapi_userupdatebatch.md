# UserUpdateBatch (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Users ](imtadminapi_user.md "Functions")/ UserUpdateBatch | [](imtadminapi_userupdate.md "UserUpdate") [](imtadminapi_userupdatebatcharray.md "UserUpdateBatchArray") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::UserUpdateBatch
Update multiple accounts.
C++
MTAPIRES IMTAdminAPI::UserUpdateBatch( IMTUserArray* users, // Array of accounts MTAPIRES* results // Array of results )  
---  
.NET
MTRetCode CIIMTAdminAPI.UserUpdateBatch( CIMTUserArray users, // Array of accounts MTRetCode[] res // Array of results )  
---  
Parameters
users
[in] A pointer to the accounts array object [IMTUserArray](imtuserarray.md "IMTUserArray").
results
[out] An array with the account updating results. The size of the 'results' array must be at least the size of the 'users' array.
Return Value
Response code [MT_RET_OK](retcodes_successful.md "Successful completion") indicates that all specified accounts have been updated. Response code [MT_RET_ERR_PARTIAL](retcodes_common.md "Common errors") indicates that only some of them have been updated. Analyze the 'results' array for further details concerning the execution results. This array will contain the result of updating of each individual account from the 'users' array. The index of a result corresponds to the index of an account in the source array.
Note
It is only possible to update accounts from applications running on the same trade server on which the accounts are created. The [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") response code will be returned for all other applications.