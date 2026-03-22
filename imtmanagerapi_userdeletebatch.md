# UserDeleteBatch (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Users ](imtmanagerapi_user.md "User Functions")/ UserDeleteBatch | [](imtmanagerapi_userdelete.md "UserDelete") [](imtmanagerapi_userupdate.md "UserUpdate") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::UserDeleteBatch
Delete multiple accounts.
C++
MTAPIRES IMTManagerAPI::UserDeleteBatch( const UINT64*  logins, // Logins const UINT logins_total, // Number of logins MTAPIRES* results // Array of results )  
---  
.NET
MTRetCode CIMTManagerAPI.UserDeleteBatch( ulong[] logins, // Logins MTRetCode[] res // Array of results )  
---  
Python
ManagerAPI.UserDeleteBatch( logins, # Logins res # Array of results )  
---  
Parameters
logins
[in] An array of account logins which should be deleted.
logins_total
[in] Number of logins in the 'logins' array.
results
[out] An array with account deleting results. The size of the 'results' array must be at least the size of the 'logins' array.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates that all specified accounts have been deleted. The [MT_RET_ERR_PARTIAL](retcodes_common.md "Common errors") response code means that only some of the accounts have been deleted. Analyze the 'results' array for further details concerning the execution results. This array will contain the result of deleting of each individual account from the 'logins' array. The index of a result corresponds to the index of an account in the source array.
Note
It is only possible to delete accounts from applications running on the same trade server on which the accounts are created. The [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") response code will be returned for all other applications.