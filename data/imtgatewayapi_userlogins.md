# UserLogins (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Users ](imtgatewayapi_user.md "Users")/ UserLogins | [](imtgatewayapi_usergroup.md "UserGroup") [](imtgatewayapi_config.md "Configuration databases") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::UserLogins
Returns an array of logins of the clients available to the gateway.
C++
MTAPIRES IMTGatewayAPI::UserLogins( UINT64*& logins, // An array of client logins UINT& logins_total // The number of logins )  
---  
.NET
ulong[] CIMTGatewayAPI.UserLogins( out MTRetCode res // Response code )  
---  
Parameters
logins
[out] An array of client logins.
logins_total
[out] The number of logins in the logins array.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A gateway can only access groups, which are specified in the gateway configuration (the Groups tab in MetaTrader 5 Administrator the Groups tab). To get the list of available groups, use [IMTConGateway::Group*](imtcongateway_groupnext.md "GroupNext") methods.
A gateway can only access clients, for which the external system account ([IMTUser::ExternalAccount*](imtuser_externalaccountadd.md "ExternalAccountAdd")) corresponding to this gateway is specified.
The UserLogins method allocates and fills an array of logins that belong to the passed group, a pointer to the passed block is placed to the logins parameter After using, the array placed in the logins variable must be released using the [IMTGatewayAPI::Free](imtgatewayapi_free.md "Free") method.
You can start working with users on the main server only after receiving the [IMTGatewaySink::OnGatewayStart](imtgatewaysink_ongatewaystart.md "OnGatewayStart") event. If the gateway works with users on an additional (not main) trade server, wait for the notification of synchronizing with it ([IMTGatewaySink::OnServerSynchronized](imtgatewaysink_onserversynchronized.md "OnServerSynchronized")).