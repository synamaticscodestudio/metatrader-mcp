# Group (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ Group | [](imtexecution_login.md "Login") [](imtexecution_flags.md "Flags") |
| --- | --- | --- |
| --- | --- |

IMTExecution::Group
Gets the group in the MetaTrader 5 platform, for the clients of which that execution can be applied.
C++
LPCWSTR IMTExecution::Group() const  
---  
.NET (Gateway/Manager API)
string CIMTExecution.Group()  
---  
Return Value
If successful, it returns a pointer to a string with the client group. Otherwise, it returns NULL.
Note
This field in a trade execution is optional.
The pointer to the resulting string is valid for the lifetime of [IMTExecution](imtexecution.md "IMTExecution") object.
To use the line after the object removal (call of [IMTExecution::Release](imtexecution_release.md "Release") method of this object), a copy of it should be created.
IMTExecution::Group
Sets the group in the MetaTrader 5 platform, for the clients of which that execution can be applied.
C++
MTAPIRES IMTExecution::Group( LPCWSTR group // Group )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.Group( string group // Group )  
---  
Parameters
group
[in] The client group in the MetaTrader 5 platform.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This field in a trade execution is optional.
This field allows filtering trading executions by groups on the gateway side. If a group is specified, then prior to applying a trade execution, it is checked whether the client, for which the execution is performed, belongs to the specified group. If the check is successful, the trade execution is used. If not, the [MT_RET_ERR_PERMISSIONS](retcodes_common.md "Common errors") error is returned. A messages "execution for specified account 'login' (account: login, group: group name) isn't allowed for group 'group name' by gateway [gateway name]" is printed to log in this case.
A name of a particular name or a mask with "*" (any value) and "!" (exception) can be specified. For example: "demo*,!demoforex" - all groups whose names begin with 'demo', except for the group demoforex.