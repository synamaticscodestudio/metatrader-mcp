# UserGroup (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Users ](imtgatewayapi_user.md "Users")/ UserGroup | [](imtgatewayapi_usergetbyaccount.md "UserGetByAccount") [](imtgatewayapi_userlogins.md "UserLogins") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::UserGroup
Get the group of a client by the login.
C++
MTAPIRES IMTGatewayAPI::UserGroup( const UINT64 login, // Client login MTAPISTR& group // Client group )  
---  
.NET
MTRetCode CIMTGatewayAPI.UserGroup( ulong login, // Client login out string group // Client group )  
---  
Parameters
login
[in] The login of a client.
group
[out] The name of a user group to which the client belongs.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A gateway can only access groups, which are specified in the gateway configuration (the Groups tab in MetaTrader 5 Administrator the Groups tab). To get the list of available groups, use [IMTConGateway::Group*](imtcongateway_groupnext.md "GroupNext") methods.
A gateway can only access clients, for which the external system account ([IMTUser::ExternalAccount*](imtuser_externalaccountadd.md "ExternalAccountAdd")) corresponding to this gateway is specified.
You can start working with users on the main server only after receiving the [IMTGatewaySink::OnGatewayStart](imtgatewaysink_ongatewaystart.md "OnGatewayStart") event. If the gateway works with users on an additional (not main) trade server, wait for the notification of synchronizing with it ([IMTGatewaySink::OnServerSynchronized](imtgatewaysink_onserversynchronized.md "OnServerSynchronized")).