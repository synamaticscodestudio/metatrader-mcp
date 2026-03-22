# UserSubscribe (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Users ](imtgatewayapi_user.md "Users")/ UserSubscribe | [](imtgatewayapi_usercreateaccount.md "UserCreateAccount") [](imtgatewayapi_userunsubscribe.md "UserUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::UserSubscribe
Subscribe to events associated with changes in the client base.
C++
MTAPIRES IMTGatewayAPI::UserSubscribe( IMTUserSink* sink // A pointer to the IMTUserSink object )  
---  
.NET
MTRetCode CIMTGatewayAPI.UserSubscribe( CIMTUserSink sink // CIMTUserSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTUserSink](imtusersink.md "IMTUserSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTUserSink](imtusersink.md "IMTUserSink") cannot subscribe to events twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTGatewayAPI::UserUnsubscribe](imtgatewayapi_userunsubscribe.md "UserUnsubscribe") or until the interface is deleted using [IMTGatewayAPI::Release](imtgatewayapi_release.md "Release") method.
The gateway can receive client events only if the external trading system account ([IMTUser::ExternalAccountAdd](imtuser_externalaccountadd.md "ExternalAccountAdd")) associated with the gateway is specified in the settings of these clients.
The Gateway API only supports the following handlers from IMTUserSink:
  * [OnUserAdd](imtusersink_onuseradd.md "OnUserAdd")
  * [OnUserUpdate](imtusersink_onuserupdate.md "OnUserUpdate")
  * [OnUserDelete](imtusersink_onuserdelete.md "OnUserDelete")
  * [OnUserSync](imtusersink_onusersync.md "OnUserSync")
