# UserUnsubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Users ](serverapi_users.md "Clients")/ UserUnsubscribe | [](imtserverapi_usersubscribe.md "UserSubscribe") [](imtserverapi_useradd.md "UserAdd") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::UserUnsubscribe
Undubscribe from events and hooks associated with changes in the client base.
MTAPIRES IMTServerAPI::UserUnsubscribe( IMTUserSink* sink // A pointer to the IMTUserSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTUserSink](imtusersink.md "IMTUserSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTServerAPI::UserSubscribe](imtserverapi_usersubscribe.md "UserSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.