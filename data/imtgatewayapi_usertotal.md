# UserTotal (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Users ](imtgatewayapi_user.md "Users")/ UserTotal | [](imtgatewayapi_userunsubscribe.md "UserUnsubscribe") [](imtgatewayapi_userget.md "UserGet") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::UserTotal
Get the total number of users in groups available to the gateway.
C++
UINT IMTGatewayAPI::UserTotal()  
---  
.NET
uint CIMTGatewayAPI.UserTotal()  
---  
Return Value
The number of users in groups available to the gateway.
Note
A gateway can only access groups, which are specified in the gateway configuration (the Groups tab in MetaTrader 5 Administrator the Groups tab). To get the list of available groups, use [IMTConGateway::Group*](imtcongateway_groupnext.md "GroupNext") methods.
A gateway can only access clients, for which the external system account ([IMTUser::ExternalAccount*](imtuser_externalaccountadd.md "ExternalAccountAdd")) corresponding to this gateway is specified.
You can start working with users on the main server only after receiving the [IMTGatewaySink::OnGatewayStart](imtgatewaysink_ongatewaystart.md "OnGatewayStart") event. If the gateway works with users on an additional (not main) trade server, wait for the notification of synchronizing with it ([IMTGatewaySink::OnServerSynchoronized](imtgatewaysink_onserversynchronized.md "OnServerSynchronized")).