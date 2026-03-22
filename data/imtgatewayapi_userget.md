# UserGet (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Users ](imtgatewayapi_user.md "Users")/ UserGet | [](imtgatewayapi_usertotal.md "UserTotal") [](imtgatewayapi_usergetbyaccount.md "UserGetByAccount") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::UserGet
Get a client record by the login.
C++
MTAPIRES IMTGatewayAPI::UserGet( const UINT64 login, // Client login IMTUser* user // An object of the client record )  
---  
.NET
MTRetCode CIMTGatewayAPI.UserGet( ulong login, // Client login CIMTUser user // An object of the client record )  
---  
Parameters
login
[in] The login of a client.
user
[out] An object of the client login. The user object must first be created using the [IMTGatewayAPI::UserCreate](imtgatewayapi_usercreate.md "UserCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method only copies to the 'user' object the client's login ([IMTUser::Login](imtuser_login.md "Login")), group ([IMTUser::Group](imtuser_group.md "Group")) and the number of the external system account associated with this gateway ([IMTUser::ExternalAccount*](imtuser_externalaccountget.md "ExternalAccountGet")).
A gateway can only access groups, which are specified in the gateway configuration (the Groups tab in MetaTrader 5 Administrator the Groups tab). To get the list of available groups, use [IMTConGateway::Group*](imtcongateway_groupnext.md "GroupNext") methods.
A gateway can only access clients, for which the external system account ([IMTUser::ExternalAccount*](imtuser_externalaccountadd.md "ExternalAccountAdd")) corresponding to this gateway is specified.
You can start working with users on the main server only after receiving the [IMTGatewaySink::OnGatewayStart](imtgatewaysink_ongatewaystart.md "OnGatewayStart") event. If the gateway works with users on an additional (not main) trade server, wait for the notification of synchronizing with it ([IMTGatewaySink::OnServerSynchronized](imtgatewaysink_onserversynchronized.md "OnServerSynchronized")).