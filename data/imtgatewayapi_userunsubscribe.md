# UserUnsubscribe (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Users ](imtgatewayapi_user.md "Users")/ UserUnsubscribe | [](imtgatewayapi_usersubscribe.md "UserSubscribe") [](imtgatewayapi_usertotal.md "UserTotal") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::UserUnsubscribe
Unsubscribe from events associated with changes in the client base.
C++
MTAPIRES IMTGatewayAPI::UserUnsubscribe( IMTUserSink* sink // A pointer to the IMTUserSink object )  
---  
.NET
MTRetCode CIMTGatewayAPI.UserUnsubscribe( CIMTUserSink sink // CIMTUserSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTUserSink](imtusersink.md "IMTUserSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method is pared to [IMTGatewayAPI::UserSubscribe](imtgatewayapi_usersubscribe.md "UserSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.