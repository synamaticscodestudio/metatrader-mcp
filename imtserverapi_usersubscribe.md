# UserSubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Users ](serverapi_users.md "Clients")/ UserSubscribe | [](imtserverapi_usercreateaccount.md "UserCreateAccount") [](imtserverapi_userunsubscribe.md "UserUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::UserSubscribe
Subscribe to events and hooks associated with changes in the client base.
MTAPIRES IMTServerAPI::UserSubscribe( IMTUserSink* sink // A pointer to the IMTUserSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTUserSink](imtusersink.md "IMTUserSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTUserSink](imtusersink.md "IMTUserSink") cannot subscribe to events twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTServerAPI::UserUnsubscribe](imtserverapi_userunsubscribe.md "UserUnsubscribe") or until the plugin is deleted.