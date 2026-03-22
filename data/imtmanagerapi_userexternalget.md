# UserExternalGet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Users ](imtmanagerapi_user.md "User Functions")/ UserExternalGet | [](imtmanagerapi_useraccountrequestarray.md "UserAccountRequestArray") [](imtmanagerapi_userexternalrequest.md "UserExternalRequest") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::UserExternalGet
Get a client record by the [gateway identifier](imtcongateway_id.md "ID") and the [account number in an external trading system](imtuser_externalaccountget.md "ExternalAccountGet").
C++
MTAPIRES IMTManagerAPI::UserExternalGet( const UINT64 gateway_id, // Gateway ID LPCWSTR account, // Account number in an external system IMTUser* user // An object of the user record )  
---  
.NET
MTRetCode CIMTManagerAPI.UserExternalGet( ulong gateway_id, // Gateway ID string account, // Account number in an external system CIMTUser user // An object of the user record )  
---  
Python
ManagerAPI.UserExternalGet( gateway_id # Gateway ID account # Account number in an external system )  
---  
Parameters
gateway_id
[in] The identifier of a gateway.
account
[in] Client's account in an external system.
user
[out] An object of the client login. The user object must first be created using the [IMTManagerAPI::UserCreate](imtmanagerapi_usercreate.md "UserCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the data of a client with the specified gateway identifier and account number. The method is valid only if the [IMTManagerAPI::PUMP_MODE_USERS](imtmanagerapi_enpumpmodes.md "Pumping Mode") pumping mode was specified during connection.
The number of account in an external system and the identifier of a gateway, to which that number refers, are stored in the client record as a string. The [IMTUser::ExternalAccount*](imtuser_externalaccountadd.md "ExternalAccountAdd") methods are used to work with this data.
IMTManagerAPI::UserExternalGet
Get a client record by the the [account number in an external trading system](imtuser_externalaccountget.md "ExternalAccountGet") irrespective of a [gateway identifier](imtcongateway_id.md "ID").
C++
MTAPIRES IMTManagerAPI::UserExternalGet( LPCWSTR account, // Account number in an external system IMTUser* user // An object of the user record )  
---  
.NET
MTRetCode CIMTManagerAPI.UserExternalGet( string account, // Account number in an external system CIMTUser user // An object of the user record )  
---  
Python
ManagerAPI.UserExternalGet( account # Account number in an external system )  
---  
Parameters
account
[in] Client's account in an external system.
user
[out] An object of the client login. The user object must first be created using the [IMTManagerAPI::UserCreate](imtmanagerapi_usercreate.md "UserCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the data of a client with the specified and account number. The method is valid only if the [IMTManagerAPI::PUMP_MODE_USERS](imtmanagerapi_enpumpmodes.md "Pumping Mode") pumping mode was specified during connection.
If there are several clients that have the same number of account in a external system, the nearest client record will be obtained.
The number of account in an external system and the identifier of a gateway, to which that number refers, are stored in the client record as a string. The [IMTUser::ExternalAccount*](imtuser_externalaccountadd.md "ExternalAccountAdd") methods are used to work with this data.